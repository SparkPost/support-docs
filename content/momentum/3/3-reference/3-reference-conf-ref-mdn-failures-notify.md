---
lastUpdated: "03/26/2020"
title: "mdn_failures_notify"
description: "mdn failures notify mailbox to which to send null recipient MD Ns MDN Failures Notify postmaster example com If MDN Failures Notify is set to an email address Momentum will send the MDN to that mailbox allowing a postmaster to review and perhaps take action on those bounces When generating..."
---

<a name="conf.ref.mdn_failures_notify"></a> 
## Name

mdn_failures_notify — mailbox to which to send null recipient MDNs

## Synopsis

`MDN_Failures_Notify = "postmaster@example.com"`

<a name="idp10327600"></a> 
## Description

If `MDN_Failures_Notify` is set to an email address, Momentum will send the MDN to that mailbox, allowing a postmaster to review and perhaps take action on those bounces.

When generating an MDN, Momentum will skip the bounce message generation if the message that triggered it was from the NULL sender, as there is no information about whom should be notified.

<a name="idp10330400"></a> 
## Scope

mdn_failures_notify is valid in the binding, binding_group, domain and global scopes.