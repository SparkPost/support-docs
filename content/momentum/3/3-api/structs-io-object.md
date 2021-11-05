---
lastUpdated: "03/26/2020"
title: "io_object"
description: "This struct is defined as follows To use this struct include the file io wrapper int h ec spool ctx filter open io wrapper openand Section 68 56 io wrapper..."
---

This struct is defined as follows:

```
struct _io_mem {
  char *buf;
  size_t len;
  int memtype;
  ec_atomic_t ref;
};

struct _io_object {
  io_wrapper *methods;
  ec_atomic_t ref;
  char *scheme;
  char *path;
  int mode;
  int options;
  union {
    int fd;
    void *handle;
    struct {
      struct _io_mem *memory;
      off_t pos;
      int fd_for_sendfile;
    } mem;
  } io;
  void (*on_destroy)(io_object *io);
  /* app_closure is for application usage; it is invalid
   * for an io_wrapper to touch app_closure */
  void *app_closure;
  string *readbuf;
  int readbufpos;
  ECDict context;
};
```

To use this struct, include the file `io_wrapper_int.h`.

### <a name="idp45137840"></a> See Also

[ec_spool_ctx_filter_open](/momentum/3/3-api/apis-ec-spool-ctx-filter-open), [io_wrapper_open](/momentum/3/3-api/apis-io-wrapper-open)and [“io_wrapper”](/momentum/3/3-api/structs-io-wrapper)