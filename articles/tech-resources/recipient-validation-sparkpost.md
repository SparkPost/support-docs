---
title: "Recipient Validation"
description: "An easy, efficient way to verify that email addresses are valid before you send."
---

Recipient Validation is an easy, efficient way to verify that email addresses are valid before you send. It runs addresses through a series of checks that catch many common problems, including syntax issues and non-existent mailboxes. 

[Contact sales](https://www.sparkpost.com/recipient-validation/) for pricing.

You can use the [API](#header-single-address-validation-api) to validate single addresses when you initially collect them, or before you send out the emails. You can also [validate](#header-email-list-validation) entire email lists in a single batch.

Possible reasons why an email address would be invalid include:

| Reason               | Definition |
|----------------------|---------------|
| `Invalid Syntax`       | Doesn't comply with email syntax standards. |
| `Invalid Domain`       | Domain doesn't exist or receive email.     |
| `Invalid Recipient`    | Recipient doesn't exist or receive email.   |
| `Customer Bounce`    | Recipient is on your customer suppression list because of a hard bounce.   |

The service also returns information about the following:
| Check                        | Definition  |
|------------------------------|---------------|
| Role-based addresses         | Mailboxes used for a job or group of people that may lead to higher bounce rates and more spam complaints. |
| Disposable mailbox providers | A service that provides temporary addresses that expire after a short period.  |


## Validation API

The Recipient Validation [API](https://developers.sparkpost.com/api/recipient-validation) is the best way to validate an email address when you first collect it from sign-up forms, subscription forms, and more. To protect your reputation, you should validate an address before you send to it for the first time. The API takes an email address through a URI parameter and returns whether the address is valid, the reason if it's invalid, as well other data to help you decide if you'd like to accept the address.

If you already have large sets of recipients that aren't validated, you can add a check before your transmissions request or validate the addresses using the in-app list functionality.

## Email List Validation

To validate a list of emails, visit the [Recipient Validation](https://app.sparkpost.com/recipient-validation) ([EU](https://app.eu.sparkpost.com/recipient-validation)) page in the SparkPost app. You can upload a `.csv` file containing an email address per line. The list validation form accepts a max file size of `200MB` or around 10 million email addresses in a single list.

Here is a sample CSV for the list validation tool.

```
email@address.com
another@hello.com
ceo@email.com
```

After selecting your file, press the **Validate Email Addresses** button.

Once the validation is completed, download a list of the recipients by clicking on the **Download Rejected Recipients** button. You'll get a `.csv` file with the email addresses that we have information to share, including whether or not they are invalid, the reason, if they are a role address, or if they are a disposable address.

```
email,valid,reason,is_role,is_disposable
another@hello.com,false,Invalid Recipient,false,false
ceo@email.com,true,,true,false
```
