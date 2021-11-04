---
lastUpdated: "03/26/2020"
title: "Developing Applications for the SMPP ESME"
description: "This section describes the details for implementing SMPP hooks The SMPP hooks for an MO message are invoked in the following order SMPP MO PDU Evaluation Hook for normal MO only SMPP Delivery Report Evaluation Hook for delivery reports only SMPP MO Conversion Hook SMPP Received Message Validation Hook validate..."
---

This section describes the details for implementing SMPP hooks. The SMPP hooks for an MO message are invoked in the following order:

1.  SMPP MO PDU Evaluation Hook (for normal MO only)

2.  SMPP Delivery Report Evaluation Hook (for delivery reports only)

3.  SMPP MO Conversion Hook

4.  SMPP Received Message Validation Hook (validate_data_spool_each_rcpt())

The SMPP hooks for an MT message are invoked in the following order:

1.  SMPP MT Conversion Hook

2.  SMPP MT PDU Evaluation Hook (for submission only)

3.  SMPP Submit Response Hook (a chance to access both the submit resp and original ec_message)

<a name="DC.SMPPHookPoints"></a> **SMPP Hook Points. ** The SMPP hook points are as follows

*   [*SMPP MT Conversion Hook*](/momentum/mobile/mobile-developer-guide/smppmt-conversion-hook) 

*   [*SMPP MO Conversion Hook*](/momentum/mobile/mobile-developer-guide/smppmo-conversion-hook) 

*   [*SMPP Delivery Receipt Evaluation Hook*](/momentum/mobile/mobile-developer-guide/smpp-delivery-receipt-evaluation-hook) 

*   [Chapter 14, *SMPP PDU MO (Receiver) Evaluation Hook*](SMPPPDUMOEvaluationHook "Chapter 14. SMPP PDU MO (Receiver) Evaluation Hook") 

*   [Chapter 15, *SMPP PDU MT (Transmit) Evaluation Hook*](SMPPPDUMTEvaluationHook "Chapter 15. SMPP PDU MT (Transmit) Evaluation Hook") 

*   [*SMPP Submit Response Hook*](/momentum/mobile/mobile-developer-guide/smpp-submit-response-hook) 

*   [*SMPP Received Message Validation Hook*](/momentum/mobile/mobile-developer-guide/smpp-received-message-validation-hook) 

### <a name="idp196528"></a> SMPP Logging Hook Points

Mobile Momentum utilizes the extensible logging infrastructure provided by core Momentum ([https://support.messagesystems.com/docs/web-ref/extending.logging.php](/momentum/3/3-reference/extending-logging)) to provide customer flexibility to implement their own logging system for mobile messages. As with other Momentum modules such as SMTP, MM7, the following logger hooks are available for logging SMPP messages at different phases:

*   [*SMPP Log Delivery Hook*](/momentum/mobile/mobile-developer-guide/smpp-log-delivery-hook) 

*   [*SMPP Log Reception Hook*](/momentum/mobile/mobile-developer-guide/smpp-log-reception-hook) 

*   [*SMPP Logger Status Hook*](/momentum/mobile/mobile-developer-guide/smpp-log-status-hook) 

*   [*SMPP Log Tempfail Hook*](/momentum/mobile/mobile-developer-guide/smpp-log-tempfail-hook) 

*   [*SMPP Log Permfail Hook*](/momentum/mobile/mobile-developer-guide/smpp-log-permfail-hook) 

*   [*SMPP Log Conversion Hook*](/momentum/mobile/mobile-developer-guide/smpp-log-conversion-hook) 

*   [*SMPP Log Inband Bounce Hook*](/momentum/mobile/mobile-developer-guide/smpp-log-inband-bounce-hook) 

*   [*SMPP Log Outband Bounce Hook*](/momentum/mobile/mobile-developer-guide/smpp-log-outband-bounce-hook) 

*   [*SMPP Log Transient Bounce Hook*](/momentum/mobile/mobile-developer-guide/smpp-log-transient-bounce-hook) 

All SMPP logger hooks have a reference to an `smpp_conn` structure and an `ec_message` as input. Hooks can access any data structures and context variables stored in the `smpp_conn` and `ec_message` for their logging purpose.

The `smpp_conn` structure is defined below:

```
typedef struct _smpp_conn {
  message_id id;
  struct smpp_state * state;
  Event * fd_event;
  Event * enquire_link_timer;
  Event * death;
  connection_handle * ec_connh;
  int bind_retries;
  char *error;
  struct timeval create_time;
  char peer_interface_version;
  char outbind_password[SMPP_MAX_PASSWORD_LEN+1];
  char peer_system_id[SMPP_MAX_SYSTEM_ID_LEN+1];
  char domain_name[MAXDOMAINNAME+1];

  /* inbound state */
  unsigned int in_pending_len;
  string * in_pending_buf;
  event_io_state in_io_state;
  ec_hash_table sar_states; //tbd: note this will not handle 
  // incoming segments across connections
  ec_hash_table batch_ec_messages;
  unsigned int consecutive_error_count;
  unsigned long mo_conversions;

  /* outbound state */
  unsigned long out_seqnum;
  event_io_state out_io_state;
  ec_hash_table requests_awaiting_response;
  ec_hash_table pending_ec_messages;
  ec_double_list mt_messages_to_send;
  ec_double_list pdus_delayed;
  ec_atomic_t refs;
  unsigned long mt_conversions;
  ec_message *mt_message_in_progress;

  /* time to allow sending again */
  struct timeval throttled_timeout_time; /* set this param when receive SMPP_ESME_RTHROTTLED */
} smpp_conn;
```

### <a name="DC.SMPPrelatedec_messagecontextvariablesacc"></a> SMPP-related ec_message Context Variables Accessible Through SMPP Hooks

The following ec_message context variables are significant to SMPP and available to hooks with ec_message input:

<a name="SMPP-related_ec_message_Context_Variables"></a> 


| Context Key Name | Corresponding configuration option | Description |
| --- | --- | --- |
| SMS_Data_Coding | SMPP_SMS_Data_Coding | data coding for SMS MT |
| SMS_Destination_Flag | SMPP_Destination_Flag | the destination address type to be used in SUBMIT_MULTI: 1 for SME address; 2 for distribution list name. |
| SMS_Destination_Address |   | destination_addr in SMS MT |
| SMS_Destination_NPI | SMPP_Destination_Numbering_Plan | dst_addr_npi in SMS MT |
| SMS_Destination_TON | SMPP_Destination_Type_Of_Number | dst_addr_ton in SMS MT |
| SMS_Source_Address |   | source_addr in SMS MT |
| SMS_Source_NPI | SMPP_ESME_Numbering_Plan | src_addr_npi in SMS MT |
| SMS_Source_TON | SMPP_ESME_Type_Of_Number | src_addr_ton in SMS MT |
| SMS_Registered_Delivery | SMPP_Registered_Delivery | This value will be set to the registered_delivery parameter in SMS MT to request an SMSC delivery receipt and/or SME originated acknowledgement. |
| MO_Email_From_Address |   | a source email address to be used during SMS-to-email translation |
| MO_Email_To_Address |   | a destination email address to be used during SMS-to-email translation |
| MO_Email_Subject |   | email subject to be used during SMS-to-email translation |
| MO_Email_Data_Coding |   | email data coding during SMS-to-email conversion |
| SMS_Text |   | SMS text message after email-to-SMS conversion |
| MO_Email_Text |   | email text after SMS-to-email conversion |
| #total_segs |   | total SMS segments after email-to-SMS conversion |
| #dr_latency |   | latency (time difference between a MT submission and reception of corresponding delivery receipt) in seconds |
| #mess_stat |   | string description of message_state in delivery receipt |
| #mess_id |   | message_id in delivery receipt |
| #mess_type |   | string description of ems_class in delivery receipt |
| customer TLV name |   | value will be used to set the customer defined optional TLV |

The following table relates the context key name to the "#define" name:

<a name="SMPP-related_Context_Variables-DEFINE_NAME"></a> 


| Context Key Name | "#define" name |
| --- | --- |
| SMS_Data_Coding | VCTX_KEY_SMS_DATA_CODING |
| SMS_Destination_Flag | VCTX_KEY_SMS_DST_FLAG |
| SMS_Destination_Address | VCTX_KEY_SMS_DST_ADDRESS |
| SMS_Destination_NPI | VCTX_KEY_SMS_DST_NPI |
| SMS_Destination_TON | VCTX_KEY_SMS_DST_TON |
| SMS_Source_Address | VCTX_KEY_SMS_SRC_ADDRESS |
| SMS_Source_NPI | VCTX_KEY_SMS_SRC_NPI |
| SMS_Source_TON | VCTX_KEY_SMS_SRC_TON |
| SMS_Registered_Delivery | VCTX_KEY_SMS_REGISTERED_DELIVERY |
| MO_Email_From_Address | VCTX_KEY_MO_EMAIL_FROM_ADDRESS |
| MO_Email_To_Address | VCTX_KEY_MO_EMAIL_TO_ADDRESS |
| MO_Email_Subject | VCTX_KEY_MO_EMAIL_SUBJECT |
| MO_Email_Data_Coding | VCTX_KEY_MO_EMAIL_DATA_CODING |
| SMS_Text | BLOB_KEY_SMS_TEXT |
| MO_Email_Text | BLOB_KEY_MO_EMAIL_TEXT |
| #total_segs |   |
| #dr_latency |   |
| #mess_stat |   |
| #mess_id |   |
| #mess_type |   |
| customer TLV name |   |