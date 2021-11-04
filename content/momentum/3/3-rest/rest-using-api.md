---
lastUpdated: "03/26/2020"
title: "Using the API"
description: "The injection API resides at the endpoint v 1 0 inject and accepts a JSON payload describing the injection parameters A JSON payload will be returned to indicate the outcome of the injection The API does not support XML input or output template keys to and from default to the..."
---

The injection API resides at the endpoint `/v1.0/inject` and accepts a JSON payload describing the injection parameters. A JSON payload will be returned to indicate the outcome of the injection. The API does not support XML input or output template keys. "`to`" and "`from`" default to the value of the "to" and "from" fields (respectively) in the JSON payload, unless overridden via explicit values in the "keys" field. The previous section contains examples of this.

### Note

Prior to Momentum 3.4, the REST injection API would crash Momentum if the HTTP client included an "Expect: 100-continue" header. This occurred after Momentum had sent the "100 continue" response to the HTTP request.

.Net's default HTTP request behavior is to include the "Expect: 100-continue" header, which will trigger this issue. As a workaround, be sure not to use an "Expect: 100-continue" header in the HTTP request.

You can check connectivity to the HTTP_Listener by sending an empty request in the following way:

`shell> curl -X GET http://localhost:8081/v1.0/inject/`

If you connect, no message is output. Failure to connect results in a message such as the following:

`curl: (7) couldn't connect to host`

You can send a test message by editing one of the JSON files shown in [*Template Files*](/momentum/3/3-rest/rest-sample-templates) . Change the `to` address to an accessible mailbox and copy the sample to the current directory on the machine hosting the REST server. Save the file as `sample.json`. You inject your message using curl in the following way:

`shell> curl -X POST  http://localhost:8081/v1.0/inject/  -d @sample.json`

A successful injection should return a JSON object such as the following:

```
{
  "results": [
    {
      "status": "success",
      "mid": "00\/00-02045-5093C9D4",
      "reason": "250 00\/00-02045-5093C9D4"
    }
  ],
  "status": "success"
}
```

### Note

The returned JSON object has been formatted for readability. When accessing the REST injector using curl, specifying `-H 'Content-Type: application/json'` is optional as this is the default content type.