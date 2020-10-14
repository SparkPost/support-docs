---
title: "Using a Reverse Proxy for HTTPS Tracking Domain"
description: "SparkPost supports HTTPS engagement tracking for customers via self-service for all SparkPost customers. To enable SSL engagement tracking for a domain, additional configuration for SSL keys is required.  This resource outlines the use of a reverse proxy to host SSL certificates"
---

## Overview

SparkPost supports secure tracking domains through the use of content delivery networks (CDNs), reverse proxies, or any method where the customer can host the necessary SSL/TLS certificates.  It is recommended that our customers use SSL as it provides secure transport for engagement data. It's also necessary to support SparkPost engagement tracking with Google’s AMP for Email.

> Alternative: to configure HTTPS engagement tracking using a CDN, see [this article](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/).

This post covers how to configure a SparkPost tracking domain, provision an SSL certificate, and be able to use it immediately at SparkPost using a simple reverse proxy.

## Prerequisites

* You have a Linux server that has connection to the internet and is configured as the endpoint for your tracking domain in DNS, if you want to automate certificate creation using Let’s Encrypt.

  This would need to be done before actively using your domain at SparkPost, as changing the DNS while already in use could break your current engagement tracking.

  * If you already have certificates, you can wait and switch DNS at the end once all the work is completed to prevent any interruption in service.

* You have root access on this server for installing software, etc., and that you are using a modern Linux OS with a package manager (I’ll be demoing on Ubuntu 16.04).

This example uses a t2.micro Ubuntu instance on Amazon Web Services and a tracking domain of click.nddurant.com that is CNAME'd to the instance public IPv4 DNS.

## Configuring nginx

This article uses [nginx](https://www.nginx.com/).  It is easy to get installed and configured as a reverse proxy and Let’s Encrypt for SSL certificates has support for it.  To install nginx, follow the guidelines for your Linux distribution.

Let's Encrypt recommends the use of [**Certbot**](https://letsencrypt.org/getting-started/) to automatically obtain and renew your certificates.

> Note: You may have to perform an apt-get update prior to installing.

```bash
sudo apt-get install nginx
```

On a Debian distribution, this command will install nginx with a sample configuration, located at **/etc/nginx/**.  To enable a reverse proxy back to SparkPost for your tracking domain, see the sample configuration file below (sample tracking domain is click.nddurant.com).

```apacheconf
server { # simple reverse-proxy
   listen       80;
   listen       443 ssl;
   server_name  click.nddurant.com;

   # pass requests for dynamic content to rails/turbogears/zope, et al
   location / {
     proxy_pass      https://spgo.io;
   }
}
```

Creating this file in **/etc/nginx/conf.d** and executing a nginx reload will make the configuration live.

```bash
sudo nginx -s reload
```

## Verify tracking domain, send test email

At this point, if your DNS is pointing to this nginx server, you should be able to verify the tracking domain in SparkPost.  Add your desired tracking domain to your SparkPost account, either through the user interface or [API](https://developers.sparkpost.com/api/tracking-domains/).  Once verified, you can associate the tracking domain with a [sending domain](https://developers.sparkpost.com/api/tracking-domains/#header-association-to-sending-domains-and-defaults) and manually test the tracking links with cURL commands.  The following example is a simple cURL command to send an email through SparkPost with engagement tracking enabled:

```bash
curl -X POST \
  https://api.sparkpost.com/api/v1/transmissions \
  -H 'Accept: application/json' \
  -H 'Authorization: REDACTED' \
  -H 'Content-Type: application/json' \
  -H 'Host: api.sparkpost.com' \
  -d '{
  "options" : {
    "open_tracking" : true,
    "click_tracking" : true,
    "conversion_tracking" : false,
    "transactional": true
  },
  "campaign_id" : "mycampaign",
  "return_path" : "sample@yourdomain.com",
  "header_from" : "Single Recipient",
  "metadata" : {
    "key": "value"
  },
  "recipients" : [
    {
      "address" : {
        "email": "john.doe@yourdomain.com"
      }
    }
  ],
  "content" : {
      "from": {
      "email": "you@yourdomain.com"
    },
    "subject": "Tracking Test",
    "reply_to": "You <you@yourdomain.com>",
    "html" : "<html><h4> Tracking Test </h4> <body><a href=\"http://www.sparkpost.com\">SparkPost Clicktrack</a></body></html>"
  }
}'

```

Once the email is successfully delivered, you should be able to click the link and be successfully redirected to sparkpost.com.  If issues arise, a useful debug method is to right-click on the tracking link in the email and “Copy Link Address”, for use in a cURL command.  This method can show additional information about the **http** session.

```bash
curl -v -X GET http://click.nddurant.com/f/a/Hcv1nwnOfCFeZmc3EvMwsQ~~/AALoUwA~/RgRestfaPwRXA3NwY0IKABvaUtBcfA5Pw1IbbmF0aGFuLmR1cmFudEBzcGFya3Bvc3QuY29tWAQAAAAA?target=http%3A%2F%2Fwww.sparkpost.com
Note: Unnecessary use of -X or --request, GET is already inferred.
*   Trying 52.39.217.5...
* Connected to click.nddurant.com (52.39.217.5) port 80 (#0)
> GET /f/a/Hcv1nwnOfCFeZmc3EvMwsQ~~/AALoUwA~/RgRestfaPwRXA3NwY0IKABvaUtBcfA5Pw1IbbmF0aGFuLmR1cmFudEBzcGFya3Bvc3QuY29tWAQAAAAA?target=http%3A%2F%2Fwww.sparkpost.com HTTP/1.1
> Host: click.nddurant.com
> User-Agent: curl/7.47.0
> Accept: */*
>
< HTTP/1.1 302 Moved Temporarily
< Content-Type: text/plain
< Date: Mon, 06 May 2019 16:28:21 GMT
< Location: http://www.sparkpost.com
< Server: msys-http
< X-Robots-Tag: noindex
< Content-Length: 0
< Connection: keep-alive
<
* Connection #0 to host click.nddurant.com left intact

```

## Get SSL certificate

The next step is to get the necessary SSL certificate in place so that you can enable HTTPS on your configured tracking domain.  Let’s Encrypt can be use to provision free SSL certificates.  These steps are very well outlined by nginx in [this article](https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/).

After completing this, you will have free SSL certificates installed on your nginx server for the desired tracking defined in the `server.conf`.

After the certificate is created, you will be asked if you wish to redirect **http** to **https**.  It is recommended that you do not redirect, as you may wish to change your tracking domain back to **http** in the future if it becomes necessary.

## Set SparkPost tracking domain to "secure"

Once completed, set your tracking domain to “secure” using the [tracking domains API](https://developers.sparkpost.com/api/tracking-domains/#tracking-domains-put-update-a-tracking-domain).  This will make any new emails using your associated tracking domains to use **https** instead of the **http** protocol; instructions [here](enabling-https-engagement-tracking-on-sparkpost.md#switch-to-secure).

Wait a few minutes for propagation, usually around 5 minutes, and send another test email again.  You should see that your link is now starting with **https** instead of **http**.  Again, you should be able to click the link and be redirected to SparkPost.  You could also do the cURL approach mentioned above and see your certificate authenticated.

```bash
curl -v https://click.nddurant.com/f/a/MV0K99nv-x6425iJtSb-qg~~/AALoUwA~/RgResx-JPwRXA3NwY0IKAB-JmtBcCVe9hlIbbmF0aGFuLmR1cmFudEBzcGFya3Bvc3QuY29tWAQAAAAA?target=http%3A%2F%2Fwww.sparkpost.com
*   Trying 172.31.31.57...
* Connected to click.nddurant.com (172.31.31.57) port 443 (#0)
* found 148 certificates in /etc/ssl/certs/ca-certificates.crt
* found 592 certificates in /etc/ssl/certs
* ALPN, offering http/1.1
* SSL connection using TLS1.2 / ECDHE_RSA_AES_256_GCM_SHA384
* 	 server certificate verification OK
* 	 server certificate status verification SKIPPED
* 	 common name: click.nddurant.com (matched)
* 	 server certificate expiration date OK
* 	 server certificate activation date OK
* 	 certificate public key: RSA
* 	 certificate version: #3
* 	 subject: CN=click.nddurant.com
* 	 start date: Mon, 06 May 2019 17:28:17 GMT
* 	 expire date: Sun, 04 Aug 2019 17:28:17 GMT
* 	 issuer: C=US,O=Let's Encrypt,CN=Let's Encrypt Authority X3
* 	 compression: NULL
* ALPN, server accepted to use http/1.1
> GET /f/a/MV0K99nv-x6425iJtSb-qg~~/AALoUwA~/RgResx-JPwRXA3NwY0IKAB-JmtBcCVe9hlIbbmF0aGFuLmR1cmFudEBzcGFya3Bvc3QuY29tWAQAAAAA?target=http%3A%2F%2Fwww.sparkpost.com HTTP/1.1
> Host: click.nddurant.com
> User-Agent: curl/7.47.0
> Accept: */*
>
< HTTP/1.1 302 Moved Temporarily
< Server: nginx/1.10.3 (Ubuntu)
< Date: Mon, 06 May 2019 20:37:51 GMT
< Content-Type: text/plain
< Content-Length: 0
< Connection: keep-alive
< Location: http://www.sparkpost.com
< X-Robots-Tag: noindex
<
* Connection #0 to host click.nddurant.com left intact
```

## Optional: Nginx security settings and tuning

* Support the newer, more efficient `http2` protocol between your proxy and the client.

* Select which TLS versions and ciphers should be offered to your client; anything older than TLSv1.2 is now [considered insecure](https://www.sparkpost.com/blog/upgrading-tls-1-2/).

* Pass the client IP to SparkPost engagement tracking, so that your click events give the correct IP and geo-location information for the person clicking the link.

  This requires the NGINX module [`http_realip`](http://nginx.org/en/docs/http/ngx_http_realip_module.html) to be installed. Check you have this using the command
  ```
  nginx -V
  ```

* Suppress NGINX giving version/OS information on error pages.


The updated configuration file is:
```apacheconf
server { # simple reverse-proxy
    listen       80;
    listen       443 ssl http2;
    server_name  click.nddurant.com;
    ssl_certificate      /etc/letsencrypt/live/click.nddurant.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key  /etc/letsencrypt/live/click.nddurant.com/privkey.pem; # managed by Certbot

    # Security improvements
    ssl_protocols TLSv1.2;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DH+3DES:!ADH:!AECDH:!MD5;

    # pass all other requests through to SparkPost engagement tracking
    location / {
        proxy_pass      https://spgo.io;
        proxy_set_header X-Forwarded-For $remote_addr; # pass the client IP to the open & click tracker
        server_tokens off; # suppress NGINX giving version/OS information on error pages
    }
}
```

Once done, you should get an "A" rating for your tracking domain(s) on the [SSL Labs server test](https://www.ssllabs.com/ssltest/analyze.html). You may wish to adjust these to suit your own IT policy, e.g. to accept TLS v1.1 as well, for compatibility with older clients.

## Related Articles

* Now that you have **https** tracking domains, you are ready to begin using SparkPost engagement tracking with your [AMP emails](https://www.sparkpost.com/docs/user-guide/amp-for-email/).

* You can use a CDN with SparkPost [tracking domains](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/) as an alternative to a reverse proxy.

* Set up engagement tracking with the [SMTP API](https://www.sparkpost.com/docs/tech-resources/smtp-engagement-tracking/) for your SMTP traffic to SparkPost.