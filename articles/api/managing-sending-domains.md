---
title: "Managing Sending Domains"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2253608-managing-sending-domains"
description: "Note This Knowledge Base Article Is For Spark Post Enterprise Only Managing Sending Domains Table of Contents Introduction Why is this Important What it does How it Works Guidelines Sending Domains Functionality The Set up Process What Happens with Existing Spark Post Elite Customers Frequently Asked Questions FA Qs a..."
---

#### Note: This Knowledge Base Article Is For SparkPost Enterprise Only

### Table of Contents

* [Introduction](#introduction)
* [Why is this Important?](#why-is-this-important)
* [What it does / How it Works](#what-it-does)
* [Guidelines: Sending Domains Functionality](#guidelines)
* [The Set up Process](#the-setup-process)
* [What Happens with Existing SparkPost Elite Customers?](#exisiting-customers)
* [Frequently Asked Questions (FAQs)](#faqs)

 ### Introduction
The Sending Domains API and corresponding User Interface (UI) allows a user to add a sending domain to SparkPost Elite. To that end, Sending Domains API provides self-service functionality for customers and Technical Account Managers (TAMs) to set up Sending Domains within SparkPost Elite. The documentation for the Sending Domains API can be found [here](https://developers.sparkpost.com/api/sending-domains.html).

 ### Why is this Important?
An important strategic initiative for SparkPost is to make it easier for service providers to do business with us. For the purpose of this document, this means customers who send email on behalf of other companies/entities as part of the services they provide. It may include Email Service Providers (ESPs), or it may include Enterprises sending email on behalf of several business units. The common factor is the need to manage multiple sending domains in an efficient manner, while ensuring that they are properly set up and ready for sending.

### What it Does / How it Works
The Sending Domains API and corresponding UI allows a user to add a sending domain to SparkPost Elite.

### Guidelines: Sending Domains Functionality

The Sending Domains functionality:

* Requires a user to set up and verify new Sending Domains using the <u>Sending Domains API</u> or via the SparkPost Elite UI.
* Restricts which domains are allowed in the From header / Sender header – a Verified Sending Domain must be used.
* Messages with an unknown Sending Domain in the From or Sender header will be rejected.
  * Messages with an unverified Sending Domain in the From or Sender header will be rejected.
  * Messages with no From or Sender header will be rejected.
  * Sending Domain will be taken from Sender header; if that's not present, From header.
  * Each subdomain must be created separately. Sub-domains are not automatically created from a top level domain.
* Requires the customer to verify the domain via **one of**    the following methods before messages can be sent from the Sending Domain. Messages from unverified domains will be rejected.
  * Verify DKIM,
  * Send an email to postmaster@<sending-domain>,
  * Send an email to abuse@<sending-domain>
* Optionally in SPE, for ESP-like customers, we can effectively remove the verification step requirement, by setting Sending Domains to verified when they are created. This means the domains are ready for sending after creation.
* Allows customers to optionally provide their own DKIM selector and keys to create DKIM signature for each sending domain their set up. If those are not provided, SparkPost will generate and provide the DKIM keys
* Note that for service provider customers, SparkPost can double-sign sending domains with an additional DKIM signature for a sparkpostelite.com domain (e.g.: <u>mydomain.sparkpostelite.com</u>) to comply with ESP domain alignment policies to improve deliverability.

![](media/managing-sending-domains/Image_Note_Tag_New_original.png)

The information being discussed is for outbound sending domains. Nothing discussed here affects FBLs, OOB bounces, relay webhooks, or any other inbound messages.

### The Set-Up Process: 

To set up new sending domains for new or existing customers, complete the following steps:

1. Call the Sending Domains API with the name of the domain (including any subdomains). Or use the UI. NOTE: This is required. e.g. email.mysendingdomain.com.
2. Optionally include DKIM information for the domain. See below for a sample JSON script.
    1. **Signing Domain.** This may be different from the sending domain. e.g. sparkpost.email.sendingdomain.com.
    2. **Selector.** The Signing Domain Identifier (SDID) may be set using the Sending Domains API. This appears in the d=field in the DKIM signature header.
    3. **Headers.** e.g. from: to:subject: date. This is optional, and will be default to "from:to:subject:date" if not provided.
    4. **The DKIM Private Key.**
    5. **The DKIM Public Key.** Place the DKIM public key in a DNS TXT record at myselector_domainkey.sparkpost.email.sendingdomain.com
3. DNS entries for DKIM.
4. Verify the sending domain in <u>one</u> of the following ways, once all the DNS entries have been set up. Service providers who have auto-verify set, will be able to skip this step as ALL the domains they set up via the Sending Domains API will be automatically verified.
    1. **DKIM:** Click on the "verify" link in the Sending Domains UI. Assuming the DKIM record has been properly configured, this should verify
    2. **postmaster@<sending-domain>:** Clicking "Verify" in the UI sends an email to postmaster@<sendingdomain>. Someone who has access to that mailbox must click on the link and verify the domain. This is to verify that an authorized user has set up the domain. Someone who doesn't own/control the domain should not have access to the postmaster mailbox.
    3. **abuse@<sending-domain>** before messages can be sent from the Sending Domain. Clicking "Verify" in the UI sends an email to abuse@<sendingdomain>.
    4. Once the domain is verified, it is ready to be used.

### Example: JSON Script
Here is an example JSON script for creating the Sending Domain mydomain.com - for step 2 above. The mail from this Sending Domain will be signed with d=sparkpost.mydomain.com. The DKIM public key would need to be placed in a DNS TXT record at brisbane._domainkey.sparkpost.mydomain.com**                                                                                                                                                                                                                                                                                                                                                
```json
{
  "domain" : "mydomain.com",
  "dkim" : {
    "signing_domain": "sparkpost.mydomain.com",
    "selector" : "brisbane",
    "headers" : "from:to:subject:date",
    "private": "MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQABAoGBAITb3BCRPBi5lGhHdn+1RgC7cjUQEbSb4eFHm+ULRwQ0UIPWHwiVWtptZ09usHq989fKp1g/PfcNzm8c78uTS6gCxfECweFCRK6EdO6cCCr1cfWvmBdSjzYhODUdQeyWZi2ozqd0FhGWoV4VHseh4iLj36DzleTLtOZj3FhAo1WJAkEA68T+KkGeDyWwvttYtuSiQCCTrXYAWTQnkIUxduCp7Ap6tVeIDn3TaXTj74UbEgaNgLhjG4bX//fdeDW6PaK9YwJBAM6xJmwHLPMgwNVjiz3u/6fhY3kaZTWcxtMkXCjh1QE82KzDwqyrCg7EFjTtFysSHCAZxXZMcivGl4TZLHnydJUCQQCx16+M+mAatuiCnvxlQUMuMiSTNK6Amzm45u9v53nlZeY3weYMYFdHdfe1pebMiwrT7MI9clKebz6svYJVmdtXAkApDAc8VuR3WB7TgdRKNWdyGJGfoD1PO1ZE4iinOcoKV+IT1UCY99Kkgg6C7j62n/8T5OpRBvd5eBPpHxP1F9BNAkEA5Nf2VO9lcTetksHdIeKK+F7sio6UZn0Rv7iUo3ALrN1D1cGfWIh2dj3ko1iSreyNVSwGW0ePP27qDmU+u6/Y1g==",
    "public":"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQAB"
  }
}
```

 ### Note to Existing SparkPost Elite Customers
For existing Elite customers, there will be a migration process to enable this functionality. There should not be any interruption to the sending of mail while customer domains are migrated to the new policy and all existing sending domains will continue to work and will be set to verified automatically.

For customers who would like any __new__ sending domains to be automatically set to verified contact your TAM to have your account set auto-verify = ON.

### Frequently Asked Questions (FAQs) 

**Q1: I have several sending domains I need to set up. How do I do that?**

A1: You need to set up each one using the UI or API. It's a separate call to the Sending Domains API for EACH sending domain you wish to set up. There is no "bulk set up" feature at this time.

**Q2: How do I set up double-DKIM signing?**

A2: It depends on what the other signature is. Assuming the second signature is something like customer.sparkpostelite.com, it is still done via our Operations Team during the customer build-out process. This means each of the sending domains for a customer will have the same second DKIM signature.