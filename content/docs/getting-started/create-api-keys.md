---
lastUpdated: "05/05/2020"
title: "Create API Keys"
description: "Before you can use the Spark Post REST APIs or SMTP injection you will need to have a valid Spark Post API key Below are the steps you will need to create a Spark Post API key IMPORTANT Make sure to copy and paste the API key when it..."
---

Before you can use the SparkPost REST APIs or SMTP injection, you will need to have a valid SparkPost API key. Below are the steps you will need to create a SparkPost API key.

**IMPORTANT!** Make sure to copy and paste the API key when it is displayed after saving. The whole API key is shown **ONE TIME ONLY**. After navigating away from that page recovery of a lost key is impossible. Keep your API keys in a safe and secure place. Treat them like passwords and never share them with anyone.

## Define the API Key:

Click on **API Keys** under the **Configuration** section of the side navigation bar, then click **Create API Key**. You'll use this key to authorize API requests or to authenticate SMTP injection. You may not need to select all permissions for your particular integration needs. It is always best practice to ONLY choose permissions which are necessary for your integration, but if you aren't sure which permissions you might not need, we recommend you simply "select all" permissions.

1. Name the API key.

1. Choose which permissions you want the API key to have. If you wish to change which permissions are available for a given API key, you may do so.

1. You do not need to configure the API key for subaccounts, unless you wish to use subaccounts. More information on subaccounts can be found in [this article](https://www.sparkpost.com/docs/user-guide/subaccounts/).

1. Click the **Create API Key** button to save this information and generate the API key.

**IMPORTANT**: The generated key will be visible only once. After the key has been created, you will only be able to see the name of the key, it's permissions, and the first four characters.

You have now completed the account configuration and obtained an API Key. If your sending domain has been verified you are ready to [send your first email using SparkPost](https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#sending-email)!

**Note**: If you are using the "Allowed IPs" feature, not all web hosting services will let you determine what IP API calls are made from, even if you subscribe to 'dedicated IP' services they provide. Please make sure you have control over the outgoing IP before utilizing this feature.
