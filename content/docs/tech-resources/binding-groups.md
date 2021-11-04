---
lastUpdated: "02/08/2020"
title: "How to Use Binding Groups"
description: "Your SparkPost Enterprise environment was provisioned with your specific messaging needs and industry segmentation best practices in mind. Bindings enable routing of individual messages over a designated group of IP addresses."
notification: "Binding groups are deprecated in favor of IP pools."
---

### Note: This Knowledge Base Article Is For SparkPost Enterprise Only

**Introduction**

Your SparkPost Enterprise environment was provisioned with your specific messaging needs and industry segmentation best practices in mind. Bindings enable routing of individual messages over a designated group of IP addresses. Each message sent **must** carry a binding designation.  Any transmission *without* a binding designation will be initially accepted, but will use a default binding group on your system which automatically blackholes all messages.

**Note**: *Messages assigned to the default binding are never attempted, so in your webhook event data, or Message Events API data, you will see a single reception event on the default binding for messages that did not initially have a binding assignment, but you will **not** see a delivery event for these messages.* 

The bindings on your account were established during on-boarding and were communicated in the "*Welcome to SparkPost Enterprise*                   " document.  If you need assistance retrieving your bindings, please contact your Technical Account Manager.

**How To**   

For REST injection, add a metadata key value pair in the transmission (json) at the transmission level:

`"metadata": {"binding": "<value>"}`

**Note**: *Setting the binding assignment in the metadata carries the additional benefit of the binding group being included in webhook events that contain metadata. However, it is possible to set the binding in a REST transmission call by including the binding group value in the headers.X-Binding JSON object (nested under the content array) as follows:* 

"headers": {
      "X-Binding": "binding"

For SMTP injection, add the following header:

`X-binding: <value>`

**REST Sample** 

```
{
  "options" : {
    "open_tracking" : true,
    "click_tracking" : true
  },
"return_path" : "bounces-123@example.company.com",
  "metadata" : {
    "binding": "marketing"
  },
  "recipients" : [
    {
      "address" : {
        "email": "joesmith@gmail.com",
        "name" : "Joe Smith"
      }
    }
  ],
  "content" : {
    "from" : {
            "email" : "From Name <no-reply@example.company.com>"
            },
    "subject" : "Simple Binding Test",
    "html" : "<p>hello world</p>
<p><br>
</p>",
  }
}
```

**SMTP Sample** 

```
X-MSYS-API: {"options" : {"open_tracking" : true, "click_tracking" : true}}
X-binding: marketing
Content-Type: text/html
Subject: Simple Binding Test
From: no-reply@mail.test.com
To: testaccount@gmail.com

<html>
<body>
hello world
</body>
</html>
```
