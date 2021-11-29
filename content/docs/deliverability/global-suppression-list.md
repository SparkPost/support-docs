---
lastUpdated: "02/08/2020"
title: "Global Suppression List"
description: "When deploying an email campaign you may notice that the number of recipients injected may not match the number of recipients targeted This is due to suppressions that are applied prior to the actual deployment Your injection list is first bounced against your own suppression list opt outs hard bounces..."
---

When deploying an email campaign you may notice that the number of recipients injected may not match the number of recipients targeted.  This is due to suppressions that are applied prior to the actual deployment. Your injection list is first bounced against your own suppression list (*opt-outs, hard bounces, spam complaints*) and then against SparkPost’s Global Suppression List.
SparkPost maintains a Global Suppression List (GSL) applied across all mail streams.  The GSL contains a number of common misspelled domains as well role addresses (*Mailbox Names for Common Services, Roles and Functions* ([RFC 2142](http://www.faqs.org/rfcs/rfc2142.html "RFC 2142")). 

[RFC 2142](http://www.faqs.org/rfcs/rfc2142.html "RFC 2142") assigns mailbox names to be used when contacting personnel at an organization.  These mailbox names should not be used for marketing, as they are role addresses built for functions, not personal use.  For example, abuse@ should be implemented so that individuals can easily send abuse information or complain about spam to a domain holder.  Role addresses are vulnerable to be harvested by spammers and therefore sending to them can harm your reputation. Sending to role addresses can cause a rise in spam complaints, blacklisted IPs/Domains and overall delivery issues.
SparkPost automatically blocks you from sending to role accounts because we want to help you achieve the best delivery possible.  If you would like more information on what role addresses are suppressed or have a special use case for including certain roles in your mailings please **[Submit a support request](https://www.sparkpost.com/submit-a-ticket?email[subject]=Web:%20Global%20Suppression%20List%20AQuery)**.

Posted by [Tonya Gordon](https://blog.sparkpost.com/author/tonya-gordon/ "Posts by Tonya Gordon")
