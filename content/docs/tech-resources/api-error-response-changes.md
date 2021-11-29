---
lastUpdated: "02/08/2020"
title: Upcoming Changes to API HTTP Error Responses
description: Details on upcoming error changes that will occur on January 12, 2019
---

In an effort to standardize our API responses to provide a more consistent API experience, all current error responses will be *updated on January 12 2019* in the following manner:
1. The `description` field will no longer be returned in error responses, in favor of the `message` field.
2. The `message` field will include the information previously returned in `description`, in the following format:
    * JSON parsing errors will be returned as:
        > `Request body parsing failed [Attached error message: %error%]`
    * Exists errors will return the name of the existing resource:
        > `resource '%resourcename' already exists`
    * Type errors will return the expected type:
        > `'%fieldName' must be a %expectedType%`
    * Require field errors will return the field name:
        > `'%fieldName%' is required`
3. Inline content syntax, generation, substitution, and email_rfc822 validation errors will no longer cause synchronous `4XX` errors. They will instead generate asynchronous events consumable via message events or webhooks. Check out [this article](https://www.sparkpost.com/docs/transmissions-breaking-changes) for information on these asynchronous changes.

*The HTTP status code and the extended `code` field in responses will not be changed.*
