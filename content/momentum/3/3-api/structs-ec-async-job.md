---
lastUpdated: "03/26/2020"
title: "ec_async_job"
description: "This struct is a typedef of the ec thread pool job struct The members of this struct are as follows To use this struct include the file ec thread pool h Section 1 3 4 The Thread Pool API Section 68 26 ec datasource closure and ec datasource cache query..."
---

This struct is a typedef of the `ec_thread_pool_job` struct. The members of this struct are as follows:

```
/* a generic job item for the thread pool */
struct ec_thread_pool_job {
  struct ec_thread_pool_job *next;

  enum _ec_thread_pool_job_completion {
    ECTP_COMPLETE_NONE,     /* do nothing to signal completion */
    ECTP_COMPLETE_EVENT,    /* re-schedule an event */
    ECTP_COMPLETE_MODULE,   /* reinstate a validation module; it will be descheduled
                               when the job is queued */
    ECTP_COMPLETE_CALLBACK, /* call a function in the worker thread context */
    ECTP_COMPLETE_SEMAPHORE,/* post to a semaphore */
    ECTP_COMPLETE_SYNC,     /* synchronous execution */
    ECTP_COMPLETE_CALLBACK_SCHED, /* call a function in the scheduler thread context */
    ECTP_COMPLETE_EVENT_INST, /* Re-schedule in a specific scheduler inst */
    ECTP_COMPLETE_CALLBACK_SCHED_INST, /* Callback in a specific scheduler inst */
  } completion;

  #define ECTP_CLASS_SHORT_LIVED -1 /* job will be extremely short lived */
  #define ECTP_CLASS_CPU          0 /* job will be mostly CPU bound */
  #define ECTP_CLASS_IO           1 /* job will be mostly blocked on IO */
  #define ECTP_CLASS_SWAPOUT      2
  #define ECTP_CLASS_SWAPIN       3
  #define ECTP_CLASS_CLOSE        4
  #define ECTP_CLASS_UNLINK       5
  #define ECTP_CLASS_BATCH_UNLINK 6
  #define ECTP_CLASS_SPOOL_IN     7
  #define ECTP_CLASS_ASYNC_BOUNCE 8
  #define ECTP_CLASS_SIEVE_IO     9
  int job_class;

  /* optional concurrency restraint */
  sem_t *concurrency;

  /* the task to execute */
  ec_thread_pool_work_func worker;
  void *closure;

  /* context for completion */
  union _ec_thread_pool_job_r {
    struct _ec_thread_pool_job_r_e {
      Event *event;
      int mask;
      validate_context *ctx;
      ec_scheduler_inst *inst;
    } e;
    struct _ec_thread_pool_job_r_cb {
      ec_thread_pool_completion_func func;
      void *closure;
      ec_scheduler_inst *inst;
    } cb;
    sem_t *sema;
  } r;

  /* should the worker free this job struct after performing
   * the completion action ? The job MUST have been allocated
   * via ec_malloc, and this field MUST be set to memtype
   * that was used for the allocation */
  int free_on_completion_memtype;

  /* if skip_completion is true, then when the job completes,
   * the completion routine handling is skipped.  This allows
   * the job to be externally completed via ec_async_complete_tail()
   * at some later point in time.  This allows both blocking and
   * non-blocking tasks to be scheduled via this job API */
  unsigned skip_completion:1;

  /* if skip_on_shutdown is true, and the job is popped off
   * the queue during shutdown, then the job is simply discarded. */
  unsigned skip_on_shutdown:1;

  unsigned _spare_bits:30;

  const char *file;
  int line;
}
```

To use this struct, include the file `ec_thread_pool.h`.

### <a name="idp39838480"></a> See Also

[“The Thread Pool API”](/momentum/3/3-api/arch-primary-apis#arch.threadpool), [“ec_datasource_closure”](/momentum/3/3-api/structs-ec-datasource-closure) and [ec_datasource_cache_query](/momentum/3/3-api/apis-ec-datasource-cache-query)