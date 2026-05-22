---
lastUpdated: "05/21/2026"
title: "curfew – Scheduled Delivery Suspension"
description: "The curfew module schedules quiet hours blackout windows during which Momentum will not attempt deliveries for selected bindings binding groups or domains The schedule is expressed in crontab style syntax and is read from a plain text file Curfew replaces ad hoc operator workflows that toggle suspend_delivery from cron jobs..."
---

<a name="modules.curfew"></a> 

The `curfew` module schedules *quiet hours* (blackout windows) during which Momentum will not attempt deliveries for selected bindings, binding groups, or domains. The schedule is expressed in crontab-style syntax and is read from a plain-text file.

Curfew replaces *ad-hoc* operator workflows that toggle [`suspend_delivery`](/momentum/4/config/ref-suspend-delivery), e.g., from external cron jobs. Driving suspension state from outside the MTA is fragile: a missed cron firing can leave messages stuck on the spool, and a race between the cron job and a configuration commit can leave the binding suspended forever. Curfew evaluates its rules from inside the suspension decision path on every delivery attempt, so quiet hours engage and lift on schedule without operator intervention and without persistent state changes to the binding/domain scope.

### Note

Curfew does **not** fail or bounce messages. While a rule is matching, the affected (binding, domain) pairs return suspended verdicts; queued mail simply waits in the messages queue and is retried as soon as the window closes.

However, the global [`message_expiration`](/momentum/4/config/ref-message-expiration) (and the configured [`max_retries`](/momentum/4/config/ref-max-retries)) keeps running while a message waits under curfew. A message whose TTL elapses *during* a quiet hour is treated by Momentum exactly as if it had expired for any other reason: when it reaches the front of the queue after the window lifts, it either makes one final attempt or is failed immediately with "Delivery not attempted (message expired)" — see [`never_attempt_expired_messages`](/momentum/4/config/ref-never-attempt-expired-messages). This is the same outcome a message would get from a long run of transient delivery failures or from an operator-set [`suspend_delivery = true`](/momentum/4/config/ref-suspend-delivery) that outlasts the message's TTL: it is **not** a curfew-specific behaviour, but it is worth sizing quiet hours so that they remain well under the binding/domain's `message_expiration`.

### <a name="modules.curfew.configuration"></a> Configuration

The `curfew` module is a singleton and is loaded automatically when any of its configuration options is set or its console command is invoked. The minimum configuration is a single option — the path to the schedule file:

<a name="example.curfew.minimal"></a> 


```
curfew {
  Schedule_File = "/etc/ecelerity/curfew.schedule"
}
```

That is enough to enable the feature: [`Timezone`](#modules.curfew.timezone) and [`Fuzz_Seconds`](#modules.curfew.fuzz_seconds) both have built-in defaults (`local` and `60` respectively), so they only need to appear when the operator wants to override them. A fully spelled-out configuration looks like this:

<a name="example.curfew.configuration"></a> 


```
curfew {
  Schedule_File = "/etc/ecelerity/curfew.schedule"
  Timezone      = "UTC"
  Fuzz_Seconds  = 120
}
```

Any change to `Schedule_File`, `Timezone`, or `Fuzz_Seconds` is picked up automatically by the next `config reload` (or any other operation that triggers a configuration commit). The schedule file itself can also be reloaded on demand from the console — see [Console Commands](#modules.curfew.console) below.

### <a name="modules.curfew.schedule"></a> Schedule File Format

The schedule file is a plain-text file. Lines starting with `#` and blank lines are ignored. Every non-comment line declares one rule and contains exactly eight whitespace-separated fields:

```
binding  domain  on|off  minute  hour  day-of-month  month  day-of-week
```

The column separator is whitespace (spaces or tabs) rather than comma, because cron-style field values themselves use the comma as a list separator (for example, `0,15,30,45`).

<dl class="variablelist">

<dt>binding</dt>

<dd>

The name of a binding **or** a binding group to which the rule applies. A literal `*` (asterisk) matches every binding. Matching is case-insensitive.

</dd>

<dt>domain</dt>

<dd>

The destination domain to which the rule applies. A literal `*` matches every domain. Matching is case-insensitive.

</dd>

<dt>on|off</dt>

<dd>

Whether the rule is enforced. Only `on` rules are honored. The `off` keyword is reserved: rows declared as `off` are parsed (so the file remains valid) but otherwise ignored — they are a placeholder for future negative-rule semantics. A line whose third field is neither `on` nor `off` is a parse error and causes the previously loaded schedule to be retained.

</dd>

<dt>minute, hour, day-of-month, month, day-of-week</dt>

<dd>

Standard crontab fields. Each field accepts a literal value, the wildcard `*`, an inclusive range (`1-5`), a comma-separated list (`1,3,5`), or a step (`*/15`, `0-30/2`). The legal value ranges are:

*   minute — `0`–`59`

*   hour — `0`–`23`

*   day-of-month — `1`–`31`

*   month — `1`–`12`

*   day-of-week — `0`–`6` (with `0` = Sunday)

Following Vixie cron semantics, the day-of-month and day-of-week fields are combined with **OR**: if both fields are restricted (neither is a literal `*`), the rule matches when **either** the day-of-month field matches **or** the day-of-week field matches. When exactly one of the two is a literal `*`, only the restricted side constrains; when both are `*`, every day matches.

</dd>

</dl>

A rule's time match is evaluated against the current wall-clock minute in the [`Timezone`](#modules.curfew.timezone) configured for the module.

#### <a name="modules.curfew.schedule.example"></a> Example Schedule

```
# Quiet hours: weekdays, 18:00 through 23:59, for every binding
# delivering to gmail.com — operator-mandated nighttime hold.
*          gmail.com on * 18-23 * * 1-5

# Weekend-only blackout for the marketing binding to all domains.
marketing  *         on * *     * * 0,6

# Weekly maintenance window: every Monday, 02:00-02:59,
# for everything in the "production" binding group.
production *         on * 2     * * 1
```

### <a name="modules.curfew.options"></a> Options Valid in the `curfew` Scope

The following configuration options are valid only inside the `curfew { ... }` scope.

<dl class="variablelist">

<dt><a name="modules.curfew.schedule_file"></a> Schedule_File</dt>

<dd>

The absolute path of the schedule file to load. **Default value is empty, which disables the feature**: with no schedule file configured, the module loads but never produces a suspension verdict.

If `Schedule_File` is set but the file cannot be opened, the previously loaded schedule (if any) is retained and an error is logged. The same is true when the file contains a parse error: the new file is rejected as a whole — partial reloads never happen — and the previous schedule remains in effect.

</dd>

<dt><a name="modules.curfew.timezone"></a> Timezone</dt>

<dd>

The timezone in which the cron fields of every rule are interpreted. Accepted values are `local` and `UTC` (case-insensitive). Default value is `local`, which matches standard crontab semantics. Any unrecognized value is treated as `local`, with a warning written to the paniclog.

</dd>

<dt><a name="modules.curfew.fuzz_seconds"></a> Fuzz_Seconds</dt>

<dd>

The maximum random delay, in seconds, applied to the next per-domain mail-queue maintainer firing for any domain currently matched by a *wildcard-binding* rule. Default value is `60`. Set to `0` to disable lift-fuzz entirely.

This option exists to spread out the "thundering herd" of delivery attempts that would otherwise fire in lock-step on every domain affected by the same window once it closes. While the curfew is engaged, each affected per-domain maintainer is rescheduled to a uniform random offset in `[0, Fuzz_Seconds]` seconds from its next normal tick; over the duration of the window the per-domain cycles drift independently, so deliveries resume gradually after lift instead of all at once.

Only rules whose binding column is `*` participate in lift-fuzz, because the per-domain maintainer is shared across every binding for a given domain — fuzzing it for a binding-specific rule would unnecessarily slow down deliveries on the bindings that are *not* under curfew.

The effective spread is capped by the configured [`delayed_queue_scan_interval`](/momentum/4/config/ref-delayed-queue-scan-interval): the mail-queue maintainer refuses to push its next firing further out than the interval that was just scheduled. If `Fuzz_Seconds` is larger than the scan interval, the module logs a warning to make this cap visible to the operator.

</dd>

</dl>

### <a name="modules.curfew.precedence"></a> Interaction With Other Suspension Mechanisms

Curfew is one of several signals that can suspend (binding, domain) delivery; precedence is, from highest to lowest:

1.  An explicit [`suspend_delivery = true`](/momentum/4/config/ref-suspend-delivery) in the configuration scope. Static suspension is evaluated before the curfew hook even runs, so it always wins.

2.  Any Lua policy hook that decides suspension *before* curfew (Lua hooks registered as `_first` run ahead of curfew's hook). Such a hook may short-circuit the chain with its own verdict.

3.  The verdict produced by the curfew schedule.

4.  The verdict produced by the [adaptive](/momentum/4/modules/4-adaptive) module from its cached delivery-history rules.

In particular, when a Lua hook makes a different decision (for example, force-resuming delivery during a partial-outage drill), curfew defers to that hook for the affected *(binding, domain)* pair. When no other signal speaks up, curfew's schedule is the only signal that matters.

### <a name="modules.curfew.logging"></a> Logging and Audit Trail

Because curfew suspends delivery rather than failing it, there are **no T-record entries** in the mainlog for messages held under a rule — no delivery attempt is made. To make the cause of operator-observed delivery delays attributable to the schedule, the module periodically sweeps every loaded rule and writes a single line to the paniclog whenever a rule transitions between *engaged* and *lifted*:

```
curfew: rule #2 engaged (binding=marketing domain=*)
...
curfew: rule #2 lifted (binding=marketing domain=*)
```

One sweep runs per [`delayed_queue_scan_interval`](/momentum/4/config/ref-delayed-queue-scan-interval) tick, so the lag between a rule transition and its log line is bounded by the scan interval (typically a few seconds). An operator can also force an immediate sweep on demand — see the `curfew journal` subcommand below.

#### Note

The engage/lift transition lines are emitted at the `NOTICE` severity. The default [`debug_level`](/momentum/4/4-module-config) for modules is `ERROR`, so these lines will only reach the paniclog when curfew's `debug_level` is set to `NOTICE` (or a more verbose level — `INFO`, `DEBUG`). For example:

```
curfew {
  Schedule_File = "/etc/ecelerity/curfew.schedule"
  debug_level   = "NOTICE"
}
```

Without this, curfew still enforces the schedule but the per-rule audit trail is silent.

### <a name="modules.curfew.console"></a> Console Commands

The following console commands are provided by the curfew module.

<dl class="variablelist">

<dt>curfew reload</dt>

<dd>

Re-reads the schedule file. This is equivalent to the implicit reload that happens after every `config reload`, but does not require a configuration commit. If the file cannot be opened or contains a parse error, the previously loaded schedule is retained and an error is logged. On success, the response reports the number of rules now active.

</dd>

<dt>curfew show</dt>

<dd>

Dumps every compiled rule in load order, showing the binding/domain matchers and the time bitmasks decoded back into compact crontab-style ranges. Useful for verifying that a hand-edited schedule file was parsed the way you expected.

Example output:

```
curfew: 2 rule(s), tz=local
  [0] binding=* domain=gmail.com minute=* hour=18-23 mday=* month=* wday=1-5
  [1] binding=marketing domain=* minute=* hour=* mday=* month=* wday=0,6
```

</dd>

<dt>curfew status</dt>

<dd>

One-line summary: the number of currently loaded rules, the configured timezone, and the effective `Fuzz_Seconds` value. Useful as a smoke test from monitoring scripts.

</dd>

<dt>curfew fuzz `domain`</dt>

<dd>

Diagnostic: reports the lift-fuzz value (in seconds) that would currently apply to the named domain. Returns `0` when no wildcard-binding rule is engaged for that domain or when [`Fuzz_Seconds`](#modules.curfew.fuzz_seconds) is set to `0`. Use this to confirm that an expected rule is actually in effect and that lift-fuzz is configured as intended.

</dd>

<dt>curfew journal</dt>

<dd>

Forces an immediate journal sweep. Any rule whose match verdict has flipped since the last sweep has its engage/lift log line written synchronously, and the count of transitions logged is returned to the console. Mostly useful immediately after editing the schedule (to confirm what state the rules are in *right now*) or as a regression hook in tests.

</dd>

</dl>

### <a name="modules.curfew.example"></a> Example: Configured Quiet Hours

The following ecelerity.conf fragment configures the curfew module against the schedule file shown in the previous section, in the local timezone, with a 30-second lift-fuzz spread:

```
curfew {
  Schedule_File = "/etc/ecelerity/curfew.schedule"
  Fuzz_Seconds  = 30
}
```

After `config reload`, a follow-up `curfew status` from the console will confirm how many rules were accepted:

```
> curfew status
curfew: 3 rule(s) active; tz=local; fuzz=30s
```
