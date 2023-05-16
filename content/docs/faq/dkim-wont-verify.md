---
lastUpdated: "02/08/2020"
title: "My DKIM Won't Verify"
description: "Q Why won't my DKIM record verify A While configuring your Sending Domains you need to verify that the DNS entries you have made are available to Spark Post and ES Ps for use The DNS TXT records you create have a TTL Time To Live value associated with them..."
---

Q: Why won't my DKIM record verify?

A: [While configuring your Sending Domains](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#prerequisites), you need to "verify" that the DNS entries you have made are available to SparkPost and ESPs for use. The DNS TXT records you create have a TTL (Time To Live) value associated with them. This value is important (in cases where you have been unable to verify your Sending Domain's DNS DKIM record). The TTL is typically measured in seconds. For example a TTL value of 60 = 1 minute.

When you click the "verify" link on the Sending Domains configuration page, SparkPost makes a request to DNS to see if that record is available. Sometimes, the TTL may cause changes you've just made to not be "visible" to SparkPost yet. So if you don't see a message saying your DKIM is verified, just wait a bit and refresh the page.

You can test if your changes have "propagated" across DNS by using a tool like the following (we do not endorse this site or any particular tool, this is just for example): [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
