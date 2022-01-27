---
lastUpdated: "12/16/2020"
title: "Multi-Factor Authentication (MFA)"
description: "How to Multi-Factor Authentication (MFA)."
---

Multi-factor authentication (MFA) adds an extra layer of security to your account. MFA allows you to use an authenticator mobile app such as Google Authenticator or DUO to verify your login. MFA prevents bad actors from accessing an account even if they've acquired the username and password.

* [Enabling Multi-Factor Authentication](#enabling-multi-factor-authentication)
* [Requiring Multi-Factor Authentication](#requiring-multi-factor-authentication-for-all-users)
* [Recovering Account Access](#recovering-access-to-account)

# Enabling Multi-Factor Authentication
You can enable MFA from your [Profile page](https://app.sparkpost.com/account/profile)([EU](https://app.eu.sparkpost.com/account/profile)). Have your authentication app open and click on **Enable Authenticator App Method** to start the process. Be sure to save your recovery code somewhere safe in case you ever lose your device. 

Once enabled, the next time you log in to your account, you'll see this extra authentication requested.

# Requiring Multi-factor Authentication For All Users
Requiring MFA enforces that *all* users on the account (including the admin) set up and use multi-factor authentication each time they log in. **Enabling MFA requirement will disable single sign-on for all users.**

Admin users can require MFA for all users from the from the [Account Settings page](https://app.eu.sparkpost.com/account/profile)([EU](https://app.eu.sparkpost.com/account/settings)). Once enabled users will be required to set up MFA next time they log in.

# Recovering Access to Account with Recover Code
In the event that you lose or replaced your authentication device, you have a few options to recover access to their account:
* Use your saved recovery code to login, then re-configure your MFA settings.
* Have an account Admin reset your MFA settings.

# Resetting Multi-Factor Settings as Admin
Admin users can reset a user's MFA setting from the [Users page](https://app.sparkpost.com/account/users)([EU](https://app.eu.sparkpost.com/account/users)), allowing them to log in with just their password. If MFA requirement is enabled, the user will need to re-configure MFA when they log in. Old recovery codes become invalid when MFA is reset or re-configured.