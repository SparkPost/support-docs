---
lastUpdated: "03/26/2020"
title: "Components"
description: "The principle components that make up Momentum 4 are Platform nodes and Analytics nodes Platform nodes handle the MTA including injection and message generation the configuration server engagement tracking and engagement proxy server responsibilities They also host the distributed online transaction processing OLTP database and event hose Analytics nodes host..."
---

The principle components that make up Momentum 4 are Platform nodes and Analytics nodes.

*   Platform nodes handle the MTA including injection and message generation, the configuration server, engagement tracking, and engagement proxy server responsibilities. They also host the distributed online transaction processing (OLTP) database and event hose.

*   Analytics nodes host the distributed analytics database and the web-based UI. Event data is loaded into the database via the event hose and is available via the web-based UI, reporting API, and jlogs for integration with external processes or systems. The Analytics nodes are also responsible for the API proxy server, which handles both message and reporting APIs.

<a name="architecture.image"></a> 


![Momentum 4 Components](images/components.png)