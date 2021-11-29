---
lastUpdated: "03/26/2020"
title: "smpp_conn"
description: "This struct is defined as follows To use this struct include the file modules mobility smpp h Chapter 46 SMPP Functions and Section 68 79 SMPP PDU..."
---

This struct is defined as follows:

```
struct _smpp_conn {
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
  ec_hash_table sar_states; /* tbd: note this will not handle incoming 
  segments across connections*/
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
};
```

To use this struct, include the file `modules/mobility/smpp.h`.

### <a name="idp28177808"></a> See Also

[*SMPP Functions*](/momentum/3/3-api/smpp) and [“SMPP_PDU”](/momentum/3/3-api/structs-smpp-pdu)