---
lastUpdated: "03/26/2020"
title: "ec_console"
description: "ec console connect to Momentum to perform introspection and administration opt msys ecelerity bin ec console remoteaddr command man Runtime administration of Momentum can be performed through the Momentum System Console ec console Through the console you can view and change the value of configuration options This command has the..."
---

<a name="executable.ec_console"></a> 
## Name

ec_console — connect to Momentum to perform introspection and administration

## Synopsis

`/opt/msys/ecelerity/bin/ec_console` [ remoteaddr [*`command`*] ] [ --man ]

<a name="idp11731984"></a> 
## Description

Runtime administration of Momentum can be performed through the Momentum System Console **ec_console**. Through the console, you can view and change the value of configuration options.

This command has the following options:

<dl class="variablelist">

<dt>*`remoteaddr`* [*`command`*]</dt>

<dd>

Specify the IP address or the Unix socket. This can be useful if you wish to run the console in batch mode.

</dd>

<dt>--man</dt>

<dd>

Show the man page for the **ec_console** command.

</dd>

</dl>

<a name="idp11740416"></a> 
## See Also

[*Console Commands Summary*](/momentum/4/4-console-commands) , [*Configuring Momentum's System Console*](/momentum/4/control-listener) , [Chapter 37, *Using the System Console (**ec_console**)*](operations "Chapter 37. Using the System Console (ec_console)")