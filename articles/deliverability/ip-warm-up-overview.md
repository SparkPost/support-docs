---
title: "IP Warm-up Overview"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/1972209-ip-warm-up-overview"
description: "IP Warm up Definition IP warming is the process of methodically adding campaign volume week over week to a new IP Address to establish a positive sending reputation with Internet Services Providers IS Ps IP Warm up Summary IS Ps view email from a new IP Address as suspicious until..."
---

### IP Warm-up Definition

IP warming is the process of methodically adding campaign volume week-over-week to a new IP Address to establish a positive sending reputation with Internet Services Providers. (ISPs)

### IP Warm-up Summary 

ISPs view email from a new IP Address as suspicious until they establish a positive sending reputation. It takes 4 to 8 weeks to achieve maximum deliverability (depending on targeted volume and engagement). Warming could take longer if receivers don’t perceive an email as opt-in. Certain ISPs limit senders to thresholds until they build a sender reputation. For example AOL limits new senders to 5k/day and Outlook limits to 20k/day for the first week.

SparkPost recommends starting off on the right foot with the cleanest data first. Focus warming your most engaged subscribers and then add in the older segments as you progress. Older segments should be added to the engaged segments in chunks of 10% to 25% as not to tip your reputation from good to bad. Send a re-engagement or win-back campaign to the segments that are older than six months to a year (depending on your sending frequency). Be sure to change up the content to try to re-engage. The goal during your warm-up process is to send to subscribers who are least likely to complain and bounce. This would include those that have opted-in most recently and are consistent openers/clickers.

During the Warm-up phase the more consistent you are with volume, frequency, complaint and bounce levels, the faster you will establish a positive sending reputation.  If you send infrequently, anything less than weekly it will take more time to build a positive sender reputation.

### IP Warm-up Plan 

**Key to Success**           

![](media/ip-warm-up-overview/Key_to_Success_Chart_original.png) 

**What to Expect**          

Once you begin warming up your IPs you can expect some bulking and blocking to occur.  It is key to stick with the plan. Below are details of what you can expect and actions to take.

* **Bulking** at Yahoo, AOL, Gmail. Typically clears up after a few sends with solid positive metrics, but it can take time to get inbox delivery. **The key is to keep sending.**                        
* Possible **blocking** by ISPs can occur if the list isn’t engaged enough or if you are going over those daily caps per ISP. The key is to segment carefully and potentially pull back on volume to the number of allowed delivered for a week and then begin ramping back up the ISP effected. **Again the key is to keep sending.**                            
* It is important to monitor your metrics and adjust the plan accordingly during the Warm-up period.

### Why is an IP Warm-up important?

**Warm-up Matters**        

![](media/ip-warm-up-overview/Screen_Shot_2015-05-06_at_7.19.13_PM_original.png)

| Quick Warm-Up:                                                                                                     | Slow Warm-Up:                                                                                                                                                                                                                         |
|:-------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <ul><li>ISPs see volume spikes</li><li>Unknown Senders</li><li>Blocks/Filtering/Rate Limiting will occur</li></ul> | <ul><li>ISPs see the gradual build in volume</li><li>Good reputation develops over time</li><li>Blocks/Filtering/Rate Limiting rarely occurs (only occurs when engagement and complaint rate ratios are in poor standing). </li></ul> |

**IP Warm-up Helps Build Your Sender Reputation**                                           

Sender Reputation is how receivers view you and your mail.

Email reputation controls access to the inbox

* Bad reputation = Spam Folder or Blocks
* Good reputation = Inbox

Reputation can effect the Domain and/or IP Address and will be based on:

* Spam Complaints
* Invalid email addresses (hard bounces)
* Spamtrap hits
* Authentication (SPF, Sender ID, DKIM, DMARC)
* Third-party blacklistings
* Engagement

Positive affects on your reputation are:

* Opens
* Clicks
* Authentication – DKIM, SPF, Sender ID, DMARC

Negative affects on your reputation are:

* Poor or insufficient permission
* High recipient complaints (report as spam)
* Poor list quality/hygiene - Bad email addresses
* IP Address and Domain blacklistings
* Spam Trap hits
* Large spikes in volume

**The Fundamentals of Reputation**                           

Key Takeaways:

* Opt-ins are most important
* If people do not want your mail, your reputation suffers
* Receivers and metrics are judge and jury when it comes to getting delivered to the inbox.
* You can not transfer your reputation from your previously used IP.
* If you use the same domain that reputation can follow you, however ISPs like Gmail use the reputation of the domain coupled with the reputation of the IP therefore you must follow the warm-up process.
* ISPs trust metrics from their users and what they observe therefore no Brand will get special treatment over another.
* B2B senders must follow the same warm-up process as B2C senders as many business domains are now hosted by Yahoo, Outlook, Gmail, AOL, etc.

### Permission and Engagement is Key

Permission is the cornerstone of building a good sender reputation.

* Subscribers complain about mail they are not expecting to receive.
* Are you sending more frequently than you said you would?
* Did they sign up for exactly what they are receiving?
* Are you sending content other than what you said you would?
* Are you following best practices by staying up on the Can-Spam Act and the CASAL laws?

**Why is Engagement Important?**                         

ISPs track how engaged subscribers are with an email and its sender, and the nature of the engagement.

* Positive actions may include opening a message, adding an email address to the contact list, clicking through links, clicking to enable images, and read rate such as scrolling through the message.
* Negative actions may include reporting the email as spam, deleting it, moving it to the junk folder, or ignoring it.
* Engagement ratings are another compelling reason to use only opt-in or confirmed opt-in email marketing lists. Opt-in maximizes the likelihood of engagement, because in theory there is a relationship already established with the receiver.

**Remember Quality always wins out over Quantity.**                                       

* There is a charge for the volume you send. If the message is never opened that cost is wasted.
* Lower ROI when including disengaged subscribers in your campaigns.
* Disengaged subscribers are the common cause of complaints, spam traps, hard bounces which can affect deliverability/inbox placement to Engaged subscribers which lower your ROI.
* Run regular re-engagement campaigns to win back the disengaged subscribers.
* Send to the disengaged subscribers less frequently than engaged subscribers.

**How to Keep your List Highly Engaged**                                 

* Send relevant content to engaged subscribers.
* Set subscribers’ expectations from the beginning.
* Give people who opt- in to your subscription lists choices on how often they’ll receive emails from you (e.g., once daily, a weekly digest, as items become available or go on sale). If you send infrequently, make that clear. Ask them to whitelist you as they opt-in.
* Deploy a good onboarding program educating them on expectations.
* Keep your lists clean.
* Begin with your registration forms. If you have the option to block spammy, personal, or role-based email addresses, do so.
* As your lists age, weed out non engaged subscribers.

### Spam Traps

**Pristine Spam Traps**           

Email addresses created solely to capture spammers (sometimes referred to as Honey Pots). These email addresses were never owned by a real person, do not subscribe to email programs and of course will never make a purchase. If you are hitting pristine traps, this typically indicates you have a bad data partner.

**Recycled Spam Traps**           

Email addresses that were once used by a real person but abandoned and then recycled by ISPs as spam traps. Before turning on an abandoned email address into a spam trap, ISPs will return an unknown user error code for a period of time (6 to 12 months). If you are hitting a recycled spam trap, this typically indicates that your data hygiene process is not working.

**How to Avoid and Remove Spam Traps**                               

* Do not purchase or rent lists.
* Remove hard bounces.
* Continuously re-engaged your inactive subscribers.
* Remove disengaged subscribers once several re-engagement attempts have been made.