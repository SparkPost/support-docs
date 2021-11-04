---
lastUpdated: "02/08/2020"
title: "What Secure Ciphers does SparkPost Support?"
description: "To ensure the highest degree of security and stability for our customers, SparkPost will be disabling a number of insecure TLS and stream cipher protocols on October 15. These include TLSv1, ECDHE-RSA-RC4-SHA, RC4-MD5, and RC4-SHA. This change will affect both REST and SMTP injection endpoints"
---

To ensure the highest degree of security and stability for our customers, SparkPost will be disabling a number of insecure TLS and stream cipher protocols on or after October 15. These include TLSv1, ECDHE-RSA-RC4-SHA, RC4-MD5, and RC4-SHA. This change will affect both REST and SMTP injection endpoints.

## How will I know if I'm affected?
To know if your injection software is affected, compare the list of good ciphers below against the documentation for the client software you’re using. If you begin receiving "SSL HANDSHAKE" errors on or after October 15 during message injection, you should immediately update your client software to the most current stable version.

## What can I do to ensure no service interruption?
In most cases, it should be sufficient to upgrade your client software to the most current stable version. You can ensure you won't encounter a service interruption by checking that your client software supports the following protocols:

   TLSv1.1 or higher
   
   Any of the following stream ciphers
   * ECDHE-RSA-AES256-SHA384
   * AES128-GCM-SHA256
   * ECDHE-RSA-AES128-GCM-SHA256
   * AES256-GCM-SHA384
   * AES256-SHA256
   * ECDHE-RSA-AES128-SHA256
   * AES128-SHA
   * ECDHE-RSA-AES128-SHA
   * AES128-SHA256
   
