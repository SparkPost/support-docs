---
lastUpdated: "03/26/2020"
title: "Log Formats"
description: "The acctlog contains both authentication entries and authorization entries for the ESMTP Listener and Control Listener It is configured in the ec logger module If enabled for the listener authentication events for Unix domain sockets are logged one per line The log entry is an delimited string such as the..."
---


## <a name="log_formats.acctlog"></a> `acctlog`

The `acctlog` contains both authentication entries and authorization entries for the ESMTP_Listener and Control_Listener. It is configured in the [ec_logger](/momentum/4/modules/ec-logger) module.

### <a name="idp3989920"></a> Authentication Records

If enabled for the listener, authentication events for Unix domain sockets are logged one per line. The log entry is an `@` delimited string, such as the following:

`1160503808@N@/tmp/2025@@ec-user@1`

If enabled for the listener, authentication events for TCP/IP listeners are logged one per line. The log entry is an `@` delimited string, such as the following:

`1160172232@N@*:2025@10.80.116.126:37164@ec_user@1`

Note that `@`, `\`, `\n` and other control characters appearing in a field are escaped by adding an `\` before them.

The following is a description of the fields:

<a name="log_formats.authentication.record.fields"></a> 


| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1160172232 | Date of authentication in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | N | `N` indicating an authentication entry or `T` indicating an authentication timeout |
| 2 | *:2025 | Listener endpoint on which the event occurred |
| 3 | 10.80.116.126:37164 | IP and port of the peer (For Unix domain connections, this field will be empty.) |
| 4 | ec_user | User name used for the authentication |
| 5 | 1 | 1 indicates the authentication is successful; 0 otherwise. |

### <a name="idp4017616"></a> Authorization Records

A line is written to `acctlog` for every authorization event. The log entry is an `@` delimited string, such as the following:

```
1160503811@Z@/tmp/2025@@ec-user@1@summary@users
1160504707@Z@/tmp/2025@@ec-user@0@shutdown
1160172223@Z@*:2025@10.80.116.126:37162@ec-user@1@summary@users
1160172219@Z@*:2025@10.80.116.126:37162@ec-user@0@shutdown
```

Note that `@`, `\`, `\n` and other control characters appearing in a field are escaped by adding an `\` before them.

The following is a description of the fields:

<a name="log_formats.authorization.record.fields"></a> 


| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1160172219 | Date of authorization in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | Z | `Z` indicating an authorization entry |
| 2 | /tmp/2025 *or* *:2025 | Listener endpoint on which the event occurred |
| 3 | 10.80.116.126:37162 | IP and port of the peer (For Unix domain connections this field will be blank.) |
| 4 | ec_user | User name used for the authentication |
| 5 | 1 | 1 indicates the user is authorized to run the command; 0 indicates the authorization failed; -1 indicates some error occurred during authorization. |
| 6 | summary | Command that was requested to run |
| 7 | users | Role that matched during successful authorization |

### Note

The `?` type indicator denotes an unknown `acctlog` type.