---
lastUpdated: "03/26/2020"
title: "require_ehlo"
description: "require ehlo reject mail from clients that don't say HELO require ehlo false require ehlo true This directive instructs Momentum to force clients to initiate conversations with an EHLO or HELO command Early RF Cs defining the SMTP protocol did not require or even define the HELO command notably RFC..."
---

<a name="conf.ref.require_ehlo"></a> 
## Name

require_ehlo — reject mail from clients that don't say HELO

## Synopsis

`require_ehlo = false`

`require_ehlo = true`

<a name="idp25904112"></a> 
## Description

This directive instructs Momentum to force clients to initiate conversations with an EHLO or HELO command. Early RFCs defining the SMTP protocol did not require or even define the HELO command (notably RFC788). However, starting with RFC821 and currently in RFC2821, one of EHLO or HELO is required. As such, much older SMTP clients may not implement a version of SMTP newer than RFC788. Enable this setting if you wish to enforce RFC821 and later HELO/EHLO handling.

Setting `require_ehlo` to `true` will cause Momentum to response with a 501 error to any commands issued before an EHLO or HELO command.

The default value is `false`.

<a name="idp25908784"></a> 
## Scope

require_ehlo is valid in the global, listener, listen, and peer scopes.