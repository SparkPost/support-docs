---
lastUpdated: "03/26/2020"
title: "SMPP Functions"
description: "Table of Contents smpp append encoded integer Encode an integer into an octet string smpp async fail ec message Fail an asynchronous SMPP message smpp config fetch using connection Fetch the specified SMPP configuration option smpp data coding name Retrieve the data coding name from the PDU smpp date to..."
---


| Name                                                                                                                                | Description                                                                                |
|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [smpp_append_encoded_integer](/momentum/3/3-api/apis-smpp-append-encoded-integer)               | Encode an integer into an octet string                                                     |
| [smpp_async_fail_ec_message](/momentum/3/3-api/apis-smpp-async-fail-ec-message)                 | Fail an asynchronous SMPP message                                                          |
| [smpp_config_fetch_using_connection](/momentum/3/3-api/apis-smpp-config-fetch-using-connection) | Fetch the specified SMPP configuration option                                              |
| [smpp_data_coding_name](/momentum/3/3-api/apis-smpp-data-coding-name)                           | Retrieve the data coding name from the PDU                                                 |
| [smpp_date_to_long](/momentum/3/3-api/apis-smpp-date-to-long)                                   | Convert date string to time_t value                                                        |
| [smpp_decode_integer](/momentum/3/3-api/apis-smpp-decode-integer)                               | Decode an octet string into integer                                                        |
| [smpp_find_segmentation_break](/momentum/3/3-api/apis-smpp-find-segmentation-break)             | Return a pointer to the break between two message segments within the complete text string |
| [smpp_fail_ec_message](/momentum/3/3-api/apis-smpp-fail-ec-message)                             | Fail an SMPP message                                                                       |
| [smpp_free](/momentum/3/3-api/apis-smpp-free)                                                   | Free memory of the memtype_smpp type                                                       |
| [smpp_get_deliver_mo_msg](/momentum/3/3-api/apis-smpp-get-deliver-mo-msg)                       | Retrieve the text message in received MO request                                           |
| [smpp_get_message_id_from_pdu](/momentum/3/3-api/apis-smpp-get-message-id-from-pdu)             | Retrieve the Message ID from the PDU                                                       |
| [smpp_get_string_and_buffer](/momentum/3/3-api/apis-smpp-get-string-and-buffer)                 | Create a string object using memory type of memtype_smpp                                   |
| [smpp_get_submit_status_from_pdu](/momentum/3/3-api/apis-smpp-get-submit-status-from-pdu)       | Retrieve the status code from submit response PDU                                          |
| [smpp_get_vals_from_dr](/momentum/3/3-api/apis-smpp-get-vals-from-dr)                           | Extract delivery receipt from the SMS text                                                 |
| [smpp_free_string_and_buffer](/momentum/3/3-api/apis-smpp-free-string-and-buffer)               | Free a string object created using smpp_get_string_and_buffer                              |
| [smpp_malloc](/momentum/3/3-api/apis-smpp-malloc)                                               | Allocate memory of memtype_smpp type                                                       |
| [smpp_read_msg_text_blob](/momentum/3/3-api/apis-smpp-read-msg-text-blob)                       | Retrieve text blob context variable from an ec_message                                     |
| [smpp_read_seg_blob](/momentum/3/3-api/apis-smpp-read-seg-blob)                                 | Return the data for the current segment                                                    |
| [smpp_realloc](/momentum/3/3-api/apis-smpp-realloc)                                             | Free message (*mem), and realloc new memtype_smpp memory                                   |
| [smpp_strdup](/momentum/3/3-api/apis-smpp-strdup)                                               | Duplicate a string                                                                         |
| [smpp_wrap_in_string](/momentum/3/3-api/apis-smpp-wrap-in-string)                               | Wrap a char string into a string object                                                    |
| [smpp_wrap_in_string_with_len](/momentum/3/3-api/apis-smpp-wrap-in-string-with-len)             | Wrap a char string into a string object                                                    |
| [smpp_write_msg_text_blob](/momentum/3/3-api/apis-smpp-write-msg-text-blob)                     | Write a text blob to an SMPP message                                                       |
| [smpp_write_seg_blob](/momentum/3/3-api/apis-smpp-write-seg-blob)                               | Change or write the text content of the current segment                                    |

The APIs documented here relate to the [SMPP](/momentum/mobile/mobile-reference/momentum-mobility) module.