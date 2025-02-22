---
lastUpdated: "01/28/2022"
title: "Multi-Factor Authentication (MFA)"
description: "How to enable Multi-Factor Authentication (MFA) in SparkPost."
---

Multi-factor authentication (MFA) adds an extra layer of security to your account. MFA allows you to use an authenticator mobile app such as Google Authenticator or DUO to verify your login. MFA prevents bad actors from accessing an account even if they've acquired the username and password.

SparkPost utilizes a third-party service to analyze each login and will only trigger MFA if the login is determined to be high risk (a bad actor using compromised credentials). This ensures user accounts maintain a high level of security while also reducing friction on each log in.

* [Enabling Multi-Factor Authentication](#enabling-multi-factor-authentication)
* [Recovering Account Access](#recovering-access-to-account)

# Enabling Multi-Factor Authentication
You can enable MFA from your [Profile page](https://app.sparkpost.com/account/profile) ([EU](https://app.eu.sparkpost.com/account/profile)). SparkPost offers both authenticator app and SMS as methods of MFA.

Click on **Enable Multi-Factor Authentication** to start the process.

## Authenticator App
Use your authenticator app to scan the QR code in the pop up window. Enter the one-time code and continue. Be sure to save your recovery code somewhere safe in case you ever lose your device.

## SMS
In the pop up window, click **Use Another Method or Recovery Code**, then click **SMS**. Enter your phone number and continue. You will receive an SMS with a one-time code. Enter this code and continue. Be sure to save your recovery code somewhere safe in case you ever lose your device.

# Recovering Access to Account
In the event that you lose or replace your authentication device, you have a few options to recover access to your account:
* Use your saved recovery code to login, then re-configure your MFA settings.
* Admin users can reset a user's MFA setting from the [Users page](https://app.sparkpost.com/account/users) ([EU](https://app.eu.sparkpost.com/account/users)). Upon the user's next login, they will be prompted to re-configure their MFA settings.
