---
lastUpdated: "02/08/2020"
title: "Does SparkPost Dedupe?"
description: "List management is pretty important to senders and Spark Post customers are no different Because Spark Post is largely transactional there is no dedupe function when you are sending messages Thus if you have duplicates in a list they will be sent additional emails There are a few reasons why..."
---

List management is pretty important to senders, and SparkPost customers are no different. Because SparkPost is largely transactional, there is no dedupe function when you are sending messages. Thus, if you have duplicates in a list, they will be sent additional emails. There are a few reasons why we opted to do it this way:

1. All transactional emails are considered to be operational, so even if they have identical information (or almost identical), each does need to be sent. 
2. Pulling batches to check and dedupe would impact performance

Therefore, it's important to keep your list as clean as possible. Remove all duplicate emails before adding the list to your email. 

*But why does it matter?*                    

As a hypothetical exercise, say you have abc@abccompany.com in your email list 5 times, and you want to send a marketing email. SparkPost will send that email to everyone it can on the list, without exception. If the email address exists, that recipient is going to receive the same email 5 times. This may cause them to get annoyed and unsubscribe. If it was a mistake, you cannot re-subscribe them. You cannot even email them to apologize for the multiple sends.
