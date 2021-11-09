---
lastUpdated: "03/26/2020"
title: "ec_dump_config"
description: "ec dump config output the ecelerity conf file as XML opt msys ecelerity bin ec dump config c configfile e extdir f outputfile ec dump config will generate an XML version of the default configuration file and output to STDOUT If the configuration is invalid an error message is displayed..."
---

<a name="executable.ec_dump_config"></a> 
## Name

ec_dump_config — output the `ecelerity.conf` file as XML

## Synopsis

`/opt/msys/ecelerity/bin/ec_dump_config` [ -c *`configfile`* ] [ -e *`extdir`* ] [ -f *`outputfile`* ]

<a name="idp12681088"></a> 
## Description

**ec_dump_config** will generate an XML version of the default configuration file and output to `STDOUT`. If the configuration is invalid, an error message is displayed. The following options can be used to specify input and output:

<dl class="variablelist">

<dt>-c *`configfile`*</dt>

<dd>

Specify a Momentum configuration file for input.

</dd>

<dt>-e *`extdir`*</dt>

<dd>

Load modules from an external directory rather than the default.

</dd>

<dt>-f *`outputfile`*</dt>

<dd>

Specify an output file for the XML version of the configuration. Otherwise output is sent to stdout.

</dd>

</dl>

You can use this script to help diagnose errors in configuration files. For example, declaration of the non-existent option, `invalid_option`, in a global scope yields the following output:

```
shell> /opt/msys/ecelerity/bin/ec_dump_config
[Tue 18 Oct 2011 13:51:50] No module provides capability 'config.Global:invalid_option'.
[Tue 18 Oct 2011 13:51:50] CFG-07961 No module provides capability 'config.Global:invalid_option'.
Syntax error in /opt/msys/ecelerity/etc/conf/default/ecelerity.conf at line 4 near 'invalid_option'
'invalid_option' is not a valid scope name in scope 'Global'
Reconfigure failed.
Global configuration error.
```
<a name="idp11086176"></a> 
## See Also

[validate_config](/momentum/4/executable/validate-config)