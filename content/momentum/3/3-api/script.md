---
lastUpdated: "03/26/2020"
title: "Scriptlet (and Alerting) Functions"
description: "Table of Contents ec alerting inc count Increment a counter for an arbitrary key for a given binding domain scpt autoload ns Wire up autoload items just in time scpt compile callout Compile and register a scriptlet entrypoint scpt compile hook callout Compile and register a scriptlet hook implementation entrypoint..."
---


| Name                                                                                                                                | Description                                                                            |
|-------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [ec_alerting_inc_count](/momentum/3/3-api/apis-ec-alerting-inc-count)                           | Increment a counter for an arbitrary key for a given binding/domain                    |
| [scpt_autoload_ns](/momentum/3/3-api/apis-scpt-autoload-ns)                                     | Wire up autoload items, just in time                                                   |
| [scpt_compile_callout](/momentum/3/3-api/apis-scpt-compile-callout)                             | Compile and register a scriptlet entrypoint                                            |
| [scpt_compile_hook_callout](/momentum/3/3-api/apis-scpt-compile-hook-callout)                   | Compile and register a scriptlet hook implementation entrypoint                        |
| [scpt_execute_or_resume](/momentum/3/3-api/apis-scpt-execute-or-resume)                         | Execute or resume execution of a thread                                                |
| [scpt_ffi_cif_alloc](/momentum/3/3-api/apis-scpt-ffi-cif-alloc)                                 | Allocate an ffi_cif via the cache                                                      |
| [scpt_ffi_closure_alloc](/momentum/3/3-api/apis-scpt-ffi-closure-alloc)                         | allocates an ffi_closure via the cache                                                 |
| [scpt_get_bag](/momentum/3/3-api/apis-scpt-get-bag)                                             | Returns the environmental "bag" associated with the current callout                    |
| [scpt_get_traceback](/momentum/3/3-api/apis-scpt-get-traceback)                                 | Populate the top of the scriptlet stack with a traceback of the current excution stack |
| [scpt_getspecific](/momentum/3/3-api/apis-scpt-getspecific)                                     | Fetch previously associated pointer value                                              |
| [scpt_parse_params](/momentum/3/3-api/apis-scpt-parse-params)                                   | Parse scriptlet function parameters                                                    |
| [scpt_push_double](/momentum/3/3-api/apis-scpt-push-double)                                     | pushes a double on to the stack                                                        |
| [scpt_push_integer](/momentum/3/3-api/apis-scpt-push-integer)                                   | Push an integer on to the stack                                                        |
| [scpt_push_object](/momentum/3/3-api/apis-scpt-push-object)                                     | Box a C structure to pass into a scriptlet routine                                     |
| [scpt_push_object2](/momentum/3/3-api/apis-scpt-push-object-2)                                   | Box a C structure to pass into a scriptlet routine                                     |
| [scpt_push_object_and_allocate](/momentum/3/3-api/apis-scpt-push-object-and-allocate)           | Allocate room to hold a boxed C structure of a particular type                         |
| [scpt_push_object_and_allocate2](/momentum/3/3-api/apis-scpt-push-object-and-allocate-2)         | Allocate room to hold a boxed C structure of a particular type                         |
| [scpt_push_object_by_typename](/momentum/3/3-api/apis-scpt-push-object-by-typename)             | box a C structure to pass into a scriptlet routine                                     |
| [scpt_push_ref](/momentum/3/3-api/apis-scpt-push-ref)                                           | Push a reference onto the stack                                                        |
| [scpt_push_string](/momentum/3/3-api/apis-scpt-push-string)                                     | Push a string onto the stack                                                           |
| [scpt_raise_error](/momentum/3/3-api/apis-scpt-raise-error)                                     | triggers an "exception" in the scriptlet runtime                                       |
| [scpt_register_autoload](/momentum/3/3-api/apis-scpt-register-autoload)                         | register a set of autoloadable items in a namespace                                    |
| [scpt_register_funcs](/momentum/3/3-api/apis-scpt-register-funcs)                               | registers a set of functions in a namespace                                            |
| [scpt_register_objtype](/momentum/3/3-api/apis-scpt-register-objtype)                           | Register an object type with the scriptlet runtime                                     |
| [scpt_register_objtype_augmentation](/momentum/3/3-api/apis-scpt-register-objtype-augmentation) | Manually augment a set of methods for an objtype                                       |
| [scpt_run_callout](/momentum/3/3-api/apis-scpt-run-callout)                                     | Execute or resume execution of a scriptlet callout                                     |
| [scpt_set_output_string](/momentum/3/3-api/apis-scpt-set-output-string)                         | Set the output string for a scriptlet thread                                           |
| [scpt_setspecific](/momentum/3/3-api/apis-scpt-setspecific)                                     | associate an arbitrary pointer with an execution context                               |
| [scpt_thread_close](/momentum/3/3-api/apis-scpt-thread-close)                                   | release a scriptlet execution context                                                  |
| [scpt_thread_new](/momentum/3/3-api/apis-scpt-thread-new)                                       | create a new scriptlet execution context                                               |
| [scpt_unpin_ref](/momentum/3/3-api/apis-scpt-unpin-ref)                                         | un-pin a reference                                                                     |

The APIs documented here relate to the [scriptlet](/momentum/3/3-reference/3-reference-modules-scriptlet) module and the [alerting](/momentum/3/3-reference/3-reference-modules-alerting) module.