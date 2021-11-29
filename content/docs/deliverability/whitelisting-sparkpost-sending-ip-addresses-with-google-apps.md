---
lastUpdated: "02/08/2020"
title: "Whitelisting SparkPost sending IP addresses with Google Apps"
description: "If you are experiencing delays or other deliverability issues to your domains hosted by Google Apps please whitelist the Spark Post sending I Ps using the Google documentation https support google com a answer 60751 To find out what Spark Post sending I Ps to whitelist depends on whether you..."
---

If you are experiencing delays or other deliverability issues to your domains hosted by Google Apps please whitelist the SparkPost sending IPs using the Google documentation [https://support.google.com/a/answer/60751](https://support.google.com/a/answer/60751) 

To find out what SparkPost sending IPs to whitelist depends on whether you are using dedicated IPs or shared IPs.

* If you are using dedicated IPs then go to **Configuration** > **IP Pools** in the app to look up your IPs.  You can also get this information from the IP Pools API endpoint
* If you are using a shared pool then you may identify what IPs your mail is being sent out of by looking in the Summary Report and clicking on "Sending IPs" tab.  Select the last 7 days in the report filter to ensure all IPs are displayed.  Your mail will be sent across all IPs in the shared pool you are assigned to in a round robin manner.  Keep in mind that it is possible, especially for newer customers, that your shared IP pool assignment may change as your sending reputation stabilizes. You may also get this information from the Metrics API endpoint.
