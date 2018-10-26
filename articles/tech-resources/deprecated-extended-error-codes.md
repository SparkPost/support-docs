---
title: Deprecation of API Extended Error Codes
description: Details on the deprecation of extended API error codes.
---

# Deprecation of API Extended Error Codes

 Post January 12th, 2019, SparkPost will no longer return an [extended error code](https://www.sparkpost.com/docs/tech-resources/extended-error-codes/) in API responses. The reasoning behind this is to standardize our API reponses to provide a more coherent API experience. This does not affect extended error codes that are returned via message events in the case of out of band errors.

As a general rule, all current error codes will be updated in the following manner:
1. The `code` field will no longer be returned.
2. The `description` field will be moved to the message field with the additional changes
    * JSON parsing errors will be returned as:
        > `Request body parsing failed [Attached error message: %error%]`
    * Exists errors will be generic across the following APIs and will return:
        > `resource '%resourcename' already exists`
    * Type errors will no longer return the invalid type, just expected:
        > `'%fieldName' must be a %expectedType%`
    * Require field errors will be generic across the following APIs and will return:
        > `'%fieldName%' is required`
3. The HTTP status code will not change
4. Inline content syntax, compilation, rendering and substituion, and email_rfc822 validation errors will be moved to out of band errors via message events. Extended error codes will still be returned via message events.

All HTTP errors will be guaranteed to return an `error` JSON object with a `message` field. Note that in addition to the `message` field, other fields may or may not be included to provide additional insight. One example would be a `param` field during content validation. All 5xx errors should be retried, with all 4xx API errors evaluated for correctness before being retried.

> Note: 404 and 5xx HTTP Errors returned by SparkPost are not affected by this change, as they do not currently return extended error codes.

- [Generic](#generic)
- [Transmissions API](#transmissions-api)
    * [Content Validation](#content-validation-errors)
    * [Sending Domain Errors](#sending-domain-errors)
    * [Recipient Errors](#recipient-errors)
    * [IP Pool Errors](#ip-pool-errors)
    * [Templates](#templates)
    * [Database Errors](#database-errors)
    * [Sending Limits](#sending-limits)
- [Inbound Domains API](#inbound-domains-api)
- [Recipient and Recipient List API](#recipient-and-recipient-list-api)
- [Relay Webhooks API](#relay-webhooks-api)
- [Sending Domains API](#sending-domains-api)
- [Template Content and Templates API](#template-content-and-templates-api)
- [Tracking Domains API](#tracking-domains-api)


## Generic

+ Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "required field is missing",
                        "description": "field 'fieldName' is required",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "'%fieldName%' is required"
                    }
                ]
            }

+ Reponse type validation

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "invalid data format/type",
                        "description": "field '%fieldName' is of type '%jsonType%', but needs to be of type '%expectedType%'",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "%fieldName must be a %expectedType%"
                    }
                ]
            }

+ Reponse type validation

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "invalid data format/type",
                        "description": "%fieldName% must be '%expectedType%'",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "%fieldName must be a %expectedType%"
                    }
                ]
            }

+ Reponse type length validation

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "invalid data format/type",
                        "description": "field '%fieldName' is of length '%length%', but needs to be of max length '%maxLength%'",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "%fieldName must be of max length %expectedLength%"
                    }
                ]
            }

+ Response invalid json

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Problems parsing request as json",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Request body parsing failed [Attached error message: %error%]"
                    }
                ]
            }

+ Reponse type domain validations

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "invalid data format/type",
                        "description": "Error validating domain name syntax for domain: %domain%",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "domain must be valid"
                    }
                ]
            }

+ Reponse type domain validations

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "invalid data format/type",
                        "description": "Error domain name contains invalid characters or spaces for domain: %domain%",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "domain must be valid"
                    }
                ]
            }

+ Reponse type domain validations

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "invalid data format/type",
                        "description": "Error domain name length too short for domain:  %domain%",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "domain must be valid"
                    }
                ]
            }

+ Reponse type domain validations

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "invalid data format/type",
                        "description": "Error domain name contains no '.'(s) for domain:  %domain%",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "domain must be valid"
                    }
                ]
            }

+ Reponse type domain validations

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "invalid data format/type",
                        "description": "Error validating domain name syntax for domain: %domain%",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "domain must be valid"
                    }
                ]
            }

## Transmissions API

+ Response Msg Generation errors

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Failed to generate message",
                        "code": "1901"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Failed to generate message"
                    }
                ]
            }

+ Response Msg Generation errors

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Message generation rejected",
                        "code": "1902"
                    }
                ]
            }

    + Post Change Response (application/json)

            {
                "errors": [
                    {
                        "message": "Message generation rejected"
                    }
                ]
            }

+ Response invalid transmission ID

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid transmission id",
                        "code": "2001"
                    }
                ]
            }

    + Post Change Response (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid transmission id",
                    }
                ]
            }

### Content Validation Errors

+ Reponse invalid query param

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid params",
                        "description": "param 'num_rcpt_errors' must be an integer",
                        "code": "1200"
                    }
                ]
            }

    + Post Change Response (application/json)

            {
                "errors": [
                    {
                        "message": "param 'num_rcpt_errors' must be an integer"
                    }
                ]
            }

+ Response for one parameter is missing

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "required query parameter is missing",
                        "description": "At least one of these parameters required: campaign_id or template_id",
                        "code": "1401"
                    }
                ]
            }

    + Post Change Response (application/json)

            {
                "errors": [
                    {
                        "message": "At least one of these parameters required: campaign_id or template_id"
                    }
                ]
            }

+ Response invalid HTTP method

    + Current 405 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid http method",
                        "description": "PUT is not supported on /api/v1/transmissions",
                        "code": "1102"
                    }
                ]
            }

    + Post Change Response (application/json)

            {
                "errors": [
                    {
                        "message": "%HTTP_Method% is not supported on /api/v1/transmissions"
                    }
                ]
            }

+ Response invalid combination of fields

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid combination of fields",
                        "description": "content.email_rfc822 and content.subject are mutually exclusive",
                        "code": "1301"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "content.email_rfc822 and content.subject are mutually exclusive"
                    }
                ]
            }

+ Response no valid content fields

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "No valid fields exist in the 'content' object",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "No valid fields exist in the 'content' object"
                    }
                ]
            }

+ Response no valid fields with AMP

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "content.amp_html requires content.html or content.text",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "content.amp_html requires content.html or content.text"
                    }
                ]
            }

+ Response inline_images requires html field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "content.inline_images requires content.html",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "content.inline_images requires content.html"
                    }
                ]
            }

+ Response content size is too big

    + Current 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "invalid data format/type",
                        "description": "The estimated message size is above the 20 MB message size limit",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "The estimated message size is above the 20 MB message size limit"
                    }
                ]
            }

+ Response error parsing start time

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Error parsing scheduled start_time",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "options.start_time must be a ISO8601 timestamp"
                    }
                ]
            }

+ Reponse error delete too close

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "too close to generation time to delete transmission",
                        "description": "Deletion time window (600 seconds) doesn't permit transmission deletion",
                        "code": "2003"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Deletion time window (600 seconds) doesn't permit transmission deletion"
                    }
                ]
            }

+ Response JSON object expected

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "JSON object expected",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "%field% must be a JSON object"
                    }
                ]
            }

+ Response for invalid return path

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "return_path 'string' is not a valid email address",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "return_path '%string%' is not a valid email address"
                    }
                ]
            }

+ Response for subsitution data too large

    + Current 422 (application/json)

                {
                    "errors": [
                        {
                            "message": "Substitution data too large",
                            "description": "Transmission-level substitution data must be less than 100000 bytes",
                            "code": "2002"
                        }
                    ]
                }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Transmission-level substitution data must be less than 100000 bytes"
                    }
                ]
            }

### Sending Domain Errors

+ Reponse unconfigured sending domain

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid domain",
                        "description": "Unconfigured Sending Domain <%sending_domain%>",
                        "code": "7001"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Unconfigured Sending Domain <%sending_domain%>"
                    }
                ]
            }

+ Reponse blocked sending domain

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid domain",
                        "description": "Blocked Sending Domain <%sending_domain%>",
                        "code": "7001"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Blocked Sending Domain <%sending_domain%>"
                    }
                ]
            }

+ Reponse compliance pending for sending domain

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid domain",
                        "description": "Compliance Pending for Sending Domain <%sending_domain%>",
                        "code": "7001"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Compliance Pending for Sending Domain <%sending_domain%>"
                    }
                ]
            }

### Recipient Errors

Recipient errors for Transmission API requests can be found [here](#recipient-and-recipient-list-api)

### IP Pool Errors

+ Response for Empty Default Pool/Empty Pool

    + Current 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "invalid data format/type",
                        "description": "IP Pool '%pool%' is empty",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "IP Pool '%pool%' is empty",
                    }
                ]
            }

+ Response for using sp_shared

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "sp_shared is not a valid customer ip pool",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "sp_shared is not a valid customer ip pool",
                    }
                ]
            }

+ Reponse Ip Pool doesn't exist

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "IP Pool 'bogussssss' does not exist",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "IP Pool '%pool%' does not exist",
                    }
                ]
            }

### Templates

As the Transmission and Templates API share many of the same error codes, the template and content based errors for the Transmssions API can be found [here](#template-content-and-templates-api).

### Database Errors

+ Reponse delete when completed

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "transmission database record is in an invalid state for deletion",
                        "description": "Unable to delete a transmission that has completed (state=Success)",
                        "code": "2003"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors" : [
                    {
                        "message": "Unable to delete a transmission that has completed (state=Success)",
                    }
                ]
            }

+ Reponse delete when in generating

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "transmission database record is in an invalid state for deletion",
                        "description": "Unable to delete a transmission that is in progress (state=Generating)",
                        "code": "2003"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors" : [
                    {
                        "message": "Unable to delete a transmission that has completed (state=Generating)",
                    }
                ]
            }

+ Reponse delete when cancelled or other state

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "transmission database record is in an invalid state for deletion",
                        "description": "Unable to delete a transmission that is in progress (state=%state%)",
                        "code": "2003"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors" : [
                    {
                        "message": "Unable to delete a transmission that has completed (state=%state%)",
                    }
                ]
            }

+ Reponse failed json parsing from DB

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Failed parsing json from DB: %json_error%",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "Failed parsing json from DB: %json_error%",
                    }
                ]
            }

### Sending Limits

+ Response hourly sending limits

    + Current 420 (application/json)

            {
                "errors": [
                    {
                    "message": "Exceed Sending Limit (hourly)",
                    "code": "2101"
                    }
                ]
            }

    + Post Change Response 420 (application/json)

            {
                "errors" : [
                    {
                        "message": "Exceed Sending Limit (hourly)",
                    }
                ]
            }

+ Response Daily sending limits

    + Current 420 (application/json)

            {
                "errors": [
                    {
                    "message": "Exceed Sending Limit (daily)",
                    "code": "2102"
                    }
                ]
            }

    + Post Change Response 420 (application/json)

            {
                "errors" : [
                    {
                        "message": "Exceed Sending Limit (daily)",
                    }
                ]
            }


+ Response monthly sending limits

    + Current 420 (application/json)

            {
                "errors": [
                    {
                    "message": "Exceed Sending Limit (monthly)",
                    "code": "2105"
                    }
                ]
            }

    + Post Change Response 420 (application/json)

            {
                "errors" : [
                    {
                        "message": "Exceed Sending Limit (monthly)",
                    }
                ]
            }

+ Response sandbox sending limits

    + Current 420 (application/json)

            {
                "errors": [
                    {
                    "message": "Exceed Sending Limit (sandbox)",
                    "code": "2103"
                    }
                ]
            }

    + Post Change Response 420 (application/json)

            {
                "errors" : [
                    {
                        "message": "Exceed Sending Limit (sandbox)",
                    }
                ]
            }

## Inbound Domains API

+ Response domain is blacklisted

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Restricted domain",
                        "description": "Please contact SparkPost support to get this domain authorized for your account.",
                        "code": "7000"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Please contact SparkPost support to get this domain authorized for your account."
                    }
                ]
            }

+ Reponse already in use

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource conflict",
                        "description": "An inbound domain with similar attributes already exists.",
                        "code": "1602"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource '%resourcename' already exists"
                    }
                ]
            }

+ Reponse conflicts with sending domain

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource conflict",
                        "description": "A CNAME or MX verified sending domain with similar attributes already exists.",
                        "code": "1602"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource '%resource name' already exists"
                    }
                ]
            }

+ Reponse domain in use by relay webhook

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource conflict",
                        "description": "Domain currently being used in a relay-webhook. Please delete the relay-webhook first.",
                        "code": "1602"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors": [
                    {
                        "message": "Domain currently being used in a relay-webhook. Please delete the relay-webhook first."
                    }
                ]
            }

+ Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "Missing required field: (domain) is required",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "'%fieldName%' is required"
                    }
                ]
            }

## Recipient and Recipient List API

+ Reponse list created with validation errors

    + Current 200 (application/json)

            {
                "errors": [
                    {
                        "message": "List created with validation errors",
                        "code": "5000"
                    }
                ]
            }

    + Post Change Response 200 (application/json)

            {
                "errors" : [
                    {
                        "message": "List created with validation errors",
                    }
                ]
            }

+ Reponse list already exists

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "List already exists",
                        "description": "List '%list%' already exists",
                        "code": "5001"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "resource "%resourcename" already exists",
                    }
                ]
            }

+ Reponse list one valid recipient

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "At least one valid recipient is required",
                        "code": "5002"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "At least one valid recipient is required",
                    }
                ]
            }

+ Resonse no valid recipients

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "At least one valid recipient is required",
                        "code": 5002
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "At least one valid recipient is required"
                    }
                ]
            }

+ Response recipient list not found

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Subresource not found",
                        "description": "Recipient list 'list' does not exist",
                        "code": "1603"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "Recipient list '%list%' does not exist",
                    }
                ]
            }

 + Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "address.email is required for each recipient",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "address.email is required for each recipient",
                    }
                ]
            }


+ Reponse invalid recipient address

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "invalid recipient address: %address%",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid recipient address: %address%"
                    }
                ]
            }

+ Reponse invalid recipient address.%field% where %field% is any value under it such as `address.email` or `address.env_from`

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "invalid recipient address.%field%: %address%",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid recipient address.%field%: %address%"
                    }
                ]
            }

+ Reponse invalid recipient address

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "address %value% is not JSON",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Request body parsing failed [Attached error message: %error%]"
                    }
                ]
            }

+ Reponse invalid bindings

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "metadata.binding: cannot be set but empty",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "metadata.binding: cannot be set but empty"
                    }
                ]
            }

+ Reponse must be json types

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "(metadata|substitution_data) : is not of type json_object",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "(metadata|substitution_data) must be of type json_object"
                    }
                ]
            }

+ Reponse for no recipeints

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "recipients or list_id required",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "recipients or list_id required"
                    }
                ]
            }

+ Response improper `recipients` type

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Invalid recipients type - needs to be json_array or json_object",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "recipeints must b a json_array or json_object",
                    }
                ]
            }

## Relay Webhooks API

+ Reponse already in use

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource conflict",
                        "description": "Domain %example.com% is already in use",
                        "code": "1602"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors" : [
                    {
                        "message": "Domain %example.com% is already in use",
                    }
                ]
            }

+ Reponse customer headers invalid size

    + Current 413 (application/json)

            {
                "errors": [
                    {
                        "message": "custom_headers exceeds permitted size",
                        "description": "custom_headers cannot be larger than 3000 bytes",
                        "code": "10000"
                    }
                ]
            }

    + Post Change Response 413 (application/json)

            {
                "errors" : [
                    {
                        "message": "custom_headers cannot be larger than 3000 bytes",
                    }
                ]
            }

+ Reponse invalid protocol

    +  Current 422

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Error: tried to save webhook with invalid protocol '%protocol%'",
                        "code": "1300"
                    }
                ]
            }

    +  Post Change Response 413 (application/json)

            {
                "errors": [
                    {
                        "message": "Error: tried to save webhook with invalid protocol '%protocol%'",
                    }
                ]
            }

+ Reponse reserved header

    + Current 422

            {
                "errors": [
                    {
                        "message": "Invalid custom header",
                        "description": "Header '%header%' is reserved and cannot be used",
                        "code": "10000"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "Header '%header%' is reserved and cannot be used",
                    }
                ]
            }

+ Reponse exceeds maximum number of headers

    +  Current 422

            {
                "errors": [
                    {
                        "message": "custom_headers exceeded maximum headers allowed",
                        "description": "A maximum of %max% custom headers are permitted",
                        "code": "10000"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "A maximum of %max% custom headers are permitted",
                    }
                ]
            }

## Sending Domains API

+ Reponse already in use

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource conflict",
                        "description": "Sending Domain <%domain.com> already CNAME/MX verified by another account %customerId%:%subaccountId%",
                        "code": "1602"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors": [
                    {
                        "message": "Sending Domain <%domain.com> already CNAME/MX verified by another account %customerId%:%subaccountId%"
                    }
                ]
            }

+ Response Msg Generation errors

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Failed to generate message",
                        "code": "1901"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Failed to generate message"
                    }
                ]
            }

+ Response domain is blacklisted

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Restricted domain",
                        "description": "Please contact SparkPost support to get this domain authorized for your account.",
                        "code": "7000"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Please contact SparkPost support to get this domain authorized for your account."
                    }
                ]
            }

+ Reponse maximum number of sending domains

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Exceeded maximum allowed domains",
                        "description": "You have exceeded the maximum allowed sending domains. Please contact support",
                        "code": "7002"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "You have exceeded the maximum allowed sending domains. Please contact support"
                    }
                ]
            }

+ Reponse unable to verify due to DMARC

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Domain not allowed",
                        "description": "Verification by address is not available for Sending Domains with a DMARC policy",
                        "code": "7003"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Verification by address is not available for Sending Domains with a DMARC policy"
                    }
                ]
            }


+ Reponse check against sending domains

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource conflict",
                        "description": "An inbound domain with similar attributes already exists.",
                        "code": "1602"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors": [
                    {
                        "message": "An inbound domain with similar attributes already exists."
                    }
                ]
            }

+ Reponse already in use

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource conflict",
                        "description": "Sending Domain <%domain.com%> already registered",
                        "code": "1602"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource '%resourcename' already exists"
                    }
                ]
            }

+ Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "verification_mailbox field required to verify mailbox",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "verification_mailbox field required to verify mailbox"
                    }
                ]
            }

 + Reponse Invalid mailbox

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "verification_mailbox field cannot be 'postmaster' or 'abuse'",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "verification_mailbox field cannot be 'postmaster' or 'abuse'"
                    }
                ]
            }


 + Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "Error no fields specified for verification",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Error no fields specified for verification"
                    }
                ]
            }

+ Reponse empty DKIM keys

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Empty keys are not allowed.",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Empty keys are not allowed."
                    }
                ]
            }

+ Reponse invalid private DKIM key

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Private key does not seem valid. Please use another key pair.",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Private key does not seem valid. Please use another key pair."
                    }
                ]
            }

+ Reponse invalid public DKIM key

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Public key does not seem valid. Please use another key pair.",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Public key does not seem valid. Please use another key pair."
                    }
                ]
            }

+ Reponse empty DKIM selector

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Error: DKIM selector length is zero.",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Error: DKIM selector length is zero."
                    }
                ]
            }

+ Reponse unable to read private key

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Unable to read private key.",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Unable to read private key."
                    }
                ]
            }

+ Reponse unable to validate keys

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Unable to extract public key from private key.",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Unable to extract public key from private key."
                    }
                ]
            }

+ Reponse unable to validate keys

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Private and public DKIM keys do not match.",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Private and public DKIM keys do not match."
                    }
                ]
            }

+ Reponse invalid status for bounce domain

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Domain must have cname_status 'valid' or mx_status 'valid' in order to set 'is_default_bounce_domain' to true",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Domain must have cname_status 'valid' or mx_status 'valid' in order to set 'is_default_bounce_domain' to true"
                    }
                ]
            }

+ Reponse invalid data in status objects

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "'is_default_bounce_domain' cannot be set to true at the time of domain creation",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "'is_default_bounce_domain' cannot be set to true at the time of domain creation"
                    }
                ]
            }

+ Reponse invalid data in status objects (control)

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Invalid data in '%s' field, valid inputs are: %s",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid data in '%s' field, valid inputs are: %s"
                    }
                ]
            }

+ Reponse invalid data in status objects (control)

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Invalid data in 'compliance_status' field, valid inputs are: %values%",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid data in 'compliance_status' field, valid inputs are: %values%"
                    }
                ]
            }

+ Reponse invalid data in status objects (control)

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "No valid input fields detected",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "No valid input fields detected"
                    }
                ]
            }

## Template Content and Templates API

+ Reponse invalid email address

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "failed to update database",
                        "description": "content.from.email: "%s" was evaluated to "%s" and isn\'t a valid email format. Please validate that entered substitution syntax is correct",
                        "code": "1307"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "content.from.email: "%s" was evaluated to "%s" and isn\'t a valid email format. Please validate that entered substitution syntax is correct",
                    }
                ]
            }

+ Reponse invalid from email address

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "failed to update database",
                        "description": "content.from.email: "%s" isn\'t a valid email format.",
                        "code": "1307"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "content.from.email: "%s" isn\'t a valid email format.",
                    }
                ]
            }

+ Reponse already exists

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "template already exists",
                        "description": "Template with id '%template_id%' already exists",
                        "code": "3030"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "Template with id '%template_id%' already exists",
                    }
                ]
            }

+ Reponse concurrent updates

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "template already exists",
                        "description": "Another request has updated Template '%template_id%' at the same time as your request. Please try again",
                        "code": "3030"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "Another request has updated Template '%template_id%' at the same time as your request. Please try again",
                    }
                ]
            }

+ Response AB Test not enabled

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid uri",
                        "description": "A/B Testing has been disabled",
                        "code": "1101"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "A/B Testing has been disabled",
                    }
                ]
            }

+ Response Invalid UTF8 found in json

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid UTF-8",
                        "description": "Non-UTF-8 data found in json",
                        "code": "1305"
                    }
                ]
            }

+ Reponse already in use

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource conflict",
                        "description": "Template is in use by msg generation",
                        "code": "1602"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors" : [
                    {
                        "message": "Template is in use by msg generation",
                    }
                ]
            }

+ Response missing template id or content field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "content object or template_id required",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "content object or template_id required",
                    }
                ]
            }

+ Response Template does not exist

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Subresource not found",
                        "description": "template 'nonexistent' does not exist",
                        "code": "1603"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "template '%nonexistent%' does not exist",
                    }
                ]
            }

+ Reponse not specify template_id and ab_test_id

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid combination of fields",
                        "description": "You may not specify both template_id and ab_test_id",
                        "code": "1301"
                    }
                ]
        }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "You may not specify both template_id and ab_test_id",
                    }
                ]
            }

+ Response AB Test not found

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Subresource not found",
                        "description": "ab_test_id '%s' does not exist",
                        "code": "1603"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "ab_test_id '%id%' does not exist",
                    }
                ]
            }


+ Response no published template available

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "No published template available, but draft version exists",
                        "description": "no published version of template 'nonexistent'",
                        "code": "1603"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "no published version of template '%nonexsistent%'",
                    }
                ]
            }

+ Response no draft template available

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "No draft template available, but published version exists",
                        "description": "no draft version of template 'nonexistent'",
                        "code": "1603"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "no draft version of template '%nonexsistent%'",
                    }
                ]
            }

+ Reponse syntax error on inline template compilation

    + Current 422 (application/json)
    > [[Error while (compiling|rendering) (part|header) (.+?): (?:line (\d+): )?(.+)]])

            {
                "errors": [
                    {
                        "message": "substitution language syntax error in template content",
                        "description": "Error while compiling %part html: line 8: a lone 'end' was detected%",
                        "code": "3000",
                        "part": "html",
                        "line": 8
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors": [
                    {
                        "message": "Error while compiling %part html: line 8: a lone 'end' was detected%",
                    }
                ]
            }



+ Reponse syntax error on inline template rendering

    + Current 422 (application/json)
    >[[Error while (compiling|rendering) (part|header) (.+?): (?:line (\d+): )?(.+)]])

            {
                "errors": [
                    {
                        "message": "substitution render error",
                        "description": "Error while rendering %part html: line 8: a lone 'end' was detected%",
                        "code": "3001",
                        "part": "html",
                        "line": 8
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors": [
                    {
                        "message": "Error while rendering %part html: line 8: a lone 'end' was detected%",
                    }
                ]
            }

+ Reponse template headers too long

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid header",
                        "description": "Error while validating header %header%: Header name too long",
                        "code": "3002",
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors": [
                    {
                        "message": "Error while validating header %header%: Header name too long",
                    }
                ]
            }



+ Reponse invalid header on template headers

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid header",
                        "description": "Error while validating header %header%: Invalid header name",
                        "code": "3002",
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors": [
                    {
                        "message": "Error while validating header %header%: Invalid header name",
                    }
                ]
            }

+ Reponse syntax error on template headers

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid header",
                        "description": "Error while validating header %header%: Invalid header content",
                        "code": "3002",
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors": [
                    {
                        "message": "Error while validating header %header%: Invalid header content",
                    }
                ]
            }

+ Reponse syntax error on template headers

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid header",
                        "description": "Error while validating header %header%: Header content all whitespace",
                        "code": "3002",
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors": [
                    {
                        "message": "Error while validating header %header%: Header content all whitespace",
                    }
                ]
            }

+ Reponse syntax error on template headers

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Invalid header",
                        "description": "Error while validating header %header%: Missing header content",
                        "code": "3002",
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors": [
                    {
                        "message": "Error while validating header %header%: Missing header content",
                    }
                ]
            }

+ Reponse decode error

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "template mime parsing error",
                        "description": "Unable to decode the %mimetype% part into UTF-8",
                        "code": "3020",
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors": [
                    {
                        "message": "Unable to decode the %mimetype% part into UTF-8",
                    }
                ]
            }


+ Reponse error in email_rfc833

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "template mime parsing error",
                        "description": "Error in content.email_rfc822: %errorMsg%",
                        "code": "3020",
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors": [
                    {
                        "message": "Error in content.email_rfc822: %errorMsg%",
                    }
                ]
            }

+ Reponse concurrent updates

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "template content is corrupt",
                        "description": "Error decoding template content: %error_message%",
                        "code": "3040"
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors" : [
                    {
                        "message": "Error decoding template content: %error_message%",
                    }
                ]
            }

+ Reponse content html error

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "template content is corrupt",
                        "description": "content html error: %error_message%",
                        "code": "3050"
                    }
                ]
            }

    + Post Change Response 422 (application/json)
        > Note: This will be returned out of band via Message Events for the Transmission API

            {
                "errors" : [
                    {
                        "message": "content html error: %error_message%",
                    }
                ]
            }

 + Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "content.from.email is a required field",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "content.from.email is a required field",
                    }
                ]
            }

 + Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "content.from is a required field",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "content.from is a required field",
                    }
                ]
            }

 + Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "content.subject is a required field",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "content.subject is a required field",
                    }
                ]
            }

 + Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "At least one of 'text' or 'html' needs to exist in 'content'",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "At least one of 'text' or 'html' needs to exist in 'content'",
                    }
                ]
            }

 + Reponse Missing Field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "No valid fields exist in the 'content' object",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "No valid fields exist in the 'content' object",
                    }
                ]
            }

+ Response no valid fields with AMP

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "content.amp_html requires content.html or content.text",
                        "code": "1400"
                    }
                ]
            }


    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "content.amp_html requires content.html or content.text",
                    }
                ]
            }

+ Response inline_images requires html field

    + Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "required field is missing",
                        "description": "content.inline_images requires content.html",
                        "code": "1400"
                    }
                ]
            }

    + Post Change Response 422 (application/json)

            {
                "errors" : [
                    {
                        "message": "content.inline_images requires content.html",
                    }
                ]
            }

+ Reponse content field validation

    +  Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "content.%field% needs to by of type %type%",
                        "code": "1300"
                    }
                ]
            }

    +  Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "content.%field% must be of type %type%",
                    }
                ]
            }

+ Reponse enable attachments and inline images

    +  Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "Please contact SparkPost support to request enablement of attachments and inline images on this account",
                        "code": "1300"
                    }
                ]
            }

    +  Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "Please contact SparkPost support to request enablement of attachments and inline images on this account",
                    }
                ]
            }

+ Reponse enable attachments and inline images

    +  Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "At least one of 'id' or 'name' must exist",
                        "code": "1300"
                    }
                ]
            }

    +  Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "At least one of 'id' or 'name' must exist",
                    }
                ]
            }


+ Reponse id or name must exist

    +  Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "At least one of 'id' or 'name' must exist",
                        "code": "1300"
                    }
                ]
            }

    +  Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "At least one of 'id' or 'name' must exist",
                    }
                ]
            }

+ Reponse id must have proper characters

    +  Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "id may only contain letters, numbers, underscores, periods and hyphens",
                        "code": "1300"
                    }
                ]
            }

    +  Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "id may only contain letters, numbers, underscores, periods and hyphens",
                    }
                ]
            }

+ Reponse id cannot be empty

    +  Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "id cannot be empty string",
                        "code": "1300"
                    }
                ]
            }

    +  Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "id cannot be empty string",
                    }
                ]
            }

+ Reponse no attachments or inline images

    +  Current 422 (application/json)

            {
                "errors": [
                    {
                        "message": "invalid data format/type",
                        "description": "attachments and inline_images are not supported in stored templates",
                        "code": "1300"
                    }
                ]
            }

    +  Post Change Response 422 (application/json)

            {
                "errors": [
                    {
                        "message": "attachments and inline_images are not supported in stored templates",
                    }
                ]
            }

## Tracking Domains API

+ Response verification could not be reached

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "request to remote endpoint failed",
                        "description": "Unable to reach http://example.com:80. Please verify that your redirect is functioning",
                        "code": "1404"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "Unable to reach http://example.com:80. Please verify that your redirect is functioning",
                    }
                ]
            }

+ Response verification error returned

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "request to remote endpoint failed",
                        "description": "Received the HTTP Error %code% during verification of %example.com%.",
                        "code": "1404"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "Unable to reach http://example.com:80. Please verify that your redirect is functioning",
                    }
                ]
            }

+ Response domain is blacklisted

    + Current 400 (application/json)

            {
                "errors": [
                    {
                        "message": "Restricted domain",
                        "description": "Please contact SparkPost support to get this domain authorized for your account.",
                        "code": "7000"
                    }
                ]
            }

    + Post Change Response 400 (application/json)

            {
                "errors" : [
                    {
                        "message": "Please contact SparkPost support to get this domain authorized for your account.",
                    }
                ]
            }

+ Reponse already in use

    + Current 409 (application/json)

            {
                "errors": [
                    {
                        "message": "resource conflict",
                        "description": "Tracking domain '%domain%' already exists",
                        "code": "1602"
                    }
                ]
            }

    + Post Change Response 409 (application/json)

            {
                "errors" : [
                    {
                        "message": "resource '%resourcename%' already exists",
                    }
                ]
            }


+ Reponse type validation

    + Current 422 (application/json)

            {
                "errors":
                [
                    {
                        "message": "invalid data format/type",
                        "description": "Tracking domain '%domain' unverified",
                        "code": "1300"
                    }
                ]
            }

    + Post Change Response

            {
                "errors":
                [
                    {
                        "message": "Tracking domain '%domain' unverified"
                    }
                ]
            }
