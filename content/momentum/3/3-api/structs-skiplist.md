---
lastUpdated: "03/26/2020"
title: "Skiplist"
description: "This struct and related structs are defined as follows To use this struct include the file skiplist h Chapter 45 Skiplist Functions..."
---

This struct and related structs are defined as follows:

```
typedef int (*SkiplistComparator) (const void *, const void *);

typedef struct _iskiplist
{
  SkiplistComparator compare;
  SkiplistComparator comparek;
  u_int32_t height:8;
  u_int32_t preheight:8;
  u_int32_t size;
  struct skiplistnode *bottom;
  /* These two are needed for appending */
  struct _iskiplist *index;
  struct _iskiplist *agg;
}
Skiplist;

typedef struct skiplistnode skiplistnode;
struct skiplistnode
{
  void *data;
  Skiplist *sl;
  u_int32_t height;
  skiplistnode *previndex;
  skiplistnode *nextindex;
  struct skipconn level[1];
};
```

To use this struct, include the file `skiplist.h`.

### <a name="idp43360928"></a> See Also

[*Skiplist Functions*](/momentum/3/3-api/skiplist)