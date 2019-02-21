---
title: "Recipient Validation"
description: "Check if email addresses are valid before sending."
---

Recipient Validation checks email addresses to ensure you are sending to valid recipients. It runs addresses through a series of checks that catch many common problems:

| Reason               | What it means |
|----------------------|---------------|
| Invalid Email Syntax | Doesn't comply with email syntax standards. |
| Disposable Domain    | The domain is from a known disposable domain service. |
| Role Based Email     | Belongs to a role instead of a person. |
| Invalid Domain       | Domain doesn't exists or receive email. |
| Invalid Recipient    | Recipient doesn't exist or recieve email. |

Use the [API endpoint](#header-single-address-validation-api) to validate single addresses from your forms, or before you send a transactional emails. Check out [list validation](#header-email-list-validation) to validate entire email lists.

Recipient Validation is available for private access to SparkPost customers. Recipient Validation is not currently available to EU accounts, check back soon for availability.

## Single Address Validation API

The Recipient Validation [API endpoint](https://developers.sparkpost.com/api/recipient-validation) is the best way to check emails from sign-up and subscribe forms. In order to protect your reputation, you will want to validate an address before you send to it for the first time. The simple `GET` endpoint takes an email address through a URI parameter and returns whether the address is valid, and the reason if it's invalid.

If you already have large sets of recipients that aren't validated, it would be a good idea to validate each address before sending them another email. You can do this by conditionaly checking before your next tranmissions call, or by bulk validating using the list validation explained in the next section.

## Email List Validation

To validate a list of emails, head to the [Recipient Validation page](https://app.sparkpost.com/recipient-validation). From there you can upload a `.csv` file containing an email address per line:

```
email@address.com
another@hello.com
ceo@email.com
```

After selecting your file, press the **Validate Email Addresses** button.

Once validation is completed, download a list of the rejected recipients by clicking on the **Download Rejected Recipients** button. You'll get a `.csv` file with an invalid addresses and reason per line:

```
another@hello.com,Invalid Recipient
ceo@email.com,Role Based Email
```

The list validation form accepts a max file size of `200MB`, around 10M email addresses.
