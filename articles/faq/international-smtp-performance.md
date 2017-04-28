---
title: "International SMTP Performance"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2456461-international-smtp-performance"
description: "Our servers are currently hosted in the US so chatty protocols like SMTP with a lot of round trips between client and server may be subject to greater than expected latency In performance sensitive situations we recommend that you use our RES Tful interface if possible or if you have..."
---

Our servers are currently hosted in the US so "chatty" protocols like SMTP with a lot of round trips between client and server may be subject to greater than expected latency. 

In performance sensitive situations, we recommend that you use our RESTful interface if possible or if you have to send via SMTP, send from a server within the US. [This article has more details](https://support.sparkpost.com/customer/en/portal/articles/2429473-smtp-and-rest-api-injection-best-practices-for-improved-performance) on best practice for sending performance.

We are also working on providing endpoints in other regions - keep an eye on our [change log](https://support.sparkpost.com/customer/portal/articles/1936102-change-log) or [#changelog on our community Slack](http://slack.sparkpost.com/) for updates. 