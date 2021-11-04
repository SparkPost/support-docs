---
lastUpdated: "03/26/2020"
title: "ecelerity"
description: "ecelerity Momentum Application Server opt msys ecelerity sbin ecelerity c configfile d h n service s ecelerity is the main server component of the Momentum Application Server On start up the script etc init d ecelerity start starts Momentum Use ec ctl to start stop or restart this process This..."
---

<a name="executable.ecelerity"></a> 
## Name

ecelerity — Momentum Application Server

## Synopsis

`/opt/msys/ecelerity/sbin/ecelerity` [ -c *`configfile`* ] [ -d ] [ -h ] [ -n *`service`* ] [ -s ]

<a name="idp12347696"></a> 
## Description

**ecelerity** is the main server component of the Momentum Application Server. On start up, the script **/etc/init.d/ecelerity start**       starts Momentum.

Use **ec_ctl** to start, stop, or restart this process. This ensures that environment variables are set and that startup scripts are run.

The `ecelerity.conf` file is the master configuration file for **ecelerity**.

While the recommended method for starting Momentum is to use **ec_ctl**, you may also launch Momentum from the command line. The following options are available:

<dl class="variablelist">

<dt>-h</dt>

<dd>

Display a help message, showing all command line options.

</dd>

<dt>-d</dt>

<dd>

Run in the foreground, leave stdout, stderr open.

### Note

The configuration system has a search path algorithm, and the first element in the path it searches is ‘`.`.’. This means that if you run ecelerity in the foreground, you may get different results than if you run it in the background (because when running in the background, the start scripts set the working directory for the process to ‘`/`’).

To make sure you're chasing down the right error, make sure you always do a **`cd /`**    before running ecelerity in the foreground. Doing so makes the environment the same as when running in the background, and consequently the errors will be the same.

In a cluster configuration, do not invoke this command from within the **eccmgr** service.

</dd>

<dt>-n *`service`*</dt>

<dd>

Skip service offering. Service can be 'esmtp', 'ecstream', or 'queue'.

</dd>

<dt>-c *`configfile`*</dt>

<dd>

Use an alternate config file.

</dd>

</dl>

<a name="idp12368080"></a> 
## See Also

[ec_ctl](/momentum/4/executable/ec-ctl), [“`ecelerity.conf` File”](/momentum/4/config/ref-ecelerity-conf), [Chapter 36, *Starting Momentum (**ecelerity**)*](conf.starting "Chapter 36. Starting Momentum (ecelerity)")