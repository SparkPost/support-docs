---
lastUpdated: "06/24/2026"
title: "fail all quiet"
description: "fail all quiet ec_console fail queued messages globally by meta or RFC822 header match without bounces --meta --header required filter --dry-run preview"
---

<a name="console_commands.fail_all_quiet"></a>

## Name

fail all quiet — fail matching messages everywhere without generating bounces

## Synopsis

`fail all quiet` [ `--dry-run` ] `--meta` *`key`* *`value`* \| `--header` *`header_name`* *`header_line`* [ *`note`* … ]

## Description

The **fail all quiet** command administratively fails queued messages **across every domain** (every active and delayed queue in the mail system) according to **filter** criteria. Unlike **fail domain quiet**, there is **no domain argument**—only messages matching the mandatory filter are failed.

**`--meta`** / **`--header`** matching follows the same rules as [**fail domain quiet** selective purge](/momentum/4/console-commands/fail-domain-quiet#fail_domain_quiet_selective). You must specify **exactly one** clause: either **`--meta`** or **`--header`**, never both.

Any tokens **after** the `--meta` / `--header` clause become the optional administrative failure *note*, joined like other purge commands.

Output reports how many matching messages were failed:

```
All domains purged. 742 messages failed.
```

<a name="fail_all_selective_notes"></a>

**Important:** **`--meta`** / **`--header`** filter is **required**. Running `fail all quiet` without a filter is rejected. Global header matching has the **same folded-header limitation** documented under [**physical header lines**](/momentum/4/console-commands/fail-domain-quiet#header_filter_physical_lines).

### Examples

```
ecelerity> fail all quiet --meta mo_campaign_id end-of-sale
```

```
ecelerity> fail all quiet --header List-Unsubscribe mailto:list@example.com Purged obsolete campaign mail
```

<a name="fail_all_quiet_dry_run"></a>
### Preview without failing (`--dry-run`)

Because **fail all quiet** acts across **every** domain, add **`--dry-run`** to preview its reach **without failing any messages**. The matching messages are listed (capped) and followed by a global summary count:

```
ecelerity> fail all quiet --dry-run --meta mo_campaign_id end-of-sale
  3A/0F-04217-1A3F9C2B  domain=relay.com from=<news@sender.com> to=<user@relay.com>
  7C/1B-04217-2B4E0D8A  domain=mail.example.net from=<promo@sender.com> to=<admin@example.net>
  ...
[dry-run] all domains: 742 messages would be failed. (Showing first 25; 717 more not listed.)
```

See [**fail domain quiet** → preview](/momentum/4/console-commands/fail-domain-quiet#fail_domain_quiet_dry_run) for the full description of the listing, the 25-message cap, and placement. The required `--meta` / `--header` filter still applies in dry-run mode.

## See Also

[fail all](/momentum/4/console-commands/fail-all) · [fail domain quiet](/momentum/4/console-commands/fail-domain-quiet) · [binding fail domain quiet](/momentum/4/console-commands/binding-fail-domain-quiet)
