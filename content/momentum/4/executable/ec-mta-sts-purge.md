---
lastUpdated: "03/26/2020"
title: "ec_mta_sts_purge"
description: "ec mta_sts_purge Remove expired MTA-STS policies from the file system"
---

<a name="executable.ec_mta_sts_purge"></a> 
## Name

ec_mta_sts_purge — Remove expired MTA-STS policies from the file system

## Synopsis

`/opt/msys/ecelerity/bin/ec_mta_sts_purge` [ -dir *`directory`* ]

`/opt/msys/ecelerity/bin/ec_mta_sts_purge` [ -dryrun ]

`/opt/msys/ecelerity/bin/ec_mta_sts_purge` [ -v | -verbose ]

## Description

The **ec_mta_sts_purge** command is a utility script used to remove expired MTA-STS policies from the file system.

Momentum caches MTA-STS policies on the file system.  This is to reduce how often Momentum needs to fetch the policies using HTTPS.  This also prevents a large number of fetches on a restart.  These policies will normally get updated regularly, but if some domains have not been used for a long time, this command can be used to delete the expired policy files for these domains from the file system.

### Note

The **ec_mta_sts_purge** script will delete files in the default location. If you have specified a different location via `mta_sts_policy_store`, the `-dir` option must be used.

The following options change the behavor of the **ec_mta_sts_purge** command:

<dl class="variablelist">

<dt>-dir directory</dt>

<dd>

Specify the full path to the directory where the policy files are stored. Default is `/var/spool/ecelerity/mtasts`.

</dd>

<dt>-dryrun</dt>

<dd>

If this option is specified, the script will just list the files that would be deleted.

</dd>

</dl>

The following is an example:

```sh
/opt/msys/ecelerity/bin/ec_mta_sts_purge -dryrun -dir /path/to/policy/files
```
