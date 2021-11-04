---
lastUpdated: "02/08/2020"
title: "Why do we need to configure DKIM to send anything?"
description: "Q I tried sending after configuring my sending domain but it didn't go through I m getting the error that it's not configured I did not configure DKIM because I was sending via SMTP Why is it necessary A As a leader in the sending industry your sending reputation and..."
---

Q: I tried sending after configuring my sending domain but it didn't go through. I'm getting the error that it's not configured. I did not configure DKIM because I was sending via SMTP. Why is it necessary?

A: As a leader in the sending industry, your sending reputation - and ours - is extremely important to us. We want to do everything we can to ensure that your emails get into the recipient inboxes every time. The best way to do this is by requesting all of our customers configure their DKIM. There are 2 main reasons for this:

1.  DKIM has become an industry standard. It's a fair assumption to say almost all recipient servers use it. So if an email comes in and it doesn't have DKIM configured, that affects the reputation of the domain sending the email - in other words, you. We want your emails to get in the inbox every time. Configuring DKIM helps ensure you're successful. 
2.  Spammers try to avoid authentication. They don't want anything traced back to them, for obvious reasons. Requiring DKIM means they are accountable for the messages they send, like anyone else using SparkPost. Because sending spam impacts our sending reputation (and therefore yours), we ensure this is properly configured.

While configuring DKIM requires a few extra steps during your setup, we feel it's worth it for the extra deliverability it provides. We hope you do, too!

You can also us our DKIM tool for your DKIM needs [DKIM Validator](https://tools.sparkpost.com/dkim).
