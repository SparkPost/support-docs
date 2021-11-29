---
lastUpdated: "03/26/2020"
title: "local_changes_only"
description: "local changes only whether there is a file for writing local configuration changes Local Changes Only true The Local Changes Only option defaults to false If it is true the Local Changes File option must be defined and all changes are saved to the Local Changes File If it is..."
---

<a name="conf.ref.local_changes_only"></a> 
## Name

local_changes_only — whether there is a file for writing local configuration changes

## Synopsis

`Local_Changes_Only = true`

<a name="idp10000192"></a> 
## Description

The `Local_Changes_Only` option defaults to 'false'. If it is 'true', the `Local_Changes_File` option must be defined and all changes are saved to the `Local_Changes_File`. If it is 'false', changes are distributed as described below:

*   When replacing a value that has previously been set, if the file it was last set in is writable then the change is made in-place; the new option value replaces the old option value at the same location in the writable file.

*   If replacing a value that was last set in a read-only file or setting a value that was not set previously, then the change will go to the lexically first writable file in which the scope instance containing the change was defined.

<a name="idp10006144"></a> 
## Scope

Local_Changes_Only is valid in the global scope.

<a name="idp10007792"></a> 
## See Also

[local_changes_file](/momentum/3/3-reference/3-reference-conf-ref-local-changes-file)