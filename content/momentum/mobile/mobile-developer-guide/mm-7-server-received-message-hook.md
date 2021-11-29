---
lastUpdated: "03/26/2020"
title: "MM7 Server Received Message Hook"
description: "The MM 7 Server Received Message Hook enables customer applications to inspect and modify MM 7 server requests received by Mobile Momentum The hook is invoked once for each incoming MM 7 request following parsing of the MM 7 soap message The following elements are available to the hook for..."
---


## <a name="MM7ServerReceivedMessageHook.purpose"></a> Purpose

The MM7 Server Received Message Hook enables customer applications to inspect and modify MM7 server requests received by Mobile Momentum. The hook is invoked once for each incoming MM7 request following parsing of the MM7 soap message. The following elements are available to the hook for inspection:

*   MM7 transaction type

*   MM7 SOAP envelope

The MM7 transaction type is defined as the following enum:

```
enum transaction_type {DeliverReq = 1, DeliveryReportReq,
ReadReplyReq};
```

The following elements are available to the hook for inspection and/or modification:

*   MM7 SOAP attachment

*   An ec_dict structure containing the MM7 SOAP envelope XML parse result

*   An ec_double_list, also a product of the MM7 SOAP envelope XML parse, containing the intended recipients of the MM7 transaction

The following information elements are not pre-populated and are available to the hook for modification:

*   The MM7 SOAP status code to be returned in the MM7 response

*   The MM7 SOAP status text to be returned in the MM7 response

*   The MM7 SOAP status details to be returned in the MM7 response

*   The MM7 SOAP service code to be returned in the MM7 response

These elements are accessible by customer hook implementations using the mm7_transaction structure:

```
struct mm7_transaction {
  ec_blobject * my_blob;
  enum transaction_type trx_type;
  string soap_envelope;
  string soap_attachment;
  void * indoc; //xmlDocPtr
  ECDict tags;
  ec_double_list recipients;
  int complete;
  /* The following values get set in the mm7 response */
  unsigned int status_code;
  string status_text;
  string status_details;
  string service_code;
};
```

Note that this structure contains more fields than the information elements noted above. Do not access or modify any information within the mm7_transaction structure except as indicated above.

### <a name="idp1096176"></a> Return Values

Finally, the hook implementation may set the following return values:

*   MM7_CONTINUE – continue converting the MM7 request into an ec_message

*   MM7_DELIVERED – the MM7 request is considered "delivered". Cease additional conversion, but do not perform Momentum failure processing.

*   MM7_PERM_FAIL – the MM7 request is considered "permanently failed". Performs Momentum failure processing.