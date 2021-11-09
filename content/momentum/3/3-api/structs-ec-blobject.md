---
lastUpdated: "03/26/2020"
title: "ec_blobject"
description: "This struct is a typedef of ec blobject It is defined as follows To use this struct include the file ec blobject h Section 68 18 ec blobject class ec message blobject get ec message blobject store ec blobject wrap ec blobject addref and ec blobject delref..."
---

This struct is a typedef of `_ec_blobject`. It is defined as follows:

```
struct _ec_blobject {
  ec_blobject_class *cls;
  ec_atomic_t ref;
  void *self;
};
```

To use this struct, include the file `ec_blobject.h`.

### <a name="idp46384352"></a> See Also

[“ec_blobject_class”](/momentum/3/3-api/structs-ec-blobject-class), [ec_message_blobject_get](/momentum/3/3-api/apis-ec-message-blobject-get), [ec_message_blobject_store](/momentum/3/3-api/apis-ec-message-blobject-store), [ec_blobject_wrap](/momentum/3/3-api/apis-ec-blobject-wrap), [ec_blobject_addref](/momentum/3/3-api/apis-ec-blobject-addref), and [ec_blobject_delref](/momentum/3/3-api/apis-ec-blobject-delref).