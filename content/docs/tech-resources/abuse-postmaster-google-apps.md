---
lastUpdated: "02/08/2020"
title: "SparkPost abuse@  and postmaster@ Verification and Google Apps"
description: "If you’re using Google Apps to host your corporate email you won’t be able to create abuse or postmaster emails under your domain To get around this you need to create groups named abuse and postmaster Users that are members of these groups will receive emails sent to those addresses..."
---

If you’re using Google Apps to host your corporate email, you won’t be able to create abuse@ or postmaster@ emails under your domain*. To get around this, you need to create groups named “abuse” and “postmaster”. Users that are members of these groups will receive emails sent to those addresses (i.e. postmaster@domain.com).

Detailed instructions for creating groups can be found [here](https://support.google.com/a/answer/33343#adminconsole).

Once you’ve created your groups you should be able to receive emails sent to postmaster@ or abuse@ email addresses and verify them for your sending domain in SparkPost.

*Google creates and owns their own abuse@ and postmaster@ email accounts for each domain they host. They monitor your domain usage with their abuse@ and postmaster@ email addresses that you cannot access.
