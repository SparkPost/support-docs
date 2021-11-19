---
lastUpdated: "03/26/2020"
title: "ec_blobject_class"
description: "This struct is a typedef of ec blobject class It is defined as follows To use this struct include the file ec blobject h Section 68 17 ec blobject ec blobject wrap ec blobject addref and ec blobject delref..."
---

This struct is a typedef of `_ec_blobject_class`. It is defined as follows:

```
struct _ec_blobject_class {
  /** typename as per memtype naming conventions */
  const char *objectType;
  /**
   * destructor function.
   * the dtor is called when the
   * last reference to the blobject is released
   **/
  void (*dtor)(void *self);
  /**
   * printer.
   * For introspection, renders state into a string.
   **/
  void (*printer)(void *self, string *output);
};
```

To use this struct, include the file `ec_blobject.h`.

### <a name="idp46478416"></a> See Also

[“ec_blobject”](/momentum/3/3-api/structs-ec-blobject), [ec_blobject_wrap](/momentum/3/3-api/apis-ec-blobject-wrap), [ec_blobject_addref](/momentum/3/3-api/apis-ec-blobject-addref), and [ec_blobject_delref](/momentum/3/3-api/apis-ec-blobject-delref).