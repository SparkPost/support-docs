---
lastUpdated: "04/15/2026"
title: "binding fail domain"
description: "binding fail domain ec_console selective purge --meta --header filter custom bounce message"
---

<a name="console_commands.binding_fail_domain"></a> 
## Name

binding fail domain — fail messages for a domain on a binding with a bounce message

## Synopsis

`binding fail domain` [ `--meta` *`key`* *`value`* | `--header` *`header_name`* *`header_line`* ] { *`binding_name`* } { *`domain_name`* | `all` } [ *`message`* … ]

<a name="idp12412576"></a> 
## Description

The **binding fail domain**             command allows the administrative failure of all messages bound for the specified domain on the specified binding. If political issues arise that cannot be resolved or if the domain has been discontinued, it may be necessary to fail all of the messages to that domain. Unless an optional message is passed, all failed messages will be assigned the following administrative failure message: "554 Message manually purged."

For example, the following command could be used to fail all messages for the domain unresolvableproblems.com on the binding BINDING1.

```
10:47:35 /tmp/2025> binding fail domain BINDING1 unresolvableproblems.com
unresolvableproblems.com purged, 62415 messages failed.
```

You may substitute `all` for the domain name to apply to all domains.

```
10:47:35 /tmp/2025> binding fail domain BINDING1 all
All domains purged.  62415 messages failed.
```

To pass in a custom failure message, you can append it to your command line, for instance:

```
10:47:35 /tmp/2025> binding fail domain BINDING1 unresolvableproblems.com 554 Administratively failed by Bob
unresolvableproblems.com purged. 62415 messages failed.
```

<a name="binding_fail_domain_selective"></a>
### Selective purge (optional filter)

Optional **`--meta`** / **`--header`** filtering matches [**fail domain quiet**](/momentum/4/console-commands/fail-domain-quiet#fail_domain_quiet_selective); **`--header`** respects [**physical-line matching**](/momentum/4/console-commands/fail-domain-quiet#header_filter_physical_lines). Place **at most one** clause after `binding fail domain` and before the binding name. Remaining tokens after the domain (or `all`) are still treated as the optional custom failure message when present.

To fail messages by the same filter **without** naming a binding or domain, use [**fail all**](/momentum/4/console-commands/fail-all) or [**fail all quiet**](/momentum/4/console-commands/fail-all-quiet) instead (filter **required**).

```
10:47:35 /tmp/2025> binding fail domain --meta mo_campaign_id promo BINDING1 unresolvableproblems.com 554 Purged campaign
unresolvableproblems.com purged. 5 messages failed.
```
<a name="idp11121376"></a> 
## See Also

[binding fail domain quiet](/momentum/4/console-commands/binding-fail-domain-quiet) · [fail all](/momentum/4/console-commands/fail-all)
