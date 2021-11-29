---
lastUpdated: "03/26/2020"
title: "paniclog"
description: "The paniclog is a debugging log in which system events are logged depending on the level of Debug Flags set in your configuration It is configured in the ec logger Under normal circumstances Debug Flags should be empty or should be omitted from the ecelerity conf file For debugging purposes..."
---

The `paniclog` is a debugging log in which system events are logged depending on the level of Debug_Flags set in your configuration. It is configured in the [ec_logger](/momentum/4/modules/ec-logger).

Under normal circumstances, Debug_Flags should be empty or should be omitted from the `ecelerity.conf` file. For debugging purposes, set up Debug_Flags as described in [debug_flags](/momentum/4/config/ref-debug-flags). When a problem event occurs and it is within the logging level set by the `Debug_Flags` option, the event is written to the `paniclog`. Excepting informational startup messages, the `paniclog` should be empty under normal circumstances. It is recommended that you periodically check your `paniclog` to look for any anomalous events.

In addition, Momentum logs entries to the `paniclog` when the `log_requests_to_paniclog` option is enabled in the HTTP_Listener and its nested scopes.

### <a name="idp5044896"></a> Panic Records

A line is written to the `paniclog` for every system event, when enabled in the configuration. The fields in the log entry are delimited by spaces.

The following is an example entry for an HTTP request when `log_requests_to_paniclog` is set to `true`:

`1307461172:192.168.0.197 "POST api/v1/transmissions HTTP/1.1" 200 224 5.000`

The following is a description of the fields:

<a name="log_formats.paniclog.ec.record.fields"></a> 


| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1307461172: | Date of delivery in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 192.168.0.197 | IP address where the injection originated |
| 2 | POST | HTTP request method |
| 3 | api/v1/transmissions | HTTP request URL path |
| 4 | HTTP/1.0 | HTTP version of the request |
| 5 | 200 | HTTP response status code |
| 6 | 224 | Total number of bytes of the response |
| 7 | 5.000 | Time taken from request to response in milliseconds |