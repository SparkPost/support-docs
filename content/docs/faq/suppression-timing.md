---
lastUpdated: "02/08/2020"
title: "Suppression timing"
description: "It can take a minute for suppression events like spam complaints unsubscribe requests and hard bounces permanent failure variety to be collected and processed Once a recipient is added to the suppression list subsequent attempts to deliver to that recipient will result in a Admin Failure code 25 In the..."
---

It can take a minute for suppression events like spam complaints, unsubscribe requests, and hard bounces (permanent failure variety) to be collected and processed.

Once a recipient is added to the suppression list, subsequent attempts to deliver to that recipient will result in a "Admin Failure" (code 25).

In the dashboard, you will see one of the following reasons in the 'Bounces' module:

554 5.7.1 recipient address was suppressed due to customer policy (Spam Complaint)
554 5.7.1 recipient address was suppressed due to customer policy (Bounce Rule)
554 5.7.1 recipient address was suppressed due to customer policy (Unsubscribe Rule)

[This article](https://www.sparkpost.com/docs/user-guide/using-suppression-lists/) offers more detail on working with suppression lists.
