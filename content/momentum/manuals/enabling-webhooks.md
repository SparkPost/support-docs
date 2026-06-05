---
title: "Enabling Webhooks"
subtitle: "Momentum"
version: "5.3"
date: "June 2026"
description: "How to enable Momentum 5.3 Webhooks on an MTA-only cluster — installing RabbitMQ, Node.js, and OpenResty NGINX, configuring the webhooks API/ETL services and the event hose, plus appendices covering webhook events and configuration options."
lastUpdated: "06/05/2026"
---

# 1. Purpose

Following the initial installation of Momentum 5.3 in an MTA-only configuration, the 5.3 Webhooks functionalities can be added and enabled by following the procedures outlined below.

As of Momentum 4.2.31 and subsequent releases, webhooks are configured in a JSON configuration file; there is no API for configuring webhooks.

The webhooks add-on feature is supported in Red Hat Enterprise (RHEL) 8, 9, and 10 environments. These files are provided AS IS, and if you need additional support, please contact your sales representative about moving to SparkPost Cloud.

# 2. Pre-Requisite Packages

As of version 5.1, the following **msys** packages were removed from the release bundle and should be replaced with the corresponding system packages:

- **msys-rabbitmq**: replaced with **rabbitmq-server**
- **msys-erlang**: **msys-rabbitmq** depends on it. Replaced with the **erlang** package installed with **rabbitmq-server**
- **msys-nginx**: replaced with **openresty**

> **Note:** By the time of the Momentum 5.3 release, there was no official **openresty** available for RHEL 10. Until changed, an **msys-openresty** package can be found at the [Message Systems Support](https://support.messagesystems.com/start.php) website.

The way Momentum uses RabbitMQ and NGINX to offer webhook services remains the same.

In version 5.3, the **msys-nodejs** package was also removed from the webhooks bundle and should be replaced with a valid Node.js 24 (LTS version) package from either the system or the official repository.

# 3. Install the Packages

## 3.1. Install Pre-Requisite Packages

### 3.1.1. RabbitMQ / rabbitmq-server

If you have **msys-rabbitmq** installed, please follow the **Upgrade Momentum Webhooks to 5.3** document to remove **msys-rabbitmq** and install the system-provided RabbitMQ package.

For a new installation:

1.  Download and install Erlang OTP from GitHub: [https://github.com/rabbitmq/erlang-rpm/releases](https://github.com/rabbitmq/erlang-rpm/releases)

2.  Download and install the common **noarch** package of RabbitMQ server from [https://github.com/rabbitmq/rabbitmq-server/releases](https://github.com/rabbitmq/rabbitmq-server/releases) (at this time, it is still named as **el8**)

### 3.1.2. rabbitmqadmin

The deprecated **msys-rabbitmq** includes **rabbitmqadmin**, but the official RabbitMQ package does not include it, and you need to install it separately. Momentum is tested with the **rabbitmqadmin** v2 tool. For a new installation in RHEL 9 x86 and 10, download and install the latest version from GitHub: [https://github.com/rabbitmq/rabbitmqadmin-ng/releases](https://github.com/rabbitmq/rabbitmqadmin-ng/releases).

For RHEL 8 and RHEL 9 ARM:

1.  Download the source tarball of v2.26.0 (last buildable) from [https://github.com/rabbitmq/rabbitmqadmin-ng/releases/tag/v2.26.0](https://github.com/rabbitmq/rabbitmqadmin-ng/releases/tag/v2.26.0)

2.  Install **cargo** and build **rabbitmqadmin** from source:

    ```bash
    tar -zxf v<version>.tar.gz
    cd rabbitmqadmin-ng-<version>/
    cargo build --release
    ```

3.  As **root**, copy the **rabbitmqadmin** binary from **target/release** to the system path.

### 3.1.3. NGINX

If you have **msys-nginx** installed, please uninstall it first. You can follow the **Upgrade Momentum Webhooks to 5.3** document to upgrade NGINX running on your box.

Momentum uses [OpenResty NGINX](https://openresty.org/en/download.html). The installation steps followed and tested with Momentum are [here](https://openresty.org/en/linux-packages.html#rhel) for RHEL 8 and 9. For RHEL 10, if there is no official package yet, install the **msys-openresty** package available on the [Message Systems Support](https://support.messagesystems.com/start.php) website.

### 3.1.4. Node.js

Momentum 5.3 uses Node.js 24 LTS from external providers. If you have **msys-nodejs** installed, please uninstall it first.

For RHEL 8 and 9, upstream **nodejs-libs** and **nodejs** RPM packages must be downloaded and installed. In RHEL 10, version 24 is available to be installed as an alternative:

```bash
sudo dnf install -y nodejs24
sudo alternatives --install /usr/bin/node node /usr/bin/node-24 100
sudo alternatives --install /usr/bin/npm npm /usr/bin/npm-24 100
sudo alternatives --install /usr/bin/npx npx /usr/bin/npx-24 100
```

## 3.2. Install the Webhooks Bundle of Momentum

1.  Download the correct webhooks bundle for your architecture from the [Message Systems Support](https://support.messagesystems.com/start.php) website for every node you will install, and unpack the file.

2.  Copy the bundle to the **/var/tmp/** directory on each of the nodes. _Note that throughout this document, specific bundle filenames are shown, and their resulting install directory names are only examples._

    ```bash
    cp momentum-webhooks-bundle-5.3.x.yyyyy.rhel<ver>.<arch>.tar.gz \
      /var/tmp/
    ```

    where **\<ver\>** is **8**, **9**, or **10**, and **\<arch\>** is **x86_64** or **aarch64** (except to RHEL 8).

3.  Unpack the tarball on each node and set the repository directory.

    ```bash
    cd /var/tmp
    tar -zxf \
      momentum-webhooks-bundle-5.3.x.yyyyy.rhel<ver>.<arch>.tar.gz
    cd momentum-webhooks-5.3.x.yyyyy/
    ./setrepodir
    ```

    > **Note:** The **./setrepodir** script establishes some environmental parameters for the installation. If the installation is not completed within the same terminal session in which it was started, the **./setrepodir** command _must_ be re-executed in any new session(s) before executing any of the **dnf** commands for the installation.

4.  **[MTA Nodes]** For every node you designated as an MTA (including the first node, IF it is NOT a Log Aggregator), perform the following:

    ```bash
    sudo dnf install -y --config momentum.repo --enablerepo momentum \
      msys-role-webhooks
    ```

# 4. Configure RabbitMQ Server

On all MTA nodes, change to the **root** user:

```bash
sudo su
```

Configure RabbitMQ:

```bash
systemctl enable rabbitmq-server
systemctl restart rabbitmq-server
rabbitmq-plugins enable rabbitmq_management
rabbitmqadmin declare exchange --name momentum_metrics --type topic
export RABBITMQPWD="p1-Vk0lXy"
rabbitmqctl add_user rabbitmq $RABBITMQPWD
rabbitmqctl set_user_tags rabbitmq administrator
rabbitmqctl set_permissions -p '/' rabbitmq '.*' '.*' '.*'
rabbitmqctl delete_user guest
```

_(… continue as root for the instructions below and through section 5.1 …)_

Since Momentum 5.1, TLS connections to the RabbitMQ server are supported. To enable TLS in the RabbitMQ server, please refer to [https://www.rabbitmq.com/docs/ssl#enabling-tls](https://www.rabbitmq.com/docs/ssl#enabling-tls). Here is an example of **/etc/rabbitmq/rabbitmq.conf** having TLS enforced:

```
# disables non-TLS listeners, only TLS-enabled clients
# will be able to connect
listeners.tcp = none  # comment out if allows non-TLS connection
listeners.ssl.default = 5671
ssl_options.cacertfile = /path/to/cafile
ssl_options.certfile = /path/to/certfile
ssl_options.keyfile = /path/to/privatekeyfile
ssl_options.verify = verify_peer
ssl_options.fail_if_no_peer_cert = true
```

RabbitMQ must be configured with a TLS certificate that:

- Is signed by a **trusted CA** (not self-signed);
- Contains a **Subject Alternative Name (SAN)** entry that matches the hostname clients will use to connect.

Clients may fail to connect if the certificate is invalid, self-signed, or missing SAN entries.

# 5. Set Up Webhook Processes on the MTAs

> **Note:** Whenever you change any **webhooks-api** JSON configuration file, the **msys-app-webhooks-api** service _must_ be restarted for the changes to take effect; likewise, for the **webhooks-etl** JSON configuration files and service.

## 5.1. Configure One MTA Node

1.  Continuing as the **root** user, edit/create **/opt/msys/app/webhooks-api/config/production.json** on one MTA, as below:

    ```json
    {
      "application": {
        "cassandraSupport": {
          "enabled": false
        },
        "analyticsSupport": {
          "enabled": false
        }
      }
    }
    ```

2.  Create **/opt/msys/app/webhooks-api/config/webhooks.json** on the same MTA. The example below shows several different webhook configurations; the `custom_headers` entry is an example of using the custom headers feature.

    ```json
    [
      {
        "name": "My example webhook #1",
        "events": ["policy_rejection", "bounce", "delay"],
        "target": "https://example-domain.com/path/to/endpoint",
        "custom_headers": {
          "x-api-key": "4194cf7d-f0ce-427c-a026-a11faa6c437e"
        }
      },
      {
        "name": "My example webhook #2",
        "events": ["open", "click"],
        "target": "https://your-consumer-domain.com/path/to/your/code"
      },
      {
        "name": "My example webhook #3",
        "events": [
          "delivery", "injection", "bounce", "delay", "policy_rejection",
          "out_of_band", "open", "click",
          "generation_failure", "generation_rejection", "spam_complaint",
          "ad_status", "ad_adjust",
          "link_unsubscribe", "sms_status"
        ],
        "target": "https://your-consumer-domain2.com/all/events/path/to/your/code"
      }
    ]
    ```

3.  Create **/opt/msys/app/webhooks-etl/config/production.json** on the same MTA (notice the **RABBITMQPWD** variable was set during RabbitMQ configuration).

    ```bash
    echo "{\"rabbitmq\":{\"password\":\"$RABBITMQPWD\"}}" \
      > /opt/msys/app/webhooks-etl/config/production.json
    ```

    If connecting to RabbitMQ using TLS, **/opt/msys/app/webhooks-etl/config/production.json** should be _added_ with:

    ```json
    {
      "rabbitmq": {
        "password": "p1-Vk0lXy",
        "host": "localhost",
        "port": 5671,
        "ssl": {
          "enabled": true,
          "caFile": "/path/to/ca.cert",
          "certFile": "/path/to/client.cert",
          "keyFile": "/path/to/client.key"
        }
      }
    }
    ```

4.  Validate the JSON structure of the created files on the MTA. The **jq** utility displays an error if the JSON file contains syntax errors or displays its contents if it is valid.

    ```bash
    jq . /opt/msys/app/webhooks-api/config/production.json
    jq . /opt/msys/app/webhooks-api/config/webhooks.json
    jq . /opt/msys/app/webhooks-etl/config/production.json
    ```

5.  Restart the **msys-app-webhooks-api** and **msys-app-webhooks-etl** services on the same MTA and check the process logs for errors (use **CTRL-C** to exit the **journalctl -f** of the logs).

    ```bash
    systemctl restart msys-app-webhooks-api
    systemctl restart msys-app-webhooks-etl
    journalctl -u msys-app-webhooks-* -f
    exit  # (from root)
    ```

## 5.2. Configure Remaining MTA Nodes

1.  Copy the webhooks configuration files to all of the remaining MTA nodes. (`$PWD` is a Linux shell variable that always contains the current working directory, i.e., the equivalent of the response from the `pwd` command.)

    ```bash
    cd /opt/msys/app/webhooks-api/config
    scp production.json webhooks.json mtaN.your.domain:$PWD
    cd /opt/msys/app/webhooks-etl/config
    scp production.json mtaN.your.domain:$PWD
    ```

2.  Log in to each of the remaining MTA nodes in turn, start the Webhooks processes on them, and check the process logs for errors. (Use **CTRL-C** to exit the **journalctl -f** of the logs.)

    ```bash
    sudo systemctl restart msys-app-webhooks-api
    sudo systemctl restart msys-app-webhooks-etl
    sudo journalctl -u msys-app-webhooks-* -f
    ```

# 6. Enable Event Hydrant & Event Hose on the MTA

## 6.1. Update Configuration on the First Node

1.  Enable event_hydrant and event_hose in the **/opt/msys/ecelerity/etc/conf/default/ecelerity.conf** configuration file by removing the comment character (#) from the following lines:

    ```
    #event_hydrant "event_collector" {
    #}
    #event_hose "momentum_metrics" {
    #use_tls = 1  # use TLS with the RabbitMQ server
    #port = 5671
    #tls_ca = "/path/to/ca.cert"
    #tls_certificate = "/path/to/client.cert"
    #tls_key = "/path/to/client.key"
    #}
    ```

2.  Commit the changes (if you're using **ecconfigd**) and restart Ecelerity:

    ```bash
    # $ADMINPASS is the password used during the MTA installation
    /opt/msys/ecelerity/bin/eccfg commit --username admin \
      --password $ADMINPASS --add-all --message "Enabling Event Hose"
    sudo systemctl restart ecelerity
    ```

## 6.2. Configure Remaining MTA Nodes

1.  If NOT using **ecconfigd** to manage the configuration, copy the **ecelerity.conf** config file to each MTA node in the cluster. If using **ecconfigd**, these will be propagated automatically.

    ```bash
    scp /opt/msys/ecelerity/etc/conf/default/ecelerity.conf \
      mtaN.your.domain:/opt/msys/ecelerity/etc/conf/default
    ```

2.  Restart ecelerity on each of the remaining MTA nodes:

    ```bash
    sudo systemctl restart ecelerity
    ```

# 7. Setup NGINX

> **Note:** If the procedure for enabling 5.3 REST APIs and Message Generation has already been performed on this cluster, NGINX has already been set up and configured according to the same instructions below. Double-check that each step in those instructions that was prefaced with "If using webhooks…" was executed at that time. If any were not, execute just those steps now. Otherwise, this entire section can be skipped, and the procedure is complete.

## 7.1. Install the Required Package

For every node you designate as an MTA, make sure OpenResty NGINX is installed. For instance, in RHEL 8 and 9 nodes (replace with **msys-openresty** if in RHEL 10 nodes):

```bash
sudo dnf list openresty
```

Your results should look like this:

```
Installed Packages
openresty.x86_64    1.27.1.2-1.el9    @openresty
```

## 7.2. Configure NGINX

On MTA nodes, an NGINX process acts as an API proxy and load balancer for various API endpoints. In this section, you will configure NGINX for the MTAs.

> **Note:** OpenResty NGINX has its configuration located under **/usr/local/openresty/nginx**. If yours is different, you can use **sudo find / -name nginx.conf -print** to find the location used by your installation.

1.  Copy the following files:

    ```bash
    sudo mkdir -p /usr/local/openresty/nginx/conf.d /var/log/nginx
    cd /opt/msys/ecelerity/etc/sample-configs/nginx
    sudo cp -i conf/nginx.conf /usr/local/openresty/nginx/conf/
    sudo cp -i conf/logrotate /etc/logrotate.d/openresty
    sudo cp -i web_proxy.conf app.loc momo.loc default.cors \
      momo_upstream.conf /usr/local/openresty/nginx/conf.d/
    # This will ask you if you want to overwrite the destination
    # file. It is safe to enter "y" here. It will overwrite a similar
    # sample configuration installed by the
    # msys-ecelerity-engagement-proxy package.
    sudo cp -i click_proxy_upstream.conf \
      /usr/local/openresty/nginx/conf.d/
    ```

    Copy the following file from the NGINX sample-configs as well, for webhooks:

    ```bash
    sudo cp -i \
      api_webhooks_upstream.conf /usr/local/openresty/nginx/conf.d/
    ```

2.  For **each** of the following files, edit the associated upstream stanza to point to port 2081 on all MTA nodes. See the example below.

    - `/usr/local/openresty/nginx/conf.d/click_proxy_upstream.conf` (port 2081)
    - `/usr/local/openresty/nginx/conf.d/momo_upstream.conf` (port 2081)

    Example:

    ```
    cat /usr/local/openresty/nginx/conf.d/click_proxy_upstream.conf
    upstream click_proxy {
      server mta1.your.domain:2081;
      server mta2.your.domain:2081;
      ...
      server mtaN.your.domain:2081;
      least_conn;
    }
    ```

3.  For webhooks, edit **/usr/local/openresty/nginx/conf.d/web_proxy.conf**. Remove the comment character (#) from the existing line:

    ```
    # include "../conf.d/app.loc"
    ```

4.  For webhooks, edit **/usr/local/openresty/nginx/conf.d/api_webhooks_upstream.conf** and add all of your MTA nodes to the **upstream** stanza:

    ```
    upstream api_webhooks {
      # List of all Webhooks api instances in the cluster:
      server mta1.your.domain:2084;
      server mta2.your.domain:2084;
      ...
      server mtaN.your.domain:2084;
      least_conn;
    }
    ```

## 7.3. Test the NGINX Configuration

```bash
sudo openresty -t
```

Your results should look like this:

```
nginx: the configuration file /usr/local/openresty/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/openresty/nginx/conf/nginx.conf test is successful
```

## 7.4. Start NGINX

```bash
sudo systemctl restart openresty
```

## 7.5. Configure Remaining MTA Nodes

1.  Copy the NGINX configuration files to all of the remaining MTA nodes. (`$PWD` is a Linux shell variable that always contains the current working directory, i.e., the equivalent of the response from the `pwd` command.)

    ```bash
    cd /usr/local/openresty/nginx/conf
    scp nginx.conf mtaN.yourdomain.com:$PWD
    cd /etc/logrotate.d
    scp openresty mtaN.yourdomain.com:$PWD
    cd /usr/local/openresty/nginx/conf.d
    scp web_proxy.conf app.loc momo.loc default.cors \
      momo_upstream.conf click_proxy_upstream.conf \
      mtaN.your.domain:$PWD
    # and if using webhooks:
    scp api_webhooks_upstream.conf mtaN.your.domain:$PWD
    ```

2.  Start NGINX on all the remaining MTA nodes.

    ```bash
    systemctl restart openresty
    ```

3.  Configure webhooks as per the previous example of the **webhooks.json** file and the information in the Appendices.

# Appendix 1: Webhook Event Reference

| Event | Event Key (for config file) | Event Description |
| --- | --- | --- |
| Adaptive Delivery Adjustment | `"ad_adjust"` | Momentum changed a low-level parameter as a result of an adaptive rule being triggered or automatic performance tuning |
| Adaptive Delivery Status | `"ad_status"` | A negative ISP response triggered an adaptive rule, and Momentum took action to adjust its sending patterns |
| Bounce | `"bounce"` | Remote MTA has permanently rejected a message |
| Click | `"click"` | The recipient clicked a tracked link in a message, thus prompting a redirect through the Momentum click-tracking server to the link's destination |
| Delay | `"delay"` | Remote MTA has temporarily rejected a message |
| Delivery | `"delivery"` | Remote MTA acknowledged receipt of a message |
| Generation Failure | `"generation_failure"` | Message generation failed for an intended recipient |
| Generation Rejection | `"generation_rejection"` | Momentum rejected message generation due to policy |
| Injection | `"injection"` | The message is received by or injected into Momentum |
| Link Unsubscribe | `"link_unsubscribe"` | The user clicked a hyperlink in a received email |
| List Unsubscribe | `"list_unsubscribe"` | The user clicked the 'unsubscribe' button on an email client |
| Open | `"open"` | The recipient opened a message in a mail client, thus rendering a tracking pixel |
| Out of Band Bounce | `"out_of_band"` | Remote MTA initially reported acceptance of a message, but it has since asynchronously reported that the message was not delivered |
| Policy Rejection | `"policy_rejection"` | Due to policy, Momentum rejected a message or failed to generate a message |
| SMS Status | `"sms_status"` | SMPP/SMS message produced a status log output |
| Spam Complaint | `"spam_complaint"` | The message was classified as spam by the recipient |

# Appendix 2: Webhooks API Configuration

`application.analyticsSupport.enabled`

Used to determine if Vertica is used to store webhook batch status information, or if a flat file is used instead. **This should be set to `false` if your Momentum cluster does not have Vertica installed, which is always the case for an MTA-only fresh install.** Defaults to `true`, for backward compatibility on upgraded systems.

Example `production.json`:

```json
{
  "application": {
    "analyticsSupport": {
      "enabled": false
    }
  }
}
```

`application.analyticsSupport.alternativeLogPath`

Used to override the default location that the Webhooks API will write batch status information to. Only used if `application.analyticsSupport.enabled` is set to `false`. Defaults to `/var/log/msys-nodejs/webhooks-batch-status.log`.

Example `production.json`:

```json
{
  "application": {
    "analyticsSupport": {
      "enabled": false,
      "alternativeLogPath": "/path/to/my/log/file.log"
    }
  }
}
```

# Appendix 3: Webhook Consumers Configuration

| Config Name | Required/Optional | JSON Data Type | Description |
| --- | --- | --- | --- |
| `name` | optional | String | User-friendly name for the webhook |
| `events` | required | Array | List of events that will be sent via POST request to the target URL |
| `target` | required | String | URL of the target to which to post data |
| `auth_token` | optional | String | Authentication token to present in the `X-MessageSystems-Webhook-Token` header of POST requests to the target URL |
| `custom_headers` | optional | Object | Object of custom headers to be used during POST requests to the target |

Example `webhooks.json`:

```json
[
  {
    "name": "My example webhook #1",
    "events": ["policy_rejection", "bounce", "delay"],
    "target": "https://example-domain.com/path/to/endpoint",
    "custom_headers": {
      "x-api-key": "4194cf7d-f0ce-427c-a026-a11faa6c437e"
    }
  },
  {
    "name": "My example webhook #2",
    "events": ["open", "click"],
    "target": "https://your-consumer-domain.com/whatever/path/to/your/code"
  },
  {
    "name": "My example webhook #3",
    "events": [
      "delivery", "injection", "bounce", "delay", "policy_rejection",
      "out_of_band", "open", "click",
      "generation_failure", "generation_rejection", "spam_complaint",
      "ad_status", "ad_adjust",
      "link_unsubscribe", "sms_status"
    ],
    "target": "https://your-consumer-domain2.com/all/events/please/path/to/your/code"
  }
]
```

# Appendix 4: Webhook Usage Configuration

| Config Name | JSON Data Type | Description |
| --- | --- | --- |
| `disableSingleWorker` | Boolean | If set to `true`, a single webhook will utilize each worker that is spawned. By default, each webhook only uses a single worker. |
