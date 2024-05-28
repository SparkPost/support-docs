---
lastUpdated: "05/21/2024"
title: "Configuration Overview"
description: "Momentum is an exceptionally powerful all in one email infrastructure solution As such it can be configured to provide the full range of digital messaging channels and more This chapter gives an overview of Momentum's configuration and provides the background needed to configure your system to meet your specific application"
---


Momentum is an exceptionally powerful all-in-one email infrastructure solution. As such, it can be configured to provide the full range of digital messaging channels and more. This chapter gives an overview of Momentum's configuration and provides the background needed to configure your system to meet your specific application.

## <a name="conf.files"></a> Configuration Files

Momentum's configuration is defined in multiple configuration files. The installer creates an initial configuration for you, based on the answers you provided to it during installation. This initial configuration is based on the sample configuration files found in the `/opt/msys/ecelerity/etc/sample-configs` directory.

The `ecelerity.conf` file is the master configuration file for Momentum; while other configuration files are specific to a given function or feature. For information about each configuration file, follow the links below:

*   [`eccluster.conf`](/momentum/4/config/ref-eccluster-conf) - Momentum Cluster Manager configuration file

*   [`ecelerity.conf`](/momentum/4/config/ref-ecelerity-conf) - Master Momentum configuration file

*   [`ecelerity_cluster.con`](/momentum/4/config/ref-ecelerity-cluster-conf) - Cluster-specific configuration file included from within `ecelerity.conf`

*   [`ec_rotate.conf`](/momentum/4/log-rotating#conf.ref.ec_rotate.conf) - Configuration file for the utility script **ec_rotate**

*   [`msg_gen.conf`](/momentum/4/config/ref-msg-gen-conf) - Message Generation configuration file included from within `ecelerity.conf`

*   [`msgc_server.conf`](/momentum/4/config/ref-msgc-server-conf) - Momentum cluster messaging bus configuration file

### <a name="conf.files.comments"></a> Comments and Whitespace

In common with many other Unix configuration files, Momentum's configuration files use the `#` (commonly referred to as "hash" or "pound" sign) symbol to introduce a single line comment. Whitespace is unimportant in the various configuration stanza; feel free to pad the whitespace as you see fit for maximum readability.

### Note

If the values assigned to any options contain whitespace or any of the characters ‘`#`’, ‘`/`’, ‘`"`’, ‘`'`’, ‘`=`’, ‘`{`’, ‘`}`’, ‘`[`’, ‘`]`’, ‘`(`’, ‘`)`’ they must be enclosed by quotation marks. Note that binding names cannot contain spaces.

You may use C-style comments in your configuration files. C-style comments begin with `/*` and end with `*/`. Any text between those two markers will be ignored by Momentum. C-style comments do not nest.

### <a name="conf.files.includes"></a> Using the `include` and `readonly_include` Directives

<a name="idp2457248"></a> 

Momentum's configuration is distributed over multiple configuration files, which are referenced from within the other configuration files. For example, the `eccluster.conf` file is "included" from the `ecelerity.conf` file and configures cluster-related options in a cluster configuration.

You may break apart any of your configuration files into multiple files and reference them using the `include` or `readonly_include` directives. Both are valid in any scope. The following is an example using the `include` directive:

`include "/opt/msys/ecelerity/etc/other.conf"`

If you break up your configuration file into different files, you must add these new files to the repository. For included files, the directory that holds the file being included **from** is checked before the default search path.

You may also use the `include` directive to allow the inclusion of a directory, as shown in the following example:

```
# assuming that /opt/msys/ecelerity/etc/config.d is a directory
# each file in that directory will be included
include "/opt/msys/ecelerity/etc/config.d"
```

When the referenced path is a directory, all the files within that directory are included in alphabetical order. Hidden files (those whose names begin with a single period) are not included. Sub-directories are not automatically processed.

The `readonly_include` directive also supports making online changes to the configuration with the [config set](/momentum/4/console-commands/config) and [config unset](/momentum/4/console-commands/config) commands.

When making an online change, Momentum must decide to which configuration file to save online changes. This decision is controlled by the following factors:

*   `Local_Changes_File` option

*   `Local_Changes_Only` option

*   Read-only status of a particular configuration file

*   Whether the operation being performed is replacing an old value with a new one or setting a value that has not previously been set

The `Local_Changes_File` option sets the name of a configuration file that must be writable and that is implicitly loaded after all other configuration files, regardless of its placement in the configuration file. Since it must be writable and files included twice are read-only, the `Local_Changes_File` option cannot point to the same file as any `include` directive, and it cannot point to the main configuration file. Since `Local_Changes_File` is effectively loaded at the end of the main configuration file, options set in it are able to override any setting in any other configuration file. If it were loaded at some other point, options set after that point could not be overridden by it.

If the `Local_Changes_File` option is not defined and the main configuration file is writable, changes are written to the main configuration file. If `Local_Changes_File` is not defined and the main configuration file is read-only, a virtual file not associated with any real path is used to hold changes; in this case, the [config writeback](/momentum/4/console-commands/config) command will issue a warning stating that not all portions of the configuration could be saved and show the contents of the virtual file. This issue can be fixed by setting the `Local_Changes_File` to a valid path and issuing the **config writeback**           command again, at which point changes in the virtual file will be saved to the newly configured location.

The `Local_Changes_Only` option defaults to `false`. If it is `true`, the `Local_Changes_File` option must be defined and all changes are saved to the `Local_Changes_File`. If it is `false`, changes are distributed as described below:

*   When replacing a value that has previously been set, if the file it was last set in is writable then the change is made in-place; i.e., the new option value replaces the old option value at the same location in the writable file.

*   If replacing a value that was last set in a read-only file or setting a value that was not set previously, then the change will go to the first writable file in which the scope instance containing the change was defined.

For an example of the first writable file, assume that `ecelerity.conf` is configured as follows:

```
readonly_include "foo.conf"
include "baz.conf"
```

and `foo.conf` contains:

```
Domain yahoo.com {
  Gateway = "server.yahoo.com"
  include "bar.conf"
}
```

Options set for the first time by commands starting with **config set Domain yahoo.com**                      will be saved in `bar.conf`, since `foo.conf` is read-only and `baz.conf` occurs after `bar.conf`. The change made by **config set Domain yahoo.com gateway "server2.yahoo.com"**                                                  would also end up in `bar.conf,` since the original location, `foo.conf`, is read-only, and `bar.conf` is the first writable location after it.

Finally, if the scope instance containing the change was only encountered in read-only files or not at all, the change will be saved to the file defined by the `Local_Changes_File` option. Note that changes, even committed changes, are accumulated in in-memory representations of the configuration files and are not saved to disk until a **config writeback**           command is issued.

### Note

Any configuration files included with the `readonly_include` directive are read-only. Any configuration files included multiple times (overall, not necessarily from the same file) are read-only. Any configuration files loaded from a URI with a scheme other than 'file://', 'persist://' are read-only. All other configuration files are considered writable.

### <a name="conf.manual.changes"></a> Changing Configuration Files

It is important to take steps to avoid conflicts with changes made elsewhere in the system and to be able to track changes. For this reason, perform the following actions when editing any configuration files or script files:

1.  Navigate to the appropriate directory:

    *   For a single-node configuration, navigate to `/opt/msys/ecelerity/etc/conf/default` .

    *   For a cluster configuration, navigate to `/opt/msys/ecelerity/etc/conf/default` on the cluster manager.

    *   For node-specific configuration, navigate to the sub-directory on the cluster manager that is below `/opt/msys/ecelerity/etc/conf` and bears the name of the node: /opt/msys/ecelerity/etc/conf/*`nodename`*.

2.  Make the necessary changes to the configuration file using the text editor of your choice.

3.  Test the validity of your changes using the [validate_config](/momentum/4/executable/validate-config) script:

    `/opt/msys/ecelerity/bin/validate_config`
4.  Check that your changes are valid by reloading the configuration before committing it. Issue the following command:

    `/opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload`

    If there are any errors, the new configuration will not load and the error message, `"Reconfigure failed"`, will be displayed.

5.  Implement your changes.

    *   For a single-node configuration, open the console and issue the command:

        `config reload`

        You can view the effective configuration settings using the console command **`config showrecurse`**             . You may want to turn the pager on first by entering the command, **`\pager`**. There is no need to restart the ecelerity process.

        ### Warning

        Some configuration changes require restarting the ecelerity process, as documented throughout this guide. Running the **`config reload`**         command will not suffice.

    *   For a cluster configuration, issue the **`config reload`**         command on the cluster manager. The changes will be propagated to all of the other nodes and will be automatically loaded by the running ecelerity processes.

        ### Warning

        Some configuration changes require restarting the ecelerity process, as documented throughout this guide. Running the **`config reload`**         command will not suffice.

    *   For a node-specific configuration, use the [ec_ctl](/momentum/4/executable/ec-ctl) command to restart the ecelerity process. The **`config reload`**         command will not load configuration changes.

### Warning

Avoid leaving uncommitted changes pending, especially in the working copy on a node.

### <a name="conf.adding.configuration.files"></a> Adding Configuration Files

As discussed in [“Using the `include` and `readonly_include` Directives”](/momentum/4/conf-overview#conf.files.includes), you can split your Momentum configuration into any number of configuration files. However, if you add new configuration files you must also add them to the repository. Follow these steps:

1.  Navigate to the appropriate directory for the changes you intend to make. You will save your files to a different directory on a different node depending upon how narrowly or widely your configuration applies.

    *   For a single-node configuration, navigate to `/opt/msys/ecelerity/etc/conf/default`.

    *   For a cluster configuration, navigate to `/opt/msys/ecelerity/etc/conf/default` on the cluster manager.

    *   For node-specific configuration, create a sub-directory on the cluster manager that is below `/opt/msys/ecelerity/etc/conf` and bears the name of the node: /opt/msys/ecelerity/etc/conf/*`nodename`*. Copy the appropriate configuration files from the `default` directory.

2.  Create and save the new configuration file.

3.  Open the appropriate configuration file and include the new file using the `include` directive.

4.  Test the validity of your changes using the [validate_config](/momentum/4/executable/validate-config) script:

    `/opt/msys/ecelerity/bin/validate_config`
5.  Check that your changes are valid by reloading the configuration before committing it. Issue the following command:

    `/opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload`

    If there are any errors, the new configuration will not load and the error message, `"Reconfigure failed"`, will be displayed.

6.  Implement your changes.

    *   For a single-node configuration, open the console and issue the command:

        `config reload`

        You can view the effective configuration settings using the console command **`config showrecurse`**             . You may want to turn the pager on first by entering the command, **`\pager`**. There is no need to restart the ecelerity process.

        ### Warning

        Some configuration changes require restarting the ecelerity process, as documented throughout this guide. Running the **`config reload`**         command will not suffice.

    *   For a cluster configuration, issue the **`config reload`**         command on the cluster manager. The changes will be propagated to all of the other nodes and will be automatically loaded by the running ecelerity processes.

        ### Warning

        Some configuration changes require restarting the ecelerity process, as documented throughout this guide. Running the **`config reload`**         command will not suffice.

    *   For a node-specific configuration, use the [ec_ctl](/momentum/4/executable/ec-ctl) command to restart the ecelerity process. The **`config reload`**         command will not load configuration changes.
