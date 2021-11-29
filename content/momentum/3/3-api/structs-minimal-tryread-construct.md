---
lastUpdated: "03/26/2020"
title: "minimal_tryread_construct"
description: "This struct is defined as follows To use this struct include the file ec growbuf h minimal tryread construct free..."
---

This struct is defined as follows:

```
struct _minimal_tryread_construct
{
  grow_buf gb_buffer;
  int gb_donesize;
  char *gb_donebuffer;
  int gb_padding;
  int max_region_size;
  /** called immediately after a match is detected */
  void (*match_hook)(minimal_tryread_construct *mtc, void *match_closure);
  void *match_closure;
  /** called after a constructing the donebuffer, and prior to returning
   * from tryread_until(), in the in-memory case only. */
  void (*finalize_hook)(minimal_tryread_construct *, void *finalize_closure);
  void *finalize_closure;
  void (*page_out_hook)(minimal_tryread_construct *mtc, 
                        void *page_out_closure, const char *buf, int len);
  void *page_out_closure;
};
```

To use this struct, include the file `ec_growbuf.h`.

### <a name="idp46371168"></a> See Also

[minimal_tryread_construct_free](/momentum/3/3-api/apis-minimal-tryread-construct-free),