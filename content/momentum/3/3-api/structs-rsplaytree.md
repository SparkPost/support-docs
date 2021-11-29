---
lastUpdated: "03/26/2020"
title: "rsplaytree"
description: "This struct is defined as follows To use this struct include the file rsplay h Section 68 68 rsplaynode..."
---

This struct is defined as follows:

```
typedef struct _rsplay_tree
{
  RSplayComparator compare;
  RSplayComparator comparek;
  int size;
  float probability;    /* Chance of rotating up on access [0 - 1] */
  struct rsplaynode *root;
}
RSplayTree;
```

To use this struct, include the file `rsplay.h`.

### <a name="idp46409088"></a> See Also

[“rsplaynode”](/momentum/3/3-api/structs-rsplaynode)