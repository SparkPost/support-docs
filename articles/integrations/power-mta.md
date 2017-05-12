---
title: "Using SparkPost with PowerMTA"
description: "If you’re interested in relaying mail through Power MTA to Spark Post there are only a few things you need to do First create a Spark Post account if you don't already have one Next create an API key with the Send via SMTP permission Now create and verify the..."
---

If you’re interested in relaying mail through PowerMTA to SparkPost, there are only a few things you need to do. First, [create a SparkPost account](https://app.sparkpost.com/sign-up) if you don't already have one.

Next, [create an API key](https://app.sparkpost.com/account/credentials) with the "Send via SMTP" permission:

![](media/power-mta/pmta-key_original.png)

Now [create and verify](https://app.sparkpost.com/account/sending-domains) the domain you want to use for sending. The setup process should take about 5-10 minutes if you have access to your DNS server. See [Verify Sending Domains](https://support.sparkpost.com/customer/portal/articles/1933360) for more information.

Add the following to your PowerMTA config, changing the value for auth-password to the SparkPost API key you created above:

```
<domain sparkpost.rollup>
 use-unencrypted-plain-auth yes
 auth-username SMTP_Injection
 auth-password xxxxxxxx
 route smtp.sparkpostmail.com:587
 use-starttls yes
 require-starttls yes
 max-smtp-out 10
</domain>

<domain *>
 queue-to sparkpost.rollup
</domain>
```

Two great benefits of using PowerMTA to relay to SparkPost are you don’t need to change your existing architecture, and PowerMTA handles all the queueing and any network issues that might arise during delivery.You also get the excellent [built in metrics](https://app.sparkpost.com/reports/summary) that are part of SparkPost.
