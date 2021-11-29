---
lastUpdated: "03/26/2020"
title: "Updating Your Webhook"
description: "You can edit any configuration option of an existing webhook From the Webhooks tab click the icon in the upper right corner of the webhook you want to update In the list click Edit Configuration as shown in Figure 60 7 Update Webhook Figure 60 7 Update Webhook Make your..."
---

You can edit any configuration option of an existing webhook. From the Webhooks tab, click the icon in the upper-right corner of the webhook you want to update. In the list, click Edit Configuration, as shown in [“Update Webhook”](/momentum/4/web-ui-webhooks-update#figure_update_webhook).

<a name="figure_update_webhook"></a> 


![Update Webhook](images/update_webhook.png)

Make your changes in the Edit Webhook form, as shown in [“Edit Webhook”](/momentum/4/web-ui-webhooks-update#figure_edit_webhook), and then click Update.

<a name="figure_edit_webhook"></a> 


![Edit Webhook](images/edit_webhook.png)

If the webhook successfully updates, a message will briefly display upon return to the Webhooks tab. Batches currently queued for delivery to this webhook will not be affected by these modifications. For example: If you change the webhook’s target URL, batches already queued for delivery will still be posted to the previous URL.

Also if you update the target URL, a test POST will be sent to the URL for validation, as described in [“Creating a Webhook”](/momentum/4/web-ui-webhooks-create).