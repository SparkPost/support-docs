---
lastUpdated: "03/26/2020"
title: "httplog"
description: "The httplog logs HTTP requests and responses It is configured in the http logger module A line is written to the httplog for every HTTP request and response The fields in the log entry are delimited by spaces such as the following The following is a description of the fields..."
---

The `httplog` logs HTTP requests and responses. It is configured in the [http_logger](/momentum/4/modules/http-logger) module.

### <a name="idp4799712"></a> HTTP Records

A line is written to the `httplog` for every HTTP request and response.

The fields in the log entry are delimited by spaces, such as the following:

`1398088802 10.77.0.158:18906 *:2081 "POST api/v1/transmissions HTTP/1.0" 500 332 1045.000`

The following is a description of the fields:

<a name="log_formats.http_logger.fields"></a> 


| Offset | Example Field | Description |
| --- | --- | --- |
| 0 | 1398088802 | Date of the HTTP request in Unix timestamp format (seconds since 00:00:00 Jan 1, 1970) |
| 1 | 10.77.0.158:18906 | Remote IP and port |
| 2 | *:2081 | Local IP and port |
| 3 | POST | HTTP request method |
| 4 | api/v1/transmissions | HTTP request URL path |
| 5 | HTTP/1.0 | HTTP version of the request |
| 6 | 500 | HTTP response status code |
| 7 | 332 | Total number of bytes of the response |
| 8 | 1045.000 | Time taken from request to response in milliseconds |