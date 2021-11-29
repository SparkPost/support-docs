---
lastUpdated: "03/26/2020"
title: "Message Context Variables"
description: "Message context variables yield information about the current message These variables are predefined either in a global context or within a module The global variables are discussed in the next section and the module specific variables follow It is also possible to define context variables using configuration options These variables..."
---

<a name="idp3486832"></a> 

Message context variables yield information about the current message. These variables are predefined, either in a global context or within a module. The global variables are discussed in the next section and the module-specific variables follow.

It is also possible to define context variables using configuration options. These variables are discussed in [“Message Context Variables Defined Within a Module”](/momentum/3/3-reference/3-reference-policy-context-mess#policy.context-mess.module.defined).

### <a name="policy.context-mess.predefined"></a> Predefined Global Message Context Variables

The following message context variables are predefined:

<dl class="variablelist">

<dt>#8bitmime</dt>

<dd>

This variable is set during message parsing if the message contains 8-bit content, and it is used at send time to determine whether to negotiate 8-bit MIME support with the recipient, or to transform the message as per the Send_8BitMime and Transform_8BitMime configuration options. For more information about these options see [send_8bitmime](/momentum/3/3-reference/3-reference-conf-ref-send-8-bitmime) and [transform_8bitmime_content](/momentum/3/3-reference/3-reference-conf-ref-transform-8-bitmime-content). *Note*: All context variables with a "#" prefix are for internal use.

</dd>

<dt>#batch_ids</dt>

<dd>

The sibling message-ids in a batch. This is not determined until after reception is complete. This variable is for internal use only.

</dd>

<dt>mailfrom_domain</dt>

<dd>

Domain part of mailfrom address.

</dd>

<dt>mailfrom_localpart</dt>

<dd>

Local part of mailfrom address.

</dd>

<dt>mailfrom_string</dt>

<dd>

The entire mailfrom line.

</dd>

<dt>rcptto_domain</dt>

<dd>

Domain part of the rcptto address.

</dd>

<dt>rcptto_localpart</dt>

<dd>

Local part of the rcptto address.

</dd>

<dt>rcptto_string</dt>

<dd>

The entire rcptto line.

</dd>

<dt>rfc2822_date_missing</dt>

<dd>

Set to "true" if the date is missing.

</dd>

</dl>

### <a name="idp3509056"></a> Predefined Module-Specific Message Context Variables

The section concerns the predefined module-specific message context variables.

**<a name="idp3510640"></a> 6.2.2.1. The brightmail Module**

The one variable is as follows:

*   *`brightmail`*::error – Error information

For more information see [“Brightmail Runtime Usage”](/momentum/3/3-reference/3-reference-modules-brightmail#modules.brightmail.runtime.usage)

**<a name="idp3515232"></a> 6.2.2.2. The commtouch Module**

The variables are as follows:

*   `commtouch-class` – The classification of the email

*   `commtouch-virus-threat` – The level of the threat

*   `commtouch-ref-id` – The Commtouch reference ID

For more information see [“commtouch Runtime Usage”](/momentum/3/3-reference/3-reference-modules-commtouch#modules.commtouch.runtime.usage)

**<a name="idp3522192"></a> 6.2.2.3. The domainkeys Module**

The one variable is as follows:

*   `dk_status` – This variable returns the domain key status

For more information see [“domainkeys Runtime Usage”](/momentum/3/3-reference/3-reference-modules-domainkeys#modules.domainkeys.runtime.usage)

**<a name="idp3526544"></a> 6.2.2.4. The seedlist Module**

*   `#seedlist-orig-from` – The original MAIL FROM address

For more information see [“Runtime Usage”](/momentum/3/3-reference/3-reference-modules-seedlist#modules.seedlist.runtime.usage)

**<a name="idp3530704"></a> 6.2.2.5. The smtp_cbv Module**

The one variable is as follows:

*   `smtp_cbv_result` – The result of CBV

For more information see [“smtp_cbv Runtime Usage”](/momentum/3/3-reference/3-reference-modules-smtp-cbv#modules.smtp_cbv.runtime.usage)

### <a name="policy.context-mess.module.defined"></a> Message Context Variables Defined Within a Module

**<a name="idp3536640"></a> 6.2.3.1. The antivirus Modules**

In antivirus modules it is possible to define context variables using configuration options. The variables you may define are shown below with typical default values:

*   `context_variable` = "virus_info"

    If this variable is not set, its default value is "*`virus_engine_name`*_status".

*   `skip_context_variable` = "skip_virus_check"

For more information see [“antivirus – Antivirus Modules”](/momentum/3/3-reference/3-reference-modules-antivirus).

**<a name="idp3543328"></a> 6.2.3.2. The spf Modules**

In the spf modules it is possible to define context variables using configuration options. These are shown below with typical default values:

*   `context_variable` = "spf_status"

*   `context_pra_variable` = "senderid_pra_status"

For more information see [Section 14.69, “spf Modules – spf_macros, spf_v1 and senderid (SPF v2)”](modules.spf "14.69. spf Modules – spf_macros, spf_v1 and senderid (SPF v2)").