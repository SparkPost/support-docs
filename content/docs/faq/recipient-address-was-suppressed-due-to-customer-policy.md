---
lastUpdated: "02/08/2020"
title: "554 5.7.1 - Recipient address was suppressed due to customer policy"
description: "Question I received this error 554 5 7 1 recipient address was suppressed due to customer policy What does it mean How can I send to this email address Answer So the error message in the response you received is actually telling you why that particular email address is not..."
---

**Question:**

I received this error: 554 5.7.1 recipient address was suppressed due to customer policy. What does it mean? How can I send to this email address?

**Answer:**

So the error message in the response you received is actually telling you why that particular email address is not delivering as you expect:

554 5.7.1 recipient address was suppressed due to customer policy 

That person on the other end of that particular email address has resulted in one of a few different actions:
1. The address was invalid (address does not exist)
2. The user clicked the list-unsubscribe header
3. The user clicked one of your emails and flagged it as SPAM. This FBL (FeedBack Loop) event should add that email address to your Suppression List.

You can see which customers are on your account's Suppression List within the dashboard by navigating to **Recipients** > **Suppressions**, or by using our API, here is the documentation for Suppression Lists: [https://www.sparkpost.com/api#/reference/suppression-list](https://www.sparkpost.com/api#/reference/suppression-list)

You can use the API key to view who was on your account's Suppression List, but you need to set up your API so that you can pull the information. That requires enabling your Suppression Lists Read/Write Permission.

You can edit that by visiting this URL and clicking the Edit button for that particular API key and adding the Suppression Lists Read/Write permission: [https://app.sparkpost.com/#/account/credentials](https://app.sparkpost.com/#/account/credentials)

More information regarding the suppression list can be found here:  https://www.sparkpost.com/docs/user-guide/using-suppression-lists/

Some workarounds for this situation are:

1. Try sending to a different single email address (perhaps your own).
2. Find new ways to re-engage that customer on other channels such as your website, SMS (with their permission), social channels, etc...
3. If this is a known testing address of your own, you can remove the email address from your account's Suppression List, but ONLY do this if you KNOW that this email address is yours and used ONLY for development. Otherwise you will seriously damage your reputation with the customer and Sparkpost.com.
