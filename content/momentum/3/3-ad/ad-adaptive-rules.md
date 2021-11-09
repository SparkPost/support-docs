---
lastUpdated: "03/26/2020"
title: "Adaptive Rules"
description: "As of Momentum version 3 2 the adaptive rules lua file is included with all AD licences This file helps manage outbound traffic so that it complies with the requirements of major receivers AD is most effective when you include adaptive response rules in your configuration The rules defined in..."
---


As of Momentum version 3.2, the `adaptive_rules.lua` file is included with all AD licences. This file helps manage outbound traffic so that it complies with the requirements of major receivers. AD is most effective when you include adaptive response rules in your configuration. The rules defined in the `/opt/msys/ecelerity/libexec/scriptlets/msys/adaptive_rules.lua` file are implemented by the `/opt/msys/ecelerity/libexec/scriptlets/msys/adaptive.lua` script. In [“Sample adaptive setup”](/momentum/3/3-ad/ad-using#ad.adaptive.setup.example) adaptive rules are activated by the `script "adaptive"` stanza within the scriptlet module scope. After installation you must add this stanza to the `ecelerity.conf` file if you wish to use adaptive rules.

### Note

For easy reference this file is reproduced in [*The `adaptive_rules.lua` File*](/momentum/3/3-ad/ad-appendix-adaptive-rules) .

As an example, the following response rule is defined for yahoo.com:

```
responses = {
  {
     code = "^554 Message not allowed\\. DK Email not accepted for policy reasons",
     trigger = "1",
     action = {"suspend", "4 hours"},
     message = "Have you configured DK correctly?",
     phase = "data",
   }
   ...
}
```

If a message is rejected with the code shown above, deliveries for Yahoo!™ are suspended, for the sending binding, for the period indicated and the sender is alerted to this event with the message, "Have you configured DK correctly?". In this case, this action is triggered by the single occurrence of a code with the specified value. A complete description of triggers and the other configuration options is given in [the section called “The configuration Element”](/momentum/3/3-ad/ad-custom-rules#ad.custom.configuration).

When receiver response codes change, the `adaptive_rules.lua` file is updated by the Live Bounce Updates service.

**Response Codes vs. Sweep Rules**

Response codes differ from "sweep rule" codes. A response "code" is typically a PCRE of the SMTP response text and a "sweep rule" code is one of the bounce codes listed at [Bounce Classification Codes](/momentum/3/3-reference/3-reference-bounce-logger-classification-codes) or a feedback loop code such as "abuse". Responses are triggered by one or more occurrences of SMTP responses but sweep rules examine the ratio of bounce or feedback "codes" over total deliveries (or attempted deliveries). Additionally, sweep rules apply only to bounces and FBL messages.

## <a name="ad.adaptive.rules.receivers"></a> Receivers Managed by Adaptive Rules

The major receivers include:

*   yahoo.com

*   aol.com

*   bellsouth.net

*   comcast.net

*   earthlink.net

*   rr.com

*   gmail.com

*   hotmail.com

For a comprehensive list of the aliases used by these receivers see [*The `adaptive_rules.lua` File*](/momentum/3/3-ad/ad-appendix-adaptive-rules) .