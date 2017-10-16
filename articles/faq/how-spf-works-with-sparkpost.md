---
title: "How SPF works with SparkPost"
description: "add description later"
---
SPF, or Sender Policy Framework is a method of domain verification which indicates to recipient users that SparkPost is authorized to send emails on behalf of our clients. Typically, code is added to the DNS of each host domain, which aligns the sending domain with SparkPost sending. However, our engineers have set it up so that once you validate your sending domain, the SPF is already added, and there’s no need to add it to your own DNS record. 
