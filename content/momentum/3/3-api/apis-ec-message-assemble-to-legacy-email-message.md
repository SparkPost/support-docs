---
lastUpdated: "03/26/2020"
title: "ec_message_assemble_to_legacy_email_message"
description: "ec message assemble to legacy email message glue the parts back together into an in memory email message int ec message assemble to legacy email message messsg ec message messsg This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_message_assemble_to_legacy_email_message"></a> 
## Name

ec_message_assemble_to_legacy_email_message — glue the parts back together into an in-memory email_message

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_assemble_to_legacy_email_message** (` | <var class="pdparam">messsg</var>`)`; |   |

`ec_message * <var class="pdparam">messsg</var>`;<a name="idp55198320"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

glue the parts back together into an in-memory email_message.

If the resulting message would be larger than the large message threshold, or if there is a memory short, returns 0\. Otherwise, mess->em is updated to hold the memory blob.