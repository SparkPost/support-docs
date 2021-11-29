---
lastUpdated: "02/08/2020"
title: "When sending to Gmail subscribers I see this error: \"We've found that lots of messages from sparkpostmail.com are spam\""
description: "You are receiving this error because Gmail uses the return path domain for that error message However it is your from domain that the reputation is actually referencing We have clients sending to Gmail from the same return path and I Ps that are not experiencing inbox issues Steps Towards..."
---

You are receiving this error because Gmail uses the return-path domain for that error message. However, it is your *from domain*        that the reputation is actually referencing. We have clients sending to Gmail from the same return-path and IPs that are not experiencing inbox issues. 

### Steps Towards Resolution: 

* Ensure there are no blacklistings for any domain/url in your message (use this free tool to check - [http://mxtoolbox.com/blacklists.aspx](http://mxtoolbox.com/blacklists.aspx)). Gmail checks content domains as well as sending domains. If you are using a subdomain as well, make sure that your main domain is not blacklisted. If there are no blacklistings, or once you clear up any blacklistings, but the block still remains, move on to the next option.
* Immediately segment your Gmail subscribers by removing any subscriber that has not opened or clicked in the past 30 days. Continue this until messages have stopped going into the spam folder (depending on how damaged your domain is it could take up to 45 days). Once all messages have stopped going to the spam folder you can then start adding back subscribers at a steady rate by doubling the engagement days to 60 after 1 week then go 120, etc. If after 45 days you are still unable to get all subscribers into the inbox you may bump it down to 15 days.

**Note**: Changing IPs or ESP will not resolve the issue as Gmail looks at more than IP reputation. For more information read the following blog - [https://www.sparkpost.com/blog/email-deliverability-best-practices-gmail/](https://www.sparkpost.com/blog/email-deliverability-best-practices-gmail/)
