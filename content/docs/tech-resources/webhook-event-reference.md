---
lastUpdated: "06/16/2021"
title: "Webhook Event Reference"
description: "This is a reference guide for developers who are consuming Spark Post Webhook Events and need to understand the structure of the events being sent If you would like Spark Post to begin transmitting events to a server for your web or mobile application to begin receiving near real time..."
---

This is a reference guide for developers who are consuming SparkPost Webhook Events and need to understand the structure of the events being sent. If you would like SparkPost to begin transmitting events to a server for your web or mobile application to begin receiving near real-time detailed information about your SparkPost Email Transmissions, learn about [setting up webhooks](https://developers.sparkpost.com/api/webhooks/).

There are several types of events that SparkPost is able to send which provide you data concerning your email's life cycle. They are organized by Event Types which contain various Events with each Event being composed of Event Properties. You can use the [SparkPost API Webhook Resource](https://developers.sparkpost.com/api/webhooks.html) to discover sample payloads of selected events, and the sample values and event descriptions. To list descriptions of the events, event types, and event fields that could be included in a Webhooks post to your target URL, run the following call in a REST API client like Postman: https://api.sparkpost.com/api/v1/webhooks/events/documentation

Additional resources: [Webhook Authentication](https://www.sparkpost.com/docs/tech-resources/webhook-authentication/) and [Best Pratices for managing webhook streams](https://www.sparkpost.com/docs/tech-resources/webhook-data-streams/)

## Event Types

Events which are sent from SparkPost webhooks are organized into different event types. Below is a table that provides you with a [list of these event types](https://developers.sparkpost.com/api/webhooks/#header-webhook-event-types) and map containing each event which fall into their respective event types.

## Events

Each event which SparkPost sends you about your email transmissions has some valuable recipient-level information about every email SparkPost sends on your domain's behalf. EVERY event created by SparkPost has a "type" property which refers to the Event Type JSON Key.

## Event Properties

Each event has different properties which are described below for your reference.You can also use the SparkPost API Webhook resource's [List sample values and event descriptions](https://developers.sparkpost.com/api/#/reference/webhooks/events-documentation) to see a complete set of event properties mapped to each event type.
