---
title: "7.7. Aggregator-specific Requirements"
description: "This table documents aggregator specific requirements with respect to MM 7 If applicable a link to the appropriate configuration option is provided Table 7 2 Recommended settings Name Option Description m Blox mm 7 delivery report MMS delivery reports are sent unless explicitly disabled m Blox disable chunked Does not..."
---

This table documents aggregator-specific requirements with respect to MM7\. If applicable, a link to the appropriate configuration option is provided.

<a name="table_aggregator_requirments"></a> 

**Table 7.2. Recommended settings**

| Name | Option | Description |
| --- | --- | --- |
| mBlox | [mm7_delivery_report](mobility.conf.mm7_delivery_report "mm7_delivery_report") | MMS delivery reports are sent unless explicitly disabled |
| mBlox | disable_chunked | Does not support chunked transfer-coding, see [Section 7.6, “Listener Configuration for MCMT”](mobility.mm7.listener "7.6. Listener Configuration for MCMT") |