---
lastUpdated: "03/26/2020"
title: "Sieve Functions"
description: "Table of Contents sieve arg as number Get the specified argument s as a number sieve arg as numeric Obtain a numeric Sieve argument from either a string or a number representation sieve arg as string Get the specified argument as a string sieve arg delref Remove a reference to..."
---


| Name                                                                                                                                      | Description                                                                     |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [sieve_arg_as_number](/momentum/3/3-api/apis-sieve-arg-as-number)                                     | Get the specified argument(s) as a number                                       |
| [sieve_arg_as_numeric](/momentum/3/3-api/apis-sieve-arg-as-numeric)                                   | Obtain a numeric Sieve argument from either a string or a number representation |
| [sieve_arg_as_string](/momentum/3/3-api/apis-sieve-arg-as-string)                                     | Get the specified argument as a string                                          |
| [sieve_arg_delref](/momentum/3/3-api/apis-sieve-arg-delref)                                           | Remove a reference to a Sieve argument                                          |
| [sieve_case_fold2](/momentum/3/3-api/apis-sieve-case-fold-2)                                           |                                                                                 |
| [sieve_charset_converter_buffer_string](/momentum/3/3-api/apis-sieve-charset-converter-buffer-string) | perform character encoding conversion                                           |
| [sieve_charset_converter_string_string](/momentum/3/3-api/apis-sieve-charset-converter-string-string) | perform character encoding conversion                                           |
| [sieve_compare_compile](/momentum/3/3-api/apis-sieve-compare-compile)                                 | pre-compile matching state for a sieve comparator                               |
| [sieve_compare_operands](/momentum/3/3-api/apis-sieve-compare-operands)                               | execute a sieve comparator match                                                |
| [sieve_create_hash](/momentum/3/3-api/apis-sieve-create-hash)                                         | Create a Sieve hash                                                             |
| [sieve_create_number](/momentum/3/3-api/apis-sieve-create-number)                                     | Create a Sieve number                                                           |
| [sieve_create_string](/momentum/3/3-api/apis-sieve-create-string)                                     | Create a Sieve string                                                           |
| [sieve_create_string_list](/momentum/3/3-api/apis-sieve-create-string-list)                           | Create a Sieve string list                                                      |
| [sieve_delref](/momentum/3/3-api/apis-sieve-delref)                                                   | Delete a reference to a compiled Sieve script                                   |
| [sieve_error](/momentum/3/3-api/apis-sieve-error)                                                     | Create a Sieve error message                                                    |
| [sieve_execute](/momentum/3/3-api/apis-sieve-execute)                                                 | Prepare and execute a sieve script                                              |
| [sieve_free_seng](/momentum/3/3-api/apis-sieve-free-seng)                                             | Free a prepared sieve engine context                                            |
| [sieve_get_accept_construct](/momentum/3/3-api/apis-sieve-get-accept-construct)                       | Get an accept_construct from the Sieve engine                                   |
| [sieve_get_arg](/momentum/3/3-api/apis-sieve-get-arg)                                                 | Get the argument at the specified index                                         |
| [sieve_get_arg_as_numeric](/momentum/3/3-api/apis-sieve-get-arg-as-numeric)                           | obtain a numeric sieve argument from either a string or a number representation |
| [sieve_get_arg_as_string](/momentum/3/3-api/apis-sieve-get-arg-as-string)                             | Return the specified argument as a string                                       |
| [sieve_get_arg_lineno](/momentum/3/3-api/apis-sieve-get-arg-lineno)                                   | Get the current line number                                                     |
| [sieve_get_arg_type](/momentum/3/3-api/apis-sieve-get-arg-type)                                       | Return the type of the specified Sieve argument                                 |
| [sieve_get_bag](/momentum/3/3-api/apis-sieve-get-bag)                                                 | Get the bag associated with the Sieve engine                                    |
| [sieve_get_ec_message](/momentum/3/3-api/apis-sieve-get-ec-message)                                   | Get the message associated with the Sieve engine                                |
| [sieve_get_hash_item](/momentum/3/3-api/apis-sieve-get-hash-item)                                     | Get the specified hash item                                                     |
| [sieve_get_module_state](/momentum/3/3-api/apis-sieve-get-module-state)                               | Get the current module state                                                    |
| [sieve_get_num_args](/momentum/3/3-api/apis-sieve-get-num-args)                                       | Return the number of Sieve arguments                                            |
| [sieve_get_type_of_arg](/momentum/3/3-api/apis-sieve-get-type-of-arg)                                 | Return the type of a Sieve argument                                             |
| [sieve_get_validation_context](/momentum/3/3-api/apis-sieve-get-validate-context)                     | Get the validation_context                                                      |
| [sieve_hard_error](/momentum/3/3-api/apis-sieve-hard-error)                                           | Report an error in a Sieve extension                                            |
| [sieve_hash_first_item](/momentum/3/3-api/apis-sieve-hash-first-item)                                 | Get the first item from a hash table and add a reference to it                  |
| [sieve_hash_next_item](/momentum/3/3-api/apis-sieve-hash-next-item)                                   | Get the next item from a hash argument and add a reference to it                |
| [sieve_inc_counter](/momentum/3/3-api/apis-sieve-inc-counter)                                         | Increment the specified counter                                                 |
| [sieve_next_string_arg](/momentum/3/3-api/apis-sieve-next-string-arg)                                 | Return the next string argument                                                 |
| [sieve_parse_args](/momentum/3/3-api/apis-sieve-parse-args)                                           | Parses arguments for a Sieve extension                                          |
| [sieve_parse_file](/momentum/3/3-api/apis-sieve-parse-file)                                           | Parse/compile a Sieve script from a file                                        |
| [sieve_parse_text](/momentum/3/3-api/apis-sieve-parse-text)                                           | parse/compile a sieve script from a memory buffer                               |
| [sieve_register_action](/momentum/3/3-api/apis-sieve-register-action)                                 | Register a sieve action                                                         |
| [sieve_register_extension](/momentum/3/3-api/apis-sieve-register-extension)                           | Register a Sieve extension                                                      |
| [sieve_register_test](/momentum/3/3-api/apis-sieve-register-test)                                     | Register a sieve test                                                           |
| [sieve_resume](/momentum/3/3-api/apis-sieve-resume)                                                   | Resume the current Sieve action                                                 |
| [sieve_return_value_append_string](/momentum/3/3-api/apis-sieve-return-value-append-string)           | Append a string to the return value                                             |
| [sieve_return_value_hash](/momentum/3/3-api/apis-sieve-return-value-hash)                             | Set the return value to a hash                                                  |
| [sieve_return_value_number](/momentum/3/3-api/apis-sieve-return-value-number)                         | Set the return value to a number                                                |
| [sieve_return_value_string](/momentum/3/3-api/apis-sieve-return-value-string)                         | Set the return value to a string                                                |
| [sieve_return_value_string_list](/momentum/3/3-api/apis-sieve-return-value-string-list)               | Set the return value to a string list                                           |
| [sieve_seng_execute](/momentum/3/3-api/apis-sieve-seng-execute)                                       | Execute a prepared sieve script                                                 |
| [sieve_seng_get_can_go_async](/momentum/3/3-api/apis-sieve-seng-get-can-go-async)                     | Determine whether or not the Sieve engine can run asynchronously                |
| [sieve_seng_prepare](/momentum/3/3-api/apis-sieve-seng-prepare)                                       | prepare to execute a sieve script                                               |
| [sieve_seng_prepare2](/momentum/3/3-api/apis-sieve-seng-prepare-2)                                     | Prepare to execute a Sieve script                                               |
| [sieve_seng_prepare3](/momentum/3/3-api/apis-sieve-seng-prepare-3)                                     | prepare to execute a sieve script                                               |
| [sieve_seng_set_can_go_async](/momentum/3/3-api/apis-sieve-seng-set-can-go-async)                     | Define whether or not the Sieve engine can run asynchronously                   |
| [sieve_set_error_mode](/momentum/3/3-api/apis-sieve-set-error-mode)                                   | Set the error mode of the Sieve engine                                          |
| [sieve_set_hash_item](/momentum/3/3-api/apis-sieve-set-hash-item)                                     | Set the specified hash item                                                     |
| [sieve_set_module_state](/momentum/3/3-api/apis-sieve-set-module-state)                               | Set the current module state                                                    |
| [sieve_set_operation_complete](/momentum/3/3-api/apis-sieve-set-operation-complete)                   | Set the action of the Sieve engine upon completion                              |
| [sieve_set_response](/momentum/3/3-api/apis-sieve-set-response)                                       | Set an SMTP response                                                            |
| [sieve_set_test_return_value](/momentum/3/3-api/apis-sieve-set-test-return-value)                     | Set a test result return value                                                  |
| [sieve_string_list_append](/momentum/3/3-api/apis-sieve-string-list-append)                           | Append a value to a string list                                                 |
| [sieve_suspend](/momentum/3/3-api/apis-sieve-suspend)                                                 | Suspend the current Sieve action                                                |

The APIs documented here relate to the [sieve](/momentum/3/3-reference/modules-sieve) module.