---
lastUpdated: "03/26/2020"
title: "mail_queue"
description: "This struct is defined as follows To use this struct include the file mail queue h Chapter 32 Mail Queue Functions..."
---

This struct is defined as follows:

```
struct _mail_queue
{
  Skiplist *active;
  RSplayTree *bound_active;
  Skiplist *delayed;
  domain_record *domain;
  /* as there can be multiple generations of mail_queue in the system,
   * do not rely on this structure member, use mail_queue_get_maintainer()
   * and mail_queue_set_maintainer() to manipulate the maintainer */
  Event *maintainer;
};
```

To use this struct, include the file `mail_queue.h`.

### <a name="idp34352128"></a> See Also

[*Mail Queue Functions*](/momentum/3/3-api/3-api-mailq) .