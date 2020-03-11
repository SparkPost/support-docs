---
title: "Getting Started with Recipient Validation"
description: "Recipient Validation is an easy, efficient way to verify that email addresses are valid before you send."
---

Send with confidence: Recipient Validation helps you remove bad email addresses before you send to them to protect your [sender reputation](https://www.sparkpost.com/email-deliverability-guide/sender-reputation/) so your emails land in the inbox. Powered by the world's largest email and analytics platform, Recipient Validation uses millions of data points to eliminate undeliverable and toxic addresses from your list.

You can quickly [validate your email lists](./validate-an-email-list/) or [integrate Recipient Validation](./integration-guide/) into your sign up flow through the API.

Recipient Validation is available to all SparkPost senders on the Starter plan and higher.

## Validate an email list

Using Recipient Validation, you can quickly validate a list of email addresses. In addition to your regular [list hygiene](https://www.sparkpost.com/blog/sending-email-to-inactive-users/), you should be sure to verify your list when sending to recipients for the first time in a while, and when you migrate between email delivery providers.

Learn how [to validate your list](./validate-an-email-list/).

## Integrate the API

You may want to add Recipient Validation when you first collect an email address. When you validate email addresses the moment you collect them, not only are you able to block undeliverable and low-quality addresses from making it past your digital front door. Additionally, you're able to catch your user's typos and recommend a correction, so your user isn't confused when they never get emails from you.

[Learn how to protect your forms](./integration-guide/) with Recipient Validation.

## Understanding the results

Each recipient validation response comes back with information to help you decide whether to use the email address, or not. Let's learn about them.

### Result

The `result` field contains the overall status of this email. It will show the status of the email address as either `valid`, `risky`, or `undeliverable`. You should never send to addresses classified as `undeliverable`.

| Result          | Description |
| --------------- | --------------- |
| `valid`         | The email address passed all checks, and you should send to it. |
| `risky`         | The email address is risky to send to because it is suspected of hard bouncing. |
| `undeliverable` | The email address is undeliverable because of a syntax issue, an invalid domain, or it doesn't exist. |

#### Reason

Recipient Validation provides a `reason` field, which describes how it reached the `result`.

| Reason               | Definition |
|----------------------|---------------|
| `Invalid Syntax`       | Given email is not valid email syntax |
| `Invalid Domain`       | The domain does not exist or is not set up to receive email |
| `Invalid Recipient`    | Email address does not exist, according to our data |

### Did you mean?

When the response contains the `did_you_mean` field, it indicates there is probably a typo in the domain of the email address. An example of this is "gmial.com" instead of "gmail.com". You can pass this correction on to your user when you integrate Recipient Validation through the API or use it to correct the email address in your list.

### Email address types

#### Disposable email address

Disposable email providers are services that create email addresses that are discarded after one use or a short period of time. People use them to avoid giving out their real email address. Our data shows that disposable email providers have engagement rates of **less than 1%**.

#### Role-based email address

Role-based email addresses represent a group or activity, like sales or abuse. They tend to engage less, and unsubscribe and complaint more. These email addresses should be avoided since they risk harming your reputation.

#### Free email address

Free email providers such as Gmail allow anyone to sign up for an email address. In most cases, these email addresses are not low-quality leads. However, certain businesses may consider requiring professional email addresses and not allowing free personal ones.

