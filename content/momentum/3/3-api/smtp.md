---
lastUpdated: "03/26/2020"
title: "SMTP-related Functions"
description: "Table of Contents esmtp destroy message construct Destroy the specified message construct esmtp extensions register Register ESMTP extensions esmtp message factory This function is the ESMTP server state machine esmtp message factory state Determine the state of a message read smtp Reads the SMTP response from peer read smtp 2..."
---


| Name                                                                                                                              | Description                                                                         |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| [esmtp_destroy_message_construct](/momentum/3/3-api/apis-esmtp-destroy-message-construct)     | Destroy the specified message construct                                             |
| [esmtp_extensions_register](/momentum/3/3-api/apis-esmtp-extensions-register)                 | Register ESMTP extensions                                                           |
| [esmtp_message_factory](/momentum/3/3-api/apis-esmtp-message-factory)                         | This function is the ESMTP server state machine                                     |
| [esmtp_message_factory_state](/momentum/3/3-api/apis-esmtp-message-factory-state)             | Determine the state of a message                                                    |
| [read_smtp](/momentum/3/3-api/apis-read-smtp)                                                 | Reads the SMTP response from peer                                                   |
| [read_smtp2](/momentum/3/3-api/apis-read-smtp-2)                                               | Read the SMTP response from peer                                                    |
| [register_smtp_client_state](/momentum/3/3-api/apis-register-smtp-client-state)               | Register a custom state in the SMTP client state machine                            |
| [smtp_client_args_add](/momentum/3/3-api/apis-smtp-client-args-add)                           | Add an argument to an smtp_client_args structure                                    |
| [smtp_client_args_delete](/momentum/3/3-api/apis-smtp-client-args-delete)                     | Remove an argument from an smtp_client_args structure                               |
| [smtp_client_args_exists_and_fetch](/momentum/3/3-api/apis-smtp-client-args-exists-and-fetch) | Check for the existence of and fetch an argument from an smtp_client_args structure |
| [smtp_error_classify](/momentum/3/3-api/apis-smtp-error-classify)                             | Classify the response code given in response to an SMTP command                     |
| [smtp_error_classify_len](/momentum/3/3-api/apis-smtp-error-classify-len)                     | Classify the response code given in response to an SMTP command                     |
| [smtp_error_for_id](/momentum/3/3-api/apis-smtp-error-for-id)                                 | Fetch the details for a given SMTP classification id                                |
| [smtp_error_register_class](/momentum/3/3-api/apis-smtp-error-register-class)                 | Register a user-defined SMTP error class                                            |
| [smtp_error_retrieve_class](/momentum/3/3-api/apis-smtp-error-retrieve-class)                 | Return the name and description for a bounce code                                   |
| [smtp_get_state](/momentum/3/3-api/apis-smtp-get-state)                                       | Fetch a particular SMTP client state                                                |
| [smtp_get_state_machine](/momentum/3/3-api/apis-smtp-get-state-machine)                       | Fetch the head of the SMTP client state machine                                     |
| [smtp_next_state](/momentum/3/3-api/apis-smtp-next-state)                                     | Change the SMTP state for the current connection to another state                   |
| [smtp_parse_capabilities](/momentum/3/3-api/apis-smtp-parse-capabilities)                     | Parse the remote capabilities from the EHLO response                                |
