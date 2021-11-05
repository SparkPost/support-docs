---
lastUpdated: "03/26/2020"
title: "securecreds – Password Encryption/Credential Retrieval"
description: "The securecreds module enforces password encryption and implements credential retrieval operations when certain facilities are accessed If this module is enabled the following facilities make use of it All datasource modules ecconfigd Momentum configuration management server eccfg Momentum version control management tool Open SSL s EVP API performs the encryption..."
---

<a name="idp22782304"></a> 

The securecreds module enforces password encryption and implements credential retrieval operations when certain facilities are accessed. If this module is enabled, the following facilities make use of it:

*   All datasource modules

*   [ecconfigd](/momentum/4/executable/ecconfigd) – Momentum configuration management server

*   [eccfg](/momentum/4/executable/eccfg) – Momentum version control management tool

OpenSSL’s EVP API performs the encryption and decryption using a selectable block cipher and block mode, which will default to AES-256 using cipher-block chaining (CBC). Selectable ciphers are determined by OpenSSL’s available implementations.

This module is used in conjunction with the [credmgr](/momentum/4/executable/credmgr) tool.

### Note

During installation, if you choose to enable encrypted passwords, the credentials database and key are created at the default location. Root has read/write access to this database and ecuser has read access. This is enforced by having credmgr explicitly set the ownership and permissions appropriately on the credentials files. If you wish to use secure credentials on each node, be sure to enable encryption on each node during installation.

If reversible encryption was not selected during installation and you later wish to use this module, you must create the secure credentials database and the encryption key using the [credmgr](/momentum/4/executable/credmgr) tool. You must also create the following entries in the credentials database:

*   **credmgr set_cred --hostname=_ecconfigd_ -u ecuser -f ecconfigd -p *`password`***                                                                       

*   **credmgr set_cred --hostname=*`hostname`* -u ecuser -f pgsql -p *`password`***                                                                    

*   **credmgr set_cred --hostname=*`hostname`* -u ecuser -f ecdb -p *`password`***                                                                   

*   **credmgr set_cred --hostname=localhost -u ecuser -f pgsql -p *`password`***                                                                 

*   **credmgr set_cred --hostname=localhost -u ecuser -f ecdb -p *`password`***                                                                

### <a name="modules.securecreds.configuration"></a> Configuration

The following is an example configuration:

<a name="example.securecreds"></a> 


```
securecreds {
  Credentials = "/opt/msys/etc/credentials.db"
  Key = "/opt/msys/etc/credentials.key"
}
```

The following configuration options are available:

<dl class="variablelist">

<dt>Credentials</dt>

<dd>

This option defines the location of the credentials database. The default value is `/opt/msys/etc/credentials.db`. This database is created using **credmgr**. In a cluster configuration this database must be present on each node.

</dd>

<dt>Key</dt>

<dd>

The location of the credentials key file. The default value is `/opt/msys/etc/credentials.key`. This key is created using **credmgr**. In a cluster configuration, this key must be present on each node.

</dd>

</dl>

### Warning

We strongly recommend you not change the default values. If you absolutely must change the location of these files, please create symlinks to the default locations. Also note that the credentials database and key are local to each node in a cluster.