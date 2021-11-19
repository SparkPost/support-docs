---
lastUpdated: "03/26/2020"
title: "Message Context Variables"
description: "Message context variables yield information about the current message These variables are predefined either in a global context or within a module The following tables list the global and module specific variables It is also possible to define context variables using configuration options These variables are discussed in Section 63..."
---

Message context variables yield information about the current message. These variables are predefined, either in a global context or within a module. The following tables list the global and module-specific variables.

It is also possible to define context variables using configuration options. These variables are discussed in [“Message Context Variables Defined Within a Module”](/momentum/4/4-policy-context-mess#policy.context-mess.module.defined).

### <a name="policy.context-mess.predefined"></a> Predefined Global Message Context Variables

This table lists all message context variables that are predefined globally by Momentum.

<a name="predefined-context-message-global"></a> 


| Message Context Variable | Description |
| --- | --- |
| #8bitmime – For internal use | 

This variable is set during message parsing if the message contains 8-bit content. It is used at send time to determine whether to negotiate 8-bit MIME support with the recipient or to transform the message as per the Send_8BitMime and Transform_8BitMime configuration options. For more information about these options, see [send_8bitmime](/momentum/4/config/ref-send-8-bitmime) and [transform_8bitmime_content](/momentum/4/config/ref-transform-8-bitmime-content).

 |
| #batch_ids – For internal use | 

The sibling message-ids in a batch. This is not determined until after reception is complete.

 |
| mailfrom_domain – Domain part of mailfrom address | 

Available as of the `validate_mailfrom` callout.

 |
| mailfrom_localpart – Local part of mailfrom address | 

Available as of the `validate_mailfrom` callout.

 |
| mailfrom_string – Entire mailfrom line | 

Available as of the `validate_mailfrom` callout.

 |
| rcptto_domain – Domain part of the rcptto address |  |
| rcptto_localpart – Local part of the rcptto address |  |
| rcptto_string – Entire rcptto line |  |
| rfc2822_date_missing – Set to "true" if the date is missing |  |

### <a name="idp7150352"></a> Predefined Module-Specific Message Context Variables

Modules that support predefined module-specific message context variables are listed below:

*   [brightmail](/momentum/4/modules/brightmail#modules.brightmail.context.variables)

*   [cloudmark](/momentum/4/modules/cloudmark#modules.cloudmark.context.variables)

*   [commtouch_ctasd](/momentum/4/modules/commtouch#modules.commtouch.context.variables)

*   [domainkeys](/momentum/4/modules/domainkeys#modules.domainkeys.context.variables)

*   [seedlist](/momentum/4/modules/seedlist#modules.seedlist.runtime.usage)

*   [smtp_cbv](/momentum/4/modules/smtp-cbv#modules.smtp_cbv.context.variables)

### <a name="policy.context-mess.module.defined"></a> Message Context Variables Defined Within a Module

In some modules, it is possible to define context variables using configuration options. The following table lists the modules that support this feature.

<a name="defined-context-message-module"></a> 


| Module | Configuration Option | Default Value |
| --- | --- | --- |
| 

[antivirus](/momentum/4/modules/4-antivirus)

 | 

`context_variable`

 | 

*`engine name`*      _status

 |
| 

[antivirus](/momentum/4/modules/4-antivirus)

 | 

`skip_context_variable`

 | 

skip_virus_check

 |
| 

[spf](/momentum/4/modules/spf)

 | 

`context_variable`

 | 

spf_status

 |
| 

[spf](/momentum/4/modules/spf)

 | 

`context_pra_variable`

 | 

senderid_pra_status

 |