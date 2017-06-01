---
title: "Requirements For Sending Domains"
description: "At Spark Post we strive to ensure that all of our customers are Responsible Senders We do this by providing guidance on udeliverability best practices for inbox placement u providing real time feedback on your sends and by enforcing policies that protect our sending reputation and the reputation of our..."
---

At SparkPost we strive to ensure that all of our customers are **Responsible Senders**.  We do this by providing guidance on [deliverability best practices for inbox placement](https://www.sparkpost.com/docs/deliverability/optimizing-deliverability-and-inbox-placement/), providing real-time feedback on your sends and by enforcing policies that protect our sending reputation and the reputation of our customers.

The gold standard for a **Responsible Sender** is one who sends only to those recipients who want and expect the content, and one who practices good list hygiene as follows:

* Confirms email addresses for all recipients (double opt-in)
* Does not send to invalid email addresses
* Stops sending to recipients who don't open and read their content any more
* Stops sending to recipients who have unsubscribed
* Has a clear web presence, usually where a customer can sign up and manage their experience

As part of being a **Responsible Sender,** we ask all customers to complete the sending domain validation process -- after which your domain(s) will be activated and ready for sending.  This process has two steps:

1. Ownership Verification (DKIM or Abuse/Postmaster setup)
1. Compliance Review

Once ownership of your sending domain has been verified, the details are passed to our Compliance team who complete the review of your domain.  At this point your sending domain will have a status of "pending" (![](media/requirements-for-sending-domains/pending-icon.png)) for up to an hour until our compliance checks are complete. Once the review is complete and your sending domain passes the checks, a nice green tick (![](media/requirements-for-sending-domains/green-tick.png) and ‘ready to send’ is displayed under your sending domain.

## If Your Sending Domain Is Blocked...

If your sending domain is blocked (![](media/requirements-for-sending-domains/Screen_Shot_2016-12-09_at_12.08.26_PM_original.png), it's generally because the requirements below are not met, your domain is already in use on another SparkPost account or your domain has been previously blocked for sending abusive traffic through our service or another provider.

## Domain Requirements

* You must own or have administrative access to your domain -- that is confirmed when you complete the [Sending Domain Verification Steps](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#step-2-verifying-domain-ownership)
* An A record or MX record in DNS must exist for your domain
* The organizational domain cannot be used across more than one SparkPost account (for example, you cannot have mail.acme.com associated with one account while alert.acme.com belongs to another account)

## Website Requirements  

Your domain must have a live and working website at `http://<sending-domain>` or `http://www.<canonical-domain>`. Note that the canonical domain is the main domain name including TLD but without any subdomain elements. For instance, a sending domain of *mail.example.com* has the canonical domain *example.com*.

That website must follow these guidelines:

* Is not under construction or a holding page
* Contains your privacy policy outlining how you work with your customers' data
* Does not contain content that violates our [Messaging Policy](https://www.sparkpost.com/policies/messaging/)
* Resides in the same country from where you registered your account

If you make changes to your blocked sending domain and would like us to re-evaluate your domain, please [submit a support request](https://www.sparkpost.com/submit-a-ticket/?email[subject]=Web:Reevaluate%20Sending%20Domain)

## Additional Resources:

* Having trouble setting up your sending domain? See our article on how to [Create a Sending Domain](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address)
* A step by step guide to setting up your account for success with our [New User Guide](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/)
