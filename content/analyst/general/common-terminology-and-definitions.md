---
lastUpdated: "02/23/2023"
title: Common Terminology and Definitions
description: Not sure what a term or word means in our platform? Read this to find out!
---

 Email deliverability is full or specialized words and vocabulary. Throw in the unique aspect of Inbox Tracker's panel-based monitoring and undoubtedly there may be some questions on how different terms are defined or what they mean.  This article will cover some of our most common terms, phrases and words and what they actually mean within the platform.
 

**Blocklist** 
  
 An email blocklist is a realtime database of sending IP addresses or domain names which are known to send spam or have poor sending practices.  There are several blocklist lists, but some of the common ones are: [Spamhaus](http://www.spamhaus.org/),
 [Barracuda Reputation BlockList,](http://www.barracudacentral.org/rbl) and [SpamCop](http://www.spamcop.net/). Each blocklist has its own criteria for how an IP or domain ends up on the list and method for removal.


**Campaign Definition** 

 An email "campaign" has one of two definitions within the Analyst NextGen platform. Most emails within our platform are tracked to campaigns by looking at the following parts of the email: The from domain, the subject line, and the date sent.  Emails that are sent from the same sending domain, with the same (or similar) subjects formats, and are sent within a reasonable time-window will be reported upon together as a single email campaign.  The second way we track email campaigns, and the recommend approach for our Inbox Tracker clients, is through the use of a custom x-header.  If a sending domain is configured to track via a custom x-header, we will report upon any email received with that x-header and same value as a single campaign.
   

**Delivery Index** 
  
 Delivery Index is our unique deliverability measurement which provides you a single metric to determine how your sending domain is performing at the four major ISPs: Gmail, Outlook, Yahoo and AOL.  Unlike other scoring systems, Delivery Index measures your sending domain's reputation across all your IPs and ESPs. This realtime metric looks at your current sending behavior, your past sending behavior and the volatility of your inbox placement over time.


 Delivery Index scores are based on a 13 week (91 day) time period. We provide the score looking back 91 days from the end date of the time window you are viewing. Delivery Index trend arrows provide the amount of change over the previous 7 days.

**Delivery Index Score Meaning:** 
  
 9-10: Excellent reputation

 8 - 8.9: Average reputation

 < 8: Poor reputation

**Delete (Engagement)** 

 The delete event type is tracked whenever we find a message in the trash folder that has
 **not been read.** 
 This metric indicates that the user trashed the message and deleted it without ever opening it.


**DKIM** 

**DomainKeys Identified Mail (DKIM)** is designed to detect **email spoofing**. It allows the sender to digitally sign their email content and a receiver to check that the email claiming to come from a specific domain was truly authorized by the owner of that **domain**.
DKIM's **primary** purpose is to prevent forged or maliciously modified messages, a technique most often seen in phishing and email spam attacks. For more information about DKIM see <http://www.dkim.org/>


**Drove Traffic To** 
  
 This filter criteria searches any emails that contained a link that when clicked landed at the specified website domain. For example: If an email contained the following link: [m.redirect.com](http://m.redirect.com) that when clicked sent the user to [www.landingpage.com](http://www.landingpage.com) searching for *drop traffic to* of: "landingpage.com" will have returned the email with the [m.redirect.com](http://m.redirect.com) link in it.

**ESP** 

 An Email Service Provider (ESP) is a company which helps you send email by providing the actual emailing infrastructure, services and tools to help ensure your emails are delivered to your recipients. ESPs come in all different shapes and sizes: from self-service to full-service offerings.  Analyst NextGen is able to track and monitor emails sent from
 **any ESP provider.** 


**Inactives** 

 The inactives metric is a proprietary metric that tracks the overall engagement for your email lists. We define inactivity as a subscriber that used to read your emails, but has since stopped reading your emails, and is still actively engaged with other senders’ emails.  List engagement is one of the most important metrics that ISPs use when determining whether to deliver your email to the inbox or the spam folder. If a high percent of your list is inactive and you are seeing high spam rates, you may want to strongly consider trying to re-engage your inactive subscribers or implement proper list hygiene practices to ensure you are sending to your most engaged subscribers.

**Inbox (Placement)** 

 The inbox placement measures the % of email that made it to your recipients inbox instead of the spam/bulk folder.  We primarily track email placement using our live user panel of over 1M active email accounts. In addition, our Inbox Tracker clients have the option to also supplement the panel monitoring with seed-based monitoring.

**Missing** 

 The missing placement measures the % of email that was blocked or never made it to the intended seed addresses.  To measure missing, you must include the seed list on your email sends.  Emails may end up "missing" for several reasons. Some of the more common ones include: Sending too frequently, sending too high of volume in a short timeframe, poor email reputation, or often, the seed address will have been segmented out and not actually included in the email send.

**Projected Volume** 

 The projected volume of a campaign is our machine-based estimate of the # of recipients in which the email campaign reached the recipients' mailbox - either inbox or junk folder.  This estimate is a projection that is based upon our live user panel of over 1M active email accounts.  While we strive to ensure these estimates are accurate to within +/- 20% of actual send volumes, there are times where segmentation or sender skews may cause over or under projections.

**Projected Panel Reach** 

 The projected panel reach is our estimate of the sending domain's active list size the previous month. This estimate is a projection based upon the # of unique panelists that we received an email from the last full calendar month, for the given domain from our live user panel of over 1M active email accounts.  We strive to ensure these estimates are accurate to within +/- 20% of actual list size.

**Read (Engagement)** 

 While similar to an "open" reads in our platform are platform agnostic and do not depend upon image pixels or tracking codes in order to track.  Instead, we look at the actual IMAP read state of the message itself.  It's identical to a message going from **bold** to unbold within your email client. When that subject-line changes to unbold, we track the message as being "read".  Additionally, we only track **unique reads.** Many ESP reporting platforms will track **total opens** which may cause duplicate open events.

*Note: Engagement data is collected for up to 7 days from the original message receipt for each panelist. This extended time allows the subscriber to find and engage with the email message.* 

**Read+Delete (Engagement)** 

 Anytime you see a Read+Delete or R+D metric within our platform that is tracking a message which we found within the trash folder that had been read. It is usually, but not always, a subset of the read messages.  In some rare cases, we may find a message read in the trash folder that we did not track a read event. (Due to new panelist signups or timing issues when processing the email inbox).

*Note: Engagement data is collected for up to 7 days from the original message receipt for each panelist. This extended time allows the subscriber to find and engage with the email message.* 

**Seed List** 

 A seed list is an extra set of well-known email addresses that you add to your email list in order to track and monitor the inbox placement.  The seed lists should be added to your email send regardless of whether they match your target recipient list. Seeds are one of three data sources that we use within Analyst NextGen. The other two are Panel Data and Virtual Persona emails.

**Sending Domain**:

 As a post-send monitoring platform, Analyst NextGen uses the
 **sending domain** 
 from the
 **from** 
 email header (the email address which shows up in mail clients, such as Outlook) within the email to track email campaigns.  This may be different than your ESP monitoring tool(s), which may use the SMTP envelope-from domain.  When thinking about the two different from domains, you can think of it like this:  The
 **envelop-from** 
 is like the return-address on the outside of a letter's envelope. The
 **from-header** 
 is like the address on the letter-head itself.

**Spam (Placement)** 

 The spam placement measures the % of email that was sent to your recipients spam/bulk folder instead of the inbox.  We primarily track email placement using our live user panel of over 1M active email accounts. In addition, our Inbox Tracker clients have the option to also supplement the panel monitoring with seed-based monitoring.

**Spam Traps** 

 Spam traps or honey pots are email addresses that are created or reclaimed for the purposes of identifying spammers or senders with poor list management practices.  Spam traps come in two different flavors: **Pristine and Recycled.** **Pristine** spam traps are email addresses that are created for the purpose of preventing spammers. These addresses are created by mailbox providers, trap providers, and blocklist providers and have **never been valid email addresses.** They are hidden throughout the Internet and almost always picked up by webpage scrapers. **Recycled** traps, on the other hand, are email addresses that at one time were valid, but became dormant and reclaimed by the mailbox provider and turned into a trap address.  Hitting a pristine trap is always bad. And points to questionable list acquisition practices.  Hitting a recycled trap is not as bad, but points to poor list management and hygiene practices.

**SPF** 

 An **SPF** record is most often a TXT Domain Name Service (DNS) record which identifies the **mail servers** permitted to send email **on your behalf**. The primary purpose of **SPF** is to prevent spammers from forging your envelope From address. Note: SPF looks at the envelope From address not the header From. Read more about SPF here: <https://www.sparkpost.com/resources/email-explained/spf-sender-policy-framework/>


**Virtual Character** 

 Virtual Characters or Virtual Profiles are used by our research team in order to opt-in. We use these for a few reasons. The first is to stay up to date on any new sending domains that the company may be using and to look at any new welcome series. We also capture full header information for any campaign received by our virtual characters which can provide additional spam scoring information. Last but not least, we click through all the links in the virtual character email's in order to focus more on acquisition or affiliate marketing. Our virtual character campaigns populate the Top Sending Partner sections under Brand and Company Tracker. Note: Virtual Characters are not included as part of our metrics such as Read or Inbox rate since they are essentially our own seed accounts.
 

 Not finding the term or definition you're searching for? Let us know and we'll get it added right away!
 







