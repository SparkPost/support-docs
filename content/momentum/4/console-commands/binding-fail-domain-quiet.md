---
lastUpdated: "04/15/2026"
title: "binding fail domain quiet"
description: "binding fail domain quiet ec_console selective purge --meta --header filter by binding"
---

<a name="console_commands.binding_fail_domain_quiet"></a> 
## Name

binding fail domain quiet — fail messages for a domain on a binding without generating bounces

## Synopsis

`binding fail domain quiet` [ `--meta` *`key`* *`value`* | `--header` *`header_name`* *`header_line`* ] { *`binding_name`* } { *`domain_name`* | `all` } [ *`note`* … ]

<a name="idp11133632"></a> 
## Description

The **binding fail domain quiet**                   command allows the administrative failure of all messages bound for the specified domain on the specified binding in such a way that no bounce is sent, even if Generate_Bounces is set in the server configuration. Its usage is similar to **binding fail domain** :

```
ecelerity> binding fail domain quiet BINDING1 unresolvableproblems.com
unresolvableproblems.com purged, 62415 messages failed.
```

You may substitute `all` for the domain name to apply to all domains.

```
ecelerity> binding fail domain quiet BINDING1 all
All domains purged.  62415 messages failed.
```

<a name="binding_fail_domain_quiet_selective"></a>
### Selective purge (optional filter)

Optional **`--meta`** / **`--header`** clauses use the same matching rules as [**fail domain quiet**](/momentum/4/console-commands/fail-domain-quiet#fail_domain_quiet_selective). **`--header`** uses [**physical-line matching**](/momentum/4/console-commands/fail-domain-quiet#header_filter_physical_lines). Place **at most one** clause immediately after `binding fail domain quiet` and **before** the binding name. Only messages on that binding that match the filter (and domain / `all`) are failed.

For a binding-agnostic global purge by filter only, see [**fail all quiet**](/momentum/4/console-commands/fail-all-quiet).

```
ecelerity> binding fail domain quiet --header X-Priority high BINDING1 unresolvableproblems.com
unresolvableproblems.com purged. 3 messages failed.
```
<a name="idp11138544"></a> 
## See Also

[binding fail domain](/momentum/4/console-commands/binding-fail-domain) · [fail all quiet](/momentum/4/console-commands/fail-all-quiet)
