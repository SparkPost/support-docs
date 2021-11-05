---
lastUpdated: "03/26/2020"
title: "Using a Proxy Server"
description: "If a proxy server is used to access updates you must make configuration changes or use command line switches when running lu pull Add the following options to the liveupdate conf file If this file does not already exist you will need to create it in the opt msys ecelerity..."
---

If a proxy server is used to access updates you must make configuration changes or use command-line switches when running **lu_pull**.

### <a name="ad.adaptive.automated.proxy.config"></a> Changing `liveupdate.conf`

Add the following options to the `liveupdate.conf` file:

PROXYHOST=*`hostname`*  #e.g. proxy.foobar.com
PROXYTYPE=*`type`* #e.g. http
PROXYPORT=*`port`* #e.g. 80
#if required, also add a user:
PROXYUSER=*`username`*

If this file does not already exist, you will need to create it in the `/opt/msys/ecelerity/etc/updates/msys` directory.

When a proxy user is required, you must also configure a password which must be stored in a secured credentials database. To store this password, use the following command:

shell> /opt/msys/ecelerity/bin/credmgr set_cred --hostname=*`proxy_host`* --username=*`proxy_user`* \
  --facility=proxy -p *`password`*
### <a name="ad.adaptive.automated.proxy.command.line"></a> Using a Proxy Server from the Command Line

Use the following command-line options when running **lu_pull**:

shell> /opt/msys/ecelerity/bin/lu_pull --proxy *`proxy_url`* \
  --proxy_user *`username`* --proxy_password *`password`*

The presence of `PROXYHOST` in `liveupdate.conf` or `proxy_url` from the command line, tells **lu_pull** that a proxy must be used. It will attempt to use a user/password for the proxy server using the following precedence rules:

1.  The command-line option, if present.

2.  `PROXYUSER` from `liveupdate.conf`. If a proxy password is not set, the credentials database will be searched to find the stored password.

3.  Environment variables: `HTTPS_PROXY_USERNAME` and `HTTPS_PROXY_PASSWORD`.