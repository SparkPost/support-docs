---
title: "Getting Started with Automated IP Warmup"
description: "A Useful Guide to Knowing When Automated IP Warmup is Right for You and How to Use It"
---

# IP Warm-up Definition
IP warming is the process of methodically adding campaign volume week-over-week to a new IP Address to establish a positive sending reputation with Internet Services Providers (ISPs). For a great introduction into the theory behind IP Warm-up as well as an expanded article on best practices, visit the [original IP Warm-up Knowledge Article](https://www.sparkpost.com/docs/deliverability/ip-warm-up-overview/).


# Why Automate the Warm-up Process?
Don’t we all have enough to do already? That’s the primary reason for automating the process. We understand that our customers have plenty to do and our goal is to handle as much of the email process as possible. By helping our customers automate routine processes we enable them more time to focus on their passion and reserve time for our Customer Success Team to focus on providing highly technical engagement and conversion optimization services. Automating the process also helps reduce the potential for errors, ensuring that your sending reputation is a reflection of your quality sending practices and list hygiene; not a harsh reminder that sometimes things get placed on the back burner. It’s just one of the ways we make email delightful. 


# Is Automating the Warm-up Process Right for You?
Although an incredibly valuable tool, automating the warm-up process isn’t right for everyone. In order to help avoid confusion, we’ve grouped possible scenarios into 1 of 4 categories. Review each category and follow the process that matches your workflow. 

**New customer or upgraded account with a single dedicated IP**
If you’re a new customer (Hi! Welcome to SparkPost!) or have recently upgraded your account you may have been assigned one or more dedicated IP addresses based on your sending volume. This is a great opportunity to control your deliverability destiny as  you will transition your traffic from shared pools to your own unique IP. Don’t worry, we’ll still make sure any traffic that is throttled from your dedicated IP will still be delivered using our shared pool. If your sending is relatively consistent day-to-day then our Automated IP Warmup Process will work great for you! Protect your growing reputation by learning and following our recommended [hygiene practices](https://www.sparkpost.com/blog/weekly-digest-024/).

**An existing customer adding a new dedicated IP to an existing (warm) IP pool** 
Many of our customers have large IP pools filled with dozens of dedicated IPs and segmented in a way that best fits their business workflow. If you’re a consistent sender that is adding a new IP to an existing IP pool, then great news - our Automated IP Warmup Tool is perfect! Add your fresh IP with [automated warmup enabled](https://developers.sparkpost.com/api/sending-ips) to an existing pool. SparkPost will send traffic through that pool normally until the sending limit for the new IP has been reached. Then that IP is automatically removed from eligibility for sending and the rest of your traffic is distributed between the IPs remaining in that pool. Each day, we’ll check to see if your new IP successfully delivered more than 90% of the traffic for that stage. If so, voila! Your IP will progress to the next stage and be able to send additional traffic the next day. If the IP didn’t reach the stage threshold, it will be held at the current stage but will still be able to send traffic the following day. 

**An existing customer with warm dedicated IPs that wants to create a new pool of cold IPs**
Maybe you’re in the process of changing your sending architecture or you’re adding a new business segment and want to separate the new IP from everything else. We can work with that! Using the [IP Pool Settings](https://developers.sparkpost.com/api/ip-pools/), you can designate an overflow pool for your newly created cold pool. Customers should select an overflow pool that consists of at least one warm IP that can handle the maximum amount of traffic scheduled for that day. Once the sending limit for all the cold IPs in the new pool has been reached, any excess traffic will be sent using the overflow pool. Each day, the app will check to see which IPs have reached 90% of their stage threshold and increase the stage (and subsequent volume) for those IPs. Over time, your new IP Pool will be able to handle all of the traffic being sent through it and your overflow pool will no longer be required. 

**A customer with inconsistent sending patterns or concerns with specific receiving domains**
If your team doesn’t send every day or has large bursts of sending only a couple times per day then automating the warm-up process may not be the best option for you. In order to help protect our customer’s deliverability and sending reputation we establish a daily limit during warm-up but we also enforce hourly and minute limits to smooth the flow of traffic directed towards a receiving domain. This means that consistent sending throughout each day is the best way to ensure your warm-up process maintains high deliverability and you build a positive sending reputation. If you’re sending is sporadic (one or two campaigns per week) or your subscriber base is relatively unengaged, you may not be able to warm up your new IP automatically as effectively as you could with an alternative strategy. We recommend sending to clean lists of engaged subscribers to build trust and establish a positive sending relationship on new IPs. 

# If Automating isn’t Right, What is? 
If you fall into the fourth category mentioned above or have other specific needs and concerns that aren’t covered here - that’s ok! Our incredibly dedicated team Customer Success Team or your personal Technical Account Manager can advise on the best course of action. Do some initial homework by visiting the [original IP Warm-up Knowledge Article](https://www.sparkpost.com/docs/deliverability/ip-warm-up-overview/) and get in touch!


# Nuts and Bolts
When you enable AutoIP Warm Up for an IP address (enabled automatically for newly purchased or assigned IPs) the stage of that IP will be set to Stage 1. Once you start sending traffic through the IP pool that contains the IP your warming up, we’ll include your cold IPs in the sending selection process up to the maximum number of emails for that Stage. Each day, the app checks to see what IPs have delivered at least 90% of the stage volume and will progress the successful IPs to the next stage. The day after those IPs meet the sending requirements for the current stage, they’ll be eligible to send a higher volume of traffic.

If enough traffic isn’t sent across the cold IP to progress through all the stages, don’t worry. Once the IP is at a comfortable position with your warm-up (where future traffic is expected to be less than double of the current stage) you’re clear to disable Automated IP Warmup. Uncheck the Automated IP Warmup enabled flag in the UI or disable `automated_ip_warmup` in the API.  This IP will then be included, without restriction, in the normal IP selection process for that pool. 

Our current schedule is based on best practices that we’ve had success with over the years. Cold IPs will need to successfully deliver at least 90% of the stage volume to be eligible to progress to the next stage. 

Stage-Based Progression Schedule

Stage Number | Target Volume | s.n. | t.v. 
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


* Hourly and Per Minute Burst  Limits
Hey, Listen! This is important. In order to protect your cold IP and sender reputation, we placed an hourly and per minute limit on the stages in addition to the per day limit listed in the table above. If you have consistent sending you might not even notice, but if your sending is typically done in one or two bursts a day - you may need to investigate an alternative warm-up process or use a different type of traffic to warm up the new IP. 


# Email Quality Reminder
Remember that quality will still win over quantity every time. This warm-up process is designed for senders with good habits, clean lists, and engaged subscribers. If you need a reminder on best practices check out our massive knowledge base [here](https://www.sparkpost.com/academy/)

Happy Sending!
