---
title: "DKIM Signing by IP Pool"
Description: "DKIM signing by IP pool allows service providers to brand (or white label) the DKIM signature of the messages they send on behalf of their customers/senders. It gives the ability for service providers to use their own DKIM signing domain for groups of senders where having an individual DKIM domain for each from domain is impractical (e.g. because the service provider doesn’t have the ability or access to..."
---

# Introduction #

DKIM signing by IP pool allows service providers to brand (or white label) the DKIM signature of the messages they send on behalf of their customers/senders. It gives the ability for service providers to use their own DKIM signing domain for groups of senders where having an individual DKIM domain for each from domain is impractical (e.g. because the service provider doesn’t have the ability or access to change their customers’ DNS, or the number of sending domains required of their customer base is very large.) It allows service providers to have different DKIM domains for each group of senders on different IP pools for more granular control of reputation management. This feature also allows the branding of the DKIM domain(s) registered with Yahoo (and similar inbox providers) who use DKIM keys/selectors as the basis for feedback loops.

_Note_: This feature is currently available on SPC, SPC EU and our Enterprise customers on Next Gen Architecture. Enterprise customers, please contact your TAM for an update on the availability of this feature.  

## DKIM Signing Logic ##

The following explains the logic of how SparkPost will sign messages based upon signing domain and/or IP pool settings.

<br>

### **DKIM Signing Domain = From Domain** ###

For senders where the from domain and the DKIM signing domain (`d=`) match, you can use the sending domains API to create the domain and verify it using the DKIM method. Any messages (regardless of IP Pool being used) sent using that from domain will DKIM sign using the same `d=` domain. 

**Example:**
