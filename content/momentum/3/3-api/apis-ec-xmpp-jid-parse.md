---
lastUpdated: "03/26/2020"
title: "ec_xmpp_jid_parse"
description: "ec xmpp jid parse parse a JID string ec xmpp jid ec xmpp jid parse jid result const char jid int result This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_xmpp_jid_parse"></a> 
## Name

ec_xmpp_jid_parse — parse a JID string

## Synopsis

`#include "modules/xmpp/ec_xmpp.h"`

| `ec_xmpp_jid * **ec_xmpp_jid_parse** (` | <var class="pdparam">jid</var>, |   |
|   | <var class="pdparam">result</var>`)`; |   |

`const char * <var class="pdparam">jid</var>`;
`int * <var class="pdparam">result</var>`;<a name="idp64571824"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

parse a JID string.

**<a name="idp64574672"></a> Parameters**

<dl class="variablelist">

<dt>jid</dt>

<dd>

the string to parse

</dd>

<dt>result</dt>

<dd>

the parse result

</dd>

</dl>

**<a name="idp64579232"></a> Return Values**

if the parse was successful, returns a JID object.