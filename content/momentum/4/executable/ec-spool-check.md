---
lastUpdated: "04/15/2026"
title: "ec_spool_check"
description: "ec spool check read only spool integrity utility scans queue message files metadata body optional oldest newest creation time opt msys ecelerity bin ec spool check c conffile e extdir x spool directory"
---

<a name="executable.ec_spool_check"></a>

## Name

ec_spool_check — verify spool directory integrity (read-only scan)

## Synopsis

`/opt/msys/ecelerity/bin/ec_spool_check` [ **-c** *`conffile`* ] [ **-e** *`extdir`* ] [ **-x** ] *`spool-directory`*

## Description

**ec_spool_check** walks the message queue under *`spool-directory`* and uses the same spool APIs as the MTA to load metadata and bodies for each message. It prints a summary on standard output (counts scanned, valid, failures). Problems are reported on standard error as lines of the form `FAIL <mid>: <reason>`.

Use this utility to audit an on-disk spool after incidents, partial failures, or upgrades, without driving traffic through Momentum.

### Concurrency and locking

Do **not** run **ec_spool_check** at the same time as **ecelerity** on the **same** spool directory. The tool acquires the spool lock while it runs; concurrent access with a live MTA can interfere with normal delivery.

### Options

<dl class="variablelist">

<dt>**-c** *`conffile`*</dt>

<dd>

Optional path to a Momentum configuration file. If omitted, **ec_spool_check** locates `ecelerity.conf` (or the product-specific `.conf` name) using the same search rules as Momentum (`EC_CONF_SEARCH_PATH` and default install paths). If **-c** is given with a relative path, it is resolved from the current working directory, consistent with other utilities.

</dd>

<dt>**-e** *`extdir`*</dt>

<dd>

Module search path (extensions directory), equivalent to other **ec_** tools that accept **-e**.

</dd>

<dt>**-x**</dt>

<dd>

After the summary, print the oldest and newest verified messages’ metadata **creation_time** (evaluated with the local clock). If the spool is empty, prints `(none)` for those lines.

</dd>

<dt>**-h**</dt>

<dd>

Print usage and exit successfully.

</dd>

</dl>

### Exit status

| Code | Meaning |
| --- | --- |
| 0 | No integrity failures reported for scanned messages |
| 1 | One or more failures (meta, body, or orphan markers) |
| 2 | Fatal error (configuration, lock, or scan abort) |

### Spool_Backup side effect

If **Spool_Backup** is configured and a small-message body file’s size does not match its metadata, the spool layer may move both files into **Spool_Backup** during swap-in—the same behavior as the MTA. Other operations performed by **ec_spool_check** are read-only.

## Example

```
shell> /opt/msys/ecelerity/bin/ec_spool_check -c /opt/msys/ecelerity/etc/ecelerity.conf /var/spool/ecelerity/maildir
Total scanned:    42
Total ok:         42
Meta failures:    0
Body failures:    0
Orphan L-markers: 0
```

With **-x**, additional lines list oldest and newest message identifiers and creation times when present.

<a name="ec-spool-check-see-also"></a>

## See Also

[ec_show](/momentum/4/executable/ec-show)  
[validate_config](/momentum/4/executable/validate-config)
