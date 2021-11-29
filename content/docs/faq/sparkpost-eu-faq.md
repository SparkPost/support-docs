---
lastUpdated: "02/26/2021"
title: "SparkPost EU FAQ"
description: "FAQ for our EU based Service..."
---

## How do I get started with SparkPost EU? 

Go to app.eu.sparkpost.com, sign up, set up your account, and start sending. Our new user guide provides more details on what to do once you’ve signed up - the steps are the same whether you have an US or EU based account.


## What’s different between an EU based account vs. a US based account?

Not much really. The signup link is slightly different (as noted above), and the endpoints you’re used to in the US have “eu” appended in them. See the table below for more details.

|    |   EU   |
| --- | --- |
|   API endpoint   |   api.eu.sparkpost.com   |
|   SMTP injection endpoint   |   smtp.eu.sparkpost.com   |
|   Default bounce domain   |   eu.sparkpostmail.com   |
|   Default tracking domain   |   eu.spgo.io   |


## Can I use the same domain in a SparkPost account and SparkPost EU account? 

Yes.


## Will SparkPost and SparkPost EU have the same features at all times? For example, if we add a feature to SparkPost, do we also add it to SparkPost EU? How does deployment work? 

Yes it will! When we deploy to SparkPost (which we do every single day) it’ll also go straight to SparkPost EU 


## What about people who want to use both US and EU centers?

You can have an account in each location, using the same sending domains, bounce domains, tracking domains, etc. Your experience will be the same in terms of UX and feature parity.


## How does SparkPost EU differ from SparkPost for partners?

They’ll need to leverage the new endpoints and hostnames. 


## Are all libraries and partner integrations supported? 

Not at this time. If you come across a 400 error trying to use an integration with SparkPost EU, please reach out to that integrator and ask them to support the new endpoints and hostnames.


## What are the advantages of using EU vs US? 

Data at rest in the EU is covered by all of the protections that localized data provides. We’re also covered by Privacy Shield for data transiting out of the country and in full compliance with GDPR. 
When sending from the EU, connection times to APIs and SMTP are significantly less if using SparkPost EU. This is critical for things such as the time to first send 
For instance, see these improvements for Transmission API latency in SparkPost EU (approx 5.7x faster)

  |      |   EU   |   US   |
  | --- | --- | --- |
  |   With Connection Reuse   |   33ms   |   190ms   |
  |   Without Connection Reuse   |   89ms   |   533ms   |


## Can I keep the same tracking domain when migrating from the SPC to SPC EU account?

Yes, you can reuse the same tracking domain, but please note that this will break any tracked links in messages sent from your original account. We recommend that you use a new subdomain if you need your existing links to continue to function.
