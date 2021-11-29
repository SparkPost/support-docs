---
lastUpdated: "02/08/2020"
title: "Using SparkPost with Exim"
description: "Configuring Exim 4 to use Spark Post as the SMTP relay is very similar to the process described in this Ask Ubuntu com article Instead of your Gmail username use SMTP Injection and for your password use an API key you have generated from your Spark Post account with the..."
---

Configuring Exim 4 to use SparkPost as the SMTP relay is very similar to the process described in [this AskUbuntu.com article](http://askubuntu.com/questions/167043/how-do-i-configure-exim4-to-send-mail-through-a-password-protected-ssl-smtp-mail).

Instead of your Gmail username, use 'SMTP_Injection' and for your password use an API key you have generated from your SparkPost account with the 'Send via SMTP' permission enabled. The mail server name should be smtp.sparkpostmail.com and the port is 587, with STARTTLS enabled.

Note: we received additional tips from community member Andrew Christensen @andrewc. Exim uses the server’s hostname instead of the domain of the emailer, which can confuse things. To configure Exim with SparkPost do the following:

Exim Configuration Manager -> Basic Editor:
Smarthost support = * smtp.sparkpostmail.com

Exim Configuration Manager -> Advanced Editor:
Find "Section: AUTH” and change it to:
auth_login:
   driver = plaintext
   public_name = LOGIN
   hide client_send = : SMTP_Injection : ——sparkpost api token ----

Find "Section: PREROUTERS” and change route_list = * smtp.sparkpostmail.com:587

Edit the Exim conf using [this](https://forums.cpanel.net/threads/easy-fix-your-smtp-banner-smtp-greeting-and-reverse-dns-for-dedicated-ips.391311/) direction.

Restart Exim and you're ready to send.
