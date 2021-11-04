---
lastUpdated: "03/26/2020"
title: "post_read_smtp"
description: "post read smtp This hook is invoked immediately following data that has been read from the remote server during an outbound SMTP connection int core post read smtp closure dc len expected newstate now mask void closure delivery construct dc int len int expected int newstate struct timeval now int..."
---

<a name="hooks.core.post_read_smtp"></a> 
## Name

post_read_smtp — This hook is invoked immediately following data that has been read from the remote server during an **outbound** SMTP connection.

## Synopsis

`#include "hooks/core/post_read_smtp.h"`

| `int **core_post_read_smtp** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">len</var>, |   |
|   | <var class="pdparam">expected</var>, |   |
|   | <var class="pdparam">newstate</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">mask</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`delivery_construct * <var class="pdparam">dc</var>`;
`int <var class="pdparam">len</var>`;
`int <var class="pdparam">expected</var>`;
`int <var class="pdparam">newstate</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">mask</var>`;<a name="idp31291520"></a> 
## Description

This hook is invoked immediately following data that has been read from the remote server during an **outbound** SMTP connection. The hook is invoked prior to any error handling.

**<a name="idp31293584"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>dc</dt>

<dd>

Stores all details regarding the current SMTP connection. For more information on this data structure see [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct).

</dd>

<dt>len</dt>

<dd>

The length of the SMTP response string, in bytes.

</dd>

<dt>expected</dt>

<dd>

Represents the expected SMTP code.

</dd>

<dt>newstate</dt>

<dd>

Stores the new SMTP state machine state should the read complete and match the *`expected`* response code.

</dd>

<dt>now</dt>

<dd>

The current scheduler time.

</dd>

<dt>mask</dt>

<dd>

*`*mask`* stores the event mask that should be used to trigger the next read. Under most circumstances, values passed by reference should not be altered. Arguments that are passed by reference are done so to mirror the parent function's API.

</dd>

</dl>

**<a name="idp31309152"></a> Return Values**

Returns a non-zero value on error.

**<a name="idp31310016"></a> Threading**

This hook will be called in the `Scheduler` thread.