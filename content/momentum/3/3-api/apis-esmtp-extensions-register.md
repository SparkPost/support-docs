---
lastUpdated: "03/26/2020"
title: "esmtp_extensions_register"
description: "esmtp extensions register Register ESMTP extensions void esmtp extensions register command s f closure const char command ESMTP Extension Setup s ESMTP Extension Func f void closure Register ESMTP extensions command The extension that you wish to register for example XCLIENT s A pointer to the setup function typedef ed..."
---

<a name="apis.esmtp_extensions_register"></a> 
## Name

esmtp_extensions_register — Register ESMTP extensions

## Synopsis

`#include "esmtp_factory.h"`

| `void **esmtp_extensions_register** (` | <var class="pdparam">command</var>, |   |
|   | <var class="pdparam">s</var>, |   |
|   | <var class="pdparam">f</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`const char * <var class="pdparam">command</var>`;
`ESMTPExtensionSetup <var class="pdparam">s</var>`;
`ESMTPExtensionFunc <var class="pdparam">f</var>`;
`void * <var class="pdparam">closure</var>`;<a name="idp61675888"></a> 
## Description

Register ESMTP extensions.

**<a name="idp61677088"></a> Parameters**

<dl class="variablelist">

<dt>command</dt>

<dd>

The extension that you wish to register, for example `XCLIENT`.

</dd>

<dt>s</dt>

<dd>

A pointer to the setup function typedef'ed in the following way: `typedef int (*ESMTPExtensionSetup)(char *arg, message_construct *mc, void *closure);`. This parameter can be `NULL`.

</dd>

<dt>f</dt>

<dd>

A pointer to the function that implements the extension. `ESMTPExtensionFunc` is typedef'ed in the following way: `typedef int (*ESMTPExtensionFunc)(char *arg, Event *e, message_construct *mc, void *closure);`. This parameter can be `NULL`.

</dd>

<dt>closure</dt>

<dd>

The closure function. This parameter can be `NULL`.

</dd>

</dl>

**<a name="idp61688816"></a> Return Values**

On success this function returns `1` and on failure `0`.

**<a name="idp61690640"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp61692496"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp)