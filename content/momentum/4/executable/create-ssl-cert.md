---
lastUpdated: "05/21/2024"
title: "create_ssl_cert"
description: "During installation self signed SSL certificates valid for one year are created for some services Use this command to create a new certificate when the original expires"
---

<a name="executable.create_ssl_cert"></a> 
## Name

create_ssl_cert — create a self-signed SSL certificate

## Synopsis

`/opt/msys/ecelerity/bin/create_ssl_cert` { *`service`* } { *`hostname`* } { *`prefix`* } [ *`user`* ]

<a name="idp14360800"></a> 
## Description

During installation, self-signed SSL certificates valid for one year are created. Use this command to create a new certificate when the original expires. When a certificate expires, you will get an error message.

To create a new certificate, first stop the appropriate service and remove the old certificate. Then issue the **create_ssl_cert** command:

shell> /opt/msys/ecelerity/bin/create_ssl_cert *`service`* *`hostname`* \
*`prefix`* *`user`*

The parameters passed to this command are as follows:

<dl class="variablelist">

<dt>*`service`*</dt>

<dd>

Currently, only this service can be specified with this command:

*   `msyspg` - Postgresql Server

    During installation, you can choose to use SSL for PostgreSQL.

</dd>

<dt>*`hostname`*</dt>

<dd>

Specify the hostname of the machine that hosts the service for which you are creating a certificate.

</dd>

<dt>*`prefix`*</dt>

<dd>

For the **msyspg** service, use `/opt/msys/3rdParty/share/postgresql`.

</dd>

<dt>*`user`*</dt>

<dd>

For the **msyspg** service, use `msyspg`. If you do not specify a user, the user defaults to `ecuser`.

</dd>

</dl>

<a name="idp14556320"></a> 
## See Also

[“Running the PostgreSQL Server”](/momentum/4/postgresql-server)
