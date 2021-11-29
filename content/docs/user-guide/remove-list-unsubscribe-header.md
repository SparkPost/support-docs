---
lastUpdated: "02/08/2020"
title: "Remove List-Unsubscribe Header"
description: "If you’re not familiar with the difference between a transactional email and a non transactional email you can find out more by clicking here By default every email Spark Post sends contains a List Unsubscribe header so email clients like Gmail know when to include an Unsubscribe button when viewing..."
---

If you’re not familiar with the difference between a transactional email and a non-transactional email, you can find out more by clicking [here](https://www.sparkpost.com/blog/commercial-transactional-emails-infographic/).

By default, every email SparkPost sends contains a `List-Unsubscribe` header, so email clients like Gmail know when to include an Unsubscribe button when viewing the email (you can handle unsubscribe actions with our [API](https://developers.sparkpost.com/api/suppression-list)).

However, unsubscribing often doesn’t make sense for transactional emails. The [SparkPost Transmissions API endpoint](https://developers.sparkpost.com/api/transmissions) allows you to mark an email as transactional with the attribute `options.transactional`. By default, `options.transactional` is set as `false`. Setting it as `true` when you send your email will cause SparkPost not to include the `List-Unsubscribe` header and make sure that no unsubscribe options will appear in recipients’ mail clients.

**Note**: Many recipients, especially those on Gmail might expect an unsubscribe button on their mail so it's important to use the transactional flag only where it makes sense for transactional messaging.
