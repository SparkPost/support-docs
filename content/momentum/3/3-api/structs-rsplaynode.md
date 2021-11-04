---
lastUpdated: "03/26/2020"
title: "rsplaynode"
description: "This struct is defined as follows To use this struct include the file rsplay h Section 68 69 rsplaytree..."
---

This struct is defined as follows:

```
typedef struct rsplaynode rsplaynode;
struct rsplaynode {
  void *data;
  rsplaynode *parent;
  rsplaynode *left;
  rsplaynode *right;
  rsplaynode *prev;
  rsplaynode *next;
};
```

To use this struct, include the file `rsplay.h`.

### <a name="idp34532832"></a> See Also

[“rsplaytree”](/momentum/3/3-api/structs-rsplaytree)