---
lastUpdated: "05/20/2026"
title: "reroute queue"
description: "reroute queue ec_console move messages between domain queues selectively by metadata or RFC822 header match optional --meta --header filter"
---

<a name="console_commands.reroute_queue"></a> 
## Name

reroute queue — move messages from queues of one domain to queues of the other

## Synopsis

`reroute queue` [ `--meta` *`key`* *`value`* | `--header` *`header_name`* *`header_line`* ] { *`domain_name1`* | `all` } { *`domain_name2`* }

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

Optional **`--meta`** / **`--header`** filtering uses the same matching rules as [**fail domain quiet**](/momentum/4/console-commands/fail-domain-quiet#fail_domain_quiet_selective). **`--header`** compares **physical header lines** only — see [**folded headers**](/momentum/4/console-commands/fail-domain-quiet#header_filter_physical_lines). Place **at most one** clause immediately after `reroute queue` and **before** the source domain. With a filter, only matching messages are moved; non-matching messages stay in the source domain's queues. Without a filter, every queued message for the source domain is moved (original behavior).

You cannot combine `--meta` and `--header` in the same command.

```
10:47:35 /tmp/2025> reroute queue --meta mo_campaign_id summer-sale relay.com newrelay.com
Moved 12 messages from 'relay.com' to 'newrelay.com'
```

```
10:47:35 /tmp/2025> reroute queue --header X-Reroute-Pick alpha all newrelay.com
Moved 4 messages from 'all' to 'newrelay.com'
```

## See Also

The same `--meta` / `--header` filtering clause is accepted by the fail-family commands: [fail domain](/momentum/4/console-commands/fail-domain) · [fail domain quiet](/momentum/4/console-commands/fail-domain-quiet) · [fail all](/momentum/4/console-commands/fail-all) · [fail all quiet](/momentum/4/console-commands/fail-all-quiet) · [binding fail domain](/momentum/4/console-commands/binding-fail-domain) · [binding fail domain quiet](/momentum/4/console-commands/binding-fail-domain-quiet)
