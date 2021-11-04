---
lastUpdated: "03/26/2020"
title: "Creating a Webhook"
description: "In the Webhooks tab click the New Webhook icon in the upper right corner to open the Create New Webhook form as shown in Figure 60 2 Create New Webhook Figure 60 2 Create New Webhook Enter the following information Webhook Name User friendly name for the webhook Target URL..."
---

In the Webhooks tab, click the New Webhook icon in the upper-right corner to open the Create New Webhook form, as shown in [“Create New Webhook”](/momentum/4/web-ui-webhooks-create#figure_create_webhook).

<a name="figure_create_webhook"></a> 


![Create New Webhook](images/create_webhook.png)

Enter the following information:

*   Webhook Name - User-friendly name for the webhook

*   Target URL - URL of the target to which to post data

*   Authentication - (optional) Authentication token to present in the X-MessageSystems-Webhook-Token header of POST requests to the target URL

    Use this token in your target application to confirm that data is coming from your webhook.

To receive all event types on the webhook, click the Send all event types option. If you want only select event types, click the Let me choose event types option and select from the list displayed. Events are categorized as Message, Generation, or Engagement , as shown in [“Event Types”](/momentum/4/web-ui-webhooks-create#figure_event_types).

<a name="figure_event_types"></a> 


![Event Types](images/event_types.png)

When complete, click Create to create your new webhook.

On creation, a test POST is sent to the target URL for validation. If this request does not receive an HTTP 200 response, the webhook will not be created, and you will receive a validation error in the Create New Webhook form.

If the test POST is successful, a message will briefly display upon return to the Webhooks tab. The events that you selected will begin to be posted to the target URL after after a 1 minute activation time.