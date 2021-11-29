---
lastUpdated: "03/26/2020"
title: "io_wrapper"
description: "This struct is defined as follows To use this struct include the file io wrapper h Section 68 55 io object and Chapter 30 io wrapper Functions..."
---

This struct is defined as follows:

```
struct _io_wrapper {
  size_t sizeof_self;
  int (*open)(io_object *io, const char *filename, int options, int mode);
  ssize_t (*write)(io_object *io, const char *buf, size_t nbytes);
  ssize_t (*writev)(io_object *io, const struct iovec *iov, int iovcnt);
  ssize_t (*read)(io_object *io, void *buf, size_t nbytes);
  ssize_t (*readv)(io_object *io, const struct iovec *iov, int iovcnt);
  int (*close)(io_object *io);
  int (*reopen)(io_object *io);
  int (*flush)(io_object *io);
  off_t (*lseek)(io_object *io, off_t offset, int whence);
  int (*supports_nonblocking)(io_object *io);
  int (*pollable_fd)(io_object *io);
  char *scheme;
  off_t (*get_size)(io_object *io);
  /** @since 2.2.1.24 */
  io_object *(*cloner)(io_object *io);
};

struct _io_job {
  ec_async_job job;
  const char *filename;
  string *buffer;
  int errorcode;
  enum _io_job_status {
    IOJ_MISUSED, /* job->buffer was not populated */
    IOJ_OPEN_FAILED, /* failed to open the resource */
    IOJ_READ_FAILED, /* a read call failed */
    IOJ_STORE_FAILED, /* failed to buffer a chunk from the resource */
    IOJ_COMPLETED /* all done */
  } status;
};
```

To use this struct, include the file `io_wrapper.h`.

### <a name="idp36920400"></a> See Also

[“io_object”](/momentum/3/3-api/structs-io-object) and [*io_wrapper Functions*](/momentum/3/3-api/io-wrapper)