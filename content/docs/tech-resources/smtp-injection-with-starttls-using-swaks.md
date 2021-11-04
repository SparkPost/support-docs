---
lastUpdated: "02/08/2020"
title: "SMTP Injection with STARTTLS using swaks"
description: "One of our customers recently ran into issues attempting to send a test email via SMTP injection using STARTTLS while working with the openssl client Our resolution is to utilize the swaks Swiss Army Knife for SMTP This command line utility makes it easy to send a test email via..."
---

One of our customers recently ran into issues attempting to send a test email via SMTP injection using STARTTLS while working with the openssl client. Our resolution is to utilize the "swaks" ([Swiss Army Knife for SMTP](http://www.jetmore.org/john/code/swaks/)). This command line utility makes it easy to send a test email via SMPTP and provides verbose output so you're able to view the commands and responses issued by the utility and received from the server.

Prerequisites:

* A valid SparkPost API key with the "send with SMTP" permission enabled
* A valid sending domain configured

## Sending a Test Email Using swaks

Once you have swaks downloaded (optionally available in your PATH), you can send a test email using SparkPost SMTP injection by running the following command in a terminal window:

```
swaks -server smtp.sparkpostmail.com:587 -tls --auth-user SMTP_Injection --auth-password <**API_KEY>** --to <**TO_EMAIL>** --from <**FROM_EMAIL>**
```

​**Substitutions**:

* **API_KEY** - An api key created in app.sparkpost.com with "Send via SMTP" permission
* **TO_EMAIL** - The email address of the test email recipient
* **FROM_EMAIL** - An email address on a configured Sending Domain

**If you ever need the [SMTP Connection information for SparkPost](https://app.sparkpost.com/account/smtp), it is available in the Configuration section of the SparkPost app.**

## Sample Response

```
=== Trying smtp.sparkpostmail.com:587...
=== Connected to smtp.sparkpostmail.com.
<-  220 2.0.0 smtp.sparkpostmail.com ESMTP ecelerity 4.1.5.48834 r(Core:4.1.5.3) Thu, 14 May 2015 17:04:46 +0000
 -> EHLO sample.local
<-  250-momentum1.platform1.us-west-2.aws.cl.messagesystems.com says EHLO to 38.88.217.98:63602
<-  250-STARTTLS
<-  250-ENHANCEDSTATUSCODES
<-  250-PIPELINING
<-  250 8BITMIME
 -> STARTTLS
<-  220 2.0.0 continue
=== TLS started with cipher TLSv1:DHE-RSA-AES256-SHA:256
=== TLS no local certificate set
=== TLS peer DN="/OU=GT81723185/OU=See www.rapidssl.com/resources/cps (c)14/OU=Domain Control Validated - RapidSSL(R)/CN=*.sparkpostmail.com"
 ~> EHLO someone.local
<~  250-momentum1.platform1.us-west-2.aws.cl.messagesystems.com says EHLO to 38.88.217.98:63602
<~  250-ENHANCEDSTATUSCODES
<~  250-AUTH=LOGIN PLAIN
<~  250-AUTH LOGIN PLAIN
<~  250-8BITMIME
<~  250 PIPELINING
 ~> AUTH LOGIN
<~  334 VXNlcm5hbWU6
 ~> U01UUF9JbmplY3Rpb24=
<~  334 UGFzc3dvcmQ6
 ~> WW91IGZvdW5kIHRoZSBzZWNyZXQgY29kZSEgRW1haWwgZGV2ZWxvcGVyc0BzcGFya3Bvc3QuY29tIGZvciBhIGZyZWUgdC1zaGlydCE=
<~  235 2.0.0 Authed. Go on.
 ~> MAIL FROM:<hello@test.com>
<~  250 2.0.0 MAIL FROM accepted
 ~> RCPT TO:<john.doe@email.com>
<~  250 2.0.0 RCPT TO accepted
 ~> DATA
<~  354 3.0.0 continue.  finished with "\r\n.\r\n"
 ~> Date: Thu, 14 May 2015 10:04:46 -0700
 ~> To: john.doe@email.com
 ~> From: hello@test.com
 ~> Subject: test Thu, 14 May 2015 10:04:46 -0700
 ~> X-Mailer: swaks v20130209.0 jetmore.org/john/code/swaks/
 ~>
 ~> This is a test mailing
 ~>
 ~> .
<~  250 2.0.0 OK 95/6F-30607-EA5D4555
 ~> QUIT
<~  221 2.3.0 momentum1.platform1.us-west-2.aws.cl.messagesystems.com closing connection
=== Connection closed with remote host.
```
