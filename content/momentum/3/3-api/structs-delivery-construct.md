---
lastUpdated: "03/26/2020"
title: "delivery_construct"
description: "This struct is defined as follows To use this struct include the file smtp h ec smtp closeconn and smtp should session shutdown..."
---

This struct is defined as follows:

```
struct _delivery_construct
{
  Event *e;
  ec_message *message;
  connection_handle *conn_handle;
  int last_nread;
  int bytes;
  int towrite;
  char *buffer;
  buf_storage *large_buf;
  int large_buf_bytes;
  unsigned transform_8bitmime:2;
  unsigned batch_assessed:1;
  unsigned _spare:29;
  /* array of ec_message* */
  ec_ptr_array batch;
  ec_config_header *transaction;
  /* Alternative IO object populated when we need to do intelligent
   * transformation of the message body for 8BITMIME downconversion */
  io_object *alt_body;
  /* Cached config info to use for life of the delivery_construct object */
  time_t config_last_refreshed;
  int use_sendfile;
  int tcpbuf;
  int migrate_connections_between_sibling_domains;
  int keep_message_dicts_in_memory;
  int binding_domain_idle_timeout;
  int binding_domain_rset_timeout;
  int binding_domain_ehlo_timeout;
  int binding_domain_mailfrom_timeout;
  int binding_domain_rcptto_timeout;
  int binding_domain_body_timeout;
  int binding_domain_delivery_method;
  int binding_domain_max_deliveries;
  int binding_domain_max_recipients_per_connection;
  int binding_domain_max_recipients_per_batch;
  int binding_domain_transform_8bitmime;
  int binding_domain_send_8bitmime;
  int binding_domain_use_xclient;

  int tls_parms_loaded;

  int binding_domain_use_tls;
  int binding_domain_tls_verify;
  char *binding_domain_tls_cert;
  char *binding_domain_tls_key;
  char *binding_domain_tls_ca;
  char *binding_domain_tls_ciphers;
};
```

To use this struct, include the file `smtp.h`.

### <a name="idp29984016"></a> See Also

[ec_smtp_closeconn](/momentum/3/3-api/apis-ec-smtp-closeconn) and [smtp_should_session_shutdown](/momentum/3/3-api/hooks-core-smtp-should-session-shutdown)