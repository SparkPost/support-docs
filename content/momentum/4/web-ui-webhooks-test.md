---
lastUpdated: "03/26/2020"
title: "Testing Your Webhook"
description: "In addition to the validation performed when you create your webhook you can test your webhook by posting an example message event batch to the target URL The test sends an HTTP request to the client endpoint in the same way that the batch transmitter will This test will validate..."
---

In addition to the validation performed when you create your webhook, you can test your webhook by posting an example message event batch to the target URL. The test sends an HTTP request to the client endpoint in the same way that the batch transmitter will. This test will validate that the target responds with an "OK" (i.e. HTTP 200) and return a detailed information response.

From the Webhooks tab, click the icon in the upper-right corner of the webhook you want to test. In the drop-down list, click Test Webhook, as shown in [“Test Webhook”](/momentum/4/web-ui-webhooks-test#figure_test_webhook).

<a name="figure_test_webhook"></a> 


![Test Webhook](images/test_webhook.png)

The Test Webhook window displays the example message event batch that will be posted to your target webhook, as shown in [“Test Request”](/momentum/4/web-ui-webhooks-test#figure_test_request). The Request shows the full content of the HTTP request, which is exactly the same as what the batch transmitter would send to the client endpoint. To continue with the test, click Submit Test.

<a name="figure_test_request"></a> 


![Test Request](images/test_request.png)

The test returns a detailed information response, as shown in [“Test Response”](/momentum/4/web-ui-webhooks-test#figure_test_response).

<a name="figure_test_response"></a> 


![Test Response](images/test_response.png)

The Response shows the full content of the HTTP response sent by the client endpoint after receiving the test request. It includes a standard HTTP status. In the example response, the "OK" (`HTTP/1.1 200`) indicates that the example message event batch was successfully posted to the target URL. Any other response code indicates some type of error.