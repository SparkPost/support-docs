---
lastUpdated: "03/26/2020"
title: "Using Substitution Data"
description: "Introduction With the ever increasing demand for their attention your customers are bombarded with all sorts of messages Generic broadcast messaging will definitely be ignored Momentum's message generation supports dynamic content enabling you to send relevant and personalized messages to every recipient You can easily address each recipient by name..."
---

**Introduction**

With the ever-increasing demand for their attention, your customers are bombarded with all sorts of messages. Generic, broadcast messaging will definitely be ignored. Momentum's message generation supports dynamic content, enabling you to send relevant and personalized messages to every recipient. You can easily address each recipient by name and target specifics such as their interests or purchasing behavior.

Momentum applies substitutions per message using data provided as part of the JSON structures in the transmission's template and/or recipient list. Messages are generated for transmission for all specified recipients using the template and performing substitution of data as necessary. The substitutions can be applied in the top-level header of the message or in the message body. Substitution data can be a JSON object of key/value pairs of recipient-specific data, nested JSON objects, or even arrays of objects. In the simplest case, substitution is applied directly, while more complex cases can use conditional statements, looping over JSON arrays, or execution of built-in macros. You can also create your own custom macros.

**Sending Email Using Substitution Data** 

In this section, you will build on your knowledge of the Transmissions API by using simple key/value pair substitution in your inline template. The example in this section generates two personalized emails in one transmission using substitution data in the transmission and recipient JSON structures.

### Note

This tutorial assumes that you have completed the tutorial in [*Generating a Transmission*](/momentum/4/message-gen) . A general knowledge of command line tools, JSON, HTTP protocol, and templating languages is required.

You must have a valid API key to complete this tutorial. If you do not, see [*Creating an API Key*](/momentum/4/create-apikey) .

Follow these steps to use substitution data in a simple transmission:

1.  Specify your input data using substitution.

    The tutorial in [*Generating a Transmission*](/momentum/4/message-gen) included only the required transmission attributes in the JSON blob. The attribute "substitution_data" is optional and includes key/value pairs that will be provided to Momentum's substitution engine. This attribute can include any number of substitutions, and each key/value pair is completely user-defined. This tutorial uses substitution data as part of the transmission JSON structure and each recipient JSON structure.

    Using your text editor, create the following JSON file named `subdata_template.json`. Be sure to use your information for sender address, recipient addresses, and recipient names.

    {  
       "return_path":"*`sender@your_address.com`*",
       "substitution_data":{  
          "sender":"Momentum"
       },
       "recipients":[  
          {  
             "address":{  
                "email":"*`recipient1@their_address.com`*"
             },
             "substitution_data":{  
                "firstname":"*`recipient1 first name`*            "
             }
          },
          {  
             "address":{  
                "email":"*`recipient2@their_address.com`*"
             },
             "substitution_data":{  
                "firstname":"*`recipient2 first name`*            "
             }
          }
       ],
       "content":{  
          "from":"*`sender@your_address.com`*",
          "subject":"Sending Email Using Substitution Data",
          "text":"Hi {{firstname}},\r\nWelcome to {{sender}}!\r\nThis email was sent using substitution data."
       }
    }

    In the "content" object, the double curly braces define the start and end markers for the substitution data. For instance, **`{{name}}`** will be replaced with the name you specify for each recipient.

2.  Inject your message into Momentum.

    At the command line, enter the following command to inject your email:

    curl -X POST http://*`your.server.domain`*/api/v1/transmissions/ \
    -d @*`path/to/file/`*subdata_template.json \
    -H "Content-Type: application/json" \
    -H "Authorization: *`your_api_key`*"

    where `subdata_template.json` is the name of your JSON file, `application/json` specifies the format as JSON, and *`your_api_key`* is your valid API key.

    If successful, a response similar to the following will be displayed at the command line:

    {  
       "results":{  
          "total_rejected_recipients":0,
          "total_accepted_recipients":2,
          "id":"*`11668787484950529`*"
       }
    }

    This response shows that two emails were accepted and none were rejected.

3.  Confirm your email delivery.

    Verify that each recipient received a personalized email, then open the UI and confirm that two messages were successfully injected into Momentum (Targeted) and accepted by the ISP (Accepted). For instructions to view reports in the UI, see [*Using the UI for Reporting*](/momentum/4/reporting-ui) .

Congratulations! You have taken the first step to using Momentum's powerful substitution capability. This tutorial demonstrates simple substitution, yet Momentum supports many advanced features. To learn more about using substitution data including details about syntax, see the Substitution Reference available at [Momentum 4 REST API](https://support.messagesystems.com/docs/web-rest/v1_index.html).