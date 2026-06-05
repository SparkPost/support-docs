---
title: "Upgrade Manual (MTA-Only)"
subtitle: "Momentum"
version: "5.3"
date: "June 2026"
description: "How to upgrade an MTA-only Momentum installation to 5.3 on Red Hat Enterprise Linux (RHEL) 8, 9, or 10 — stopping services, removing legacy packages, upgrading the software and PostgreSQL, migrating NGINX to OpenResty, and restarting services."
lastUpdated: "06/05/2026"
---

# 1. Introduction

This document describes upgrading an MTA-only installation to Momentum 5.3, from the previous versions listed below:

- Momentum 4.2.38+, 4.3.x, 4.4.x, or 4.6, if the prior installation is in a Red Hat Enterprise Linux (RHEL) 7 (or its CentOS equivalent) operating environment;

  - _Upgrading the operating system to RHEL 8, 9, or 10 is a prerequisite for upgrading Momentum to version 5.3._ If that is not possible, you'll need to set up a new server, then refer to the **Momentum 5.3 Installation** document.

  - If you're running a version _before_ 4.2.38 and have Cassandra enabled, please contact your support representative for assistance.

- Momentum 4.5, installed on RHEL 8;

- Momentum 4.7, 4.8, 5.0, 5.1, or 5.2 installed on RHEL 8, 9, or 10 operating environment.

# 2. Upgrade Instructions

## 2.1. Download the Software Bundle

1.  Download the Momentum software bundle from the [Message Systems Support](https://support.messagesystems.com/start.php) website for every node that you will upgrade.

2.  Copy the bundle to the **/var/tmp/** directory on each node. _Note that throughout this document, specific bundle filenames are shown, and their resulting install directory names are only examples._

    ```bash
    cp momentum-mta-bundle-5.3.x.yyyyy.rhel<ver>.<arch>.tar.gz \
      /var/tmp/
    ```

    where **\<ver\>** is **8**, **9**, or **10**, and **\<arch\>** is **x86_64** or **aarch64** (except to RHEL 8).

    > **Note:** As introduced in 4.4.0, the MTA-only bundles contain all the necessary components for a subsequent enabling of the 5.3 Webhooks and/or the REST APIs and Message Generation after the initial installation.

3.  Unpack the tarball on each node and set the repository directory.

    ```bash
    cd /var/tmp
    tar -zxf momentum-mta-bundle-5.3.x.yyyyy.rhel<ver>.<arch>.tar.gz
    cd momentum-mta-5.3.x.yyyyy/
    ./setrepodir
    ```

    > **Note:** The **./setrepodir** script establishes some environmental parameters for the installation. If the installation is not completed within the same terminal session in which it was started, the **./setrepodir** command _must_ be re-executed in any new session(s) before executing any of the **dnf** commands for the installation.

4.  Your valid Momentum license file will be in each MTA node's **/opt/msys/ecelerity/etc** folder. Your licenses should be pulled automatically once they have been issued.

5.  If your node does not have public internet access during installation, you will need to manually add your valid Momentum license files.

> **Note:** Depending on whether FIPS mode is enabled and which versions of the FIPS modules are running in your environment, the Momentum 5.3 license may be constrained to be signed by specific methods. If the regular license file is not validated under such restrictions, please contact the Momentum Customer Support to obtain a proper license file for your case.

## 2.2. Install EPEL

Momentum has some dependencies on packages provided by the _Extra Packages for Enterprise Linux_ (EPEL). Make sure it is installed before upgrading Momentum.

For installation of EPEL on Red Hat Enterprise Linux (RHEL) 8, 9, and 10 (the **\<ver\>** number below):

```bash
sudo dnf install -y wget
wget \
  https://dl.fedoraproject.org/pub/epel/epel-release-latest-<ver>.noarch.rpm
sudo rpm -Uvh epel-release-latest-<ver>.noarch.rpm
```

## 2.3. Upgrade Software

> **Note:** If you are upgrading a **single-node** installation, perform all the steps described in this document for both the first node and subsequent nodes of a cluster.

The first step is to shut down the relevant services on the nodes to allow for the upgrade.

### 2.3.1. Stopping first-node services

If the first node in the cluster is a Cluster Manager, then it is where the **eccmgr** service runs. The node may be a Log Aggregator or a PostgreSQL Database Server.

```bash
# Stopping eccmgr is only applicable
# if the first node is a Cluster Manager.
sudo systemctl stop eccmgr
```

It may be possible that the (now deprecated) Configuration Manager is running in the cluster. If that is the case, **ecconfigd** must be shut down as well.

```bash
# Stopping ecconfigd is required for all
# first node types, MTA or Cluster Manager.
sudo systemctl stop ecconfigd
```

### 2.3.2. Stopping other services

If you are upgrading a cluster that has already had the optional Webhooks functionality or enabled the Transmissions or SMTP APIs (and engagement tracking), there are additional services to stop.

If **msys-nginx** exists from a previous installation of Momentum 5.0 or earlier, you need to save the configuration, then remove it before installing OpenResty NGINX.

1.  Backup existing NGINX configurations:

    ```bash
    mkdir /var/tmp/nginx
    sudo cp -a /opt/msys/3rdParty/nginx/conf* /var/tmp/nginx
    ```

2.  Stop, then _uninstall_ **msys-nginx** (this will remove a bunch of dependencies):

    ```bash
    sudo systemctl stop msys-nginx
    sudo dnf remove msys-nginx
    ```

3.  Install the **openresty** package by following the steps [here](https://openresty.org/en/linux-packages.html#rhel).

    > **Note:** By the time of the Momentum 5.3 release, there was no official **openresty** available for RHEL 10. Until changed, an **msys-openresty** package can be found at the [Message Systems Support](https://support.messagesystems.com/start.php) website.

Finally, refer to the **Upgrade Momentum Webhooks to 5.3** document to remove any existing **msys-rabbitmq** and/or **msys-nodejs** packages and install the corresponding upstream ones.

### 2.3.3. Stopping MTA services

Perform this step on all MTAs, including the first node if it is _not_ a Cluster Manager.

```bash
sudo systemctl stop ecelerity
```

Perform additional service shutdowns depending on whether webhooks and/or message generation features were enabled after the initial prior version install. Perform these on **all** MTAs, including the first node if it is not a Cluster Manager. See below for these (and other) optional service instructions.

Lastly, in all nodes, regardless of whether they had the additional services enabled or not, make sure to shut down the Riak service for the distributed database, in case it is running.

```bash
sudo systemctl stop msys-riak
```

### 2.3.4. [OPTIONAL] Prepare for PostgreSQL conversion

If **msys-pg** exists from a previous installation of Momentum 5.1 or earlier, a conversion will be needed to preserve the database contents. The database files will also reside in a different location. To prepare for this conversion, run the following commands as **root** _before the upgrade._

```bash
/opt/msys/3rdParty/bin/pg_dumpall -c -U msyspg \
  -f /var/tmp/pgdumpall.out
/etc/init.d/msyspg stop
```

This file must then be edited. Remove all lines containing the string **msyspg** as they are no longer needed.

### 2.3.5. Upgrade Momentum

As of version 4.7, many **msys** packages were removed in favor of using system packages. If you're upgrading from a Momentum version before 4.7, it's necessary to remove those packages that are no longer needed.

```bash
sudo dnf remove -y cassandra-cpp-driver msys-ecelerity-aws-aws \
  msys-aws-cpp-sdk msys-cassandra-python-driver msys-curl erlang \
  msys-ffi msys-freetds msys-gmp msys-gnutls msys-hiredis \
  msys-jemalloc msys-jlog-perl msys-ldap msys-leveldb msys-libevent \
  msys-libmcrypt msys-libstrl msys-libxml2 msys-lua-aws \
  msys-lua-bitop msys-nettle msys-nghttp2 msys-opendkim msys-pcre \
  msys-sqlite msys-unbound msys-unixODBC

cd /var/tmp/momentum-mta-5.3.x.yyyyy/
./setrepodir
sudo dnf upgrade -y --config momentum.repo --enablerepo momentum
```

After upgrading, if using NGINX:

1.  Restore existing configuration files:

    > **Note:** OpenResty NGINX has its configuration and log files located under **/usr/local/openresty/nginx**. If yours is different, you can use **find / -name nginx.conf -print** to find the location used by your installation. We'll refer to this NGINX root directory as **$NGINX_ROOT** in the next steps.

    ```bash
    sudo cp -a /var/tmp/nginx/conf* $NGINX_ROOT
    ```

2.  Edit the **nginx.conf** file in **$NGINX_ROOT** as follows:

    ```
    # Remove or comment out (disable) this line if it exists
    #pid /var/run/nginx.pid;
    # Set the correct root directory where conf.d can be found
    include $NGINX_ROOT/conf.d/*.conf
    ```

3.  Check the configuration is ok:

    ```bash
    sudo openresty -t
    ```

4.  Start the NGINX service:

    ```bash
    sudo systemctl start openresty
    # make sure NGINX is running
    ps -ef | grep nginx
    ```

### 2.3.6. [OPTIONAL] Upgrading the PostgreSQL database server

As of version 5.2, the **msys-pg** package was replaced with an official version of the PostgreSQL package. In RHEL 10, install the system-provided **postgresql** package:

```bash
sudo dnf install -y postgresql
```

On the other hand, for RHEL 8 and 9, the provided packages are for versions no longer supported. It is then recommended to install the package available from the PostgreSQL repository for a version still under maintenance (e.g., 16):

```bash
sudo dnf install -y \
  https://download.postgresql.org/pub/repos/yum/reporpms/EL-<ver>-<arch>/pgdg-redhat-repo-latest.noarch.rpm
sudo dnf -qy module disable postgresql
sudo dnf install -y postgresql16-server
sudo /usr/pgsql-16/bin/postgresql-16-setup initdb
sudo systemctl enable --now postgresql-16
export PATH=/usr/pgsql-16/bin:$PATH  # e.g. for psql
```

where **\<ver\>** is **8** or **9**, and **\<arch\>** is **x86_64** or **aarch64** (only for RHEL 9).

After the installation:

1.  Restore the contents from the prior installation (of **msys-pg**).

    ```bash
    sudo psql -f /var/tmp/pgdumpall.out -h 127.0.0.1 postgres -U postgres
    ```

2.  **Note:** You can set the server location to avoid the need to use the **-h** option for **psql** commands.

    ```bash
    export PGHOST=127.0.0.1
    ```

3.  After correct operation is confirmed, it is recommended to remove the old package if manual operations on the database might be done, to prevent confusion (e.g., inadvertent use of the wrong **psql** utility and database). The old database at **/var/db/msyspg** could also be deleted.

    ```bash
    sudo dnf remove msys-pg
    ```

## 2.4. Starting Momentum services

Perform the steps of this section on all MTAs, including the first node if it is not a Cluster Manager.

```bash
sudo systemctl start ecelerity
```

If the node is the Cluster Manager:

```bash
sudo systemctl start eccmgr
```

Perform additional service startups depending on whether webhooks and/or message generation features were enabled after the initial prior version install. Perform these on **all** MTAs, including the first node if it is _not_ a Cluster Manager.

### 2.4.1. Installing the eccfg client code

If you are still using the **ecconfigd**/**eccfg** service to manage your configuration, you will need to install an additional package:

```bash
sudo dnf install -y --disablerepo=* --config momentum.repo \
  --enablerepo=momentum msys-ecelerity-config-client
```

> **Note:** Configuration Management (**ecconfigd/eccfg** services) has been a deprecated feature since version 4.3.1 of Momentum.

## 2.5. Additional Notes on NGINX

The directory mappings between Momentum 5.1+ and previous versions are listed in the table below:

| Directories in Momentum 5.0 and earlier | Directories in Momentum 5.1 and later |
| --- | --- |
| **/opt/msys/3rdParty/nginx** | **$NGINX_ROOT** |

The following directories and files that were installed in **/opt/msys/3rdParty/nginx** when **msys-ecelerity-engagement-proxy** was installed are now installed in **/opt/msys/ecelerity/etc/sample-configs/nginx** _and need to be manually copied to **$NGINX_ROOT**_:

| Installed by Momentum 5.0 and earlier | Installed by Momentum 5.1 and later | Destination of the manual copy |
| --- | --- | --- |
| **/opt/msys/3rdParty/nginx/conf.d/filter_forwarded4.lua** | **/opt/msys/ecelerity/etc/sample-configs/nginx/conf.d/filter_forwarded4.lua** | **$NGINX_ROOT/conf.d/filter_forward** |
| **/opt/msys/3rdParty/nginx/conf.d/click_proxy.conf** | **/opt/msys/ecelerity/etc/sample-configs/nginx/conf.d/click_proxy.conf** | **$NGINX_ROOT/conf.d/click_proxy.conf** |
| **/opt/msys/3rdParty/nginx/conf.d/click_proxy/base.loc** | **/opt/msys/ecelerity/etc/sample-configs/nginx/conf.d/click_proxy/base.loc** | **$NGINX_ROOT/conf.d/click_proxy/base.loc** |

# 3. Copy Configuration and Spool from an Old Server

1.  Copy over the config (e.g., contents of **/opt/msys/ecelerity/etc/conf**).

2.  If there are still spooled messages on the old server, they can be imported into the new server. After copying the directories containing the spool files (e.g., **/var/spool/ecelerity**) to the new server, use the spool import command — [https://support.sparkpost.com/momentum/4/console-commands/spool-import](https://support.sparkpost.com/momentum/4/console-commands/spool-import).

3.  If desired and applicable, copy the PostgreSQL database by following the instructions above.

4.  If IP addresses are new, adaptive delivery will adjust the sending rate accordingly. But if the IP addresses on the new server are already warmed up, we recommend setting the AD age to a high value so the message rate is not throttled.

5.  Check the release notes and/or changelogs in case some older features are deprecated in the newer releases.

6.  Point the injecting application(s) to the new server.
