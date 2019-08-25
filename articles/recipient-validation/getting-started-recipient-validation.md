---
title: "Getting Started with Recipient Validation"
description: "TODO"
---

Recipient Validation helps you remove bad email addresses before you send to them to protect your [sender reputation](https://www.sparkpost.com/email-deliverability-guide/sender-reputation/) so your emails land in the inbox. You'll catch many common problems, including syntax errors and non-existent mailboxes, so you are guarded against bounces, human errors, and even fraud.

You can quickly [validate your email lists](/docs/recipient-validation/validate-an-email-list/) or [integrate Recipient Validation](/docs/recipient-validation/integration-guide/) into your sign up flow through the API.

Recipient Validation is available to all SparkPost senders on Starter plan and higher.

## Validate an email lists

TODO: WHEN YOU VALIDATE A LIST OF EMAILS

## Integrate the API

TODO: WHEN YOU SHOULD USE THE API

The Recipient Validation [API](https://developers.sparkpost.com/api/recipient-validation) is the best way to validate an email address when you first collect it from sign-up forms, subscription forms, and more. To protect your reputation, you should validate an address before you send to it for the first time. The API takes an email address through a URI parameter and returns whether the address is valid, the reason if it's invalid, as well other data to help you decide if you'd like to accept the address.

If you already have large sets of recipients that aren't validated, you can add a check before your transmissions request or validate the addresses using the in-app list functionality.


## Understanding the results

Each validation response comes back with several pieces of information that you can use to decide whether or not you want to send to it. Let's learn about them.

### Result

The `result` field contains the overall status of this email. It'll be `valid` `risky`, or `undeliverable`. You should never send to addresses classified as `undeliverable`.

| Result          | Description |
| --------------- |   |
| `valid`         |   |
| `risky`         |   |
| `undeliverable` |   |

#### Reason

TODO: REASON DESCRIPTION

| Reason               | Definition |
|----------------------|---------------|
| `Invalid Syntax`       | TODO |
| `Invalid Domain`       | TODO |
| `Invalid Recipient`    | TODO |

### "Did you mean"

TODO: DID YOU MEAN DESCRIPTION

### Email address and provider types

#### Disposable email providers

Disposable email providers are services that create email addresses that are discarded after one use or a short time period. People use them to avoid giving out their real email address. Our data shows that disposable email providers have engagement rates of **less than 1%**.

#### Role-based email addresses

Role email addresses represent a group or activity, like sales or abuse, and not an individual. They tend to have a lower engagement rate and higher unsubscribe and complaint rate. These email addresses should be avoided since they risk harming your reputation.

#### Free email providers

Free email providers such as Gmail allow anyone to sign up for an email address. In most cases, these email addresses are not low-quality leads. However, certain businesses may consider requiring professional email addresses and not allow free personal ones