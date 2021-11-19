---
lastUpdated: "03/26/2020"
title: "msys.os.statvfs_subscribe"
description: "msys os statvfs subscribe Provide a stream for file system statistics statvfs updates msys os statvfs subscribe path interval This function provides a stream for statvfs updates It guarantees minimal blocking and it is safe to call this function from the context of any thread including the scheduler A ec..."
---

<a name="lua.ref.msys.os.statvfs_subscribe"></a> 
## Name

msys.os.statvfs_subscribe — Provide a "stream" for file system statistics (statvfs) updates

<a name="idp18290208"></a> 
## Synopsis

`msys.os.statvfs_subscribe(path, interval);`

```
path: string
interval: number
```
<a name="idp18293216"></a> 
## Description

This function provides a "stream" for statvfs updates. It guarantees minimal blocking and it is safe to call this function from the context of any thread (including the scheduler). A ec_statvfs_record_t object is returned by the following call:

`statvfs_record = msys.os.statvfs_subscribe("/tmp", 10)`

This function is discussed in more detail in [msys.os.statvfs_read](/momentum/4/lua/ref-msys-os-statvfs-read).

Enable this function with the statement `require('msys.os');`.

<a name="idp18298064"></a> 
## See Also

[msys.os.statvfs_read](/momentum/4/lua/ref-msys-os-statvfs-read) and [ec_statvfs](/momentum/3/3-api/structs-ec-statvfs)