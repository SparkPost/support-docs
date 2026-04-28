---
lastUpdated: "04/15/2026"
title: "fail all quiet"
description: "fail all quiet ec_console fail queued messages globally by meta or RFC822 header match without bounces --meta --header required filter"
---

<a name="console_commands.fail_all_quiet"></a>

## Name

fail all quiet — fail matching messages everywhere without generating bounces

## Synopsis

`fail all quiet` `--meta` *`key`* *`value`* \| `--header` *`header_name`* *`header_line`* [ *`note`* … ]

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

## See Also

[fail all](/momentum/4/console-commands/fail-all) · [fail domain quiet](/momentum/4/console-commands/fail-domain-quiet) · [binding fail domain quiet](/momentum/4/console-commands/binding-fail-domain-quiet)
