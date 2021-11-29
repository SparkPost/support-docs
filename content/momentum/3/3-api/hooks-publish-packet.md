---
lastUpdated: "03/26/2020"
title: "packet"
description: "packet void packet closure source packet plen void closure char source char packet int plen int has publish packet hook void register publish packet hook first hook closure ec hook publish packet func t hook void closure void register publish packet hook last hook closure ec hook publish packet func..."
---

<a name="hooks.publish.packet"></a> 
## Name

packet

## Synopsis

`#include "hooks/publish/packet.h"`

| `void **packet** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">source</var>, |   |
|   | <var class="pdparam">packet</var>, |   |
|   | <var class="pdparam">plen</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`char * <var class="pdparam">source</var>`;
`char * <var class="pdparam">packet</var>`;
`int <var class="pdparam">plen</var>`;

| `int **has_publish_packet_hook** (` | `)`; |   |

| `void **register_publish_packet_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_publish_packet_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_publish_packet_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_publish_packet_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **call_publish_packet_hook** (` | <var class="pdparam">source</var>, |   |
|   | <var class="pdparam">packet</var>, |   |
|   | <var class="pdparam">plen</var>`)`; |   |

`char * <var class="pdparam">source</var>`;
`char * <var class="pdparam">packet</var>`;
`int <var class="pdparam">plen</var>`;<a name="idp44914896"></a> 
## Description

<dl class="variablelist">

<dt>closure</dt>

<dd>

the implementation specific closure, this is not needed for the hook's caller.

</dd>

<dt>source</dt>

<dd>

a string containing the name of the source module from where the publish_packet hook is being called.

</dd>

<dt>packet</dt>

<dd>

a pointer to the buffer containing the data to be published

</dd>

<dt>plen</dt>

<dd>

an integer describing the length of the data in bytes.

</dd>

</dl>

Invoked when a module wants to publish information via spread to the cluster.