---
lastUpdated: "03/26/2020"
title: "smtp_get_state_machine"
description: "smtp get state machine Fetch the head of the SMTP client state machine smtp state smtp get state machine void This function fetches the head of the SMTP client state machine This function returns an smtp state pointer that is the beginning of the SMTP client state machine For a..."
---

<a name="apis.smtp_get_state_machine"></a> 
## Name

smtp_get_state_machine — Fetch the head of the SMTP client state machine

## Synopsis

`#include "smtp.h"`

| `smtp_state * **smtp_get_state_machine** (` | `)`; |   |

`void`;<a name="idp62040480"></a> 
## Description

This function fetches the head of the SMTP client state machine.

**<a name="idp62041728"></a> Return Values**

This function returns an smtp_state pointer that is the beginning of the SMTP client state machine. For a description of this data structure see [“smtp_state”](/momentum/3/3-api/structs-smtp-state).

**<a name="idp62043328"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62044880"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp)