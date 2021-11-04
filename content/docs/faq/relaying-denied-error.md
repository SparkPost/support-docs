---
lastUpdated: "02/08/2020"
title: "Relaying Denied error"
description: "If you are getting a Relaying denied error while trying to connect to smtp sparkpostmail com it is likely because you are not connecting to our SMTP endpoint using SSL STARTTLS and AUTH LOGIN Please check that You are using port 587 or port 2525 when connecting from a Google..."
---

If you are getting a 'Relaying denied' error while trying to connect to smtp.sparkpostmail.com, it is likely because you are not connecting to our SMTP endpoint using SSL/STARTTLS and AUTH LOGIN. 

Please check that: 

* You are using port 587 (or port 2525 when connecting from a Google Compute Engine environment)
* That you are connecting using STARTTLS (sometimes labeled SSL)
* That you are using AUTH LOGIN for the credentials (a username of SMTP_Injection and the password being the API key you created)
* And your sending domain must already be set up and listed as 'ready to send' in your Sending Domains dashboard
