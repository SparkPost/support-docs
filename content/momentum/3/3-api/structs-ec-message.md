---
lastUpdated: "03/26/2020"
title: "ec_message"
description: "The members of this struct are as follows To use this struct include the file ec message h Chapter 34 Message Functions and Section 68 39 ec message part..."
---

The members of this struct are as follows:

```
struct ec_message_resource {
  uint32_t version;
  char *name;
  size_t name_length;
  int8_t state;
  uint8_t defer;
  io_object *io;
  struct ec_message_resource *resource_next;
  struct ec_message_resource *resource_previous;
};
struct ec_message_resource;
typedef struct ec_message_resource ec_message_resource_t;
...
struct _ec_message {
  message_id id;
  struct timeval creation_time; /* time message entered the spool */
  struct timeval next_attempt;  /* transient... time of next attempt */
  struct timeval final_time;    /* time of delivery */

  /** you MUST use ec_message_assign_domain() or ec_message_assign_domain_by_name()
   * to change this member, or you WILL skew the binding/domain stats. */
  domain_record *domain;
  connection_handle *conn_handle;
  io_object *_object;

  /* validation context environment.  This will be carried across
   * to the message from the validation_context during reception.
   * It MAY be present in messages as they are spooled from disk
   * if the IO storage layer supports serializing the information. */
  ECDict vctx_conn, vctx_mess;

  /* top level component of mime message.  Don't access this directly,
   * use ec_message_get_first_part() instead, as we employ JIT parsing
   * in some cases. */
  ec_message_part *top;
  ec_hash_table *pblobs;
  ec_atomic_t ref;

  /** you MUST use ec_message_change_binding_slot() to change this member
   * or you WILL skew the binding stats. */
  ec_binding_slot binding_slot;

  string _mailfrom;
  string _rcptto;
  string _code;

  /** SPOOL_MEM, SPOOL_SWAP, SPOOL_DISK */
  unsigned swapped:3;

  unsigned stage:7;
  unsigned priority:1;
  unsigned state:8;

  /** EM_TRYING, EM_SUCCEEDED, EM_FAILED */
  unsigned delivered:2;

  /** see delivery_types.h */
  unsigned delivered_class:6;

  /** do a full parse.  Otherwise, we'll just do headers/body. */
  unsigned full_parse:1;

  /** similar to a partial parse, except that the parser should indicate
   * to the caller that it should stop feeding data. */
  unsigned stop_after_headers:1;

  /** if non-zero, the vctx bits are present in the meta data file */
  unsigned journalled_vctx:1;

  /** if non-zero, will remove message from disk when last ref is released */
  unsigned unlink_on_free:1;

  /** if non-zero, this message is an immutable snapshot */
  unsigned is_snapshot:1;

#define EC_MSG_MIME_OK 0
#define EC_MSG_MIME_INVALID 1
#define EC_MSG_MIME_FATALLY_BAD 2
  unsigned invalid_mime:2;

  unsigned num_retries:16;
  unsigned recv_method:8;
  unsigned batch_unlink:1;
  unsigned failed:1;          /* Indicates that message should be processed for immediate failure. */
  unsigned bounce:2;          /* Indicates whether or not the message is a bounce message. */
  unsigned _spare_2:2;

  ec_sockaddr recv_from;
  ec_sockaddr recv_via;
  off_t _overlay_off;   /* don't access directly */

  u_int32_t _calc_msg_size; /* don't access directly */

  ec_atomic_t vctx_conn_vers, vctx_mess_vers;

  /** opaque state for message parser */
  void *parse_state;
  struct ec_message_parser_parameters params;
  int parse_result;

  /** @since 2.2.1.24 */
  pthread_mutex_t _lock; /* don't access directly */
  ec_message *_snapref;

  /** @since 3.0.9.0 */
  message_id conn_id;
  message_id batch_id;

  /** @internal */
  const char *pathway;
  ec_message_resource_t *resources;
};
```

To use this struct, include the file `ec_message.h`.

### <a name="idp43608112"></a> See Also

[*Message Functions*](/momentum/3/3-api/ec-message) , and [“ec_message_part”](/momentum/3/3-api/structs-ec-message-part).