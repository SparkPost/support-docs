---
lastUpdated: "03/26/2020"
title: "Outbound Email Relay"
description: "When configuring Momentum as an outbound e mail relay you must take care to not expose your system to abuse by allowing unauthorized machines to send e mail to domains for which the local instance does not provide mail service Doing so makes your system an open relay Only trusted..."
---

When configuring Momentum as an outbound e-mail relay, you must take care to not expose your system to abuse by allowing unauthorized machines to send e-mail to domains for which the local instance does not provide mail service. Doing so makes your system an "open relay." Only trusted machines should be allowed to connect and inject mails. The `relay_hosts` option controls this setting. For details, see [relay_hosts](/momentum/4/config/ref-relay-hosts).