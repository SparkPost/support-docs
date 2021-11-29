---
lastUpdated: "03/26/2020"
title: "Sample Custom Configurations"
description: "You may come across response codes that haven't yet been integrated into the Message Systems adaptive rules file In such cases you can customize the existing rules by adding a file For example For detailed instructions on customization see Chapter 4 Custom Rules You may discover codes that result in..."
---

## <a name="ad.samples.response"></a> New Response Codes

You may come across response codes that haven't yet been integrated into the Message Systems adaptive rules file. In such cases you can customize the existing rules by adding a file. For example:

```
require('msys.adaptive')
local rules =
{
  ["hotmail.com"] =
  {
    responses =
    {
      {
        code = "421 PR\\((dt1|ct1)\\)",
        trigger = "1",
        action =  {"throttle", "down"},
        phase = "connect",
      },
      {
        code = "421 RP-00[123]",
        trigger = "1",
        action = {"throttle", "down"},
        phase = "connect",
      }
    }
  }
}

msys.adaptive.registerRules(rules, "augment")
```

For detailed instructions on customization see [*Custom Rules*](/momentum/3/3-ad/ad-custom-rules) .

## <a name="ad.samples.throttle"></a> Throttle Down to Avoid Suspension

You may discover codes that result in suspensions because they are not covered by existing rules. For example, the following bounce codes eventually result in suspension of delivery:

```
421 #4.4.5 Too many connections from your host
421 #4.x.2 Too many messages for this session
```

When these error codes are left unaltered by the system, they generate excessive bounces and then execute the "High Action"—suspension. By adding the following custom code you can throttle delivery and avoid suspension:

```
require('msys.adaptive')
local rules =
{
  ["example.ca <http://example.ca/>"] =
  {
    responses =
    {
      {
        code = "421 #4.4.5 Too many connections from your host",
        trigger = "1",
        action =  {"throttle", "down"},
      },
      {
        code = "421 #4.x.2 Too many messages for this session",
        trigger = "1",
        action = {"throttle", "down"},
      }
    }
  }
}
msys.adaptive.registerRules(rules, "augment")
```