---
lastUpdated: "03/26/2020"
title: "ec_scheduler_inst"
description: "This struct is defined as follows To use this struct include the file scheduler h get fd event set and Section 68 21 ec config header..."
---

This struct is defined as follows:

```
typedef struct _scheduler_impl {
  char *name;
  unsigned sizeof_scheduler_impl;
#define EC_SCHEDULER_INIT(name) name, sizeof(struct _scheduler_impl)
  struct _ec_scheduler_inst *(*init)(RecurFunc recurring,
     int (*nprepoll) (struct timeval *, struct timeval *),
     void (*npostpoll) (struct timeval *), int flags);
  pid_t (*get_pid)(struct _ec_scheduler_inst *);
  void (*get_fd_event_set)(struct _ec_scheduler_inst *, Event ***set, int *count);
  void (*get_floating_event_set)(struct _ec_scheduler_inst *, Event ***set, int *count);
  void (*get_timeheap)(struct _ec_scheduler_inst *, Skiplist **sl);
  Event * (*get_current_dispatch)(struct _ec_scheduler_inst *);
  int (*get_scheduler_iteration)(struct _ec_scheduler_inst *);
  int (*is_scheduler_thread)(struct _ec_scheduler_inst *);
  void (*float_event)(struct _ec_scheduler_inst *, Event *);
  void (*unfloat_event)(struct _ec_scheduler_inst *, Event *);
  void (*schedule_event)(struct _ec_scheduler_inst *, Event *);
  int (*clear_timed_event)(struct _ec_scheduler_inst *, Event *);
  Event * (*clear_event_by_fd)(struct _ec_scheduler_inst *, int);
  Event * (*get_event_by_fd)(struct _ec_scheduler_inst *, int);
  int (*update_event_mask_by_fd)(struct _ec_scheduler_inst *, int fd, int op, int newmask, int *oldmask);
  int (*scheduler_eventloop)(struct _ec_scheduler_inst *);
  void (*ping_scheduler)(struct _ec_scheduler_inst *);

  int relax_shutdown_assertions;
  /* For ABI change when adding ec_scheduler_inst */
  int abi_change_for_ec_scheduler_inst;
} ec_scheduler_impl;

struct sch_recurrent_list {
  RecurFunc tocall;
  void *closure;
  struct sch_recurrent_list *next;
};

typedef struct _ec_scheduler_inst {
  ec_scheduler_impl *impl;
  void *closure;
  int master_scheduler;
  ec_config_header *cached_cfghdr;
  struct timeval cached_cfghdr_updated;
  struct sch_recurrent_list *scheduler_recurrent_functions;
  int fifo_initialized;
  ck_fifo_spsc_t pending CK_CC_CACHELINE;
  ec_atomic64_t num_pending;
  int max_pending;
  struct timeval now;
  ec_atomic64_t events_scheduled;
} ec_scheduler_inst;
```

To use this struct, include the file `scheduler.h`.

### <a name="idp40363744"></a> See Also

[get_fd_event_set](/momentum/3/3-api/apis-get-fd-event-set) and [“ec_config_header”](/momentum/3/3-api/structs-ec-config-header)