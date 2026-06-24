---
lastUpdated: "06/24/2026"
title: "reroute queue"
description: "reroute queue ec_console move messages between domain queues selectively by metadata or RFC822 header match optional --meta --header filter --dry-run preview"
---

<a name="console_commands.reroute_queue"></a> 
## Name

reroute queue — move messages from queues of one domain to queues of the other

## Synopsis

`reroute queue` [ `--dry-run` ] [ `--meta` *`key`* *`value`* | `--header` *`header_name`* *`header_line`* ] { *`domain_name1`* | `all` } { *`domain_name2`* }

<a name="idp12689408"></a> 
## Description

The **reroute queue**       command requires two domain names as its arguments. It will move messages from queues of the first domain to the queues of the second domain.

```
10:47:35 /tmp/2025> reroute queue relay.com newrelay.com
Moved 100 messages from 'relay.com' to 'newrelay.com'
```

You may substitute `all` for *`domain_name1`* to move messages out of **every** source domain's queues into *`domain_name2`*.

<a name="reroute_queue_selective"></a>
### Selective reroute (optional filter)

Optional **`--meta`** / **`--header`** filtering uses the same matching rules as the `fail` family of commands. **`--header`** compares **physical header lines** only — see [**folded headers**](/momentum/4/console-commands/fail-domain-quiet#header_filter_physical_lines). Place **at most one** clause immediately after `reroute queue` and **before** the source domain. With a filter, only matching messages are moved; non-matching messages stay in the source domain's queues. Without a filter, every queued message for the source domain is moved (original behavior).

You cannot combine `--meta` and `--header` in the same command.

```
10:47:35 /tmp/2025> reroute queue --meta mo_campaign_id summer-sale relay.com newrelay.com
Moved 12 messages from 'relay.com' to 'newrelay.com'
```

```
10:47:35 /tmp/2025> reroute queue --header X-Reroute-Pick alpha all newrelay.com
Moved 4 messages from 'all' to 'newrelay.com'
```

<a name="reroute_queue_dry_run"></a>
### Preview without moving (`--dry-run`)

Add **`--dry-run`** to see what the command *would* do **without moving any messages**. The queues are left untouched; each message that would be rerouted is listed on its own line—spool id, source domain, and envelope sender and recipient—followed by a summary count:

```
10:47:35 /tmp/2025> reroute queue --dry-run relay.com newrelay.com
  3A/0F-04217-1A3F9C2B  domain=relay.com from=<news@sender.com> to=<user@relay.com>
  7C/1B-04217-2B4E0D8A  domain=relay.com from=<promo@sender.com> to=<admin@relay.com>
  ...
[dry-run] relay.com -> newrelay.com: 100 messages would be moved. (Showing first 25; 75 more not listed.)
```

At most the first 25 matching messages are listed; when more match, the trailing summary reports the total and how many were not listed. **`--dry-run`** may appear anywhere in the command and combines with the optional `--meta` / `--header` filter, so you can confirm exactly which messages a selective reroute would move before running it for real.

When `reroute queue` is invoked over the XML/HTTP control channel, the per-message lines are omitted (they would corrupt the response envelope); the response instead reports `<DryRun>1</DryRun>` and a `<MessagesMatched>` count in place of `<MessagesRerouted>`.

## See Also

The same `--meta` / `--header` filtering clause and the `--dry-run` preview are accepted by the fail-family commands: [fail domain](/momentum/4/console-commands/fail-domain) · [fail domain quiet](/momentum/4/console-commands/fail-domain-quiet) · [fail all](/momentum/4/console-commands/fail-all) · [fail all quiet](/momentum/4/console-commands/fail-all-quiet) · [binding fail domain](/momentum/4/console-commands/binding-fail-domain) · [binding fail domain quiet](/momentum/4/console-commands/binding-fail-domain-quiet)
