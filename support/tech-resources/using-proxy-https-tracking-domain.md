---
title: "Using a Reverse Proxy for HTTPS Tracking Domain"
description: "SparkPost supports HTTPS engagement tracking for customers via self-service for all SparkPost customers. To enable SSL engagement tracking for a domain, additional configuration for SSL keys is required.  This resource outlines the use of a reverse proxy to host SSL certificates"
---

## Overview

SparkPost supports secure tracking domains through the use of content delivery networks (CDNs), reverse proxies, or any method where the customer can host the necessary SSL/TLS certificates.  It is recommended that our customers use SSL as it provides secure transport for engagement data while being necessary to support SparkPost engagement tracking with Google’s AMP for Email.  The following support article outlines the use of a [CDN](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/) with SparkPost, but in this post will demonstrate how to configure a SparkPost tracking domain, provision an SSL certificate, and be able to use it immediately at SparkPost using a simple reverse proxy.

## Prerequisites

There are a few prerequisites for this post.  First, that you have a Linux server that is external to the internet and is configured as the endpoint for your tracking domain in DNS if you want to automate certificate creation using Let’s Encrypt.  This would need to be done before actively using your domain at SparkPost as changing the DNS while already in use could break your current engagement tracking.  If you already have certificates, you can wait and switch DNS at the end once all the work is completed to prevent any interruption in service.  This example uses a t2.micro Ubuntu instance on Amazon Web Services and a tracking domain of click.nddurant.com that is CNAME'd to the instances public IPv4 DNS.

Also, it is expected that you have root access on this server for installing software, etc., and that you are using a modern Linux OS with a package manager (I’ll be demoing on Ubuntu 16.04).

## Configuration

This article uses [nginx](https://www.nginx.com/).  It is easy to get installed and configured as a reverse proxy and Let’s Encrypt for SSL certificates has support it out of the box.  To install nginx, follow the guidelines for your Linux distribution.

---
**NOTE**

You may have to perform an apt-get update prior to installing.

---
```bash
sudo apt-get install nginx
```

On a Debian distribution, the previous command will install nginx with a sample configuration, located at **/etc/nginx/**.  To enable a reverse proxy back to SparkPost for your tracking domain, see the sample configuration file below (sample tracking domain is click.nddurant.com).

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

Creating this file in **/etc/nginx/conf.d** and executing a nginx reload will make the configuration live

```bash
sudo nginx -s reload
```

At this point, if all your DNS is configured to this nginx server, you should be able to verify the tracking domain in SparkPost.  Add your desired tracking domain to your SparkPost account, either through the user interface or [API](https://developers.sparkpost.com/api/tracking-domains/).  Once verified, you can associate the tracking domain with a [sending domain](https://developers.sparkpost.com/api/tracking-domains/#header-association-to-sending-domains-and-defaults) and manually test the tracking links with cURL commands.  The following example is a simple cURL command to send an email through SparkPost with engagement tracking enabled:

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

Once the email is successfully delivered, you should be able to click the link and be successfully redirected to sparkpost.com.  If any type of issues arises, one method debug is to right click on the tracking link in the email and “Copy Link Address” for use in a cURL command.  This method can show additional information about the **http** session.

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

The last step is to get the necessary SSL certificates in place so that you can enable HTTPS on your configured tracking domain.  As mentioned before, Let’s Encrypt can be use to provision free SSL certificates.  These steps are very well outlined by nginx in this article https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/.  Following these steps, you should be able to get free SSL certificates installed on your nginx server for the desired tracking defined in the **server.conf**.  One note is that after the certificate are created, you will be asked if you wish to redirect **http** to **https**.  It is recommended that you do not redirect, as you may wish to change your tracking domain back to **http** in the future if it becomes necessary.

Once completed, you can set your tracking domain to “secure” using the [tracking domains API](https://developers.sparkpost.com/api/tracking-domains/#tracking-domains-put-update-a-tracking-domain).  This will make any new emails using your associated tracking domains to leverage **https** versus the **http** protocol.  Wait a few minutes for propagation, usually around 5 minutes, and send another test email again.  You should see that your link is now starting with **https** instead of **http**.  Again, you should be able to click the link and be redirected to SparkPost.  You could also do the cURL approach mentioned above and see your certificate authenticated.

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

## Related Articles

* Now that you have **https** tracking domains, you are ready to begin using SparkPost engagement tracking with your [AMP emails](https://www.sparkpost.com/docs/user-guide/amp-for-email/).

* You can use a CDN with SparkPost [tracking domains](https://www.sparkpost.com/docs/tech-resources/enabling-multiple-custom-tracking-domains/) as an alternative to a revert proxy.

* Set up engagmenet tracking with the [SMTP API](https://www.sparkpost.com/docs/tech-resources/smtp-engagement-tracking/) for your SMTP traffic to SparkPost.