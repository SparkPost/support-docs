---
lastUpdated: "02/08/2020"
title: "Using SparkPost with PHPList"
description: "PHP List ships with PHP Mailer hence it’s very easy to configure it to send emails through Spark Post SMTP Follow these instructions to configure PHP List Add a Sending Domain to Spark Post Create an API Key with Send via SMTP permission In your PHP List installation open config..."
---

[PHPList](http://phplist.org) ships with [PHPMailer](https://github.com/PHPMailer/PHPMailer) hence it’s very easy to configure it to send emails through SparkPost SMTP. Follow these instructions to configure PHPList:

* [Add a Sending Domain](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address) to SparkPost
* [Create an API Key](https://www.sparkpost.com/docs/getting-started/create-api-keys/) with “Send via SMTP” permission
* In your PHPList installation, open *config/config.php*
* Add the following configuration

```php
define('PHPMAILERHOST', 'smtp.sparkpostmail.com');
$phpmailer_smtpuser = 'SMTP_Injection';
$phpmailer_smtppassword = '<API_KEY>';
define('PHPMAILERPORT', 587);
```

* In your PHPList Campaign, use correct *From Line*. For example, if your Sending Domain is xyz.com, you can set From Line to <NAME>@xyz.com. 
* Send a test email to confirm the configuration is correct. 

**Notes**

* SparkPost will decline emails if the domain name in the From Line does not match one of your verified sending domains. 
* Replace `<API_KEY>` with the actual API Key that you’ve created in earlier step. It must have the ‘Send via SMTP’ permission. 
* In case outbound traffic is not allowed through port 587 from your server (blocked by firewall), you can use the alternate port 2525 if that is open.

**Handling bounces**

SparkPost does not send bounce report for emails it failed to send. So PHPList's bounce processing is not applicable to SparkPost. 

However, "hard bounce" recipients or people who complain about your mail will be automatically added to your account's suppression list and SparkPost will suppress any attempt to deliver to them in the future. Suppression will be added for the same type of emails. For example, a transactional email received “hard bounce” will only be suppressed for transactional emails only. Non-transactional emails will still go through unless they are suppressed separately.  

You can track bounces, complaints and other types of non-delivery from your [SparkPost Account](https://app.sparkpost.com) and through its [webhooks](https://www.sparkpost.com/docs/user-guide/defining-webhooks/) and [message events](https://developers.sparkpost.com/api/message-events.html) APIs. If you'd like to update your PHPList database directly using bounces and complaints from SparkPost, a [3rd party webhook endpoint](https://gist.github.com/cgsmith/db8c8a2e3ad435abc6694a15f42e9bca) has been published which enables handling webhook events.

This tutorial is prepared and tested against PHPList v3.3.1
