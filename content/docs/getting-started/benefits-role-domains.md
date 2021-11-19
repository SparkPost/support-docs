---
lastUpdated: "02/08/2020"
title: "The Benefits of Setting up Role Domains  (postmaster@ and abuse@)"
description: "What are Role Based Domains Role based domains like admin help sales are email addresses that are not associated with a particular person but rather with a company department position or group of recipients Spark Post now provides the capability to verify your sending domains using abuse and postmaster role..."
---

**What are Role Based Domains?**

Role-based domains (like admin@, help@, sales@) are email addresses that are not associated with a particular person, but rather with a company, department, position or group of recipients. SparkPost now provides the capability to verify your sending domains using abuse@ and postmaster@ role based domains. 

**Note:** When choosing this option to verify your sending domain, an email will be sent to the owner of the role based account for verification.

**Benefits for Setting up Role Based Domains**

There are some benefits to setting up a few role based domains.  The two important domains are abuse@mydomain.com and postmaster@mydomain.com.

* **abuse@** should be implemented so that individuals can easily send abuse information or complain about spam to a domain holder.
* **postmaster@** should be implemented to receive queries and reports.

A number of antispam systems still check these addresses, so messages the user sends can go to the spam folder if the antispam systems do not find an active address postmaster@ for the users domain.
