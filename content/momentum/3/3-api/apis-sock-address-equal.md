---
lastUpdated: "03/26/2020"
title: "sock_address_equal"
description: "sock address equal compares two socket addresses for equality int sock address equal left right flags struct sockaddr left struct sockaddr right int flags This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.sock_address_equal"></a> 
## Name

sock_address_equal — compares two socket addresses for equality

## Synopsis

`#include "netlistener.h"`

| `int **sock_address_equal** (` | <var class="pdparam">left</var>, |   |
|   | <var class="pdparam">right</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`struct sockaddr * <var class="pdparam">left</var>`;
`struct sockaddr * <var class="pdparam">right</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp62147504"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

compares two socket addresses for equality