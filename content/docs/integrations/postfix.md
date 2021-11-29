---
lastUpdated: "02/08/2020"
title: "Using SparkPost with Postfix"
description: "To use Spark Post as an SMTP relay for Postfix create an API key with the Send via SMTP permission enabled then enter the following into your Postfix config file typically main cf smtpsaslauth enable yes smtpsaslpasswordmaps static SMTP Injection your API key relayhost smtp sparkpostmail com 587 smtpsaslsecurity options..."
---

To use SparkPost as an SMTP relay for Postfix, create an API key with the 'Send via SMTP' permission enabled, then enter the following into your Postfix config file (typically **main.cf**):

```
smtp_sasl_auth_enable = yes 
smtp_sasl_password_maps = static:SMTP_Injection:<your API key>
relayhost = [smtp.sparkpostmail.com]:587
smtp_sasl_security_options = noanonymous 
smtp_tls_security_level = encrypt
header_size_limit = 4096000
```

Once you've modified your config file per the above, restart your Postfix server and you should be good to go!
