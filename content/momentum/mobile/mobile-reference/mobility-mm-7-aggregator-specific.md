---
lastUpdated: "03/26/2020"
title: "Aggregator-specific Requirements"
description: "This table documents aggregator specific requirements with respect to MM 7 If applicable a link to the appropriate configuration option is provided Table 7 2 Recommended settings Name Option Description m Blox mm 7 delivery report MMS delivery reports are sent unless explicitly disabled m Blox disable chunked Does not..."
---

This table documents aggregator-specific requirements with respect to MM7\. If applicable, a link to the appropriate configuration option is provided.

<a name="table_aggregator_requirments"></a> 


| Name | Option | Description |
| --- | --- | --- |
| mBlox | [mm7_delivery_report](/momentum/mobile/mobile-reference/mobility-conf-mm-7-delivery-report) | MMS delivery reports are sent unless explicitly disabled |
| mBlox | disable_chunked | Does not support chunked transfer-coding, see [“Listener Configuration for MCMT”](/momentum/mobile/mobile-reference/mobility-mm-7-listener) |