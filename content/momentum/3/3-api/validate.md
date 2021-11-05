---
lastUpdated: "03/26/2020"
title: "Validation Context Functions"
description: "Table of Contents validate context add rcpt Function to append an addr to the list validate context can modify rcpts Function to check if it is still ok to change rcpts list validate context delete Remove the specified key from either the message context or connection context validate context destroy..."
---


| Name                                                                                                                                          | Description                                                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [validate_context_add_rcpt](/momentum/3/3-api/apis-validate-context-add-rcpt)                             | Function to append an addr to the list                                             |
| [validate_context_can_modify_rcpts](/momentum/3/3-api/apis-validate-context-can-modify-rcpts)             | Function to check if it is still ok to change rcpts list                           |
| [validate_context_delete](/momentum/3/3-api/apis-validate-context-delete)                                 | Remove the specified key from either the message context or connection context     |
| [validate_context_destroy](/momentum/3/3-api/apis-validate-context-destroy)                               | Release resources associated with this validation context dictionary               |
| [validate_context_exists](/momentum/3/3-api/apis-validate-context-exists)                                 | Determine if the specified validation context key exists                           |
| [validate_context_exists_and_get](/momentum/3/3-api/apis-validate-context-exists-and-get)                 | If a validation context key exists, then retrieve its value                        |
| [validate_context_find_message_construct](/momentum/3/3-api/apis-validate-context-find-message-construct) | Find the specified message construct.                                              |
| [validate_context_get](/momentum/3/3-api/apis-validate-context-get)                                       | Retrieve the value associated with a message context key or connection context key |
| [validate_context_init](/momentum/3/3-api/apis-validate-context-init)                                     | Allocate resources for a validation context dictionary                             |
| [validate_context_iterate_rcpt](/momentum/3/3-api/apis-validate-context-iterate-rcpt)                     | Function to iterate through recipient list                                         |
| [validate_context_remove_all_rcpts](/momentum/3/3-api/apis-validate-context-remove-all-rcpts)             | Function to remove all addr from recipient list                                    |
| [validate_context_remove_rcpt](/momentum/3/3-api/apis-validate-context-remove-rcpt)                       | Function to remove addr from recipient list                                        |
| [validate_context_set](/momentum/3/3-api/apis-validate-context-set)                                       | Create or set a validation context keypair determined by key                       |
| [validate_context_set_code](/momentum/3/3-api/apis-validate-context-set-code)                             | Set the SMTP response code and message for the session                             |

For a discussion of validation context variables see [Validation Context Variables](/momentum/3/3-reference/3-reference-policy-context-variables).