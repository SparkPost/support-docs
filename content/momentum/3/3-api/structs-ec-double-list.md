---
lastUpdated: "03/26/2020"
title: "ec_double_list"
description: "This struct is defined as follows To use this struct include the file misc ec double list h ec double list destroy..."
---

This struct is defined as follows:

```
typedef struct _ec_double_list_node {
  void *data;
  struct _ec_double_list_node *prev;
  struct _ec_double_list_node *next;
} ec_double_list_node;

typedef struct _ec_double_list {
  ec_double_list_node *head;
  ec_double_list_node *tail;
  pthread_mutex_t lock;
  int ts;
} ec_double_list;
```

To use this struct, include the file `misc/ec_double_list.h`.

### <a name="idp43641280"></a> See Also

[ec_double_list_destroy](/momentum/3/3-api/apis-ec-double-list-destroy)