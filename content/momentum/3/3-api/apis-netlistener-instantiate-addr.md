---
lastUpdated: "03/26/2020"
title: "netlistener_instantiate_addr"
description: "netlistener instantiate addr Start service on a listener endpoint int netlistener instantiate addr listener hdr addr netlistener def listener ec config header hdr const char addr This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.netlistener_instantiate_addr"></a> 
## Name

netlistener_instantiate_addr — Start service on a listener endpoint

## Synopsis

`#include "netlistener.h"`

| `int **netlistener_instantiate_addr** (` | <var class="pdparam">listener</var>, |   |
|   | <var class="pdparam">hdr</var>, |   |
|   | <var class="pdparam">addr</var>`)`; |   |

`netlistener_def * <var class="pdparam">listener</var>`;
`ec_config_header * <var class="pdparam">hdr</var>`;
`const char * <var class="pdparam">addr</var>`;<a name="idp58131536"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Start service on a listener endpoint.

if hdr is NULL, the endpoint will use the default configuration. Note that this function makes no attempt to find a suitable configuration header if hdr is NULL. Returns 1 is the service was scheduled to start, 0 if the listener was set to skip, or if there was some other error.