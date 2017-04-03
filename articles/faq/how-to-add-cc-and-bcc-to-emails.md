---
title: "How to Add CC and BCC to Emails"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/1948014-how-to-add-cc-and-bcc-to-emails"
description: "Introduction An email's header provides details about the sender and recipients in addition to descriptive information about the message Typically the header will include From displaying who sent the message and To displaying who received the message However you can also send an email as a Carbon Copy CC or..."
---

## Introduction

An email's header provides details about the sender and recipients, in addition to descriptive information about the message. Typically, the header will include "From", displaying who sent the message, and "To", displaying who received the message. However, you can also send an email as a Carbon Copy ("CC") or Blind Carbon Copy ("BCC").

Carbon Copy or "CC" indicates that the recipient received a "copy" of an email that was sent to another recipient. The email's header will include "To", showing the original recipient, and "CC", showing the recipient who received the copy. Recipients will see the email addresses of all the persons who received the email. Conversely, Blind Carbon Copy or "BCC" indicates that the recipient also received a "copy" of an email that was sent to another recipient, however, the recipients do not know to who the email was copied. The email's header will include only "To". The BCC recipient's email address is not visible to the other recipients. This capability enables you to protect the email addresses of your recipients. To maintain your recipient's privacy, you can send the email to yourself and BCC all your recipients.

When you create your transmission using the REST API, you can include CC and BCC recipients by using optional fields available in the Template and Recipient Lists API. Your recipients will then receive emails with the appropriate header.

## Sending Email with CC and BCC Recipients

In this tutorial, you will learn how to send an email as a CC and BCC using the REST API. It will build on your knowledge of the Template and Recipient Lists API by using optional fields to specify the CC and BCC recipients. The example in this tutorial specifies the recipients inline and uses a simple inline template with a plain-text message, but the transmission can also reference a stored template and recipient list. You can also [use the SMTP API to send CC and BCC recipients](https://www.sparkpost.com/api#/reference/smtp-api).

### Prerequisites

*   A valid SparkPost API key, [create a SparkPost API Key](https://app.sparkpost.com/#/account/credentials) if you do not have one, with the read/write permissions for [Transmissions](https://www.sparkpost.com/api#/reference/transmissions)
*   A valid Sending Domain configured in SparkPost, learn [how to create a sending domain](https://support.sparkpost.com/customer/portal/articles/1933318-create-sending-domains) and [how to verify a sending domain](https://support.sparkpost.com/customer/portal/articles/1933360-verify-sending-domains) if you do not have one configured already.

Follow these steps to send a simple transmission implementing CC and BCC recipients:

                **1\. Specify your /transmissions HTTP Request POST body:

* Please Note:**                                                                    

*   When using SMTPAPI and REST API for message copies, each CC and BCC message is given unique tracking (message_id) URLs
*   When using the REST API, the archive copy of the message will have unique tracking URLS
*   When using the REST API, there is no support for rcpt_type in the webhook events. To track the rctp_type of each message copy, the submitter should include this information in the recipient level meta data
*   When using the REST API method the submitter must ensure they use the same substitution data for each copy of the message
*   When using the REST API the submitter should only submit one set of message copies per submission. This will allow the submitter to correlate reports using the transmission ID. If the submitter chooses to submit multiple sets of message copies, they can correlate the copies by providing their own tracking data element in the meta data for each message in the set.
*   When using the REST API or the SMTP API, including TO, CC, BCC recipients will have an impact upon your reporting, each message sent to recipients will be included in the counts for "targeted_messages"

The Recipient List API supports a "header_to" field in the "address" attribute. This field will be displayed in the "To" header instead of the "email" field of the recipient. To send an email as a CC or BCC, you must specify the CC or BCC recipient using the "email" field and the recipient that you want displayed in the "To" header using the "header_to" field in the "recipients" JSON array. Each recipient must have the same substitution data and meta data, if included in the transmission.

The Template API supports a "headers" field in the "content" JSON array. This field is a JSON dictionary that can be used to specify additional headers in your emails, such as "CC". To include a "CC" header in your email, you must specify the CC recipient in the "recipients" JSON array, as previously described, and in the "headers" field in the "content" JSON array using the "CC" field.

**Note:** that the BCC and To recipients are not specified in the "headers" field. The "To" header is generated from the to_recipient's "email" field. 

Using your text editor, create the following JSON file named cc_bcc_example.json.
**NOTE: Be sure to update the following example JSON to use:**                                                     

*   **Your valid sending domain in all values for: return_path, content.from**                                                                  
*   **recipients[address].email values**       

**​**
```
{  
   "return_path":"sender@return_path.com",
   "recipients":[  
      {  
         "address":{  
            "email":"to_recipient@their_address.com"
         },
         "substitution_data":{  
            "some_sub_data":"SparkPost"
         }
      },
      {  
         "address":{  
            "email":"cc_recipient@their_address.com",
            "header_to":"to_recipient@their_address.com"
         },
         "substitution_data":{  
            "some_sub_data":"SparkPost"
         }
      },
      {  
         "address":{  
            "email":"bcc_recipient@their_address.com",
            "header_to":"to_recipient@their_address.com"
         },
         "substitution_data":{  
            "some_sub_data":"SparkPost"
         }
      }
   ],
   "content":{  
      "from":"sender@your_address.com",
      "headers":{  
         "CC":"cc_recipient@their_address.com"
      },
      "subject":"Sending Email with CC and BCC Recipients",
      "text":"Welcome to {{some_sub_data}}!\r\nThis is an example of including a CC and BCC header."
   }
}
```

In this example, the email will be sent to the to_recipient, as indicated in the email's "To" header, and a copy of the email will be sent to the cc_recipient, as indicated in the email's "CC" header. A second copy will be sent to the bcc_recipient. However, this recipient's email address will not be displayed.

Open a terminal with cURL in the PATH, and on the command line, enter the following command to inject your email:
```
curl -X POST https://api.sparkpost.com/api/v1/transmissions/ \
-d @path/to/file/cc_bcc_example.json \
-H "Content-Type: application/json" \
-H "Authorization: <your_sparkpost_api_key>"
```

If you encounter issues, here are some troubleshooting notes:

*   Make sure each line (except the last line) ends with a backslash, this continues the cURL command on the next line for readability. You can optionally exclude these if you keep the command on a single line.
*   cc_bcc_example.json is the name of your JSON file (make sure the path is correct from your present working directory
*   The Content-Type header === application/json (specifies the format as JSON)
*   your_api_key === your valid SparkPost API key with appropriate permissions

A successful 200 response should be displayed in the terminal's output:
```
{  
   "results":{  
      "total_rejected_recipients":0,
      "total_accepted_recipients":3,
      "id":"11977354662379529"
   }
}
```
This response shows that three emails were accepted by SparkPost for generation and zero were rejected (typically due to incorrect formatting of one or more [recipient objects](https://jsapi.apiary.io/apis/sparkpostapi/reference/recipient-lists.html), an active [Suppression List](https://jsapi.apiary.io/apis/sparkpostapi/reference/suppression-list.html) entry, or policy rejection.

Verify that your recipients received the emails by opening the [SparkPost Reports UI](https://app.sparkpost.com/#/reports/summary) and confirm that your message was successfully injected into SparkPost (Targeted) and accepted by the ISP (Accepted). 

Congratulations! You have used your knowledge of the REST API to send an email as a CC and BCC!