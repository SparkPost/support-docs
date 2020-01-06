---
title: "Signals Integration"
description: "How to troubleshoot signals integration validation and batch errors."
---

# Event Batches

The Signals integegration processes your sending data in batches of events. Each batch is validated to make sure it works with our analytics. You can see the validation results for each batch from the [Signals Integration page](https://app.sparkpost.com/signals/integration). This article outlines the possible issues the integration could have. Please reach out to your Technical Account Manager for support in solving issue with your integration.

## Event Validation
Each event inside a batch is validated to work with SparkPost. Events that fail validation are are dropped and do not affect the rest of the data. The number of invalid events is recorded for each batch. Reach out to your Technical Account Manager for help with recovering, fixing, and retrying events.

## Duplicate Events
Due to multiple source connections and common networking issues, you can expect some intermitent duplicate events or batches flowing through your integration. Duplicate events and batches are dropped and do not affect the rest of the data.

## Batch Errors
Sometimes there can be processing issues with an entire batch. These are the batch errors you could see in your integration:
* System: Catch-all networking error. Batches with system errors should always be retried.
* Decompression: Could not decompress the gziped batch data. Batch data may need to be edited and re-compressed in order to retry batch.
* Empty: Batches with no events. Expected intermitently.
