---
lastUpdated: "03/26/2020"
title: "Custom Callback Functions"
description: "This section describes the custom callback functions that are needed to augment the Generic Delivery and Generic HTTP Client modules when implementing a custom delivery channel Your build request callback handler must build customized HTTP request messages for the service you are implementing The underlying httpclnt module uses HTTP for..."
---

This section describes the custom callback functions that are needed to augment the Generic Delivery and Generic HTTP Client modules when implementing a custom delivery channel.

### <a name="custom_channels.build.request"></a> Build Request

Your build_request callback handler must build customized HTTP request messages for the service you are implementing. The underlying httpclnt module uses HTTP for transport of the messages, but the HTTP headers and the HTTP body vary based on the service being implemented. You must provide the additional HTTP header information and HTTP body content for the HTTP message payload sent. The information for the payload must be set in the `http_request` structure data within the `http_session` structure data. The `http_request` structure is allocated and initialized before the httpclnt module calls your build_request handler.

Your implementation must format the HTTP message payload based on the requirements of your service. The requirements may use JSON, XML, HTML, or other encoding for the messages transmitted to your service.

Momentum modules using the httpclnt module for transmission use custom MCMT message parts tailored to the requirements of the service being implemented. These custom MCMT message parts allow a formatted message payload to be injected for delivery to the service you are implementing. This allows for multichannel messages to be injected, which can also target the service being implemented. Creating and handling of custom MCMT messages is not discussed in this document. If using custom MCMT parts, the MCMT part can be retrieved by the build_request callback for use in generating the HTTP message to send to your service.

Additionally, your build_request callback must set the message status context variables `DLV_RESPONSE_STATUS` and `DLV_RESPONSE_STATUS_DETAIL` in the event of an error condition during building the request for transmission. Descriptions of these context variables are given in [the section called “Message Context Variables”](/momentum/3/3-api/custom-channels-momo-module-api#custom_channels.context.variables).

This callback occurs on an **Async** thread.

The function prototype for the build_request callback (handler) is

`int (*build_request_func) (http_session *sess);`

To begin building your HTTP request message, get the current message being processed on the connection, as follows.

```
ec_message *msg = ob_get_current_message(sess->connh);
/* *
 * where sess is the http_session * passed to the callback
 * and connh is the connection handle stored in the http_session data
 * */
```

You must get the message part to be used in building the payload. If using custom MCMT parts, you must get the MCMT part. If using a text/plain part from a MIME message, you must get that part from the message. The message part you use to extract header and body content is entirely dependent on your implementation.

After you get the message part, add any HTTP headers you need to the headers hash table. Use the httpclnt functions designed to add, delete, or update headers stored in the hash table. See [*httpclnt Functions*](/momentum/3/3-api/httpclnt) . Custom header values may be derived from custom message context variables or from custom headers contained in the message or MCMT part. You must add a “Content-Length” header with a value set to the length of the HTTP body content. Typically, you would also set a “Content-Type” header to designate the body content type; however, this is dependent on the protocol requirements of your service. The httpclnt module does not currently compute and set the “Content-Length” header value for you.

From this point, you can proceed in one of two ways. The first option is to build the HTTP body content only. In this case, you must allocate and store the content in a string, assigning the string pointer to the `body` field in `sess–>request`. This content will vary based on the requirements of your service. The content may be derived from the message or MCMT parts. The [http_request_set_body](/momentum/3/3-api/apis-http-request-set-body) function may be used to allocate and set the body string. Your build_request callback should return `HTTP_INTERNAL_CONT` indicating that the httpclnt should build the complete HTTP message payload on return.

The second option is to build the complete HTTP message payload: request line, headers, and content. In this case, you must allocate and store the complete payload in a string, assigning the string pointer to the `data` field in `sess–>request`. The build_request handler should return `HTTP_INTERNAL_DONE` to indicate the complete HTTP message payload has been built and is ready for transmission. If an error occurs during building the request, the `data` field must be NULL on return.

In either case, the httpclnt module will dispose of the string when it has completed processing of the message and is ready for the next message in the queue.

Next, set any message context variables you may need for logging or other purposes.

If there was an error while building the request, set `DLV_RESPONSE_STATUS` and `DLV_RESPONSE_STATUS_DETAIL`. Additionally, it is imperative that the pointer to the complete HTTP message payload (`sess–>request–>data`) not be set. If this string was created during this callback, it must be freed before returning. If this pointer is not NULL on return, the httpclnt module will attempt to send the message.

Keep in mind that if `DLV_RESPONSE_STATUS` is not set for the message, the generic_delivery and httpclnt modules will treat the message as successfully delivered. Additionally, status codes in the 500–5xx range should not be used as they are used internally by the generic_delivery and httpclnt modules for internal error conditions and handling.

Set the status code and status detail in the message context using [ec_message_context_set](/momentum/3/3-api/apis-ec-message-context-set), as follows.

```
ec_message_context_set(msg, ECMESS_CTX_MESS, VCTX_KEY_DLV_RESPONSE_STATUS,
  status_code);       
ec_message_context_set(msg, ECMESS_CTX_MESS, VCTX_KEY_DLV_RESPONSE_STATUS_DETAIL,
  “Status code description”);  
/* *
 * where msg is the ec_message*, 
 *       status_code is the ASCII equivalent of your status code, and
 *       VCTX_KEY_DLV_RESPONSE_STATUS is defined as “DLV_RESPONSE_STATUS”  
 * */
```

If you need to remove the status code and status detail from the message context, use [ec_message_context_delete](/momentum/3/3-api/apis-ec-message-context-delete), as follows.

```
ec_message_context_delete(msg, ECMESS_CTX_MESS, VCTX_KEY_DLV_RESPONSE_STATUS);
ec_message_context_delete(msg,ECMESS_CTX_MESS, VCTX_KEY_DLV_RESPONSE_STATUS_DETAIL);
```

Finally, return the appropriate return code as listed in [Table A.3, “Return Codes for Build Request Callback”](/momentum/3/3-api/custom-channels-custom-routines#http.internal.request.table). The caller will proceed according to the code returned.

<a name="http.internal.request.table"></a> 


| Return Code | Value | Description |
| :-- | :-: | :-- |
| HTTP_INTERNAL_CONT | 0 | HTTP headers have been added to `sess–>request–>headers`, and the HTTP content string has been set in `sess–>request–>body`. The httpclnt module is to build the HTTP request message from that content and send to it to the connected server on return. |
| HTTP_INTERNAL_DONE | 1 | The callback has successfully created the entire HTTP message transmission string, and the pointer to it is set in `sess–>request–>data`. No further processing is needed, and the httpclnt module may proceed to send the HTTP request message to the server on return. |
| HTTP_INTERNAL_FAIL | -1 | The callback encountered an error while building the HTTP request message and set `DLV_RESPONSE_STATUS` and `DLV_RESPONSE_STATUS_DETAIL` for the message being processed. |

### Note

Currently, your delivery module can only send non-chunked transfers. It will receive both Chunked Transfer-Encoding messages and Non-Chunked responses.

### <a name="custom_channels.handle.response"></a> Handle Response

Your handle_response callback handler must provide custom handling of the HTTP response message from the server. The HTTP response is received prior to calling this handler. The HTTP response status line status code and status reason are set in the `status_code` and `status_reason` fields of the `http_response` structure data within the `http_session` structure data. Often, these do not properly reflect the appropriate status for a custom protocol. Typically, the HTTP headers and/or HTTP body provide the information to determine the message status. The HTTP body content may contain additional text, HTML, XML, or JSON response data. The presence and interpretation of that data is dependent on the custom protocol being implemented.

After called, this handler must inspect the HTTP status line, HTTP headers, and HTTP body to determine the appropriate status code and disposition for the message. Then, it must set the `DLV_RESPONSE_STATUS` and `DLV_RESPONSE_STATUS_DETAIL` message context variables accordingly before returning.

This callback occurs on an **Async** thread.

The function prototype for the handle_response callback (handler) is

`int (*handle_response)(http_session *sess);`

After called, the handle_response callback must retrieve the message associated with the response, as follows.

```
ec_message *msg =  ob_get_current_message(sess->connh);
/* *
 * where sess is the http_session * passed to the callback
 * and connh is the connection handle stored in the http_session data
 * */
```

From the response message, you must retrieve HTTP response header values for inspection. The following is an example for a HTTP response that includes an `“X-NotificationStatus”` header.

```
#define MPNS_NotificationStatus “X-NotificationStatus”
char * notification_status;
if (echash_retrieve(&sess->resp->headers, MPNS_NotificationStatus,
  sizeof(MPNS_NotificationStatus)-1, (void **)&notification_status))
{
  /* the header was present in the response and got it */
  /* notification_status is a ptr to the value for the header */
} 
else
{
  /* the header was not present in the response */
}
```

Next, you must inspect the status code, status reason, headers, and body content of the HTTP response message based on the requirements of your service to determine status and set `DLV_RESPONSE_STATUS` and `DLV_RESPONSE_STATUS_DETAIL` accordingly.

Finally, return the appropriate return code as listed in [Table A.4, “Return Codes for Handle Response Callback”](/momentum/3/3-api/custom-channels-custom-routines#http.internal.response.table).

<a name="http.internal.response.table"></a> 


| Return Code | Value | Description |
| :-- | :-: | :-- |
| HTTP_INTERNAL_CONT | 0 | This callback did not set `DLV_RESPONSE_STATUS` and `DLV_RESPONSE_STATUS_DETAIL`. On return, the caller will set these message context variables to the HTTP response status line values. This is likely not the desired behavior for a custom module. |
| HTTP_INTERNAL_DONE | 1 | This callback has set `DLV_RESPONSE_STATUS` and `DLV_RESPONSE_STATUS_DETAIL` for the message being processed. No further response handling is needed and the generic_delivery and httpclnt modules may proceed to message disposition handling. |
| HTTP_INTERNAL_FAIL | -1 | This callback has set `DLV_RESPONSE_STATUS` and `DLV_RESPONSE_STATUS_DETAIL` for the message being processed. This return will essentially result in the same processing as `HTTP_INTERNAL_DONE`. May be used if errors occurred processing the HTTP response headers and body content. |

### <a name="custom_channels.status.classifier"></a> Status Classifier

Your status_classifier callback handler must classify the message to determine disposition. It is passed the integer value of the `DLV_RESPONSE_STATUS` set in the message context. Using this status code, the callback will determine if the message was successfully delivered, temporarily failed, or permanently failed. Status codes in the 500-5xx range are used internally by the generic_delivery and httpclnt modules for internal error conditions and handling. Your status_classifier callback must handle the classification of those status codes as well. If your status_classifier does not recognize a status code, return `DELIVERY_TEMPFAILED`. The assumption is that the internal 5xx error codes represent connection or internal problems and should be retried at some point.

If the `DLV_RESPONSE_STATUS` context variable has not been set in the message context, the generic_delivery and httpclnt modules will assume the message was successfully delivered and will not call the status_classifier.

[Table A.5, “Return Codes for Status Classifier Callback”](/momentum/3/3-api/custom-channels-custom-routines#status.classifier.return.values.table) lists the valid return codes for the status_classifier. The caller will take the corresponding action when this callback returns.

<a name="status.classifier.return.values.table"></a> 


| Return Code | Value | Description |
| :-- | :-: | :-- |
| DELIVERY_SUCCESS | 2 | Message will be treated as a successful delivery regardless of the actual status code. Default message_delivered behavior will apply. |
| DELIVERY_TEMPFAILED | 3 | Message will be treated as a temp failed delivery regardless of the actual status code. Default message_tempfailed behavior will apply. |
| DELIVERY_PERMFAILED | 4 | Message will be treated as a perm failed delivery regardless of the actual status code. Default message_permfailed behavior will apply. |

This callback occurs on an **Async** thread.

The function prototype for the status_classifier callback is

`int (*status_classifier)(int status);`
### <a name="custom_channels.disposer"></a> Disposer Callback

The disposer callback handlers are optional and can be used by your custom delivery module to provide logging. These callbacks are called when a message disposition is being handled and provide a reference to the message. However, the `connection` and `http_session` data are not available at that time.

The following are the optional disposer callback handlers:

*   dispose_delivery handler – The message has been delivered, will be removed from the spool, and will be deleted.

*   dispose_tempfail handler – The message failed to be delivered, has been re-queued for delivery, will remain in the system, and will be retried later.

*   dispose_permfail handler – The message delivery has failed, will not be retried, will be removed from the spool, and will be deleted.

If used, ensure that you register these functions with the generic_delivery module during setup. For details, see [the section called “Module Configuration Setup”](/momentum/3/3-api/custom-channels-custom-module-api#custom_channels.config.routine).

Even though these callbacks are called on an **Async** thread, the ec_message passed to them is available for the duration of the callback and will not be disposed until after this returns. If there is extensive work to do at that time, you should take a snapshot of the message or extract what you need from the ec_message and complete it on another **Async** job. The next message queued for the connection will not begin processing until after the return from the disposer callback and disposition is complete.

The function prototype for the disposer callbacks (handlers) is

`void (*func) (ec_message *msg);`

The following are examples of the disposer functions.

```
void dispose_delivery(ec_message *msg);  
void dispose_tempfail(ec_message *msg);
void dispose_permfail(ec_message *msg);
```

For additional information about the Momentum logging API, see [Logging](/momentum/3/3-reference/operations-logging).

### <a name="custom_channels.optional.handlers"></a> Additional Custom Handlers

The custom handlers (callbacks), described in this section, may also be implemented depending on your needs. The likely use would be to maintain any custom memory structures that must be maintained between calls to the handlers.

During setup, ensure that you register any callbacks that you need. For details, see [the section called “Module Configuration Setup”](/momentum/3/3-api/custom-channels-custom-module-api#custom_channels.config.routine).

These handlers will be called in the **Scheduler** thread.

The function prototype for the custom callbacks (handlers) is

`int (*func) (http_session *sess);`

The following are optional custom handlers.

**<a name="custom_channels.init.session"></a> init_session callback**

This callback occurs after the connection has been made to the server and any necessary TLS handshaking has taken place. You may provide a handler here to perform any custom work you need when a connection is made and to allocate any custom data structures you may need for the duration of the connection. The `userdata` field in the `http_session` structure data is available to store a pointer to your custom session data.

**<a name="custom_channels.destroy.session"></a> destroy_session callback**

This callback occurs when the session (connection) is being destroyed. This event may occur if there is an abnormal abort on the connection, the connection is being closed due to idle timeout, or the connection is being closed for other reasons. Use this handler to cleanup any resources your delivery module may have created.

**<a name="custom_channels.reset.session"></a> reset_session callback**

This callback occurs after the processing of a message completes, just before the queue is checked for the next message to process on the connection.

**<a name="custom_channels.reset.request"></a> reset_request callback**

This callback typically occurs after the processing of a message completes, just before the queue is checked for the next message to process on the connection. Use this handler to cleanup any resources your delivery module may have created and assigned to the `userdata` field of the `http_request` structure data. Ensure that the structure is still valid by checking that the pointer is not NULL.

**<a name="custom_channels.reset.response"></a> reset_response callback**

This callback typically occurs after the processing of a message completes, just before the queue is checked for the next message to process on the connection. Use this handler to cleanup any resources your delivery module may have created and assigned to the `userdata` field of the `http_response` structure data. Ensure the structure is still valid by checking that the pointer is not NULL.