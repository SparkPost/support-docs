---
lastUpdated: "02/23/2023"
title: Blocklist Sources
description: This article will give you some basic information on our blocklist providers.
---

An email blocklist is a realtime database of sending IP addresses or domain names which are known to send spam or have poor sending practices.  There are several blocklist providers, but some of the common ones are: [Spamhaus](https://www.spamhaus.org/), [Barracuda Reputation BlockList](http://www.barracudacentral.org/rbl), and [SpamCop](http://www.spamcop.net/). Each blocklist has its own criteria for how an IP or domain ends up on the list and method for removal.  

Here is a breakdown of the different providers that we have available in our system:

| **Blocklist Provider** | **Type** | **URL for Additional Info** |
| --- | --- | --- |
| Spamhaus | IP based | [https://www.spamhaus.org/](https://www.spamhaus.org/) |
| SpamCop | IP based | [https://www.spamcop.net/](https://www.spamcop.net/) |
| Barracuda | IP based | [https://www.barracudacentral.org/rbl](https://www.barracudacentral.org/rbl) |
| Proofpoint | IP based | Passive blocklist detection available to SparkPost senders only. |
| Cloudmark (CSI) |IP and Domain based | [Additional Info](https://help.proofpoint.com/Proofpoint_Essentials/Email_Security/Administrator_Topics/Other_Features/Cloudmark_Sender_Intelligence_(CSI)_IP_Reputation_blocklisting_and_IP_address_removal) |
| abuseat.org | IP based | [https://www.abuseat.org/](https://www.abuseat.org/) |
| Lashback UBL | IP based | [https://blacklist.lashback.com/](https://blacklist.lashback.com/) |
| Sorbs | Domain based | [http://www.sorbs.net/](http://www.sorbs.net/) |
| psbl.org | IP based | [https://psbl.org/](https://psbl.org/) |


Short description of each provider:

**Spamhaus** - The Spamhaus Project is an international nonprofit organization that tracks spam and related cyber threats such as phishing, malware and botnets, provides real-time actionable and highly accurate threat intelligence to the Internet's major networks, corporations and security vendors, and works with law enforcement agencies to identify and pursue spam and malware sources worldwide.

**SpamCop** - The SpamCop Blocking List (SCBL) lists IP addresses which have transmitted reported email to SpamCop users. SpamCop, service providers and individual users then use the SCBL to block and filter unwanted email. The SCBL is a fast and automatic list of sites sending reported mail, fueled by a number of sources, including automated reports and SpamCop user submissions.

**Barracuda** - Barracuda Networks introduced the Barracuda Reputation Block List (BRBL – pronounced "bahr-bel") as a free DNSBL of IP addresses known to send spam. 

**Proofpoint** - Passive detection of sending exhaust data to scan for presence of Proofpoint headers that indicate mail is being blocked.  "Recent-Proofpoint" reports on IPs added to the blocklist in the past 24 hours, and "Proofpoint" provides a full listing for IPs. **(Note:  Proofpoint Blocklists  are available to SparkPost senders only.)**

**Cloudmark (CSI)** -  Cloudmark Sender Intelligence™ (CSI) is a comprehensive global sender monitoring and analysis system that delivers timely and accurate reputation on good, bad, and suspect senders. CSI uses real-time data from Cloudmark's Global Threat Network™ system to create the industry's most comprehensive sender reputation service.

**Abuseat.org** - The composite blocklist (CBL) takes its source data from very large mail server (SMTP) installations. The CBL only lists IPs exhibiting characteristics which are specific to open proxies of various sorts (HTTP, socks, AnalogX, wingate, Bagle call-back proxies etc) and dedicated Spam BOTs (such as Cutwail, Rustock, Lethic, Kelihos, Necurs etc) which have been abused to send spam, worms/viruses that do their own direct mail transmission, or some types of trojan-horse or "stealth" spamware, dictionary mail harvesters etc.  The CBL does not list based upon the volume of email from a given IP address.

**Lashback** - provides an unsubscribe blocklist ("UBL") is a unique, real-time block list of IP addresses which have sent email to addresses harvested from suppression files.

**SORBS** -  (Spam and Open Relay Blocking System) provides free access to its DNS-based Block List (DNSBL) to effectively block email from more than 12 million host servers known to disseminate spam, phishing attacks and other forms of malicious email.

**PSBL** - (Passive Spam Block List)  is an IP based blocklist that adds IP addresses when email is sent to a spam trap and that email is not identified as non-spam and the IP address is not a known mail server. 
