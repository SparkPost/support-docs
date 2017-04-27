---
title: "Translating JSON Results to CSV"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2474861-translating-json-results-to-csv"
description: "If you've ever run the Metrics Transmissions or Message Events AP Is you've seen the results displayed in JSON like this type delivery campaign id Example Campaign Name customer id 1 delv method esmtp device token 45 c 19189783 f 867973 f 6 e 6 a 5 cca 60061 ffe..."
---

If you've ever run the Metrics, Transmissions, or Message Events APIs, you've seen the results displayed in JSON like this: 

```json
{
  "type": "delivery",
  "campaign_id": "Example Campaign Name",
  "customer_id": "1",
  "delv_method": "esmtp",
  "device_token": "45c19189783f867973f6e6a5cca60061ffe4fa77c547150563a1192fa9847f8a",
  "event_id": "92356927693813856",
  "friendly_from": "sender@example.com",
  "ip_address": "127.0.0.1",
  "ip_pool": "Example-Ip-Pool",
  "message_id": "000443ee14578172be22",
  "msg_from": "sender@example.com",
  "msg_size": "1337",
  "num_retries": "2",
  "queue_time": "12"
}
```

So what is JSON and how do you translate it into a different format like a CSV file for further analysis?  

## What Is JSON?

JSON stands for JavaScript Object Notation. It is a lightweight way to store and transfer data. It's easy to read in it's native format and easy to understand. You can read more about JSON at the [w3schools.com](http://www.w3schools.com/json/default.asp) website.

## Translating JSON to CSV Format

To translate the JSON results to a CSV file, you will need the help of a tool that can make the transformation. There are quite a few available for free on the internet, although some sites do want a small fee if the JSON is over a certain size. Simply put "json to csv" or "json to excel" into your favorite browser. One we have found to be particularly reliable is at [https://json-csv.com/](https://json-csv.com/). You simply copy the JSON and paste it into the textbox on the site and it converts the raw JSON to a CSV format ready to download.  

Of course if you are feeling adventurous, you can write your own JSON to CSV translator. One of the great things about JSON is that it can be parsed out using nothing more than javascript.

Happy Sending!