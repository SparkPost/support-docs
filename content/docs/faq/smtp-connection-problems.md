---
lastUpdated: "02/08/2020"
title: "SMTP Connection Problems"
description: "If you are having problems connecting to Spark Post over SMTP here's a checklist of things to verify The SMTP server name should be smtp sparkpostmail com or on some systems tls smtp sparkpostmail com The port should be 587 Alternately port 2525 can be used in environments where port..."
---

If you are having problems connecting to SparkPost over SMTP, here's a checklist of things to verify:

* The SMTP server name should be smtp.sparkpostmail.com or on some systems tls://smtp.sparkpostmail.com
* The port should be 587
* Alternately, port 2525 can be used in environments where port 587 is blocked (such as Google Compute Engine).
* You need to use `AUTH LOGIN` as the authentication approach
* You need to connect using TLS (STARTTLS)
* The username should be `SMTP_Injection`
* The password should be an API key you created from your SparkPost account
* Your API key must have the 'Send via SMTP' permission enabled
* You should have one or more verified sending domains configured in your SparkPost account (for example, 'myawesomedomain.com')
* You sending domain should be listed as 'ready to send' in the Sending Domains dashboard.
* When you send email through SMTP to SparkPost your 'from' address domain needs to match one of the verified sending domains you've configured in your SparkPost account (for example, 'newsletter@myawesomedomain.com')
* If you are using local client software to send messages to SparkPost, make sure that your firewall is set to allow sending on port 587 (if you are using 3rd party hosted software to send to SparkPost such as Ongage, etc. then you do not need to worry about your firewall settings).

Once you have your front-end software or service configured with the above, send a few test messages to your own email addresses through your SparkPost account to verify the configuration is working.  

If you do not receive the test messages, check your [SparkPost Summary](https://app.sparkpost.com/reports/summary) report to ensure the messages have been properly received by SparkPost.

If they do not show up on the [Summary report](https://app.sparkpost.com/reports/summary), then there is an issue with getting the messages to SparkPost - check your configuration of your front-end again.  

If the messages are shown as received on SparkPost but you did **not receive the test messages** on your test email addresses, check the [Bounce report](https://app.sparkpost.com/reports/bounces) to see why the messages might have been rejected (for example, being sent from an email address from a domain that has not yet been verified as a legitimate Sending Domain on your SparkPost Sending Domains report).
