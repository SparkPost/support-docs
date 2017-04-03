---
title: "Getting Configuration Errors When Everything is Set Up"
redirect_from: "https://support.sparkpost.com/customer/portal/articles/1950186-getting-configuration-errors-when-everything-is-set-up"
description: "I ve set up my sending domain and configured SPF and DKIM I m still getting errors that my emails were rejected due to configuration errors Help Regardless of whether you send from your top level company domain or a subdomain the sending domain and the From email address MUST..."
---

**I've set up my sending domain and configured SPF and DKIM. I'm still getting errors that my emails were rejected due to configuration errors. Help!**                                                                                                                                               

Regardless of whether you send from your top-level company domain or a subdomain, the sending domain and the From email address MUST match. Thus, if you are using subdomain my.groovycompany.com, your From: email address must be xxxx@my.groovycompany.com. It's okay if this is an alias, but it needs to point to a legitimate email address. Using a subdomain for your sending domain and a domain email address will not work. They MUST match exactly.