---
lastUpdated: "02/08/2020"
title: "Using SparkPost with Mac Mail"
description: "The following article will walk you through integrating Mac Mail to use your Spark Post account for outgoing mail and how to configure Mac Mail to use the Spark Post SMTP API to enable open and click tracking To start you will need A Mac with Mac Mail Spark Post..."
---

The following article will walk you through integrating Mac Mail to use your SparkPost account for outgoing mail and how to configure Mac Mail to use the SparkPost SMTP API to enable open and click tracking.

To start you will need:

* A Mac with Mac Mail
* SparkPost.com Account
* Verified Sending Domain configured in SparkPost.com
* SparkPost API Key with the "Send via SMTP" API Permission enabled

## Configuring SparkPost as an outgoing server in Mac Mail

1. Open Mac Mail and click "Mail" from the file menu, then choose "Preferences"
1. Select the "Accounts" tab from the Preferences window
1. Select the account you wish to setup (must be associated with your verified sending domain configured in SparkPost.com)
1. In the "Account Information" sub-view, click on the combobox next to "Outgoing Mail Server (SMTP)" and select "Edit SMTP Server List"
1. Click the "+" sign to add a new outgoing server, on the "Account Information" tab complete these fields:
    1. Give it a useful description (not required for setup, but helpful for you later)
    1. Server Name: smtp.sparkpostmail.com
    1. TLS Certificate: None
1. Select the "Advanced" tab and use the following values for the form:
    1. Automatically detect and maintain account settings: Unchecked
    1. Port: 587 (with use SSL checked)
    1. Authentication: Password
    1. Allow insecure authentication: Unchecked
    1. User Name: SMTP_Injection
    1. Password: `<ENTER_YOUR_SPARKPOST_API_KEY_HERE>`
1. Click "OK" to complete
1. Send yourself a test email (if you don't receive any errors, then continue, otherwise, check your settings)
1. Open your SparkPost.com account and you should see in Reports->Summary (filtered by past hour) one or more "Accepted" emails (but you won't see any open or click tracking...we'll address that next)

## Enabling Open and Click Tracking (Optional)

1. Open the Terminal (Finder->Applications->Utilities->Terminal)

1. Make sure you don't have any other defaults setup for custom headers in Mac Mail:

    `​defaults read com.apple.mail UserHeaders`

    You should see some output like the following:

    `The domain/default pair of (/Users/<youruser>/Library/Containers/com.apple.mail/Data/Library/Preferences/com.apple.mail, UserHeaders) does not exist`
1. In the terminal enter the following command (all on one line):

    `​defaults write com.apple.mail UserHeaders '{"X-MSYS-API" = "{\"options\":{\"open_tracking\":true,\"click_tracking\":true}}";}'`

1. If you do not receive any errors for parsing (make sure you're escaping the JSON values), you can check your default headers using this command:

    `​defaults read com.apple.mail UserHeaders`

1. Now send yourself another test email. If everything worked right, you should be able to open and click any links you include in the email, then re-open your SparkPost.com account, filter by the past hour and see your opens and clicks in the reporting data.

1. If you want to remove these default UserHeaders, just use the following command:

    `defaults delete com.apple.mail UserHeaders`

You should now be able to use this for any sending domain.

[Read the complete SMTP API documentation](https://www.sparkpost.com/api#/reference/smtp-api)
