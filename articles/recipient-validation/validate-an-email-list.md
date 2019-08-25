---
title: "Validate an email list"
description: "TODO"
---

TODO: DESCRIPTION

TODO: VIDEO

## Upload a list

TODO: LIST TEMPLATE AND CRITERIA

To validate a list of emails, visit the [Recipient Validation](https://app.sparkpost.com/recipient-validation) ([EU](https://app.eu.sparkpost.com/recipient-validation)) page in the SparkPost app. You can upload a `.csv` file containing an email address per line. The list validation form accepts a max file size of `200MB` or around 10 million email addresses in a single list.

Here is a sample CSV for the list validation tool.

```
email@address.com
another@hello.com
ceo@email.com
```

## Validate the file

TODO: Confirm pricing, press validate

## Download results

After selecting your file, press the **Validate Email Addresses** button.

Once the validation is completed, download a list of the recipients by clicking on the **Download Rejected Recipients** button. You'll get a `.csv` file with the email addresses that we have information to share, including whether or not they are invalid, the reason, if they are a role address, or if they are a disposable address.

```
email,valid,reason,is_role,is_disposable,is_free
another@hello.com,false,Invalid Recipient,false,false,true
ceo@email.com,true,,true,false,false
```


