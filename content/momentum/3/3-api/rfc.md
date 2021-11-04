---
lastUpdated: "03/26/2020"
title: "RFC Functions"
description: "Table of Contents ec generate rfc 3464 delivery status renders an RFC 3464 report block into the provided string ec generate rfc 3464 delivery status 2 renders an RFC 3464 report block into the provided string ec generate rfc 3464 message creates an RFC 3464 MDN as an ec message..."
---


| Name                                                                                                                                    | Description                                                                 |
|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| [ec_generate_rfc3464_delivery_status](/momentum/3/3-api/apis-ec-generate-rfc-3464-delivery-status)   | renders an RFC3464 report block into the provided string                    |
| [ec_generate_rfc3464_delivery_status2](/momentum/3/3-api/apis-ec-generate-rfc-3464-delivery-status-2) | renders an RFC3464 report block into the provided string                    |
| [ec_generate_rfc3464_message](/momentum/3/3-api/apis-ec-generate-rfc-3464-message)                   | creates an RFC 3464 MDN as an ec_message                                    |
| [ec_generate_rfc3464_notification](/momentum/3/3-api/apis-ec-generate-rfc-3464-notification)         | creates an RFC 3464 MDN and enqueues                                        |
| [ec_parse_rfc3464_delivery_status](/momentum/3/3-api/apis-ec-parse-rfc-3464-delivery-status)         | Parses an rfc3464 dsn into its attributes, recorded into a ECDict           |
| [ec_rfc822_date](/momentum/3/3-api/apis-ec-rfc-822-date)                                             | Renders a timeval into a buffer per RFC822                                  |
| [rfc2047_utf8_decode](/momentum/3/3-api/apis-rfc-2047-utf-8-decode)                                   | Decode rfc2047 encoding, returning a string that is utf-8 encoded           |
| [rfc2047_utf8_decode_to_string](/momentum/3/3-api/apis-rfc-2047-utf-8-decode-to-string)               | decodes MIME header encoding and stores the decoded result to a string      |
| [rfc2047_utf8_encode_to_string](/momentum/3/3-api/apis-rfc-2047-utf-8-encode-to-string)               | Applies MIME header encoding and stores the encoded result to a string      |
| [rfc2821_address_destroy](/momentum/3/3-api/apis-rfc-2821-address-destroy)                           | Destroy an rfc2821 address                                                  |
| [rfc2821_address_parse](/momentum/3/3-api/apis-rfc-2821-address-parse)                               | Parse an rfc2821 address                                                    |
| [rfc2822_address_destroy](/momentum/3/3-api/apis-rfc-2822-address-destroy)                           | Destroy an rfc2822 address                                                  |
| [rfc2822_address_parse](/momentum/3/3-api/apis-rfc-2822-address-parse)                               | Parse an rfc2822 address                                                    |
| [rfc2822_clone_headers](/momentum/3/3-api/apis-rfc-2822-clone-headers)                               | Clones the headers portion of an rfc2822 context                            |
| [rfc2822_find_first_header](/momentum/3/3-api/apis-rfc-2822-find-first-header)                       | Return the first header with the specified name                             |
| [rfc2822_find_next_header](/momentum/3/3-api/apis-rfc-2822-find-next-header)                         | Return the next header                                                      |
| [rfc2822_free_context](/momentum/3/3-api/apis-rfc-2822-free-context)                                 | Frees a cloned set of headers                                               |
| [rfc2822_free_header](/momentum/3/3-api/apis-rfc-2822-free-header)                                   | Free the specified header                                                   |
| [rfc2822_header_append_line](/momentum/3/3-api/apis-rfc-2822-header-append-line)                     | Append a line to a header                                                   |
| [rfc2822_header_stringwrite](/momentum/3/3-api/apis-rfc-2822-header-stringwrite)                     | Renders the rfc2822 header to a string as it will be sent over the network  |
| [rfc2822_header_stringwrite_ex](/momentum/3/3-api/apis-rfc-2822-header-stringwrite-ex)               | Renders the rfc2822 header to a string, with formatting options             |
| [rfc2822_new_header](/momentum/3/3-api/apis-rfc-2822-new-header)                                     | Create a new header                                                         |
| [rfc2822_new_headerf](/momentum/3/3-api/apis-rfc-2822-new-headerf)                                   | Create a new header using a format specifier                                |
| [rfc2822_parse_rfc2045_parameters_str](/momentum/3/3-api/apis-rfc-2822-parse-rfc-2045-parameters-str) | Parse out the RFC2045 parameters of a header value string into a dictionary |
| [rfc2822_prepend_header](/momentum/3/3-api/apis-rfc-2822-prepend-headers)                            | Prepend headers                                                             |
| [rfc2822_remove_header](/momentum/3/3-api/apis-rfc-2822-remove-header)                               | Create a new header                                                         |
