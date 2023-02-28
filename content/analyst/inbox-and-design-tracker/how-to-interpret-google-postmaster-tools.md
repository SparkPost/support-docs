---
lastUpdated: "02/23/2023"
title: How to Interpret Google Postmaster Tools
description: Google provides info for monitoring your domain/IP performance and reputation. Here is some info to help you interpret the data.
---

### **Delivery Errors:** Daily breakdown on issues related to the delivery of the messages.

* **Rate limit exceeded:** The Domain or IP is sending traffic at a suspiciously high rate, due to which temporary rate limits have been imposed. The limit will be lifted when Gmail is confident enough of the nature of the traffic.

* **Suspected spam:** The traffic is suspected to be spam, by our systems, for various reasons. Email content is possibly spammy: The traffic is suspected to be spammy, specific to the content.

* **Bad or unsupported attachment:** Traffic contains attachments not supported by Gmail.

* **DMARC policy of the sender domain:** The sender domain has set up a DMARC rejection policy.

* **Sending IP has low reputation:** The IP reputation of the sending IP is very low.

* **Sending domain has low reputation:** The Domain reputation of the sending domain is very low.

* **IP is in one or more public RBLs:** The IP is listed in one or more public Real-time Blackhole Lists. Work with the RBL to get your IP delisted.

* **Domain is in one or more public RBLs:** The Domain is listed in one or more public Real-time Blackhole Lists. Work with the RBL to get your domain delisted.

* **Bad or missing PTR record:** The sending IP is missing a PTR record.

### **IP Reputation:** Reports on IPs that were detected for the domain being reviewed.

* **Bad:** A history of sending an enormously high volume of spam. Mail coming from this sender will almost always be rejected at SMTP or marked as spam.

* **Low:** Known to send a considerable volume of spam regularly, and mail from this sender will likely be marked as spam.

* **Medium/Fair:** Known to send good mail, but is prone to sending a low volume of spam intermittently. Most of the email from this sender will have a fair deliverability rate, except when there is a notable increase in spam levels.

* **High:** Has a good track record of a very low spam rate, and complies with Gmail's sender guidelines. Mail will rarely be marked by the spam filter.

### **Spam Rate:** provides the percentage of user reported spam. Only emails authenticated by DKIM are eligible for spam rate calculation.


### **Domain Reputation:** data for the sending domain which can be affected by volume and user-reported Spam.

* **Bad:** A history of sending an enormously high volume of spam. Mail coming from this sender will almost always be rejected at SMTP or marked as spam.

* **Low:** Known to send a considerable volume of spam regularly, and mail from this sender will likely be marked as spam.

* **Medium/Fair:** Known to send good mail, but is prone to sending a low volume of spam intermittently. Most of the email from this sender will have a fair deliverability rate, except when there is a notable increase is spam levels.

* **High:** Has a good track record of a very low spam rate, and complies with Gmail's sender guidelines. Mail will rarely be marked by the spam filter.

### **Spam Feedback Loop:** flagged identifiers and spam rates based on user Feedback Loop Data.

### **Authenticated Traffic:** percentage of authenticated traffic for SPF, DKIM, and DMARC.

### **Encrypted Traffic:** percentage of traffic that is encrypted with TLS
