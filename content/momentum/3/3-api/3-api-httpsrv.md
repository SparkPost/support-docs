---
lastUpdated: "03/26/2020"
title: "httpsrv Functions"
description: "Table of Contents ec httpsrv ctx get Gets the per request closure blobject from a session ec httpsrv ctx set Sets a per request closure blobject on a session ec httpsrv register Registers an HTTP URI handler ec httpsrv request accept construct get Returns the accept construct from the current..."
---

              
| Name                                                                                                                                                  | Description                                                               |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [ec_httpsrv_ctx_get](/momentum/3/3-api/apis-ec-httpsrv-ctx-get)                                                   | Gets the per-request closure blobject from a session                      |
| [ec_httpsrv_ctx_set](/momentum/3/3-api/apis-ec-httpsrv-ctx-set)                                                   | Sets a per-request closure blobject on a session                          |
| [ec_httpsrv_register](/momentum/3/3-api/apis-ec-httpsrv-register)                                                 | Registers an HTTP URI handler                                             |
| [ec_httpsrv_request_accept_construct_get](/momentum/3/3-api/apis-ec-httpsrv-request-accept-construct-get)         | Returns the accept construct from the current session                     |
| [ec_httpsrv_request_content_type_get](/momentum/3/3-api/apis-ec-httpsrv-request-content-type-get)                 | Gets the content type and charset from the session request                |
| [ec_httpsrv_request_data_get](/momentum/3/3-api/apis-ec-httpsrv-request-data-get)                                 | Gets a handle on the request payload data                                 |
| [ec_httpsrv_request_data_get_json](/momentum/3/3-api/apis-ec-httpsrv-request-data-get-json)                       | Gets a JSON object representation of the request payload data             |
| [ec_httpsrv_request_data_get_string](/momentum/3/3-api/apis-ec-httpsrv-request-data-get-string)                   | Buffers request payload data to memory and returns a string pointer to it |
| [ec_httpsrv_request_data_get_xml](/momentum/3/3-api/apis-ec-httpsrv-request-data-get-xml)                         | Gets an XML object representation of the request payload data             |
| [ec_httpsrv_request_event_get](/momentum/3/3-api/apis-ec-httpsrv-request-event-get)                               | Returns the Event from the current session                                |
| [ec_httpsrv_request_event_get_scheduler_inst](/momentum/3/3-api/apis-ec-httpsrv-request-event-get-scheduler-inst) | Returns the scheduler for an Event from the current session               |
| [ec_httpsrv_request_header_get](/momentum/3/3-api/apis-ec-httpsrv-request-header-get)                             | Gets the value of a specific HTTP request header                          |
| [ec_httpsrv_request_method_get](/momentum/3/3-api/apis-ec-httpsrv-request-method-get)                             | Gets the method from the session request                                  |
| [ec_httpsrv_request_subject_cn_get](/momentum/3/3-api/apis-ec-httpsrv-request-subject-cn-get)                     | Gets the peer SSL certificate common name string                          |
| [ec_httpsrv_request_url_get](/momentum/3/3-api/apis-ec-httpsrv-request-url-get)                                   | Gets the request URL                                                      |
| [ec_httpsrv_request_username_get](/momentum/3/3-api/apis-ec-httpsrv-request-username-get)                         | Gets the authenticated user name                                          |
| [ec_httpsrv_response_append](/momentum/3/3-api/apis-ec-httpsrv-response-append)                                   | Append data to the session response output                                |
| [ec_httpsrv_response_flush](/momentum/3/3-api/apis-ec-httpsrv-response-flush)                                     | Flush pending session response output                                     |
| [ec_httpsrv_response_header_set](/momentum/3/3-api/apis-ec-httpsrv-response-header-set)                           | Sets a header in the session response                                     |
| [ec_httpsrv_response_io](/momentum/3/3-api/apis-ec-httpsrv-response-io)                                           | Set the session response to an IO object                                  |
| [ec_httpsrv_response_json](/momentum/3/3-api/apis-ec-httpsrv-response-json)                                       | Set the session response to a JSON object                                 |
| [ec_httpsrv_response_printf](/momentum/3/3-api/apis-ec-httpsrv-response-printf)                                   | Format and append a string to the session response output                 |
| [ec_httpsrv_response_status_denied](/momentum/3/3-api/apis-ec-httpsrv-response-status-denied)                     | Sets the HTTP status to indicate a 403 error, and sets content-type       |
| [ec_httpsrv_response_status_error](/momentum/3/3-api/apis-ec-httpsrv-response-status-error)                       | Sets the HTTP status to indicate a server error, and sets content-type    |
| [ec_httpsrv_response_status_not_found](/momentum/3/3-api/apis-ec-httpsrv-response-status-not-found)               | Sets the HTTP status to indicate a 404 error, and sets content-type       |
| [ec_httpsrv_response_status_ok](/momentum/3/3-api/apis-ec-httpsrv-response-status-ok)                             | Sets the HTTP status to indicate success, and sets content-type           |
| [ec_httpsrv_response_status_set](/momentum/3/3-api/apis-ec-httpsrv-response-status-set)                           | Sets the HTTP status for the session response                             |
| [ec_httpsrv_response_status_set_std](/momentum/3/3-api/apis-ec-httpsrv-response-status-set-std)                   | Sets the HTTP status for the session response                             |
| [ec_httpsrv_response_string](/momentum/3/3-api/apis-ec-httpsrv-response-string)                                   | Set the session response to an ec_string object                           |
| [ec_httpsrv_response_vprintf](/momentum/3/3-api/apis-ec-httpsrv-response-vprintf)                                 | Format and append a string to the session response output                 |
| [ec_httpsrv_response_xml](/momentum/3/3-api/apis-ec-httpsrv-response-xml)                                         | Set the session response to an XML object                                 |
| [ec_httpsrv_service_ctx_get](/momentum/3/3-api/apis-ec-httpsrv-service-ctx-get)                                   | Returns the closure parameter that was registered with the handler        |
| [ec_httpsrv_session_resume](/momentum/3/3-api/apis-ec-httpsrv-session-resume)                                     | Arranges for a suspended http session to be resumed                       |
| [ec_httpsrv_session_suspend](/momentum/3/3-api/apis-ec-httpsrv-session-suspend)                                   | Arranges for an http session to be suspended                              |

The APIs documented here relate to the [httpsrv](/momentum/3/3-rest/rest-configuring#rest.httpsrv) module.