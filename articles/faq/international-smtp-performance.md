---
title: "International SMTP Performance"
description: "Our servers are currently hosted in the US so chatty protocols like SMTP with a lot of round trips between client and server may be subject to greater than expected latency In performance sensitive situations we recommend that you use our RES Tful interface if possible or if you have..."
---

Our servers are currently hosted in the US so "chatty" protocols like SMTP with a lot of round trips between client and server may be subject to greater than expected latency.

In performance sensitive situations, we recommend that you use our RESTful interface if possible or if you have to send via SMTP, send from a server within the US. [This article has more details](https://www.sparkpost.com/docs/tech-resources/smtp-rest-api-performance/) on best practice for sending performance.

We are also working on providing endpoints in other regions - keep an eye on our [change log](https://www.sparkpost.com/docs/tech-resources/change-log-sparkpost/) or [#announcements on our community Slack](http://slack.sparkpost.com/) for updates. 
