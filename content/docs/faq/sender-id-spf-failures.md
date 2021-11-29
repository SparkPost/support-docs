---
lastUpdated: "02/08/2020"
title: "Sender ID and SPF Failures"
description: "Sender ID is known to fail when using mail-tester to check emails"
---

In tools such as [Mail-Tester](https://www.mail-tester.com) you will sometimes see in the Authentication section a line that reads like the following:

      "[Sender ID] example.com does not allow your server 35.xxx.xxx.xxx to use noreply@example.com"

      Sender ID is like SPF, but it checks the FROM address, not the bounce address.
      You do not have a SPF record, please add the following one to your domain example.com:

      v=spf1 a mx ip4:35.xxx.xxx.xxx ~all

These are relating to Sender-ID failures, not SPF failures. Unlike SPF, Sender-ID isn't really in widespread usage, and more importantly, it focuses on the From (sender) domain, not the bounce (Return-Path) domain.

If you look at the Source of the message (in the "Click Here To View Your Message" section), you will see that the SPF did pass:

      Received-SPF: Pass (sender SPF authorized) identity=mailfrom;
       client-ip=35.xxx.xxx.xxx; helo=mta200.spmta.com;
 
If you want to resolve this issue with the Sender-ID, you can do either of the following:

      1. Update the SPF record for your domain to read as follows:

            "v=spf1 include:_spf.sparkpostmail.com"

            or for SparkPost EU:

            "v=spf1 include:_spf.eu.sparkpostmail.com"

      2. Publish a proper Sender-ID record for your domain to read as follows:

            "v=spf2.0/pra include:_spf.sparkpostmail.com"

            or for SparkPost EU:

            "v=spf2.0/pra include:_spf.eu.sparkpostmail.com"
      
For more detail refer to this article at [openspf.org](http://www.openspf.org/SPF_vs_Sender_ID)
