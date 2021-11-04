---
lastUpdated: "02/08/2020"
title: "SPF and ip4 Mechanisms"
description: "Unfortunately we do not have the luxury of being assigned large blocks of IP space by our provider and so we cannot use the ip 4 mechanism in our SPF records this has meant we've had to look for more creative approaches ones that require extra DNS queries It would..."
---

Unfortunately, we do not have the luxury of being assigned large blocks of IP space by our provider, and so we cannot use the ip4 mechanism in our SPF records; this has meant we've had to look for more creative approaches, ones that require extra DNS queries.

It would be our preference to not use the ptr mechanism, but there is at least one large mailbox provider that does not support the expansion of the %{i} macro in the exists mechanism, and so we not only use the exists mechanism, but also the ptr mechanism in order to ensure that SPF passes wherever our customers send mail.

We recognize that SPF 7208 says the ptr mechanism **SHOULD NOT** be used, but it also says this:

**Note**: This mechanism is slow, it is not as reliable as other mechanisms in cases of DNS errors, and it places a large burden on the .arpa name servers.  If used, proper PTR records have to be in place for the domain's hosts and the "ptr" mechanism **SHOULD** be one of the last mechanisms checked.  After many years of SPF deployment experience, it has been concluded that it is unnecessary and more reliable alternatives should be used instead.  It is, however, still in use as part of the SPF protocol, so compliant check_host() implementations **MUST** support it.

We recognize that our SPF record does not pass muster with sites such as [dmarcian.com](http://dmarcian.com/), but rest assured that it does result in verdicts of pass on mail sent using the SPF record we publish.

You can also use our SPF tools for your SPF needs [SPF Inspector](https://tools.sparkpost.com/spf/inspector) and [SPF Builder](https://tools.sparkpost.com/spf/builder).
