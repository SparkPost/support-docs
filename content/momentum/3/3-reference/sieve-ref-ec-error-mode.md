---
lastUpdated: "03/26/2020"
title: "ec_error_mode"
description: "ec error mode set the error mode to fail or continue ec error mode continue fail ec error mode affects how Sieve handles certain kinds of errors for instance passing incorrect parameters to Sieve functions failed includes low memory conditions The default is to fail the incoming session with a..."
---

<a name="sieve.ref.ec_error_mode"></a> 
## Name

ec_error_mode — set the error mode to "fail" or "continue"

## Synopsis

`ec_error_mode` { *`continue|fail`* }

<a name="idp29513824"></a> 
## Description

**ec_error_mode** affects how Sieve handles certain kinds of errors (for instance, passing incorrect parameters to Sieve functions, failed includes, low memory conditions). The default is to `fail` the incoming session with a transient error response, but you may set it to `continue` to have the script continue executing past the failure point.

The ability to change this behavior was introduced in 2.2, and the default was changed to `fail`. In prior releases, the default was effectively `continue` and this could not be altered.