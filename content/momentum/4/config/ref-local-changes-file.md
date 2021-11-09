---
lastUpdated: "03/26/2020"
title: "local_changes_file"
description: "local changes file the file for writing local configuration changes local changes file opt msys ecelerity etc local changes conf local changes file sets the name of a configuration file which must be writable and which is implicitly loaded after all other configuration files regardless of its placement in the..."
---

<a name="conf.ref.local_changes_file"></a> 
## Name

local_changes_file — the file for writing local configuration changes

## Synopsis

`local_changes_file = "/opt/msys/ecelerity/etc/local_changes.conf"`

<a name="idp25036256"></a> 
## Description

`local_changes_file` sets the name of a configuration file which must be writable, and which is implicitly loaded after all other configuration files regardless of its placement in the `ecelerity.conf` file. Since it must be writable and files included twice are read-only, the `local_changes_file` cannot point to the same file as any 'include' directive, and it cannot point to the main configuration file. Since the `local_changes_file` is effectively loaded at the end of the main configuration file, options set in it are able to override any setting in any other configuration file; if it were loaded at some other point, options set after that point could not be overridden by it.

If `local_changes_file` is not defined, and the main configuration file is writable, then changes are written to the main configuration file. If `local_changes_file` is not defined, and the main configuration file is read-only, then a virtual file not associated with any real path is used to hold changes; in this case, the [config writeback](/momentum/4/console-commands/config#config_writeback) command will issue a warning stating that not all portions of the configuration could be saved, and show the contents of the virtual file. This situation can be remedied by setting the `local_changes_file` to a valid path and issuing the **config writeback**           command again, at which point changes in the virtual file will be saved to the newly configured location.

<a name="idp25044016"></a> 
## Scope

local_changes_file is valid in the global scope.

<a name="idp25045856"></a> 
## See Also

[local_changes_only](/momentum/4/config/ref-local-changes-only)