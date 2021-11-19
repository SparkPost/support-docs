---
lastUpdated: "03/26/2020"
title: "ec_statvfs"
description: "This struct is defined as follows To use this struct include the file misc ec statvfs h msys os statvfs read..."
---

This struct is defined as follows:

```
/*
 * Portable statvfs structure. Note that "file system objects" refer to
 * files, directories, etc...
 */
struct ec_statvfs {
  unsigned int version;         /* Current ABI version.                   */
  uint64_t kilobytes_total;     /* Total number of kilobytes.             */
  uint64_t kilobytes_available; /* Kilobytes available for use.           */
  uint64_t objects_total;       /* Total number of objects available.     */
  uint64_t objects_available;   /* File system objects available for use. */
};
typedef struct ec_statvfs ec_statvfs_t;
```

To use this struct, include the file `misc/ec_statvfs.h`.

### <a name="idp45155312"></a> See Also

[msys.os.statvfs_read](/momentum/3/3-reference/3-reference-lua-ref-msys-os-statvfs-read)