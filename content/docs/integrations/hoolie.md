---
lastUpdated: "02/08/2020"
title: "Using SparkPost with Hoolie"
description: "The following steps will walk you through using Spark Post with Infacta's Hoolie NOTE Please make sure you have upgraded your version of Hoolie to the latest version that includes updated SSL and TLS support Version 1 9389 or later When running Hoolie click on Preferences and go to the..."
---

The following steps will walk you through using SparkPost with Infacta's [Hoolie](http://hool.ie).

NOTE: Please make sure you have upgraded your version of [Hoolie](http://hool.ie) to the latest version that includes updated SSL and TLS support (Version 1.9389 or later)

When running Hoolie, click on 'Preferences' and go to the Accounts tab and click on '+' to add a new mail server:

![](media/hoolie/Hoolie_First_original.jpg)

Then configure the new server with the following:

* A 'From Address' that matches one of the sending domains that you've configured in your SparkPost account
* A 'Reply-To Address' of your choice
* Select 'Use your own SMTP Server' and enter 'smtp.sparkpostmail.com' as your SMTP Server name and 587 as the Port
* Enter 'SMTP_Injection' as your Username and enter as the password an API key that you've created from your SparkPost account with the 'Send via SMTP' permission enabled
* Select 'Login' as the authentication type:

![](media/hoolie/Hoolie_Main_original.jpg)

Then click on the 'Advanced' tab and select 'Start TLS' as the Security Protocol (you can leave the 'Helo' Hostname blank:

![](media/hoolie/Hoolie_Advanced_original.jpg)

Click OK and you should be good to go!  Happy Sending!
