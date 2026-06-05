---
title: "Upgrading Webhooks"
subtitle: "Momentum"
version: "5.3"
date: "June 2026"
description: "How to upgrade an existing Momentum Webhooks installation to 5.3 on Red Hat Enterprise Linux (RHEL) 8, 9, or 10 — stopping services, upgrading RabbitMQ, NGINX/OpenResty, and Node.js, and reinstalling the 5.3 webhooks packages."
lastUpdated: "06/05/2026"
---

# 1. Introduction

This document applies to the Red Hat Enterprise Linux (RHEL) environments in versions 8, 9, and 10 installed with previous versions of the Momentum Webhooks service, where Webhooks is intended to be upgraded to version **5.3**.

> **Note:** All the steps in this document have to be performed as the **root** user, and in every MTA node where the Webhooks services are running.

# 2. Pre-Requisite Packages

As of version 5.1, the following **msys** packages were removed from the release bundle and should be replaced by corresponding system packages:

- **msys-rabbitmq**: replaced by **rabbitmq-server**
- **msys-erlang**: **msys-rabbitmq** depends on it. Replaced by the **erlang** package installed with **rabbitmq-server**
- **msys-nginx**: replaced by **openresty**

The way Momentum uses RabbitMQ and NGINX to offer webhook services remains the same.

In version 5.3, the **msys-nodejs** package was also removed from the webhooks bundle and should be replaced with a valid Node.js 24 (LTS version) package from either the system or the official repository.

# 3. Stop Webhooks Services

Stop the **msys-app-webhooks-\*** services:

```bash
systemctl stop msys-app-webhooks-*
```

> **Note:** Depending on your **msys-app-webhooks-etl** version, only the **msys-app-webhooks-api** could be stopped. In this case, the **msys-app-webhooks-etl** service has to be manually killed, and the PID file in **/run/msys-app** removed.

# 4. Upgrade to 3rd-Party Packages

## 4.1. RabbitMQ

Momentum Webhooks 5.0 and earlier versions run **msys-rabbitmq-3.11.x**. For an in-place upgrade to Webhooks 5.3, RabbitMQ needs to be upgraded to **3.13.x** first, then upgraded to **4.2.x**, and from there to later versions.

The instructions below describe how to perform the first upgrade step (from **msys-rabbitmq-3.11.x** to upstream **3.13.x**); please refer to the documentation [here](https://www.rabbitmq.com/docs/upgrade#rabbitmq-version-upgradability) for RabbitMQ later versions' upgradeability.

1.  Enable all RabbitMQ feature flags (if you forget to do this step, you must do it when you upgrade to **3.13.x**):

    ```bash
    # if rabbitmq-server is not running
    systemctl start rabbitmq-server
    # enable all feature flags
    rabbitmqctl enable_feature_flag all
    ```

2.  Stop the **rabbitmq-server** service:

    ```bash
    systemctl stop rabbitmq-server
    ```

3.  _Uninstall_ the prior Momentum Webhooks package:

    ```bash
    dnf remove msys-role-webhooks
    ```

4.  Follow the steps [here](https://packagecloud.io/cloudamqp/rabbitmq/packages/el/8/rabbitmq-server-3.13.4-1.el8.noarch.rpm?distro_version_id=205) to upgrade to 3rd-party RabbitMQ **3.13.x**:

    ```bash
    curl -s \
      https://packagecloud.io/install/repositories/cloudamqp/rabbitmq/script.rpm.sh
    dnf install rabbitmq-server-3.13.x-y.el8.noarch
    ```

5.  Check that the upgraded **rabbitmq-server** can start, then stop it:

    ```bash
    # check service start
    systemctl start rabbitmq-server
    # enable all feature flags (if you didn't do it in step 1 above)
    rabbitmqctl enable_feature_flag all
    # stop the service
    systemctl stop rabbitmq-server
    ```

6.  Upgrade to the latest version of 3rd-party RabbitMQ:

    1.  Download and install Erlang OTP from GitHub: [https://github.com/rabbitmq/erlang-rpm/releases](https://github.com/rabbitmq/erlang-rpm/releases)
    2.  Download and install the common **noarch** package of RabbitMQ server from [https://github.com/rabbitmq/rabbitmq-server/releases](https://github.com/rabbitmq/rabbitmq-server/releases) (at this time, it is still named as **el8**)

7.  Check you have the latest versions of Erlang and RabbitMQ, and **rabbitmq-server** can start without any issue:

    ```bash
    # confirm RabbitMQ and Erlang versions
    rpm -qa | grep -E 'rabbitmq-server|erlang'
    # restart RabbitMQ
    systemctl restart rabbitmq-server
    # verify previously added RabbitMQ users exist
    rabbitmqctl list_users
    ```

    There is no change in the locations of RabbitMQ configuration and log files.

## 4.2. NGINX

As of version 5.1, Momentum uses OpenResty NGINX. If **msys-nginx** exists from a previous installation of Momentum 5.0 or earlier, you need to remove it before installing OpenResty.

1.  Backup existing NGINX configurations:

    ```bash
    mkdir /tmp/nginx
    cp -a /opt/msys/3rdParty/nginx/conf* /tmp/nginx
    ```

2.  Stop, then _uninstall_ **msys-nginx**:

    ```bash
    systemctl stop msys-nginx
    dnf remove msys-nginx
    ```

3.  Install OpenResty by following the steps [here](https://openresty.org/en/linux-packages.html#rhel).

4.  Restore existing configuration files:

    > **Note:** OpenResty NGINX has its configuration and log files located under **/usr/local/openresty/nginx**. If yours is different, you can use **find / -name nginx.conf -print** to find the location used by your installation. We'll refer to this NGINX root directory as **$NGINX_ROOT** in the next steps.

    ```bash
    cp -a /tmp/nginx/conf* $NGINX_ROOT
    ```

5.  Edit the **nginx.conf** file in **$NGINX_ROOT** as follows:

    ```
    # Remove or comment out (disable) this line if it exists
    #pid /var/run/nginx.pid;
    # Set the correct root directory where conf.d can be found
    include $NGINX_ROOT/conf.d/*.conf
    ```

6.  Check the configuration is ok:

    ```bash
    openresty -t
    ```

7.  Start the NGINX service:

    ```bash
    systemctl start openresty
    # make sure NGINX is running
    ps -ef | grep nginx
    ```

### 4.2.1. Additional Notes on NGINX

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

## 4.3. Node.js

Momentum 5.3 uses Node.js 24 LTS from external providers. If you have **msys-nodejs** installed, you need to uninstall it first. The installed **msys-app-webhooks-\*** depend on **msys-nodejs** and therefore are expected to be removed as well.

For RHEL 8 and 9, upstream **nodejs-libs** and **nodejs** RPM packages must be downloaded and installed. In RHEL 10, version 24 is available to be installed as an alternative:

```bash
sudo dnf install -y nodejs24
sudo alternatives --install /usr/bin/node node /usr/bin/node-24 100
sudo alternatives --install /usr/bin/npm npm /usr/bin/npm-24 100
sudo alternatives --install /usr/bin/npx npx /usr/bin/npx-24 100
```

# 5. Download and Unpack 5.3 Webhooks

1.  Download the correct webhooks bundle for your architecture from the [Message Systems Support](https://support.messagesystems.com/start.php) website for every node you install, and unpack the file.

2.  Copy the bundle to the **/var/tmp/** directory on each node.

    ```bash
    cp momentum-webhooks-bundle-5.3.x.yyyyy.rhel<ver>.<arch>.tar.gz \
      /var/tmp/
    ```

    where **\<ver\>** is **8**, **9**, or **10**, and **\<arch\>** is **x86_64** or **aarch64** (RHEL 9 only).

3.  Unpack the tarball on each node and set the repository directory.

    ```bash
    cd /var/tmp
    tar -zxf \
      momentum-webhooks-bundle-5.3.x.yyyyy.rhel<ver>.<arch>.tar.gz
    cd momentum-webhooks-5.3.x.yyyyy/
    ./setrepodir
    ```

    > **Note:** The **./setrepodir** script establishes some environmental parameters for the installation. If the installation is not completed within the same terminal session in which it was started, the **./setrepodir** command _must_ be re-executed in any new session(s) before executing any of the **dnf** commands for the installation.

# 6. Install Updated Webhooks Packages

**[MTA Nodes]** For every node you designated as an MTA (including the first node, IF it is NOT a Log Aggregator), perform the following:

```bash
dnf install -y --config momentum.repo --enablerepo momentum \
  msys-role-webhooks
```

# 7. Start the Webhooks Services

Restart the **msys-app-webhooks-api** and **msys-app-webhooks-etl** services and check the process logs for errors (use **CTRL-C** to exit the **tail -f** of the logs).

```bash
systemctl start msys-app-webhooks-api
systemctl start msys-app-webhooks-etl
journalctl -u msys-app-webhooks-* -f
```
