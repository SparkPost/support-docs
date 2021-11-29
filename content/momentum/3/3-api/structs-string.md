---
lastUpdated: "03/26/2020"
title: "string"
description: "This struct is a typedef of ec string It is defined in the following way To use this struct include the file misc ec string h string init type..."
---

This struct is a typedef of `_ec_string`. It is defined in the following way:

```
struct _ec_string {
  int len;
  int allocd;
  char *buffer;
  int type;
    /** stored using malloc(3C) memory */
#define STRING_TYPE_MALLOC MEMTYPE_IS_MALLOC_3C
    /** stored using ECMEMTYPE_STRING */
#define STRING_TYPE_ECSTRING MEMTYPE_STRING
    /** stored using ECMEMTYPE_MESSAGE_BODY */
#define STRING_TYPE_MESSAGE_BODY MEMTYPE_MESSAGE_BODY
    /** MEMTYPE_SIEVE backed string.  All strings in sieve are utf-8 encoded */
#define STRING_TYPE_SIEVE MEMTYPE_SIEVE
    /* stored in externally managed memory that cannot grow */
#define STRING_TYPE_STATIC -100
    /** stored in ECMEMTYPE_STRING until a threshold is crossed;
     * memory is then written to disk */
#define STRING_TYPE_DISK_BACKED -101
    /** written directly to the backing */
#define STRING_TYPE_IO_OBJECT -102
    /** stored in a chain of growbufs */
#define STRING_TYPE_GROWBUF -103
    /** start with a static buffer, but switch to STRING_TYPE_ECSTRING if
     * we need to grow beyond its bounds */
#define STRING_TYPE_GROWABLE_STATIC -104
  io_object *backing;
};
```

To use this struct, include the file `misc/ec_string.h`.

### <a name="idp45772960"></a> See Also

[string_init_type](/momentum/3/3-api/apis-string-init-type)