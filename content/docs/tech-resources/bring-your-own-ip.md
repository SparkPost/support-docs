---
lastUpdated: "02/08/2020"
title: "Bring Your Own IP (BYOIP)"
description: "SparkPost's Bring Your Own IP program provides senders of large volumes of email with the ability to quickly switch from their existing provider or on-premises solution without having to worry about warming up new IPs, managing reputation, or communicating changes to their end customers. The BYOIP service provides IP portability for large volume senders focused on deliverability, inboxing, and customer satisfaction."
---
SparkPost's Bring Your Own IP program provides senders of large volumes of email with the ability to quickly switch from their existing provider or on-premises solution without having to worry about warming up new IPs, managing reputation, or communicating changes to their end customers. The BYOIP service provides IP portability for large volume senders focused on deliverability, inboxing, and customer satisfaction. 
Bring Your Own IP is about IP reputation control and simplicity. Large volume email senders take considerable time and care to ensure their IP’s have a good reputation. This program is designed to decrease the time it takes to transition from an existing messaging provider to SparkPost. It removes the need for a developer to have to create technology to split traffic between two different locations. It also eliminates the time a developer would spend manually watching and changing how and when traffic is split during a traditional warm up period. Additionally, Bring Your Own IP removes the risks around IP warmup, ensuring that the sender’s customers have a seamless and safe transition without worry of ISPs treating you like a new sender. The service aims to maximize the benefits of SparkPost quickly, efficiently, and with limited risk to the sender
The BYOIP service allows you to bring over a /24 that you own and manage, but you allow us to route messages through them.

Please reach out to your sales representative or Technical Account Manager about your particular needs and details on pricing.

### FAQs

**Q: When and where is BYOIP available?**
A: Available in the US at the end of June 2018. Available in Europe at the end of Sept 2018.

**Q: Is there a charge for BYOIP?**
A: Yes, there is a startup cost of per instance or occurrence. 

**Q: What is the smallest range of IPs I can port over**
A: A /24 (which contains 254 usable address of 256 total including the 0 and 255 host addresses)

**Q: Does everything on the /24 have to be cut over at once?**
A: Yes all IPs to the /24 need to be cut over at once. It’s a limitation of how the internet works.

**Q: What will the process be to bring my own IP blocks over?**
A: Customer provides SparkPost an LOA (Letter of Authorization) on customer letterhead. The LOA lists IP Range(s) being moved, SparkPost authorization to announce, our ASN (23528), and a signature. SparkPost does research based on the LOA confirming ownership and investigates current customer internet configuration. Our Network Ops and TAM teams meet with the customer to discuss and plan the migration. Note that migrations vary wildly between customers. The customer account is configured, tested with standard Sparkpost IPs, and released to the customer. Customer and TAM configure the environment and prepare for migration. SparkPost & customer execute the agreed migration plan. Finally, the customer confirms migration succeeded and email is flowing.

**Q: Will I need to schedule a maintenance window to stop injecting into my current MTA or email provider in order to cut over to my IPs now being broadcast by SparkPost?**
A: Yes. We need to plan a hard cut for sending of IPs. The method and length of time required for the cut depends on network design and your requirements. SparkPost will help with planning and executing the migration. 

**Q: How will we pre-configure our SparkPost set up so that once SparkPost is announcing my IPs all of my traffic is segmented properly?**
A: The change is announced via BGP. SparkPost will provision the customer environment, provide temporary SparkPost owned IPs for testing, and hand over the environment to the customer. The customer and TAMs will then pre-configure the account in preparation of the cut over date. During provisioning, SparkPost assigns all of the customer IPs directly to a predefined IP pool within the customer account. The customer provided IPs will not function for sending until the scheduled cut over has been completed. IPs can be moved into other pools manually or using scripts.

**Q: Is configuring of IPs to accounts/subaccounts and message streams something I can do myself or do I need to contact a TAM to do this?**
A: You have full control over which IP Pools the BYOIP IPs belong.  

**Q: Will anyone else be able to use my IPs or will they solely be allocated to my account?**
A: Any IPs that are part of the BYOIP program are specially assigned to your account and cannot be reassigned to a different customer’s account.

**Q: Will I also be able to purchase and use SparkPost IPs and how would they be provisioned and used?**
A:Yes, you can purchase additional SparkPost IPs.  You have full control over your IP pools and can assign your BYOIP IPs and SparkPost IPs as you see fit.

**Q: Can I see a report that shows all of my IPs and how they're allocated to what accounts/subaccounts**
A: The Sending IP API and IP Pools UI will include a “customer_provided” boolean value that is is true if the IP is part of a customer owned block brought in using the BYOIP program.

**Q: How will I go about getting my IPs back if we choose to leave SparkPost?**
A: To remove an announcement, the customer submits a support ticket with the request to SparkPost and the range will be removed within 10 business days. 

**Q: Can I keep my branded hostname?**
A: Yes - the customer will continue owning the PTR - the reverse lookup will be the same. 

**Q: Will we need to do anything with SPF?**
A: No - the customer will continue owning the SPF and will not change.
