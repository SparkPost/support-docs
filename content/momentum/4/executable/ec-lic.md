---
lastUpdated: "03/26/2020"
title: "ec_lic"
description: "ec lic fetch a new license file from Message Systems opt msys ecelerity bin ec lic a username password opt msys ecelerity bin ec lic c conffile opt msys ecelerity bin ec lic d opt msys ecelerity bin ec lic e path opt msys ecelerity bin ec lic f opt..."
---

<a name="executable.ec_lic"></a> 
## Name

ec_lic — fetch a new license file from Message Systems

## Synopsis

`/opt/msys/ecelerity/bin/ec_lic` [ -a *`username`*:*`password`* ]

`/opt/msys/ecelerity/bin/ec_lic` [ -c *`conffile`* ]

`/opt/msys/ecelerity/bin/ec_lic` [ -d ]

`/opt/msys/ecelerity/bin/ec_lic` [ -e *`path`* ]

`/opt/msys/ecelerity/bin/ec_lic` [ -f ]

`/opt/msys/ecelerity/bin/ec_lic` [ -H *`url`* ]

`/opt/msys/ecelerity/bin/ec_lic` [ -h ]

`/opt/msys/ecelerity/bin/ec_lic` [ -L *`file`* ]

`/opt/msys/ecelerity/bin/ec_lic` [ -p *`proxy`* ]

`/opt/msys/ecelerity/bin/ec_lic` [ -q ]

`/opt/msys/ecelerity/bin/ec_lic` [ -t {HTTP | SOCKS4 | SOCKS5} ]

<a name="idp13254512"></a> 
## Description

`ec_lic` will validate your current Momentum license, and if it is missing or invalid, fetch an updated license from the Message Systems license server.

It has the following options:

<dl class="variablelist">

<dt>-a *`username`*:*`password`*</dt>

<dd>

Proxy username:password to use.

</dd>

<dt>-c *`conffile`*</dt>

<dd>

Specify an alternate configuration file to use other than the default, which is `ecelerity.conf`.

</dd>

<dt>-d</dt>

<dd>

Show verbose debugging information when fetching license.

</dd>

<dt>-e *`path`*</dt>

<dd>

Load modules from *`path`* rather than the default.

</dd>

<dt>-f</dt>

<dd>

Fetch a new license file from Message Systems if the current one is invalid.

</dd>

<dt>-H *`url`*</dt>

<dd>

Fetch license from an alternative URL. (Use this option instead of the `-f` option).

</dd>

<dt>-h</dt>

<dd>

Show a help message.

</dd>

<dt>-L *`file`*</dt>

<dd>

Operate on license at an alternate location. (Used only if *`conffile`* does not exist).

</dd>

<dt>-p *`proxy`*</dt>

<dd>

HTTP proxy to use.

</dd>

<dt>-q</dt>

<dd>

Show no message if current license is valid. This should be used together with `-f`

</dd>

<dt>-t {HTTP | SOCKS4 | SOCKS5}</dt>

<dd>

Proxy type (HTTP, SOCKS4, SOCKS5).

</dd>

</dl>