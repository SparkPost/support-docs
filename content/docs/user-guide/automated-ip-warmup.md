---
lastUpdated: "02/08/2020"
title: "Getting Started with our Automated IP Warmup Feature"
description: "A guide to knowing when Automated IP Warmup is right for you and how to use it"
---

IP warming is the process of methodically adding campaign volume week-over-week to a new IP Address to establish a positive sending reputation with Internet Services Providers (ISPs). Our Automated IP Warmup feature provides a stage-based approach to limit sending volumes while you're building a reputation for your new IP. For a great introduction into the theory behind IP Warm-up as well as an expanded article on best practices, visit the [original IP Warm-up Knowledge Article](https://www.sparkpost.com/docs/deliverability/ip-warm-up-overview/).


## Why Automate the Warm-up Process?
Warming up IPs can be a tedius process, by automating it, we hope to enable more time for you to focus on your passion and let us handle the more boring parts of email. Don't worry, there are still plenty of exciting parts of email for you to be involved. By helping our customers automate routine processes such as this we reserve time for our Customer Success Team to focus on providing highly technical engagement and conversion optimization services. Automating the process also helps reduce the potential for errors, ensuring that your sending reputation is a reflection of your quality sending practices and list hygiene and nothing else. It’s just one of the ways we make sending email a great experience. 


## Is Automating the Warm-up Process Right for You?
Although an incredibly valuable tool, automating the warm-up process isn’t right for everyone. In order to help avoid confusion, we’ve grouped possible scenarios into 1 of 4 categories. Review each category and follow the process that matches your workflow. 

**New or newly upgraded account with a single dedicated IP**
If your account is new (Hi! Welcome to SparkPost!) or you have recently upgraded your account you may have been assigned one or more dedicated IP addresses based on your sending volume. This is a great opportunity to control your deliverability destiny as  you will transition your traffic from shared pools to your own unique IP. Don’t worry, we’ll still make sure any traffic that is not sent from your dedicated IP will still be delivered using our shared pool. If your sending is relatively consistent day-to-day then our Automated IP Warmup Process will work great for you! Protect your growing reputation by learning and following our recommended [hygiene practices](https://www.sparkpost.com/blog/weekly-digest-024/).

**Adding a new dedicated IP to an existing (warm) IP pool** 
Many of our customers have large IP pools filled with dozens of dedicated IPs and segmented in a way that best fits their business workflow. If you’re a consistent sender that is adding a new IP to an existing IP pool, then great news - our Automated IP Warmup Tool is perfect! Add your fresh IP with [automated warmup enabled](https://developers.sparkpost.com/api/sending-ips) to an existing pool. SparkPost will send traffic through that pool normally until the sending limit for the new IP has been reached. Then that IP is automatically removed from eligibility for sending and the rest of your traffic is distributed between the IPs remaining in that pool. 

**You have warm IPs and want to create a new pool with cold IPs**
Maybe you’re in the process of changing your sending architecture or you’re adding a new business segment and want to separate the new IP from everything else. We can work with that! Using the [IP Pool Settings](https://developers.sparkpost.com/api/ip-pools/), you can designate an overflow pool for your newly created cold pool. Customers should select an overflow pool that consists of at least one warm IP that can handle the maximum amount of traffic scheduled for that day. Once the sending limit for all the cold IPs in the new pool has been reached, any excess traffic will be sent using the overflow pool. Once your new IPs are warmed up, the overflow pool will no longer be required. 

**Inconsistent sending patterns or concerns with specific receiving domains**
Consistent sending throughout each day is the best way to ensure your warm-up process maintains high deliverability and you build a positive sending reputation. If your sending is sporadic (one or two campaigns per week) or your subscriber base is relatively unengaged, you may not be able to warm up your new IP automatically as effectively as you could with an alternative strategy. We recommend sending to clean lists of engaged subscribers to build trust and establish a positive sending relationship on new IPs. 

### If Automating isn’t Right, What is? 
If you fall into the fourth category mentioned above or have other specific needs and concerns that aren’t covered here - that’s ok! Our incredibly dedicated Customer Success Team or your personal Technical Account Manager can advise on the best course of action. Do some initial homework by visiting the [original IP Warm-up Knowledge Article](https://www.sparkpost.com/docs/deliverability/ip-warm-up-overview/) and get in touch!


## Nuts and Bolts
Auto IP Warm up works by guiding new IPs through several stages until they are ready for regular email traffic. Each stage limits the number of emails that can be sent through that IP in a day. Once an IP sends enough, it will automatically be upgraded to the next stage. Any email traffic directed to an IP that has reached the stage limit will be redirected to the appropriate overflow pool. If you're going to need to use an overflow pool because all of the IPs in your current pool are cold, it's important to designate it through the UI or using the API. Failing to designate an overflow pool could have negative consequences on your IPs in warmup as we'll send over them if nothing else is available. If you are eligible to use our shared pools, traffic from your **default** pool will overflow to the shared pool by default. Note that the **default** pool can **only** overflow to the shared pool. If you're not eligible for shared pool access or would like to use a different approach for overflow, please move the warming IP to a different pool and set the overflow pool appropriately. 

When you enable Auto IP Warm Up for an IP address (enabled automatically for newly purchased or assigned IPs) the IP will be set to Stage 1. Once you start sending traffic through the IP pool that contains the IP you're warming up, we’ll include the cold IP in the sending selection process up to the maximum number of emails for that stage. Our current schedule is based on best practices that we’ve had success with over the years. Each day, we’ll check to see if your new IP successfully delivered more than 90% of the traffic for that stage. If so, voila! Your IP will progress to the next stage and be able to send additional traffic the next day. If the IP didn’t reach the stage threshold, it will be held at the current stage but will still be able to send traffic the following day. 

If enough traffic isn’t sent across the cold IP to progress through all the stages, don’t worry. Once the IP is at a comfortable position with your warm-up (where future traffic is expected to be less than double of the current stage) you’re clear to disable Automated IP Warmup. This IP will then be included, without restriction, in the normal IP selection process for that pool. We'll automatically disable Warmup if the IP has a stage > 1 and hasn't progressed to a new stage in the last 10 days so that there are no surprises if you forget to turn the feature off. 



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



## Automated IP Warmup Using Engagement Recency Data
Welcome to the expert level! One great perk of being a SparkPost Enterprise customer is the ability to use your own **engagement data** to warm up your new IP. ISPs prefer mail that their customers actually want to receive. The best indicators that a recipient actually wants your mail in their inbox are a) a high interaction rate and b) a low complaint rate. Since we know that recipients that open emails are far less likely to complain, taking engagement into account when trying to build the reputation of a cold IP is only logical. 

Your Technical Account Manager is able to set a specific **engagement age** for each dedicated IP you have in the warmup process. When you inject messages into the IP Pool containing these cold IPs, we'll evaluate how long ago each recipient interacted with your mail. If the last time that recipient engaged with your email is less than the engagement age of your dedicated IP, we'll send the mail over your cold IP. If that recipient hasn't engaged recently enough, we'll redirect this mail out of an already warm IP in the same pool. 

The engagement age setting does not change the stage thresholds mentioned above. For example, in stage 10 your target volume for the day is 75,000 emails - with an engagement age of 60 days, your cold IP will target sending mail to 75,000 recipients all of which whom have engaged with your mail in the last 60 days. All while your warm IPs in the current or overflow pool handle everything else. 

Lastly, Automated Warmup will not disable after 10 days as long as the warming IP has an engagement age set. Think of it as a safety switch and just make sure to turn off AWU when your IP is warm. Your Technical Account Manager will work with you on a plan to warm your new IPs by tweaking your engagement age day-to-day based on your message streams, engagement rates, and the total sending volume of your pool. It's just one of the many ways SparkPost makes email easy and it's why when we can combine Sending and Analytics we're #bettertogether.  

## Email Quality Reminder
Remember that in email, quality will still win over quantity every time. This warm-up process is designed for senders with good habits, clean lists, and engaged subscribers. If you need a reminder on best practices check out our massive knowledge base [here](https://www.sparkpost.com/academy/)

Happy Sending!
