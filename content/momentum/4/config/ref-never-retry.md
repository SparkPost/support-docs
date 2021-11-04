---
lastUpdated: "03/26/2020"
title: "never_retry"
description: "never retry whether or not to retry delivery of failed messages never retry false Whether or not to retry delivery of failed messages If it is set to true then instead of re queuing the message the message is failed with 554 5 4 7 internal exceeded max retries without..."
---

<a name="conf.ref.never_retry"></a> 
## Name

never_retry — whether or not to retry delivery of failed messages

## Synopsis

`never_retry = false`

<a name="idp25540336"></a> 
## Description

Whether or not to retry delivery of failed messages. If it is set to true, then instead of re-queuing the message, the message is failed with: "554 5.4.7 [internal] exceeded max retries without delivery".

The default value is `false`.

<a name="idp25543264"></a> 
## Scope

never_retry is valid in the global, domain, binding, and binding_group scopes.

<a name="idp25545136"></a> 
## See Also

[retry_interval](/momentum/4/config/ref-retry-interval)