---
lastUpdated: "03/26/2020"
title: "Utility Functions"
description: "Table of Contents binding address family matches Validate that the binding in question matches the address family provided ec gethostname lowercase gethostname replacement ec hex decode decodes bytes from ASCII hex characters ec hex encode encodes bytes into ASCII hex characters ec parse url parses an RFC 3986 URI ec..."
---


| Name                                                                                                                        | Description                                                                                                                 |
|-----------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| [binding_address_family_matches](/momentum/3/3-api/apis-binding-address-family-matches) | Validate that the binding in question matches the address family provided                                                   |
| [ec_gethostname](/momentum/3/3-api/apis-ec-gethostname)                                 | lowercase gethostname() replacement                                                                                         |
| [ec_hex_decode](/momentum/3/3-api/apis-ec-hex-decode)                                   | decodes bytes from ASCII hex characters                                                                                     |
| [ec_hex_encode](/momentum/3/3-api/apis-ec-hex-encode)                                   | encodes bytes into ASCII hex characters                                                                                     |
| [ec_parse_url](/momentum/3/3-api/apis-ec-parse-url)                                     | parses an RFC 3986 URI                                                                                                      |
| [ec_ucs4_from_utf8](/momentum/3/3-api/apis-ec-ucs-4-from-utf-8)                           | Decodes a single code point from a utf8 buffer                                                                              |
| [ec_util_power_2](/momentum/3/3-api/apis-ec-util-power-2)                               | Round input to next highest power of 2 if it is not a power of 2                                                            |
| [get_now](/momentum/3/3-api/apis-get-now)                                               | Populates a struct timeval pointer with current data                                                                        |
| [get_now_ts](/momentum/3/3-api/apis-get-now-ts)                                         | Get the current time                                                                                                        |
| [get_scheduler_pid](/momentum/3/3-api/apis-get-scheduler-pid)                           | Get the Process ID (PID) of the master scheduler thread                                                                     |
| [getopt_long2](/momentum/3/3-api/apis-getopt-long-2)                                     | a thread safe, re-entrant, getopt_long                                                                                      |
| [is_valid_IP](/momentum/3/3-api/apis-is-valid-ip)                                       | Determines whether or not string is a valid IP address                                                                      |
| [is_valid_email](/momentum/3/3-api/apis-is-valid-email)                                 | Determines whether emailaddr is a valid email address                                                                       |
| [isfinite](/momentum/3/3-api/apis-isfinite)                                             | indicates if a number has a finite value                                                                                    |
| [lookuptable_add2](/momentum/3/3-api/apis-lookuptable-add-2)                             | Adds a message to the lookuptable, and calls dns_get_MXs if the domain wasn't in the lookuptable already                    |
| [mid_to_string](/momentum/3/3-api/apis-mid-to-string)                                   | format a message_id as a human readable string                                                                              |
| [nearbyint](/momentum/3/3-api/apis-nearbyint)                                           | return the integral value nearest to x according to the prevailing rounding mode                                            |
| [nearbyintf](/momentum/3/3-api/apis-nearbyintf)                                         | return the integral value nearest to x according to the prevailing rounding mode                                            |
| [protocol_string_uc](/momentum/3/3-api/apis-protocol-string-uc)                         | Returns a protocol string in uppercase                                                                                      |
| [round](/momentum/3/3-api/apis-round)                                                   | return the integral value nearest to x rounding half-way cases away from zero, regardless of the current rounding direction |
| [rs_getlist](/momentum/3/3-api/apis-rs-getlist)                                         | Returns the address of the tail node in the RSplayTree                                                                      |
| [rs_next](/momentum/3/3-api/apis-rs-next)                                               | Move to the next node in the RSplayTree and return the data                                                                 |

This chapter lists a number of utility APIs.