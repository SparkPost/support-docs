---
lastUpdated: "03/26/2020"
title: "mdn_failures_notify"
description: "mdn failures notify mailbox to which to send null recipient MD Ns mdn failures notify postmaster example com If mdn failures notify is set to an email address Momentum will send the MDN to that mailbox allowing a postmaster to review and perhaps take action on those bounces When generating..."
---

<a name="conf.ref.mdn_failures_notify"></a> 
## Name

mdn_failures_notify — mailbox to which to send null recipient MDNs

## Synopsis

`mdn_failures_notify = "postmaster@example.com"`

<a name="idp25395344"></a> 
## Description

If `mdn_failures_notify` is set to an email address, Momentum will send the MDN to that mailbox, allowing a postmaster to review and perhaps take action on those bounces.

When generating an MDN, Momentum will skip the bounce message generation if the message that triggered it was from the NULL sender, as there is no information about whom should be notified.

<a name="idp25398368"></a> 
## Scope

mdn_failures_notify is valid in the binding, binding_group, domain, and global scopes.