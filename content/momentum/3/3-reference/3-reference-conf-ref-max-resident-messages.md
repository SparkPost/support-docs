---
lastUpdated: "03/26/2020"
title: "max_resident_messages"
description: "max resident messages threshold above which messages are not held in memory Max Resident Messages 32768 max resident messages is used to control the maximum number of messages held concurrently in memory A value of 0 sets no limit A rough guide to setting this option is to divide the..."
---

<a name="conf.ref.max_resident_messages"></a> 
## Name

max_resident_messages — threshold above which messages are not held in memory

## Synopsis

`Max_Resident_Messages = 32768`

<a name="idp10235856"></a> 
## Description

`max_resident_messages` is used to control the maximum number of messages held concurrently in memory. A value of 0 sets no limit. A rough guide to setting this option is to divide the maximum amount of RAM that you want to reserve for messages by your growbuf_size. For more information about the `growbuf_size` option see [growbuf_size](/momentum/3/3-reference/3-reference-conf-ref-growbuf-size).

The default value for `max_resident_messages` is `32768`. However, this default value is typically overridden in the `ecelerity.conf` file and set to `65536`.

### Warning

This is an advanced option. Setting this option to small non-zero values can have deleterious effects on performance. Thorough testing is recommended prior to deployment in a production environment.

<a name="idp10242800"></a> 
## Scope

`max_resident_messages` is valid in the binding, binding_group and global scopes.

<a name="idp10244864"></a> 
## See Also

[growbuf_size](/momentum/3/3-reference/3-reference-conf-ref-growbuf-size)