---
lastUpdated: "03/26/2020"
title: "MM7 Log Inband Bounce Hook"
description: "An MM 7 MT message submitted by Mobile Momentum is treated as an inband message When such a submission permanently fails it will be logged to the bounce log as well as the main log using the hook implementation of the MM 7 log permfail hook mms log permfail This..."
---


## <a name="MM7LogInbandBounceHook.purpose"></a> Purpose

An MM7 MT message submitted by Mobile Momentum is treated as an inband message. When such a submission permanently fails it will be logged to the bounce log, as well as the main log using the hook implementation of the MM7 log permfail hook, `mms_log_permfail`.

This hook is triggered in the same way as the MM7 log permfail hook. The <StatusCode> from a remote response or hook return value indicates when an MM7 submission is considered permanently failed. The only differences between the M7 Log Inband Bounce Hook and the MM7 log permfail hook are as follows:

*   The log destination. A permanent failure is logged to the main log and a bounce to the bounce log.

*   The log format