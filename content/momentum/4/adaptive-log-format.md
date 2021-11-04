---
lastUpdated: "03/26/2020"
title: "adaptive Log"
description: "The adaptive log is configured in the adaptive module The adaptive log entry is an delimited string such as the following The following is a description of the fields Table 35 3 Adaptive Record Fields Offset Example Field Description 0 12345679 Date in Unix timestamp format seconds since 00 00..."
---

The `adaptive` log is configured in the [adaptive](/momentum/4/modules/4-adaptive) module. The adaptive log entry is an `@` delimited string, such as the following:

12345679@1@G@default@hotmail.com@NOTICE@ retry_interval *`from`* -> *`to`*

The following is a description of the fields:

<a name="adaptive.log.format.fields"></a> 


| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 12345679 | Date in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 1 | Version of the log file format (decimal number currently set to `1` ) |
| 2 | G | Record type identifier (single ASCII character currently set to ‘`G`’ for "generic") |
| 3 | default | Binding name, only included in ‘`G`’ record types (may be empty) |
| 4 | hotmail.com | Domain name, only included in ‘`G`’ record types (may be empty) |
| 5 | NOTICE | Log level name, only included in ‘`G`’ record types (see [debug_flags](/momentum/4/config/ref-debug-flags) for a list of valid names.) |
| 6 | retry_interval *`from`* -> *`to`* | Free-form string, only included in ‘`G`’ record types (this string may include additional ‘`@`’ signs; typically, it will show how an option has changed.) |