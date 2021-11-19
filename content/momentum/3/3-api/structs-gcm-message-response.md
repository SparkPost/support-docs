---
lastUpdated: "03/26/2020"
title: "gcm_message_response"
description: "Configuration Change This feature is available as of version 3 5 5 This struct is defined as follows To use this struct include the file modules mobility gcm gcm h Momentum for Mobile Push Notifications and Chapter 62 Hooks in the gcm Scope..."
---

**Configuration Change. ** This feature is available as of version 3.5.5.

This struct is defined as follows:

```
/*
 * gcm reponse structures
 * Encoded from json object returned in http 200 responses.
 * This struct is also used by gcm_response_eval_hook.
 */

/* GCM recipient response - per recipient */
typedef struct _gcm_recipient_response {
 const char *message_id;     /* message id assigned by google */
 const char *registration_id;/* canonical reg id (new id for recipient) */
 const char *error;          /* error reponse */
 enum GCM_ERROR  error_code; /* error code */
} gcm_recipient_response; 

/* GCM message response - per notification */
typedef struct _gcm_message_response {
 int success;        /* Number of successful recipients */
 int failure;        /* Number of recipients that failed */
 int canonical_ids;  /* Number of recipients that have a newer Registration ID */
 /* NOTE - currently not supporting Google Multicast so there
   * is just one results element.  XMPP version of Google GCM
   * does not support Multicast.  If we support multicast then
   * the results need to be an array.
   */
 gcm_recipient_response results; /* response results per recipient */
} gcm_message_response;
```

To use this struct, include the file `modules/mobility/gcm/gcm.h`.

### <a name="idp46492336"></a> See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [*Hooks in the gcm Scope*](/momentum/3/3-api/hooks-gcm) .