---
lastUpdated: "03/26/2020"
title: "fail domain quiet"
description: "fail domain quiet fail messages for a domain without generating bounces fail domain quiet domain name The fail domain quiet command allows the administrative failure of all messages bound for the specified domain without sending a bounce message even if Generate Bounces is set in the configuration file Its usage..."
---

<a name="console_commands.fail_domain_quiet"></a> 
## Name

fail domain quiet — fail messages for a domain without generating bounces

## Synopsis

`fail domain quiet` { *`domain_name`* }

<a name="idp12914352"></a> 
## Description

The **fail domain quiet**              command allows the administrative failure of all messages bound for the specified domain without sending a bounce message, even if Generate_Bounces is set in the configuration file. Its usage is similar to fail domain:

```
10:47:35 /tmp/2025> fail domain quiet unresolvableproblems.com
unresolvableproblems.com purged, 62415 messages failed.
```
<a name="idp12917376"></a> 
## See Also

[fail domain](/momentum/4/console-commands/fail-domain)