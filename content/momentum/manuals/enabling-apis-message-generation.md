---
title: "Enabling APIs & Message Generation"
subtitle: "Momentum"
version: "5.3"
date: "June 2026"
description: "How to enable the Transmissions REST API, SMTPAPI (SMTP engagement tracking), and Message Generation on an MTA-only Momentum 5.3 cluster — including msg_gen and smtpapi configuration and the OpenResty NGINX proxy setup."
lastUpdated: "06/05/2026"
---

# 1. Purpose

Following the initial installation of Momentum 5.3 in an MTA-only configuration, the following features can be added and enabled by following this procedure:

- 5.3 Transmissions REST API
- Message Generation functionalities
- SMTPAPI for SMTP Engagement Tracking

These procedures can also be performed after an upgrade to Momentum 5.3 if the pre-upgraded installation had not already had them done in the previous version.

# 2. Important Caveats

Before 4.2.31, the transmissions API and message generation functionality required the use of the Cassandra database.

The elimination of Cassandra has the following feature implications, compared to previous releases:

- Tags are not supported. They will be ignored by the Transmissions API and SMTPAPI.
- Scheduled generation is not supported. Generation times set in the future will be rejected by the Transmissions API.
- The use of stored templates or stored recipient lists is not supported. They will be rejected by the Transmissions API. Consequently, neither the Templates API nor the Recipient Lists API is supported. All transmissions must use an inline recipient(s) and an inline template.
- No authentication, nor support for API keys. The Transmissions API will not be authenticated.

As mentioned above, the transmissions API is not authenticated in the default installation. Additionally, if you enable the SMTPAPI for Engagement Tracking, you need to allow the click and open HTTP requests to the servers. This may require firewall or external router configuration outside of the scope of this document. For our purposes below, we will assume that port 80 on each MTA is accessible only internally and is used exclusively for the Transmissions API submissions over HTTP. If you are enabling Engagement tracking, you will need to map an external IP and port to the internal port 81, which will be used only for clicks and opens over HTTP.

> **Note:** Since the Transmissions API does not require authentication and the Engagement Tracking requires inbound connections from the Internet, you are strongly advised to consult your IT support staff to ensure that only internal connections can be made to the Transmissions API and that external connections can only access an alternate listener (e.g., port 81 below).

# 3. Enable Message Generation

## 3.1. Update the Configuration on the First Node

1.  Copy the **msg_gen.conf** sample configuration file to the appropriate location.

    ```bash
    cp /opt/msys/ecelerity/etc/sample-configs/default/msg_gen.conf \
      /opt/msys/ecelerity/etc/conf/default/
    ```

2.  In the **/opt/msys/ecelerity/etc/conf/default/msg_gen.conf** file, edit the following lines in the **msg_gen** stanza:

    - Substitute your hostnames as appropriate.
    - If this is a single-node install, set **cluster_cfg = false**; otherwise, set it to **true**.
    - Engagement Tracking requires an active DNS name to be included in generated messages. This must resolve to a publicly accessible IP address and map to one or more of the Platform hosts. Replace `__EXTERNAL_DNS_HOSTNAME__` with this active DNS name.
    - In all configurations below, use your internal hostnames, not necessarily the same as public hostnames (if assigned).
    - The **mta_id** must be globally unique across the cluster and should not be changed after being configured initially.

    ```
    msg_gen {
      engagement_tracking_host = "__EXTERNAL_DNS_HOSTNAME__:__EXTERNAL_PORT__"
      cluster_cfg = <true|false>
      node mta1.yourdomain.com { mta_id = 1 votes = 1 }
      node mta2.yourdomain.com { mta_id = 2 votes = 1 }
      ...
      node mtaN.yourdomain.com { mta_id = n votes = 1 }
    }
    ```

3.  Include **msg_gen.conf** in the **/opt/msys/ecelerity/etc/conf/default/ecelerity.conf** configuration file. Remove the comment character (#) from the existing line in `ecelerity.conf`:

    ```
    # include "msg_gen.conf"
    ```

## 3.2. Configure Remaining MTA Nodes

1.  Copy these config files to each MTA node in the cluster.

    ```bash
    scp /opt/msys/ecelerity/etc/conf/default/msg_gen.conf \
      mtaN.yourdomain.com:/opt/msys/ecelerity/etc/conf/default
    scp /opt/msys/ecelerity/etc/conf/default/ecelerity.conf \
      mtaN.yourdomain.com:/opt/msys/ecelerity/etc/conf/default
    ```

2.  Restart **ecelerity** on all nodes:

    ```bash
    sudo systemctl restart ecelerity
    ```

# 4. Enable SMTPAPI

## 4.1. Update the Configuration on the First Node

1.  Copy the **smtpapi.conf** file to the appropriate location:

    ```bash
    cp /opt/msys/ecelerity/etc/sample-configs/default/smtpapi.conf \
      /opt/msys/ecelerity/etc/conf/default/
    ```

2.  Include **smtpapi.conf** in the **/opt/msys/ecelerity/etc/conf/default/ecelerity.conf** configuration file. Remove the comment character (#) from the line:

    ```
    # include "smtpapi.conf"
    ```

3.  Configure your ESMTP listener for outbound traffic to set up engagement tracking. Below is an example to set up a port 8025 listener for outbound traffic with open and click tracking turned on and HTTP links. Update **/opt/msys/ecelerity/etc/conf/default/ecelerity.conf** with the desired changes. This is an alternate injection port to the default port 25 listener. If you want to enable click/open tracking for all messages, add the following lines to the default port 25 stanza instead (everything inside the Listen context).

    ```
    Esmtp_Listener {
      Listen ":8025" {
        open_tracking_enabled = true
        click_tracking_enabled = true
        # Change this to your external DNS hostname and external port
        # number. This will appear in the tracked links.
        tracking_domain = "__EXTERNAL_DNS_HOSTNAME__:__EXTERNAL_PORT__"
        # HTTPS is also supported, but requires further configuration
        # and a TLS certificate valid for the external hostname.
        click_tracking_scheme = "http"
        open_tracking_scheme = "http"
      }
    }
    ```

4.  Test the configuration changes — this should display "OK", or an error message if there is a problem that needs correcting:

    ```bash
    /opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload
    ```

5.  Restart **ecelerity**:

    ```bash
    sudo systemctl restart ecelerity
    ```

## 4.2. Configure Remaining MTA Nodes

1.  Copy these config files to each MTA node in the cluster.

    ```bash
    scp /opt/msys/ecelerity/etc/conf/default/smtpapi.conf \
      mtaN.yourdomain.com:/opt/msys/ecelerity/etc/conf/default
    scp /opt/msys/ecelerity/etc/conf/default/ecelerity.conf \
      mtaN.yourdomain.com:/opt/msys/ecelerity/etc/conf/default
    ```

2.  Restart **ecelerity**:

    ```bash
    sudo systemctl restart ecelerity
    ```

# 5. Setup NGINX

Momentum uses [OpenResty NGINX](https://openresty.org/en/download.html). For Red Hat Enterprise Linux (RHEL) 8 and 9, the installation steps followed and tested with Momentum are [here](https://openresty.org/en/linux-packages.html#rhel).

> **Note:** If the procedure for enabling 5.3 Webhooks has already been performed on this cluster, NGINX has already been set up and configured. If that is the case, this entire section can be skipped now, and the procedure is complete.

> **Note:** By the time of the Momentum 5.3 release, there was no package available for RHEL 10; an **msys-openresty** package can be found at the [Message Systems Support](https://support.messagesystems.com/start.php) website for installation on that specific distro.

If you have **msys-nginx** installed, please uninstall it first. You can follow the **Upgrade Momentum Webhooks to 5.3** document to upgrade NGINX running on your box.

## 5.1. Install the Required Package

For every node you designate as an MTA, make sure OpenResty NGINX is installed. For instance, in a RHEL 9 node:

```bash
sudo dnf list openresty
```

Your results should look like this:

```
Installed Packages
openresty.x86_64    1.27.1.2-1.el9    @openresty
```

## 5.2. Configure NGINX

On MTA nodes, an NGINX process acts as an API proxy and load balancer for various API endpoints. In this section, you will configure NGINX for the MTAs.

> **Note:** OpenResty NGINX has its configuration located under **/usr/local/openresty/nginx**. If yours is different, you can use **sudo find / -name nginx.conf -print** to find the location used by your installation.

1.  Copy the following files.

    ```bash
    sudo mkdir -p /usr/local/openresty/nginx/conf.d /var/log/nginx
    cd /opt/msys/ecelerity/etc/sample-configs/nginx
    sudo cp -i conf/nginx.conf /usr/local/openresty/nginx/conf/
    sudo cp -i conf/logrotate /etc/logrotate.d/openresty
    sudo cp -i web_proxy.conf /usr/local/openresty/nginx/conf.d/
    sudo cp -i app.loc /usr/local/openresty/nginx/conf.d/
    sudo cp -i momo.loc /usr/local/openresty/nginx/conf.d/
    sudo cp -i default.cors /usr/local/openresty/nginx/conf.d/
    sudo cp -i momo_upstream.conf /usr/local/openresty/nginx/conf.d/
    # This will ask you if you want to overwrite the destination
    # file. It is safe to enter "y" here. It will overwrite a similar
    # sample configuration installed by the
    # msys-ecelerity-engagement-proxy package.
    sudo cp -i click_proxy_upstream.conf /usr/local/openresty/nginx/conf.d/
    ```

    **If using or planning to enable webhooks**, copy the following file from the NGINX sample-configs:

    ```bash
    sudo cp -i api_webhooks_upstream.conf /usr/local/openresty/nginx/conf.d/
    ```

2.  For each of the following files, edit the associated "upstream stanza" to point to port 2081 on all MTA nodes. See the example below.

    - `/usr/local/openresty/nginx/conf.d/click_proxy_upstream.conf` (port 2081)
    - `/usr/local/openresty/nginx/conf.d/momo_upstream.conf` (port 2081)

    Example:

    ```
    cat /usr/local/openresty/nginx/conf.d/click_proxy_upstream.conf
    upstream click_proxy {
      server mta1.yourdomain.com:2081;
      server mta2.yourdomain.com:2081;
      ...
      server mtaN.yourdomain.com:2081;
      least_conn;
    }
    ```

3.  **If using or planning to enable webhooks**, edit **/usr/local/openresty/nginx/conf.d/web_proxy.conf**. Remove the comment character (#) from the line:

    ```
    # include "app.loc"
    ```

4.  **If using or planning to enable webhooks**, edit **/usr/local/openresty/nginx/conf.d/api_webhooks_upstream.conf** and add all of your MTA nodes to the **upstream** stanza:

    ```
    upstream api_webhooks {
      # List of all Webhooks api instances in the cluster:
      server mta1.yourdomain.com:2084;
      server mta2.yourdomain.com:2084;
      ...
      server mtaN.yourdomain.com:2084;
      least_conn;
    }
    ```

## 5.3. Enable Click/Open Listener

If you are enabling the Click/Open listeners, you need to add a Listen stanza permitting NGINX to service the clicks and opens. You can add this to the **/usr/local/openresty/nginx/conf.d/web_proxy.conf** file or add a new **click_tracking.conf** file in the same directory.

```
server {
  listen 81;  # need to be mapped from external port
  server_name _;
  more_set_headers 'Server: msys-http';
  more_clear_headers 'X-Powered-By';
  location /o {
    proxy_pass http://click_proxy;
  }
  location /q {
    proxy_pass http://click_proxy;
  }
  location /f {
    proxy_pass http://click_proxy;
  }
  location /robots.txt {
    access_log off;
    add_header Content-Type: text/plain;
    return 200 "User-Agent: *\nDisallow: /\n";
  }
  location / {
    access_log off;
    return 404;
    more_set_headers "Content-Type: text/plain";
  }
}
```

## 5.4. Test the NGINX Configuration

```bash
sudo openresty -t
```

Your results should look like this:

```
nginx: the configuration file /usr/local/openresty/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/openresty/nginx/conf/nginx.conf test is successful
```

## 5.5. Start NGINX

```bash
sudo systemctl restart openresty
```

## 5.6. Configure the Remaining MTA Nodes

1.  Copy the NGINX configuration files to all the remaining MTA nodes. (`$PWD` is a Linux shell variable that always contains the current working directory, i.e., the equivalent of the response from the `pwd` command.)

    ```bash
    cd /usr/local/openresty/nginx/conf
    scp nginx.conf mtaN.yourdomain.com:$PWD
    cd /etc/logrotate.d
    scp openresty mtaN.yourdomain.com:$PWD
    cd /usr/local/openresty/nginx/conf.d
    scp web_proxy.conf mtaN.yourdomain.com:$PWD
    scp app.loc mtaN.yourdomain.com:$PWD
    scp momo.loc mtaN.yourdomain.com:$PWD
    scp default.cors mtaN.yourdomain.com:$PWD
    scp momo_upstream.conf mtaN.yourdomain.com:$PWD
    scp click_proxy_upstream.conf mtaN.yourdomain.com:$PWD
    # and if using webhooks:
    scp api_webhooks_upstream.conf mtaN.yourdomain.com:$PWD
    ```

2.  Start NGINX on all the remaining MTA nodes.

    ```bash
    # If NGINX was started previously, run restart instead of start
    sudo systemctl start openresty
    ```
