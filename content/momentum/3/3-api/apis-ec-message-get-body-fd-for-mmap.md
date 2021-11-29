---
lastUpdated: "03/26/2020"
title: "ec_message_get_body_fd_for_mmap"
description: "ec message get body fd for mmap Requests the file descriptor from the IO layer for the purpose of memory mapping int ec message get body fd for mmap mess ec message mess This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.ec_message_get_body_fd_for_mmap"></a> 
## Name

ec_message_get_body_fd_for_mmap — Requests the file descriptor from the IO layer for the purpose of memory mapping

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_get_body_fd_for_mmap** (` | <var class="pdparam">mess</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;<a name="idp55679824"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Requests the file descriptor from the IO layer for the purpose of memory mapping.

**<a name="idp55682736"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

the message

</dd>

</dl>

**<a name="idp55685456"></a> Return Values**

The file descriptor, or `0` if Momentum decided that the message was not suitable for memory mapping.