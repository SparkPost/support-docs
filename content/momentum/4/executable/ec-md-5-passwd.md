---
lastUpdated: "03/26/2020"
title: "ec_md5passwd"
description: "ec md 5 passwd changes the password for a system user's password opt msys ecelerity bin ec md 5 passwd h f r realm username password ec md 5 passwd creates a hash of a password using the MD 5 hash algorithm The user name and password are required Credentials..."
---

<a name="executable.ec_md5passwd"></a> 
## Name

ec_md5passwd — changes the password for a system user's password

## Synopsis

`/opt/msys/ecelerity/bin/ec_md5passwd` [ -h ] [ -f ] [ -r *`realm`* ] [ *`username`* ] [ *`password`* ]

<a name="idp9129056"></a> 
## Description

**ec_md5passwd** creates a hash of a password using the MD5 hash algorithm. The user name and password are required. Credentials are stored in `/opt/msys/ecelerity/etc/console_passwd`.

This command has the following options:

<dl class="variablelist">

<dt>-h</dt>

<dd>

Display a help message.

</dd>

<dt>-f</dt>

<dd>

Specify a password file to update. The password file is defined by the `uri` option in the access control list of the `Control_Listener` stanza of `ecelerity.conf`. Typically, this value is `digest:///opt/msys/ecelerity/etc/console_passwd`. If you do not use the `-f` option, output is sent to the screen and you can copy the output and paste it into a text file.

</dd>

<dt>-r *`realm`*</dt>

<dd>

Specify a realm. If not specified, the value of the environment variable `EC_DIGEST_REALM` is used. If `EC_DIGEST_REALM` is not set, the value `Momentum Console` is used.

</dd>

<dt>*`username`*</dt>

<dd>

If you do not specify a user name, you are prompted for one. You can update the password of an existing user by specifying a user's name.

</dd>

<dt>*`password`*</dt>

<dd>

If you do not specify a password, you are prompted for one.

</dd>

</dl>

This command is typically used in the following manner:

shell> /opt/msys/ecelerity/bin/ec_md5passwd -f *`/opt/msys/ecelerity/etc/console_passwd`* *`new_usr`* *`passwd`*

If the specified file does not exist, it will be created. If the path does not exist, an error message will be displayed.

### Note

If you decide to use MD5 authentication instead of the `ecdb` datasource, you must ensure that the owner of the `console_passwd` file is `ecuser:ecuser`.

If the file, user name and password are omitted, you will be prompted to enter the information, as shown in the following example:

shell>  /opt/msys/ecelerity/bin/ec_md5passwd
Username: *`fred`*
Please enter password for *`fred`*
Password:
Please enter the password again
Password:
Password updated.
Place or replace this line in your password file:
*`fred`*:Momentum Console:*`f8cd71a383c02d5e5b0d7eb0385d38ad`*

Copy the output of this command into the password file as instructed.

You can also update an existing user's password by specifying the user name and then supplying the new password.

You do not need to restart the MTA after adding a new user.

<a name="idp9157072"></a> 
## See Also

[DIGEST-MD5 Authentication](/momentum/4/control-auth#control_auth.digest-md5)