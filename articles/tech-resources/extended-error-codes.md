---
title: "Extended Error Codes"
description: "When developing to the REST api you should be prepared to handle failed requests understand their meaning and what actions are needed to resolve them The following table is a complete list of extended error code responses organized by the four elements included in the response array Component The related..."
---

When developing to the REST api, you should be prepared to handle failed requests, understand their meaning and what actions are needed to resolve them. The following table is a complete list of extended error code responses, organized by the four elements included in the response array. 

* **Component**: The related service that the error has sourced from
* **Error Code:** The numeric code of the extended error
* **Notes:** The human readable description of the error
* **HTTP Status Code:** The server level response

| Component             | Error Code  | Notes                                            | HTTP Status Code | Corrective Action                            |
|:----------------------|:------------|:-------------------------------------------------|:-----------------|:---------------------------------------------|
| *API Service*         | *1000-1999* |                                                  |                  |                                              |
|                       | 1000        | OK                                               | 200              |                                              |
|                       | 1001        | OK (delete)                                      | 204              |                                              |
|                       | 1100        | permission denied                                | 403              | check API key, retry                         |
|                       | 1101        | invalid URI                                      | 404              | fix URI and retry                            |
|                       | 1102        | invalid HTTP method                              | 405              |                                              |
|                       | 1103        | invalid query string                             | 404              |                                              |
|                       | 1200        | invalid params                                   | 400              |                                              |
|                       | 1300        | invalid data format/type/length                  | 422              | fix request and retry                        |
|                       | 1301        | Invalid combination of fields                    | 422              |                                              |
|                       | 1303        | Invalid customer id, unauthorized tenant.        | 401              |                                              |
|                       | 1304        | Invalid User ID, unauthorized user.              | 401              |                                              |
|                       | 1305        | Input Data not UTF8 encoded                      | 400              |                                              |
|                       | 1400        | Required field is missing                        | 422              |                                              |
|                       | 1401        | Required parameter missing                       | 400              |                                              |
|                       | 1500        | Failed to update database                        | 500              |                                              |
|                       | 1501        | Failed to read from database                     | 500              |                                              |
|                       | 1502        | Server resources unavailable                     | 400              | retry later                                  |
|                       | 1600        | resource not found                               | 404              | correct uri and retry                        |
|                       | 1601        | No license                                       | 403              |                                              |
|                       | 1602        | Resource in use                                  | 409              |                                              |
|                       | 1603        | Subresource not found                            | 422              |                                              |
|                       | 1700        | Unsupported Content-Type header                  | 415              | fix content-type and retry                   |
|                       | 1800        | HTTP header value not acceptable                 | 406              | fix header and retry                         |
|                       | 1900        | Message generation module not available          | 503              |                                              |
|                       | 1901        | Message failed to generate                       | 400              |                                              |
|                       | 1902        | Message generation rejected                      | 400              |                                              |
|                       | 1910        | Message generation not configured                | 400              |                                              |
| *Transmission*        | *2000~2999* |                                                  |                  |                                              |
|                       | 2000        | transmission created, but with validation errors | 200              | check for validation errors, retry if needed |
|                       | 2001        | Invalid transmission id                          | 400              |                                              |
|                       | 2002        | Substitution data too large                      | 422              |                                              |
|                       | 2003        | Too close to generation time to delete           | 409              |                                              |
|                       | 2004        | No draft version of template exists              | 422              |                                              |
|                       | 2005        | No published version of template exists          | 422              |                                              |
|                       | 2006        | Transmission record in invalid state             | 409              |                                              |
|                       | 2101        | Exceed Sending Limit (hourly)                    | 420              |                                              |
|                       | 2102        | Exceed Sending Limit (daily)                     | Deprecated       |                                              |
|                       | 2103        | Exceed Sending Limit (sandbox)                   | 420              |                                              |
| *Template*            | *3000~3999* |                                                  |                  |                                              |
|                       | 3000        | substitution language syntax error               | 422              | fix content and retry                        |
|                       | 3001        | substitution render error                        | 422              | fix content and retry                        |
|                       | 3002        | Invalid header                                   | 422              | correct header and retry                     |
|                       | 3010        | template mime construction error                 | 422              | fix content and retry                        |
|                       | 3020        | template mime parsing error                      | 422              | fix content and retry                        |
|                       | 3030        | template already exists                          | 400              |                                              |
|                       | 3040        | template content is corrupt                      | 422              | fix content and retry                        |
|                       | 3050        | template HTML content is invalid                 | 422              | fix content and retry                        |
| *User Management*     | *4000~4999* |                                                  |                  |                                              |
|                       | 4100        | user exist                                       | 400              |                                              |
|                       | 4200        | user does not exist                              | 400              |                                              |
| *Recipient List*      | *5000-5999* |                                                  |                  |                                              |
|                       | 5000        | List created with validation errors              | 200              |                                              |
|                       | 5001        | List already exists                              | 400              |                                              |
|                       | 5002        | No valid recipients in list                      | 400              |                                              |
| *Engagement Tracking* | *6000-6999* |                                                  |                  |                                              |
|                       | 6100        | Tracking domain exists                           | 400              |                                              |
|                       | 6200        | Tracking domain does not exist                   | 404              |                                              |
| *Sending Domain*      | *7000-7999* |                                                  |                  |                                              |
|                       | 7000        | Sending domain blacklisted                       | 400              |                                              |
|                       | 7001        | Invalid Sending/Tracking Domain                  | 400              |                                              |
| *Bounce Domain*       | *8000-8999* |                                                  |                  |                                              |
|                       | 8000        | Bounce domain exists                             | 400              |                                              |
|                       | 8001        | Bounce domain does not exist                     | 404              |                                              |
| *Message Events*      |             | Too many requests                                | 429              | Rate limiting - pause and retry
| *Relay Webhooks*       | *10000-10002* |                                                  |                  |                                              |
|                       | 10000        | Using a blacklisted custom header                             | 422              | fix content and retry                                             |
|                       | 10001        | Total size of custom headers is too large                     | 413              | reduce the size of the custom headers                                             |
|                       | 10002        | Using more than the maximum amount of headers allowed                     | 422              | reduce the number of custom headers                                             |
