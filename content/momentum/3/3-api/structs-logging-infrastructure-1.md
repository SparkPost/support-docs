---
lastUpdated: "03/26/2020"
title: "logging_infrastructure_1"
description: "This struct is defined as follows The following type definitions also apply To use this struct include the file log module h Section 68 74 shared module infrastructure 8 log attempt v 1 log delivery v 1 log permanent failure v 1 log rejection and log transient failure v 1..."
---

This struct is defined as follows:

```
struct _logging_infrastructure_1
{
  shared_module_infrastructure_8 shared;
  LogFormatFunc_1 log_error;
  LogRcvEmailFunc_1 log_reception;
  LogEmailFunc_1 log_attempt;
  LogEmailFunc_1 log_transient_failure;
  LogEmailFunc_1 log_permanent_failure;
  LogEmailFunc_1 log_delivery;
  LogHookFunc_1 log_close;
  LogHookFunc_1 log_reopen;
  LogRejectFunc_1 log_rejection;
};
```

The following type definitions also apply:

```
typedef int  (*LogHookFunc_1) (logging_infrastructure_1 *);
typedef void (*LogFormatFunc_1) (logging_infrastructure_1 *,
                               struct timeval *, const char *format,
                               va_list arg);
typedef void (*LogEmailFunc_1) (logging_infrastructure_1 *,
                              ec_message *message, domain_record *,
                              struct timeval *, const char *note,
                              int note_len);
typedef void (*LogRcvEmailFunc_1) (logging_infrastructure_1 *, accept_construct * ac,
                                 ec_message * message, struct timeval *,
                                 const char *note, int note_len);
typedef void (*LogRejectFunc_1) (logging_infrastructure_1 *, struct timeval *,
                               accept_construct * ac, validate_context *ctx,
                               int phase, const char *format, va_list arg);
```

To use this struct, include the file `log_module.h`.

### <a name="idp41874656"></a> See Also

[“shared_module_infrastructure_8”](/momentum/3/3-api/structs-shared-module-infrastructure-8), [log_attempt_v1](/momentum/3/3-api/hooks-core-log-attempt-v-1), [log_delivery_v1](/momentum/3/3-api/hooks-core-log-delivery-v-1), [log_permanent_failure_v1](/momentum/3/3-api/hooks-core-log-permanent-failure-v-1), [log_rejection](/momentum/3/3-api/hooks-core-log-rejection), and [log_transient_failure_v1](/momentum/3/3-api/hooks-core-log-transient-failure-v-1).