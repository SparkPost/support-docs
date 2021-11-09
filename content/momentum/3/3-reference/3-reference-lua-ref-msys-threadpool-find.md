---
lastUpdated: "03/26/2020"
title: "msys.threadpool.find"
description: "msys threadpool find Find a thread pool name from a job class ID or a job class ID from a thread pool name msys threadpool find threadpoolname or jobclassid Configuration Change This feature is available as of version 3 2 Finds a thread pool name from a job class ID..."
---

<a name="lua.ref.msys.threadpool.find"></a> 
## Name

msys.threadpool.find — Find a thread pool name from a job class ID or a job class ID from a thread pool name

<a name="idp26988720"></a> 
## Synopsis

`msys.threadpool.find(threadpoolname_or_jobclassid);`

`threadpoolname_or_jobclassid: mixed (integer or string)`<a name="idp26991472"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.2.

Finds a thread pool name from a job class ID or a job class ID from a thread pool name. Returns nil if no match is found.

Enable this function with the statement `require('msys.threadpool');`.

<a name="idp26995616"></a> 
## See Also

[msys.threadpool.count](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-count) [msys.threadpool.stat](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-stat), [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool)