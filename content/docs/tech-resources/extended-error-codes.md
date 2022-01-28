---
lastUpdated: "01/28/2022"
title: "Extended Error Codes"
description: "When developing to the REST api you should be prepared to handle failed requests understand their meaning and what actions are needed to resolve them The following table is a complete list of extended error code responses organized by the four elements included in the response array Component The related..."
---

When developing to the REST api, you should be prepared to handle failed requests, understand their meaning and what actions are needed to resolve them. It is useful to have a general understand the meaning of certain types of HTTP codes.  You may read more about what [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) are generally defined and the following provides some rules of thumb for what certain types of codes mean. 
* **2xx** means that the API call was successful
* **4xx** means that there was a problem with the call. You need to fix something before retrying. Usually the extended error code or message in the HTTP response body will indicate the problem. If you are not able to figure out how to fix the call then contact Support with details on the API call and current response.
* **5xx** means that there is a problem with the SparkPost service. Usually it is a transient error that will work on retry. If the call fails with a 5xx after 2 retries then contact Support.

## Extended Error Code Details 
The following table is a complete list of extended error code responses, organized by the four elements included in the response array. 
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
|                       | 1900        | Message generation module not available          | 503              | retry, likely transient error                                             |
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
|                       | 2102        | Exceed Sending Limit (daily)                     | 420              |                                              |
|                       | 2103        | Exceed Sending Limit (sandbox)                   | 420              |                                              |
|                       | 2105        | Exceed Sending Limit (monthly)                   | 420              |                                              |
|                       | 2106        | Invalid Template ID (sandbox)                    | 422              |                                              |
| *Template*            | *3000~3999* |                                                  |                  |                                              |
|                       | 3000        | template language syntax error                   | 422              | fix content and retry                        |
|                       | 3001        | template language render error                   | 422              | fix content and retry                        |
|                       | 3002        | Invalid header                                   | 422              | correct header and retry                     |
|                       | 3010        | template mime construction error                 | 422              | fix content and retry                        |
|                       | 3020        | template mime parsing error                      | 422              | fix content and retry                        |
|                       | 3030        | template already exists                          | 400              |                                              |
|                       | 3040        | template content is corrupt                      | 422              | fix content and retry                        |
|                       | 3050        | template HTML content is invalid                 | 422              | fix content and retry                        |
| *Recipient List*      | *5000-5999* |                                                  |                  |                                              |
|                       | 5000        | List created with validation errors              | 200              |                                              |
|                       | 5001        | List already exists                              | 400              |                                              |
|                       | 5002        | No valid recipients in list                      | 400              |                                              |
| *Engagement Tracking* | *6000-6999* |                                                  |                  |                                              |
|                       | 6100        | Tracking domain exists                           | 400              |                                              |
|                       | 6200        | Tracking domain does not exist                   | 404              |                                              |
| *Sending Domain*      | *7000-7999* |                                                  |                  |                                              |
|                       | 7000        | Sending domain blacklisted                       | 400              |                                              |
|                       | 7001        | Invalid Sending/Tracking Domain                  | 400              |                                              |                              |
| *Any Rate limited API*      |             | Too many requests                                | 429              | Rate limiting - pause and retry
| *Relay Webhooks*       | *10000-10002* |                                                  |                  |                                              |
|                       | 10000        | Using a restricted custom header                             | 422              | remove the restricted header and retry                                             |
|                       | 10001        | Total size of custom headers is too large                     | 413              | reduce the size of the custom headers and retry                                             |
|                       | 10002        | Using more than the maximum amount of headers allowed                     | 422              | reduce the number of custom headers and retry                                             |
