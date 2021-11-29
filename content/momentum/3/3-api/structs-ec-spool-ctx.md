---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx"
description: "This struct is defined as follows To use this struct include the file spool c ec spool ctx create..."
---

This struct is defined as follows:

```
struct _ec_spool_ctx {
#ifdef _WIN32
  HANDLE spool_lock;
#else
  int spool_lock;
#endif
  char *base;
  size_t base_length;
  int file_mode;

  /* if 0, we'll use the global message_expiration instead */
  int maximum_retention;
  /** if non zero, we'll always rewrite message ids on import */
  unsigned always_rewrite_mids:1;
  /** if non zero, we'll suppress adding trace headers */
  unsigned suppress_trace_headers:1;

  ec_spool_ctx *next;

  ec_hash_table *spool_hash;
  ec_atomic_t spool_hash_lock;
  ec_hash_table *spool_resources;
  pthread_mutex_t resource_lock;
  ec_spool_ctx_insertion_func on_insert;
  void *on_insert_closure;

  int filtered;
  ec_spool_ctx_io_filter_func filters[EC_SPOOL_FILTER_GROWBUF_READ+1];
  void *filter_ctxs[EC_SPOOL_FILTER_GROWBUF_READ+1];
};
```

To use this struct, include the file `spool.c`.

### <a name="idp42021680"></a> See Also

[ec_spool_ctx_create](/momentum/3/3-api/apis-ec-spool-ctx-create)