---
lastUpdated: "02/08/2020"
title: "Error messages when using SMTP"
description: "If you send mail through SMTP rather than REST there are a few errors that are specific to Spark Post The list below covers each of them as well as what to do when you receive them For error messages that are not listed below see one of the popular..."
---

If you send mail through SMTP rather than REST, there are a few errors that are specific to SparkPost. The list below covers each of them, as well as what to do when you receive them.

For error messages that are not listed below, see one of the popular SMTP reply code guides, like [http://www.greenend.org.uk/rjk/tech/smtpreplies.html](http://www.greenend.org.uk/rjk/tech/smtpreplies.html)

| Response                                                 | What it means                                                                  | How to correct it                                                                                                                                                                                                                   |
|:---------------------------------------------------------|:-------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 535 5.7.8 Sorry. *** No authentication type succeeded    | There is some problem with the authentication credentials. API key, user name, etc. | Confirm that the API key has the Send via SMTP permission and the user name SMTP_Injection.                                                                                                                                          |
| 550 5.6.0 JSON parsing error in X-MSYS-API               | The X-MSYS-API header is malformed in some way                                 | Fix the header's json. The error message usually supplies additional details about the problem. See [the API Docs](https://developers.sparkpost.com/api/smtp-api.html) for more information about the format.                       |
| 550 5.7.1 Unconfigured Sending Domain <demo.example.com> | The domain part of the "From" address isn't a configured sending domain         | Use a "From" address that uses a configured sending domain. See [Creating Sending Domains](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address) if you need to create a sending domain. |
