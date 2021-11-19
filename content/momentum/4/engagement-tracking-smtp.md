---
lastUpdated: "03/26/2020"
title: "Tracking Engagement for SMTP"
description: "Configuration Change Engagement tracking for SMTP injections is available as of version 4 1 HF 4 Understanding how your messaging is or isn't performing is a critical factor in creating a successful campaign Just knowing that your messages are being delivered is not enough You need to know how your..."
---


**Configuration Change. ** Engagement tracking for SMTP injections is available as of version 4.1-HF4.

## <a name="engagement_tracking_smtp.intro"></a> Introduction

Understanding how your messaging is or isn't performing is a critical factor in creating a successful campaign. Just knowing that your messages are being delivered is not enough. You need to know how your customers interact with your message content. Are your customers opening your messages? Are they clicking the links you provide? Momentum provides real-time event tracking data, enabling you to track campaigns as they are being sent and to make modifications to improve customer engagement.

Engagement describes how a recipient interacts with your message. An engagement event occurs when the recipient opens an email or clicks a link within an email. Engagement tracking is globally enabled or disabled in Momentum's configuration. When a message is injected using SMTP, you can override the configuration for a specific message by specifying the attributes in an optional X-MSYS-API header or through policy by specifying the corresponding context variables. See [“Using the X-MSYS-API Header for Engagement Tracking”](/momentum/4/x-msys-api-header) and [“Using Policy for Engagement Tracking”](/momentum/4/engagement-tracking-smtp-policy), respectively.

### Note

To track engagement in SMTP messages, you must load the [smtpapi module](/momentum/4/modules/smtpapi) and configure the associated configuration options. See [“Configuration Options for Engagement Tracking”](/momentum/4/modules/smtpapi#modules.smtpapi.config.options). By default, open tracking and click tracking for SMTP injections are disabled in Momentum's configuration and the associated configuration options are set to default values.

For the order of precedence of the engagement tracking options, see [“Enabling Engagement Tracking”](/momentum/4/modules/smtpapi#modules.smtpapi.enable).

When engagement tracking is enabled, you can also specify engagement data for the message by including the X-MSYS-API header or by using the Lua policy context variables. This data is included in the tracked URLs for each message. For open tracking, Momentum inserts an open-tracked image into the message. For click tracking, Momentum converts the target link into a click-tracked link. By default, metadata is included for open and click tracking, if specified.

### Note

If you want to exclude metadata from click tracking, change the configuration option in the engagement_tracker module. See [“engagement_tracker – HTTP Engagement Tracking”](/momentum/4/modules/engage-tracker).