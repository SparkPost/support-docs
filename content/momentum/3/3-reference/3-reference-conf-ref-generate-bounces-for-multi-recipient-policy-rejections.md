---
lastUpdated: "03/26/2020"
title: "generate_bounces_for_multi_recipient_policy_rejections"
description: "generate bounces for multi recipient policy rejections generate MD Ns after reception for policy rejections generate bounces for multi recipient policy rejections true generate bounces for multi recipient policy rejections false If you have configured a module or a policy script to reject mail in the each rcpt phase of..."
---

<a name="conf.ref.generate_bounces_for_multi_recipient_policy_rejections"></a> 
## Name

generate_bounces_for_multi_recipient_policy_rejections — generate MDNs after reception for policy rejections

## Synopsis

`generate_bounces_for_multi_recipient_policy_rejections = true`

`generate_bounces_for_multi_recipient_policy_rejections = false`

<a name="idp9640608"></a> 
## Description

If you have configured a module or a policy script to reject mail in the each_rcpt phase of the validation process, then it is possible that you don't want to generate an MDN for that rejected mail, on the grounds that it was unwanted mail and likely has a bogus sender. If that is the case, setting `Generate_Bounces_For_Multi_Recipient_Policy_Rejections` to `false` will cause Momentum to suppress MDN generation for multi-recipient mail when some, but not all, recipients were rejected.

When all recipients reject the mail, Momentum will respond with a failure code to the sender; an MDN does not need to be generated in this case.

The default value for this option is `true` for conformance with the SMTP specification.

<a name="idp9645440"></a> 
## Scope

generate_bounces_for_multi_recipient_policy_rejections is valid in the global, pathway_group and pathway scopes.