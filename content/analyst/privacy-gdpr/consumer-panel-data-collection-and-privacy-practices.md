---
lastUpdated: "02/23/2023"
title: Consumer Panel Data Collection and Privacy Practices
description: Consumer panel data collection & Privacy Practices
---

 Our consumer panel is powered by a free email app called [Boxbe](https://www.boxbe.com). Boxbe is an email concierge app which allows consumers to better manage and control which messages make it to their inbox.
 

 This article will address some common questions about this consumer panel:
 

Q:  Does the email app change the reliability/accuracy of the data collection?

A:  No.  Our email processing monitors the **original** location that the message was placed in **prior** to any rules being run on the message itself.  This ensures that our inbox tracking is 100% accurate.  Similarly, our engagement monitoring accounts for the fact that the consumer panel may not read email at the same rate as the general population.   In addition, there is a large portion of our consumer panel which has disabled the automatic categorization and only uses the automatic cleanup; ensuring that these engagement metrics are exactly as the user behaved.

Q: Are users informed or made aware that their data is being used in this manner?

A: Yes. We believe we have gone above-and-beyond and have tried to be as transparent as possible to ensure that users are aware that when they approve the email app, that we will also aggregate their data and use it for inbox monitoring.  We do so in a few different ways:
 

1. On the homepage of Boxbe, the word **Free** is hyperlinked and asterisked and calls out that as a free service, commercial email data is monetized.
2. The footer of every page has links to the "Privacy Policy", "Terms of Service", "How We Use Your Data" and "EU-US Privacy Shield"
3. We have a clear and concise page dedicated to "[How We Use Your Data](https://www.boxbe.com/data-usage/)"
4. Our [Privacy Policy](https://www.boxbe.com/privacy/) is clear, in plain English, and large font.
5. When a user signs up, as a part of the registration process we provide a callout that informs the user: "What do we do with your email?"
6. The user must explicitly "Approve" access as a part of the OAUTH authorization
7. Upon signup, a Welcome Email is sent to the user notifying them that they just subscribed.
8. Gmail and many other ISPs send a notification email when an email app is connected to a user's account.


Q: How is email data protected?

A: We take every precaution to ensure that email data is properly anonymized and aggregated prior to reporting upon it within the Analyst platform.  We recently were awarded a patent for this redaction and anonymization process, which does not require any human interaction or involvement. This data is encrypted using AES-256 in Galois/Counter Mode (AES-GCM).  The encryption keys are rotated, at a minimum, weekly.  This data is stored for a period of 7 days prior to being purged permanently.  When we detect an email campaign as being from a commercial sender and a commercial campaign, we will then store that commercial message for a longer period, currently 27 months.
   
  
Q: Do humans ever manually inspect or review panelist emails?

A: As a general policy, no.  We have multiple data sources, including a compensated user panel which has provided explicit permission to review emails and tens of thousands of "virtual" email accounts that we own ourselves.  When manual inspection of an email is needed to fix a bug or improve an algorithm, we first use these controlled data sources first to inspect and review the message.  In rare cases, we may need to manually inspect the email headers of a panelist email to fix bugs in IP detection and/or campaign tracking.  When this occurs, the request is audited and requires pre-approval.  In addition, the message automatically has all PII removed/redacted from the headers prior to the email header being looked at by a human.

