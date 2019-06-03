---
title: "Getting Started with Automated IP Warmup"
description: "A guide to knowing when Automated IP Warmup is right for you and how to use it"
---

# IP Warm-up Definition
IP warming is the process of methodically adding campaign volume week-over-week to a new IP Address to establish a positive sending reputation with Internet Services Providers (ISPs). Our Automated IP Warmup feature provides a stage-based approach to limit sending volumes while you're building a reputation for your new IP. For a great introduction into the theory behind IP Warm-up as well as an expanded article on best practices, visit the [original IP Warm-up Knowledge Article](https://www.sparkpost.com/docs/deliverability/ip-warm-up-overview/).


# Why Automate the Warm-up Process?
Warming up IPs can be a tedius process, by automating it, we hope to enable more time for you to focus on your passion and let us handle the more boring parts of email. Don't worry, there are still plenty of exciting parts of email for you to be involved. By helping our customers automate routine processes such as this we reserve time for our Customer Success Team to focus on providing highly technical engagement and conversion optimization services. Automating the process also helps reduce the potential for errors, ensuring that your sending reputation is a reflection of your quality sending practices and list hygiene and nothing else. It’s just one of the ways we make sending email a great experience. 


# Is Automating the Warm-up Process Right for You?
Although an incredibly valuable tool, automating the warm-up process isn’t right for everyone. In order to help avoid confusion, we’ve grouped possible scenarios into 1 of 4 categories. Review each category and follow the process that matches your workflow. 

**New or newly upgraded account with a single dedicated IP**
If your account is new (Hi! Welcome to SparkPost!) or you have recently upgraded your account you may have been assigned one or more dedicated IP addresses based on your sending volume. This is a great opportunity to control your deliverability destiny as  you will transition your traffic from shared pools to your own unique IP. Don’t worry, we’ll still make sure any traffic that is not sent from your dedicated IP will still be delivered using our shared pool. If your sending is relatively consistent day-to-day then our Automated IP Warmup Process will work great for you! Protect your growing reputation by learning and following our recommended [hygiene practices](https://www.sparkpost.com/blog/weekly-digest-024/).

**Adding a new dedicated IP to an existing (warm) IP pool** 
Many of our customers have large IP pools filled with dozens of dedicated IPs and segmented in a way that best fits their business workflow. If you’re a consistent sender that is adding a new IP to an existing IP pool, then great news - our Automated IP Warmup Tool is perfect! Add your fresh IP with [automated warmup enabled](https://developers.sparkpost.com/api/sending-ips) to an existing pool. SparkPost will send traffic through that pool normally until the sending limit for the new IP has been reached. Then that IP is automatically removed from eligibility for sending and the rest of your traffic is distributed between the IPs remaining in that pool. 

**You have warm IPs and want to create a new pool with cold IPs**
Maybe you’re in the process of changing your sending architecture or you’re adding a new business segment and want to separate the new IP from everything else. We can work with that! Using the [IP Pool Settings](https://developers.sparkpost.com/api/ip-pools/), you can designate an overflow pool for your newly created cold pool. Customers should select an overflow pool that consists of at least one warm IP that can handle the maximum amount of traffic scheduled for that day. Once the sending limit for all the cold IPs in the new pool has been reached, any excess traffic will be sent using the overflow pool. Once your new IPs are warmed up, the overflow pool will no longer be required. 

**Inconsistent sending patterns or concerns with specific receiving domains**
Consistent sending throughout each day is the best way to ensure your warm-up process maintains high deliverability and you build a positive sending reputation. If your sending is sporadic (one or two campaigns per week) or your subscriber base is relatively unengaged, you may not be able to warm up your new IP automatically as effectively as you could with an alternative strategy. We recommend sending to clean lists of engaged subscribers to build trust and establish a positive sending relationship on new IPs. 

## If Automating isn’t Right, What is? 
If you fall into the fourth category mentioned above or have other specific needs and concerns that aren’t covered here - that’s ok! Our incredibly dedicated Customer Success Team or your personal Technical Account Manager can advise on the best course of action. Do some initial homework by visiting the [original IP Warm-up Knowledge Article](https://www.sparkpost.com/docs/deliverability/ip-warm-up-overview/) and get in touch!


# Nuts and Bolts
Auto IP Warm up works by guiding new IPs through several stages until they are ready for regular email traffic. Each stage limits the number of emails that can be sent through that IP in a day. Once an IP sends enough, it will automatically be upgraded to the next stage. Any email traffic directed to an IP that has reached the stage limit will be redirected to the appropriate overflow pool. If you're going to need to use an overflow pool because all of the IPs in your current pool are cold, it's important to designate it through the UI or using the API. Failing to designate an overflow pool could have negative consequences on your IPs in warmup as we'll send over them if nothing else is available. In order to assign an overflow pool, your IP will need to belong to a pool that isn't the **default** pool that is attached to your account on creation. The **default** pool is unable to have any overflow pool assigned to it at this time. 

When you enable Auto IP Warm Up for an IP address (enabled automatically for newly purchased or assigned IPs) the IP will be set to Stage 1. Once you start sending traffic through the IP pool that contains the IP you're warming up, we’ll include the cold IP in the sending selection process up to the maximum number of emails for that stage. Our current schedule is based on best practices that we’ve had success with over the years. Each day, we’ll check to see if your new IP successfully delivered more than 90% of the traffic for that stage. If so, voila! Your IP will progress to the next stage and be able to send additional traffic the next day. If the IP didn’t reach the stage threshold, it will be held at the current stage but will still be able to send traffic the following day. 

If enough traffic isn’t sent across the cold IP to progress through all the stages, don’t worry. Once the IP is at a comfortable position with your warm-up (where future traffic is expected to be less than double of the current stage) you’re clear to disable Automated IP Warmup. This IP will then be included, without restriction, in the normal IP selection process for that pool. 



**Stage-Based Progression Schedule**

Stage Number | Target Volume | Stage Number | Target Volume 
------------ | ------------- | ------------- | -------------
Stage 1  | 200/day | Stage 16 | 400,000/day
Stage 2  | 500/day | Stage 17 | 500,000/day
Stage 3 | 1,000/day | Stage 18 | 600,000/day
Stage 4  | 2,000/day | Stage 19 | 750,000/day
Stage 5  | 5,000/day | Stage 20 | 1,000,000/day
Stage 6  | 10,000/day | Stage 21 | 1,250,000/day
Stage 7  | 20,000/day | Stage 22 | 1,750,000/day
Stage 8  | 40,000/day | Stage 23 | 2,000,000/day
Stage 9  | 50,000/day | Stage 24 | 3,000,000/day
Stage 10  | 75,000/day | Stage 25 | 4,250,000/day
Stage 11  | 100,000/day | Stage 26 | 5,000,000/day
Stage 12  | 150,000/day | Stage 27 | 6,000,000/day
Stage 13  | 200,000/day | Stage 28 | 7,50,000/day
Stage 14  | 250,000/day | Stage 29 | 10,000,000/day
Stage 15  | 325,000/day | Stage 30 | DONE



# Email Quality Reminder
Remember that in email, quality will still win over quantity every time. This warm-up process is designed for senders with good habits, clean lists, and engaged subscribers. If you need a reminder on best practices check out our massive knowledge base [here](https://www.sparkpost.com/academy/)

Happy Sending!
