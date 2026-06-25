---
lastUpdated: "06/24/2026"
title: "fail domain"
description: "fail domain ec_console selectively fail messages by metadata or RFC822 header match optional --meta --header filter bounce --dry-run preview"
---

<a name="console_commands.fail_domain"></a> 
## Name

fail domain — fail messages for a domain with a bounce message

## Synopsis

`fail domain` [ `--dry-run` ] [ `--meta` *`key`* *`value`* | `--header` *`header_name`* *`header_line`* ] { *`domain_name`* } [ *`note`* … ]

<a name="idp12221136"></a> 
## Description

The **fail domain**        command allows the administrative failure of all messages bound for the specified domain. If political issues arise that cannot be resolved or if the domain has been discontinued, it may be necessary to fail all of the messages to that domain. All failed messages will be assigned the following administrative failure message: "554 Message manually purged."

For example, the following command could be used to fail all message for the domain unresolvableproblems.com.

```
10:47:35 /tmp/2025> fail domain unresolvableproblems.com
unresolvableproblems.com purged. 62415 messages failed.
```

Usually, the command is immediately preceded or followed by "blackholing" the domain by issuing a command such as:

`10:47:35 /tmp/2025> config set domain unresolvableproblems.com blackhole inline`

<a name="fail_domain_selective"></a>
### Selective purge (optional filter)

Optional **`--meta`** / **`--header`** filtering uses the same rules as [**fail domain quiet**](/momentum/4/console-commands/fail-domain-quiet#fail_domain_quiet_selective). **`--header`** compares **physical header lines** only—see [**folded headers**](/momentum/4/console-commands/fail-domain-quiet#header_filter_physical_lines). With a filter, only matching messages are failed; without a filter, all messages for the domain are failed.

<a name="fail_domain_dry_run"></a>
### Preview without failing (`--dry-run`)

Add **`--dry-run`** to preview the command **without failing any messages**. The queue is left untouched; the messages that would be failed are listed (capped) and followed by a summary count:

```
10:47:35 /tmp/2025> fail domain --dry-run unresolvableproblems.com
  3A/0F-04217-1A3F9C2B  domain=unresolvableproblems.com from=<news@sender.com> to=<user@unresolvableproblems.com>
  7C/1B-04217-2B4E0D8A  domain=unresolvableproblems.com from=<promo@sender.com> to=<admin@unresolvableproblems.com>
  ...
[dry-run] unresolvableproblems.com: 62415 messages would be failed. (Showing first 25; 62390 more not listed.)
```

See [**fail domain quiet** → preview](/momentum/4/console-commands/fail-domain-quiet#fail_domain_quiet_dry_run) for the full description of the listing, the 25-message cap, and placement. **`--dry-run`** combines with the optional `--meta` / `--header` filter.

## See Also

[fail domain quiet](/momentum/4/console-commands/fail-domain-quiet) · [fail all](/momentum/4/console-commands/fail-all)
