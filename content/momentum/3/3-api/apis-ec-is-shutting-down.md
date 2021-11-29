---
lastUpdated: "03/26/2020"
title: "ec_is_shutting_down"
description: "ec is shutting down Is the ecelerity process shutting down int ec is shutting down void A boolean function reporting whether or not ecelerity is shutting down NONE This function returns 0 false or 1 true It is legal to call this function in any thread ec shutdown ex..."
---

<a name="apis.ec_is_shutting_down"></a> 
## Name

ec_is_shutting_down — Is the ecelerity process shutting down?

## Synopsis

`#include "control.h"`

| `int **ec_is_shutting_down** (` | `)`; |   |

`void`;<a name="idp49337152"></a> 
## Description

A boolean function reporting whether or not ecelerity is shutting down.

**<a name="idp49338416"></a> Parameters**

**NONE**

**<a name="idp49340032"></a> Return Values**

This function returns 0 (false) or 1 (true).

**<a name="idp49340976"></a> Threading**

It is legal to call this function in any thread.

<a name="idp49342080"></a> 
## See Also

[ec_shutdown_ex](/momentum/3/3-api/apis-ec-shutdown-ex).