---
lastUpdated: "06/30/2026"
title: "delay"
description: "delay ec_console move messages from the active queue into the delayed queue deferring the next delivery attempt by a number of seconds optional --domain --binding scoping and --meta --header filter"
---

<a name="console_commands.delay"></a> 
## Name

delay — defer active-queue messages into the delayed queue

## Synopsis

`delay` { *`seconds`* } [ `--domain` *`name`* ] [ `--binding` *`name`* ] [ `--meta` *`key`* *`value`* | `--header` *`header_name`* *`header_line`* ]

<a name="idp_delay_desc"></a> 
## Description

The **delay** command moves messages from the **active queue** into the **delayed queue**, deferring their next delivery attempt by *`seconds`* seconds. Messages already in the delayed queue are not affected.

*`seconds`* is required and must be a whole number greater than zero. The command also requires **at least one** selector — `--domain`, `--binding`, `--meta`, or `--header` — so it never delays the entire active queue implicitly.

On success the command reports how many messages were moved:

```
10:47:35 /tmp/2025> delay 300 --domain relay.com
Delayed 42 messages.
```

When a `--domain` is named but has no messages in the active queue, the command reports:

```
10:47:35 /tmp/2025> delay 300 --domain relay.com
No messages for relay.com found.
```

<a name="delay_scoping"></a>
### Scoping by domain and binding

Use **`--domain`** *`name`* to restrict the operation to a single domain's active queue, and **`--binding`** *`name`* to restrict it to a single binding. The binding name is validated against the configured bindings; an unknown binding is rejected:

```
10:47:35 /tmp/2025> delay 600 --binding outbound-pool
Delayed 18 messages.
```

`--domain` and `--binding` can be combined to target a single domain on a single binding.

<a name="delay_selective"></a>
### Selective delay (optional filter)

Optional **`--meta`** / **`--header`** filtering uses the same matching rules as the `fail` family of commands. **`--header`** compares **physical header lines** only — see [**folded headers**](/momentum/4/console-commands/fail-domain-quiet#header_filter_physical_lines). With a filter, only matching messages are delayed; non-matching messages stay in the active queue.

You cannot combine `--meta` and `--header` in the same command.

```
10:47:35 /tmp/2025> delay 300 --meta mo_campaign_id summer-sale
Delayed 12 messages.
```

```
10:47:35 /tmp/2025> delay 120 --domain relay.com --header X-Delay-Pick alpha
Delayed 4 messages.
```

## See Also

The same `--meta` / `--header` filtering clause is accepted by the [reroute queue](/momentum/4/console-commands/reroute-queue) command and the fail-family commands: [fail domain](/momentum/4/console-commands/fail-domain) · [fail domain quiet](/momentum/4/console-commands/fail-domain-quiet) · [fail all](/momentum/4/console-commands/fail-all) · [fail all quiet](/momentum/4/console-commands/fail-all-quiet) · [binding fail domain](/momentum/4/console-commands/binding-fail-domain) · [binding fail domain quiet](/momentum/4/console-commands/binding-fail-domain-quiet)
