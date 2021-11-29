---
lastUpdated: "03/26/2020"
title: "local_changes_only"
description: "local changes only whether there is a file for writing local configuration changes local changes only true local changes only defaults to false If it is true it must be defined and all changes are saved to the local changes file If it is false changes are distributed as described..."
---

<a name="conf.ref.local_changes_only"></a> 
## Name

local_changes_only — whether there is a file for writing local configuration changes

## Synopsis

`local_changes_only = true`

<a name="idp25055520"></a> 
## Description

`local_changes_only` defaults to 'false'. If it is 'true', it must be defined and all changes are saved to the `local_changes_file`. If it is 'false', changes are distributed as described below:

*   When replacing a value that has previously been set, if the file it was last set in is writable then the change is made in-place; the new option value replaces the old option value at the same location in the writable file.

*   If replacing a value that was last set in a read-only file or setting a value that was not set previously, then the change will go to the lexically first writable file in which the scope instance containing the change was defined.

<a name="idp25061120"></a> 
## Scope

local_changes_only is valid in the global scope.

<a name="idp25062960"></a> 
## See Also

[local_changes_file](/momentum/4/config/ref-local-changes-file)