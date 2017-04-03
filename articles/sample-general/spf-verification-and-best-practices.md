---
title: "SPF Verification and Best Practices"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2464405-spf-verification-and-best-practices"
description: "Spark Post provides our customers with a mechanism to configure the Sender Policy Framework SPF in your DNS and to verify that configuration for your Sending Domains Here are a few things to try to help you verify the SPF for your Sending Domain s in Spark Post SPF can..."
---

SparkPost provides our customers with a mechanism to configure the Sender Policy Framework (SPF) in your DNS and to verify that configuration for your Sending Domains.

Here are a few things to try to help you verify the SPF for your Sending Domain(s) in SparkPost:

**SPF can take up to 24 hours for SparkPost to verify**                                                

If it doesn't verify right away, then wait a few hours and try to verify again. 

**Make sure the is only one SPF record per domain**                                           

Sometimes there are multiple SPF entries for a domain which can cause the SparkPost verification mechanism to fail.  Combine your SPF records for a domain into one record

*Incorrect*

     myawesomedomain.com   TXT  "v=spf1 include:emaildomain1.com ~all"

     myawesomedomain.com   TXT  "v=spf1 include:[sparkpostmail.com](http://sparkpostmail.com/) ~all"

*Correct*

     [myawesomedomain.com](http://myawesomedomain.com/)   TXT   "v=spf1 include:[emaildomain1.com](http://emaildomain1.com/) include:[sparkpostmail.com](http://sparkpostmail.com/) ~all"

**Remove any SPF entries that are no longer used**                                        

If you are no longer using an email provider, remove them from your SPF record in your DNS.  The SPF specification specifically limits the number of lookups that can happen during a SPF check, so keeping unused entries out of your SPF record can reduce lookup failures.

**SparkPost will only verify entries that will allow a soft fail (~all).  Remove any - or ? from the SPF record**                                                                                                    

The soft fail option (~) for SPF tells an ISP that if the message fails for any reason, mark the message with the appropriate reason code, but accept the SPF record as valid.

**SPF Record Length**              

Make sure that the SPF record is no longer than 255 characters.  Check with your hosting company to make sure that they do not have a shorter limit for SPF DNS records.