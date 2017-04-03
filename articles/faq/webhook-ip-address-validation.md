---
title: "Webhook IP Address Validation"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/2458198-webhook-ip-address-validation"
description: "When setting up a webhook processor it's often important to verify that webhook event batches are indeed coming from Spark Post There are a few ways to do this and some are more resilient than others Remote IP Address Validation It is possible to check each inbound HTTP request is..."
---

When setting up a webhook processor, it's often important to verify that webhook event batches are indeed coming from SparkPost.  There are a few ways to do this and some are more resilient than others.

 ### Remote IP Address Validation 

It is possible to check each inbound HTTP request is from a specific remote IP address. SparkPost currently sends webhook batches from 54.244.54.128 ***but this is subject to change so it may not be the best validation mechanism.***                                                                             

**This IP address (54.244.54.128) is valid as recent as 11/3/2016.**                                                            

 ### HTTP Authentication 

SparkPost also supports both basic authentication and OAuth 2.0 for webhooks.  These are the recommended authentication mechanisms and you can read about [how to set them up here](https://support.sparkpost.com/customer/en/portal/articles/2112385-webhook-authentication-oauth-2-0-and-basic-authentication).