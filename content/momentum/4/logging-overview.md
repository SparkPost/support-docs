---
lastUpdated: "03/26/2020"
title: "Logging Overview"
description: "Momentum’s logging capabilities are implemented by various modules They are intended to maintain auditing and a history of events providing information such as system errors message disposition and engagement tracking The logging subsystems range from transactional logs on a server node to replicated server node logs aggregated on the designated..."
---


Momentum’s logging capabilities are implemented by various modules. They are intended to maintain auditing and a history of events, providing information such as system errors, message disposition, and engagement tracking. The logging subsystems range from transactional logs on a server node to replicated server node logs, aggregated on the designated log aggregator.

## <a name="logging.overview.files"></a> Log Files

The following are Momentum's logging modules. For additional information about use and configuration, follow each link :

*   [adaptive](/momentum/4/modules/4-adaptive#modules.adaptive.options.logging) - logs adaptive delivery events

*   [as_logger](/momentum/4/modules/as-logger) - journals replicated audit series to disk at a configurable, periodic interval

*   [bounce_logger](/momentum/4/modules/bounce-logger) - provides bounce data and bounce classification

*   [chunk_logger](/momentum/4/modules/chunk-logger) - provides a safe interface for logging asynchronously from Lua, C, and C++

*   [custom_logger](/momentum/4/modules/custom-logger) - enables you to create custom logs defining your own logging fields and delimiters

*   [ec_logger](/momentum/4/modules/ec-logger) - provides message disposition status, tracking messages from generation through delivery

*   [event_hydrant](/momentum/4/modules/event-hydrant) - provides message disposition status, including message generation, message reception, message delivery, and engagement tracking

*   [exim_logger](/momentum/4/modules/exim-logger) - supports logging in the same style as the Open Source MTA Exim (http://www.exim.org)

*   [fbl](/momentum/4/modules/fbl) - records all abuse messages from feedback loop services offered by many ISPs

*   [http_logger](/momentum/4/modules/http-logger) - logs HTTP requests and responses made by the httpsrv module

*   [ilf_logger](/momentum/4/modules/ilf-logger) - provides an easy way to comply with the usage reporting requirements contained in the agreement with Message Systems

*   [postfix_logger](/momentum/4/modules/postfix-logger) - supports logging in the same style as the Open Source MTA Postfix (http://www.postfix.org)

*   [sendmail_logger](/momentum/4/modules/sendmail-logger) - supports logging in the same style as the Open Source MTA Sendmail (http://www.sendmail.org)

Momentum can generate logs in two formats:

*   text - entries vary based on the type of log. For the log formats, see [*Log Formats*](/momentum/4/4-log-formats) .

*   [jlog](/momentum/4/modules/jlog) - binary, consumable logs, intended to be consumed by an application. These logs will continue to be saved until a consumer reads them.