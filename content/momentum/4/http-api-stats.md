---
lastUpdated: "31/01/2023"
title: "Stats HTTP API"
description: "Welcome to the HTTP API section"
---

Welcome to the HTTP API section. You can find here the description of the HTTP API implemented by the `msys.gc_stats` library. This API is supported by Momentum 4.5 or later.

Before using it you must make sure you have correctly set up the HTTP listener to the TCP port 2081 and Momentum is loading the library that implements the API. A sample of this configuration is shown below:

```
HTTP_listener {
  Listen ":2081" { }
}

scriptlet "scriptlet" {
  script "http_api_stats" {
    source = "msys.gc_stats"
  }
}
```
