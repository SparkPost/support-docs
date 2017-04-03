---
title: "Emails Not Delivering But No Delays"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2564189-emails-not-delivering-but-no-delays"
description: "You're successfully injecting messages but the emails are not going out and there aren't any delays Why is this happening If you're seeing behavior like this it is likely because the Adaptive Email Network AEN is doing its job AEN is an integral part of Spark Post that moderates traffic..."
---

### You're successfully injecting messages but the emails are not going out and there aren't any delays! Why is this happening?

If you're seeing behavior like this, it is likely because the Adaptive Email Network (AEN) is doing its job. AEN is an integral part of SparkPost that moderates traffic to comply with ISP rules and feedback. When we get push back from them, our software detects these bounces and takes the appropriate action to "back off" of the receiving endpoint. Listening to feedback from ISPs allow us to stay on good terms and build a better reputation, resulting in higher deliverability for everyone on the platform. For more information on this, <u>[check out this article](https://www.sparkpost.com/adaptive-email-network/)</u>.

In the short term, actions taken include delaying our sends to certain ISPs, during which time you will see messages that you've injected not getting sent, but not getting any delays. This is especially likely if you only see this happening for certain domains, yet your other traffic is going out fine. Sending usually resumes in about 1-4 hours, but will depend on the type of feedback. If after 1-4 hours your messages still do not get any bounces or deliveries, you can submit a ticket on the Contact Us form on the Dashboard. If you believe this is due to an outage, please check our status page: <u>[status.sparkpost.com](http://status.sparkpost.com)</u>.

 ### But I have not gotten any negative feedback from ISPs! Why is my traffic being throttled? 

AEN throttles based on IP. Being on a shared platform like SparkPost means that your message goes through a pool of IPs that are also sending messages from other users on our platform, so while you have not personally gotten pushback/feedback from an ISP, others on the platform may have. 

There is the option of getting a dedicated IP so you can make sure you have full control of the traffic that goes over the IP. In this way, you won't have to wait if we receive pushback for another sender's behavior in the way it happens in shared IP pools. From another perspective you are fully responsible for the reputation of the IP. If you think this may be something you would like, <u>[please click here to learn how to purchase a dedicated IP](https://support.sparkpost.com/customer/en/portal/articles/2002977-dedicated-ip-pools?b_id=7411)</u>.

Please note, new IP addresses require a 'warm up' period as receivers get to know the new IP, so you will have to manually control your traffic to start and it's very likely that deliverability will be degraded until the reputation of your dedicated IP is built up.