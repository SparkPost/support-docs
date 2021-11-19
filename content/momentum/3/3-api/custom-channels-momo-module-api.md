---
lastUpdated: "03/26/2020"
title: "Momentum Modules"
description: "The Generic Delivery and Generic HTTP Client modules are the base modules used in developing a custom delivery module This section provides details about these modules as they relate to the custom build request handle response and status classifier functions The following is the module API for the Generic Delivery..."
---

The Generic Delivery and Generic HTTP Client modules are the base modules used in developing a custom delivery module. This section provides details about these modules as they relate to the custom build_request, handle_response, and status_classifier functions.

### <a name="custom_channels.delivery.api"></a> Generic Delivery Module

The following is the module API for the Generic Delivery module (`generic_delivery`).

```
/* Delivery Action Codes */
/* *
 * Return value of custom status_classifier
 * Note: DELIVERY_CONTINUE is the same value as "no status code" 
 * */        
#define DELIVERY_CONTINUE 0 
#define DELIVERY_DONE 1
#define DELIVERY_SUCCESS 2
#define DELIVERY_TEMPFAILED 3
#define DELIVERY_PERMFAILED 4

/* Context Variables */
/* address, e.g. From */ 
#define VCTX_KEY_DLV_SOURCE_ADDRESS "DLV_Source_Addr"
/* id, e.g. protocol specific */
#define VCTX_KEY_DLV_SOURCE_ID "DLV_Source_ID"
/* address, e.g. To */
#define VCTX_KEY_DLV_DEST_ADDRESS "DLV_Dest_Addr"
/* id, e.g. protocol specific */
#define VCTX_KEY_DLV_DEST_ID "DLV_Dest_ID"  
/* protocol specific */                           
#define VCTX_KEY_DLV_TRANSACTION_ID "DLV_Transaction_ID"
/* response status code */
#define VCTX_KEY_DLV_RESPONSE_STATUS "DLV_Response_Status"
/* response status description */
#define VCTX_KEY_DLV_RESPONSE_STATUS_DETAIL "DLV_Response_Status_Detail"
/* bytes of the whole delivery message */
#define VCTX_KEY_DLV_MSG_LENGTH "DLV_Msg_Length"
/* IP address of connected remote entity */
#define VCTX_KEY_DLV_REMOTE_IP_ADDRESS "DLV_Remote_IP_Address"

#define DELIVERY_API(x) x

/* Message Function */
/* *
 * ob_get_current_message
 * 
 * Utility function to return the current ec_message being processed:
 * o delivery batch mode disabled: returns conn->curr_message
 * o delivery batch mode enabled: returns the 1st message in conn->curr_messages array
 * */
DELIVERY_API(ec_message*) ob_get_current_message(connection_handle *connh);
```
**<a name="custom_channels.delivery.action.codes"></a> Delivery Action Codes**

Your custom status_classifier callback must classify the status codes associated with your service as successfully delivered, temporarily failed, or permanently failed and return the corresponding delivery action codes. For details about these return codes, see [Table A.5, “Return Codes for Status Classifier Callback”](/momentum/3/3-api/custom-channels-custom-routines#status.classifier.return.values.table).

**<a name="custom_channels.context.variables"></a> Message Context Variables**

The context variables specifically associated with a custom delivery module are `DLV_Response_Status` and `DLV_Response_Status_Detail`. The disposition of a message within the generic_delivery and httpclnt module depends on the settings of the `DLV_Response_Status` context variable. This context variable will not initially exist for the message you are processing. The base modules consider no context variable to be a successfully delivered message. If you encounter an error in your custom functions, you must set the `DLV_RESPONSE_STATUS` context variable to a corresponding status code. These status codes are specific to your delivery module. Your status_classifier callback classifies these status codes into successful delivery, permfail delivery, or tempfail delivery. The system will retry tempfailed messages within the parameters defined in the Momentum configuration for your delivery domains.

The corresponding `DLV_Response_Status_Detail` context variable is used to provide an additional description of the status code. Only the `DLV_Response_Status` is used for classifying the message disposition.

For additional details about ec_message context variables, see [Message Context Variables](/momentum/3/3-reference/3-reference-policy-context-mess). For a list of all `DLV_` variables, see [Callouts and Push Notifications](/momentum/3/3-push/push-generic-delivery-lua).

**<a name="custom_channels.message.function"></a> Message Function**

Your custom build_request and handle_response callbacks use [ob_get_current_message](/momentum/3/3-api/apis-ob-get-current-message) to get the current ec_message.

### <a name="custom_channels.client.api"></a> Generic HTTP Client Module

The following is the module API for the Generic HTTP Client Module (`httpclnt`).

```
/* HTTP Internal Codes */
/* *
 * Return value of custom build_request and custom handle_response
 * */
#define HTTP_INTERNAL_CONT 0
#define HTTP_INTERNAL_DONE 1
#define HTTP_INTERNAL_FAIL -1
#define HTTP_INTERNAL_OK HTTP_INTERNAL_CONT

/* Max HTTP response length */
#define MAX_HTTP_RESPONSE_LENGTH 2048

#define HTTP_API(x) x

/* Utility to initialize function pointers */
ec_pd* http_pd_init(const char *prot);

/* httpclnt Functions */ 
/* *
 * Utilities to build HTTP request message
 * */
HTTP_API(int) http_request_add_header(http_session *sess, const char *header,
  const char *value, int replace);
HTTP_API(int) http_request_delete_header(http_session *sess, const char *header);
HTTP_API(void) http_request_set_body(http_session *sess, const char *body);
HTTP_API(int) http_status_classifier(int status);
/* *
 * http_request_finalize
 *
 * Utility to build request->data from request_line + headers + body
 * Shall be called when modified structural data in http_request
 * to re-construct the raw data to be sent (request->data)
 * */
HTTP_API(int) http_request_finalize(http_session *sess, int update);
```
**<a name="custom_channels.http.internal.codes"></a> HTTP Internal Codes**

Your custom build_request and handle_response callbacks must return one of the `HTTP_Internal` codes. For details about these return codes, see [Table A.3, “Return Codes for Build Request Callback”](/momentum/3/3-api/custom-channels-custom-routines#http.internal.request.table) and [Table A.4, “Return Codes for Handle Response Callback”](/momentum/3/3-api/custom-channels-custom-routines#http.internal.response.table), respectively.

**<a name="custom_channels.function.pointer"></a> Function Pointer Utility**

The utility `http_pd_init` is used to get a protocol driver structure in the module setup routine. For details, see [the section called “Module Configuration Setup”](/momentum/3/3-api/custom-channels-custom-module-api#custom_channels.config.routine).

**<a name="custom_channels.httpclnt.functions"></a> httpclnt Functions**

Momentum provides several functions that can be used when building an HTTP request message. Definitions of these functions are available at [*httpclnt Functions*](/momentum/3/3-api/httpclnt) .

**<a name="custom_channels.data.structures"></a> Data Structures**

The data structures `http_session`, `http_request`, and `http_response` are used in your custom callbacks. Definitions are available at [“http_session”](/momentum/3/3-api/structs-http-session).

The `http_request` structure within the `http_session` structure data is used by your custom build_request callback to set the information for the message payload. [Table A.1, “Data Fields for http_request”](/momentum/3/3-api/custom-channels-momo-module-api#http.request.fields.table) provides a description of the data fields. Some of the fields are initialized from message context variables and configuration options.

<a name="http.request.fields.table"></a> 


| Field | Description |
| :-- | :-- |
| string **method* | String that contains the HTTP method. The httpclnt module will initialize this value to `VCTX_KEY_HTTP_METHOD` if it exists, [http_method](/momentum/3/3-reference/3-reference-conf-ref-http-method) if it is defined, or “POST” otherwise. |
| string **version* | String that contains the HTTP version. The httpclnt module will initialize this value to `VCTX_KEY_HTTP_VERSION` if it exists, [http_version](/momentum/3/3-reference/3-reference-conf-ref-http-version) if it is defined, or “1.1” otherwise. |
| string **uri* | String that contains the URI to use on the HTTP request line. The httpclnt module will initialize this value to `VCTX_KEY_HTTP_URI` if it exists, [http_uri](/momentum/3/3-reference/3-reference-conf-ref-http-uri) if it is defined, or “\” otherwise. |
| *ec_hash_table headers*  | Hash table of headers to be used in building the HTTP message headers for transmission. “Host” header – The headers hash table will contain the HTTP Host name for the Host header if `VCTX_KEY_HTTP_HOST` exists or [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host) is defined. If neither is defined, the “Host” header will not be present in the headers hash table. “Authorization” header – The headers will contain the HTTP Authorization base64 encoded Basic authorization value if `VCTX_KEY_BASIC_AUTH` exists or [http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth) is defined. If neither is defined, the “Authorization” header will not be present in the headers hash table. Additional headers that your delivery module requires must be added to the header hash using [http_request_add_header](/momentum/3/3-api/apis-http-request-add-header). |
| string** body*  | Set to NULL before the build_request handler is called. For details, see [“Build Request”](/momentum/3/3-api/custom-channels-custom-routines#custom_channels.build.request). |
| string** data*  | Set to NULL before the build_request handler is called. For details, see [“Build Request”](/momentum/3/3-api/custom-channels-custom-routines#custom_channels.build.request). |
| void **userdata* | Available for use by your custom delivery module. If your delivery module uses this field to store reference to allocated memory, the module is responsible for freeing it. |

Prior to calling your custom handle_response, the `http_response` structure within the `http_session` structure data is allocated and contains values based on the HTTP response message received from the server. [Table A.2, “Data Fields for http_response”](/momentum/3/3-api/custom-channels-momo-module-api#http.response.fields.table) provides a description of the data fields available for use in the handle_response callback. Other fields are for internal use only.

<a name="http.response.fields.table"></a> 


| Field | Description |
| :-- | :-- |
| string **version* | String that contains the HTTP version reported in the HTTP response status line |
| string **status_code* | String that contains the HTTP status code reported in the HTTP response status line |
| string **status_reason* | String that contains the HTTP status reason reported in the HTTP status line |
| *ec_hash_table headers*  | Headers hash table that contains the HTTP response headers and corresponding values |
| string** data*  | String that contains the complete HTTP response (status line, headers, and body, if present) |
| char **body* | Pointer to the body content within the HTTP response string |