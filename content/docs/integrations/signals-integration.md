---
lastUpdated: "04/06/2020"
title: "Signals Integration"
description: "How the Signals integration works."
---

# Event Batches

The Signals integration processes your sending data in batches of events. Each batch is validated to make sure it works with SparkPost. You can see the validation results for each batch from the [Signals Integration page](https://app.sparkpost.com/signals/integration)([EU](https://app.eu.sparkpost.com/signals/integration)). This section outlines the possible issues the integration could have. Please reach out to your Technical Account Manager for support in solving issues with your integration.

## Event Validation
Each event inside a batch is validated to work with SparkPost. Events that fail validation are are dropped and do not affect the rest of the data. The number of invalid events is recorded for each batch. Reach out to your Technical Account Manager for help with recovering, fixing, and retrying events.

## Duplicate Events
Due to multiple source connections and common networking issues, you can expect some intermittent duplicate events or batches flowing through your integration. Duplicate events and batches are dropped and do not affect the rest of the data.

## Batch Errors
Sometimes there can be processing issues with an entire batch. These are the batch errors you could see in your integration:
* System: Catch-all networking error. Your application should retry any batches marked with system errors.
* Decompression: Could not decompress the GZIP batch data. Batch data may need to be edited and re-compressed in order to retry the batch. Check your encoding routine.
* Empty: Batches with no events. Expected intermittently.

# Custom Message ID

If you use custom IDs to track your emails, the Signals integration will use that value to identify your events across SparkPost. You can find your custom ID value in the `message_id` field of every event. You can search for specific events using the [Events Search](https://app.sparkpost.com/reports/message-events)([EU](https://app.eu.sparkpost.com/reports/message-events)) Message IDs filter.

# Anonymized Recipient Addresses

The Signals integration allows you to anonymize recipient addresses in your sending data. When this feature is enabled, recipient addresses are hashed before being sent to SparkPost. These anonymized events will contain a `rcpt_hash` field with the hashed address instead of the normal `rcpt_to` & `raw_rcpt_to` field. You can search for anonymized events using the original address or the hash string through the [Events Search](https://app.sparkpost.com/reports/message-events)([EU](https://app.eu.sparkpost.com/reports/message-events)) Recipient Address filter.
