---
lastUpdated: "03/26/2020"
title: "ec_hash_iter"
description: "The members of this data structure are as follows To use this struct include the file echash h EC Dict Iterator is a typedef of this struct echash create and Section 68 31 ec hash table..."
---

The members of this data structure are as follows:

```
typedef struct _ec_hash_iter {
  void *p2;
  int p1;
} ec_hash_iter;
```

To use this struct, include the file `echash.h`.

ECDict_Iterator is a typedef of this struct.

### <a name="idp40351968"></a> See Also

[echash_create](/momentum/3/3-api/apis-echash-create) and [“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table)