---
lastUpdated: "03/26/2020"
title: "http_session"
description: "This struct is defined as follows To use this struct include the file modules delivery http httpclnt h Chapter 63 Hooks in the generic delivery and httpclnt Scope and Momentum for Mobile Push Notifications..."
---

This struct is defined as follows:

```
typedef struct _http_request {
 /* request line: Method SP Request-URI SP HTTP-Version CRLF */
 string *method;
 string *version;
 string *uri;
 ec_hash_table headers;
 string* body;
 string* data;   /* string representation of entire HTTP request line + headers + payload */
 int to_send_offset;  /* offset of the data already sent in "data". internal use only */
 void *userdata; /* protocol specific data. Shall be released in reset_request func */
} http_request;

typedef struct http_response {
 int read_done;   /* whether received complete payload */
 int header_done; /* whether received complete header */
 int64_t content_length;  /* -1: chunked data */
 /* structural data after parsing */
 /* status line: HTTP-Version SP Status-Code SP Reason-Phrase CRLF */
 string *version;          
 string *status_code;       
 string *status_reason;  
 ec_hash_table headers;
 char *body;             /* pos in data.buffer */
 string* data;   /* HTTP status line + header lines + body if exist  */
 int payload_offset;  /* pointer to the start of the payload in data */
                      /* TODO: may merge with *body + read_done ?    */
 /* the following place holder are only for internal use */
 /* used to keep the raw data from socket.               */
 /* for non-chunked response, they are same as data & payload_offset */
 string* raw_data;  
 int raw_offset; /* pointer to the start of the current chunk in raw_data */
 void *userdata; /* protocol specific data. Shall be released in reset_response func */
} http_response;

typedef struct http_session {
 connection_handle *connh;
 string *ipaddr; /* remote ip address, for logging purpose */
 http_request *request;
 http_response *response;
 void *userdata; /* protocol specific data */
 Event *response_timer; /* timeout event for waiting for response */
} http_session;
```

To use this struct, include the file `modules/delivery/http/httpclnt.h`.

### <a name="idp32775344"></a> See Also

[*Hooks in the generic_delivery and httpclnt Scope*](/momentum/3/3-api/hooks-generic-delivery) and [Momentum for Mobile Push Notifications](/momentum/3/3-push)