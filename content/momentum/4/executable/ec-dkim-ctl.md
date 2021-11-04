---
lastUpdated: "03/26/2020"
title: "ec_dkim_ctl"
description: "ec dkim ctl manipulate the DK DKIM database opt msys ecelerity bin ec dkim ctl add dk domain selector keyfile opt msys ecelerity bin ec dkim ctl add dkim domain selector keyfile opt msys ecelerity bin ec dkim ctl delete dk domain opt msys ecelerity bin ec dkim ctl delete..."
---

<a name="executable.ec_dkim_ctl"></a> 
## Name

ec_dkim_ctl — manipulate the DK/DKIM database

## Synopsis

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --add-dk *`domain,selector,keyfile`* ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --add-dkim *`domain,selector,keyfile`* ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --delete-dk *`domain`* ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --delete-dkim *`domain`* ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ -h ]

`/opt/msys/ecelerity/bin/ec_dkim_ctl` [ --list ]

### Note

When adding a domain, use commas to separate values.

<a name="idp12644368"></a> 
## Description

**ec_dkim_ctl** is used to manipulate a small SQLite database that can be used in conjunction with the DK and DKIM actions for signing e-mail messages. If the database does not already exist, adding a domain creates the `dkim_db` database in the `/var/log/ecelerity` directory. Its schema is as follows:

```
CREATE TABLE ec_dkim_conf (
  domain varchar(255) PRIMARY KEY,
  selector varchar(255) NOT NULL,
  keyfile varchar(255))

CREATE TABLE ec_dk_conf (
  domain varchar(255) PRIMARY KEY,
  selector varchar(255) NOT NULL,
  keyfile varchar(255))
```

This command has the following options:

<dl class="variablelist">

<dt>--add-dk domain,selector,keyfile</dt>

<dd>

Add a domain to the DomainKeys table with the defined selector and keyfile. The keyfile option may be empty.

</dd>

<dt>--delete-dk domain</dt>

<dd>

Delete a domain from the DomainKeys table.

</dd>

<dt>--add-dkim domain,selector,keyfile</dt>

<dd>

Add a domain to the DKIM table with the defined selector and keyfile. The keyfile option may be empty.

</dd>

<dt>--delete-dkim domain</dt>

<dd>

Delete a domain from the DKIM table

</dd>

<dt>-h</dt>

<dd>

Show a help message.

</dd>

<dt>--list</dt>

<dd>

List the domains in the DK and DKIM tables.

</dd>

<dt>--version or -V</dt>

<dd>

Show version information.

</dd>

</dl>

<a name="idp12664064"></a> 
## See Also

[*Using Yahoo! DomainKeys*](/momentum/4/using-domainkeys) , [Chapter 23, *Using DomainKeys Identified Mail (DKIM) Signatures*](using_dkim "Chapter 23. Using DomainKeys Identified Mail (DKIM) Signatures")