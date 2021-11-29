---
lastUpdated: "03/26/2020"
title: "local_changes_file"
description: "local changes file the file for writing local configuration changes Local Changes File opt msys ecelerity etc local changes conf The Local Changes File option sets the name of a configuration file which must be writable and which is implicitly loaded after all other configuration files regardless of its placement..."
---

<a name="conf.ref.local_changes_file"></a> 
## Name

local_changes_file — the file for writing local configuration changes

## Synopsis

`Local_Changes_File = "/opt/msys/ecelerity/etc/local_changes.conf"`

<a name="idp9981088"></a> 
## Description

The `Local_Changes_File` option sets the name of a configuration file which must be writable, and which is implicitly loaded after all other configuration files regardless of its placement in the `ecelerity.conf` file. Since it must be writable and files included twice are read-only, the `Local_Changes_File` option cannot point to the same file as any 'include' directive, and it cannot point to the main configuration file. Since the `Local_Changes_File` is effectively loaded at the end of the main configuration file, options set in it are able to override any setting in any other configuration file; if it were loaded at some other point, options set after that point could not be overridden by it.

If the `Local_Changes_File` option is not defined, and the main configuration file is writable, then changes are written to the main configuration file. If `Local_Changes_File` is not defined, and the main configuration file is read-only, then a virtual file, not associated with any real path is used to hold changes; in this case, the **config writeback**           command will issue a warning stating that not all portions of the configuration could be saved, and show the contents of the virtual file. This situation can be remedied by setting the `Local_Changes_File` to a valid path and issuing the **config writeback**           command again, at which point changes in the virtual file will be saved to the newly configured location. For more information about **config writeback**           see [config](/momentum/3/3-reference/3-reference-console-commands-config).

<a name="idp9989744"></a> 
## Scope

Local_Changes_File is valid in the global scope.

<a name="idp9991392"></a> 
## See Also

[local_changes_only](/momentum/3/3-reference/3-reference-conf-ref-local-changes-only)