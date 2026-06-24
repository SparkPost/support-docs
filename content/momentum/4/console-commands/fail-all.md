---
lastUpdated: "06/24/2026"
title: "fail all"
description: "fail all ec_console globally fail queued messages matching --meta or --header filter bounce optional note --dry-run preview"
---

<a name="console_commands.fail_all"></a>

## Name

fail all — fail matching messages everywhere with bounce behavior

## Synopsis

`fail all` [ `--dry-run` ] `--meta` *`key`* *`value`* \| `--header` *`header_name`* *`header_line`* [ *`note`* … ]

## Description

The **fail all** command administratively fails queued messages **across every domain** (every active and delayed queue) according to **filter** criteria. Unlike **fail domain**, there is **no domain argument**—only messages matching the mandatory filter are failed.

Matching uses the same **`--meta`** / **`--header`** rules as [**fail domain quiet**](/momentum/4/console-commands/fail-domain-quiet#fail_domain_quiet_selective): **exactly one** clause, either **`--meta`** or **`--header`**.

When **fail all** is used (**not** **fail all quiet**), failed messages follow normal permanent-failure disposition (including bounce generation when Generate_Bounces is enabled), analogous to **fail domain** versus **fail domain quiet**.

Tokens after the filter clause are joined into an optional administrative failure *note*, same as other purge commands.

```
All domains purged. 742 messages failed.
```

<a name="fail_all_required_filter"></a>

**Important:** **`--meta`** / **`--header`** filter is **required**. Header matching observes the **physical-line** limitation described under [**folded headers**](/momentum/4/console-commands/fail-domain-quiet#header_filter_physical_lines).

### Examples

```
ecelerity> fail all --header X-Ecconsole-Purge yes
```

```
ecelerity> fail all --meta tenant_id churned 554 Tenant removed — mail purged
```

<a name="fail_all_dry_run"></a>
### Preview without failing (`--dry-run`)

Because **fail all** acts across **every** domain, add **`--dry-run`** to preview its reach **without failing any messages**. The matching messages are listed (capped) and followed by a global summary count:

```
ecelerity> fail all --dry-run --meta tenant_id churned
  3A/0F-04217-1A3F9C2B  domain=relay.com from=<news@sender.com> to=<user@relay.com>
  7C/1B-04217-2B4E0D8A  domain=mail.example.net from=<promo@sender.com> to=<admin@example.net>
  ...
[dry-run] all domains: 742 messages would be failed. (Showing first 25; 717 more not listed.)
```

See [**fail domain quiet** → preview](/momentum/4/console-commands/fail-domain-quiet#fail_domain_quiet_dry_run) for the full description of the listing, the 25-message cap, and placement. The required `--meta` / `--header` filter still applies in dry-run mode.

## See Also

[fail all quiet](/momentum/4/console-commands/fail-all-quiet) · [fail domain](/momentum/4/console-commands/fail-domain) · [binding fail domain](/momentum/4/console-commands/binding-fail-domain)
