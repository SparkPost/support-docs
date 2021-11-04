---
lastUpdated: "03/26/2020"
title: "message_construct"
description: "This struct is defined as follows To use this struct include the file esmtp factory h esmtp destroy message construct Section 68 31 ec hash table and Section 68 38 ec message..."
---

This struct is defined as follows:

```
/*
   For SMTP sessions, the accept_construct closure is a pointer
   to the message_construct for the session.

   accept_construct *ac;
   message_construct *info =
     (message_construct *)ac->accept_construct_closure.vptr;
*/

typedef int (*ESMTPExtensionSetup)(char *arg, message_construct *mc,
  void *closure);
typedef int (*ESMTPExtensionFunc)(char *arg, Event *e, message_construct *mc,
                                  void *closure);
typedef struct _ec_esmtp_extension_call {
  ESMTPExtensionSetup setup;
  ESMTPExtensionFunc func;
  void *closure;
} esmtp_extension_call;

struct _message_construct
{
  /*  This must be first, as we pass the address of these objects to
     functions that expect minimal_tryread_constructs */
  minimal_tryread_construct subcon;
#define mgb_buffer subcon.gb_buffer
#define mgb_donebuffer subcon.gb_donebuffer
#define mgb_donesize subcon.gb_donesize
#define mgb_padding subcon.gb_padding
#define mgb_match_hook subcon.match_hook
#define mgb_match_closure subcon.match_closure
#define mgb_finalize_hook subcon.finalize_hook
#define mgb_finalize_closure subcon.finalize_closure
  accept_construct *ac;
  char *write_buffer;
  int write_goal;
  int bytes_written;
  struct timeval last_state_time;
  int state;                    /* One of the above */
  esmtp_extension_call *extension_call;
  ECDict smtp_capabilities;
  int relayable:1;
  int can_auth:1;
  int internal:1;
  const char *banner_hostname;
  const char *received_hostname;
  const char *static_banner;
  int idle_timeout;
  int connection_message_limit;
  int connection_message_count;
  int connection_rcpt_limit;
  int connection_rcpt_count;
  int message_rcpt_limit;
  int message_rcpt_count;
  int allow_trailing_whitespace_in_commands;
  int mcmt_reception;
  eclist_node *extra_recipients;
  ec_message *message;
  sp_async_message *sam;
  string vstr;

  /* continuance stash */
  validate_context ctx;
  int transient_state;
  int status;
  int retstatus;
  char *note;
  struct ec_auth_info auth_info;

  /* Flags */
  unsigned session_permfail:1;
  unsigned should_enqueue:1;
  unsigned tls_inject:2;
  unsigned unused:28;

  /* peer address with no port for convenience in resolving Peer scope
   * values */
  char peer_address[INET6_ADDRSTRLEN];
  size_t max_message_size;
};
```

To use this struct, include the file `esmtp_factory.h`.

### <a name="idp46145008"></a> See Also

[esmtp_destroy_message_construct](/momentum/3/3-api/apis-esmtp-destroy-message-construct), [“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table) and [“ec_message”](/momentum/3/3-api/structs-ec-message)