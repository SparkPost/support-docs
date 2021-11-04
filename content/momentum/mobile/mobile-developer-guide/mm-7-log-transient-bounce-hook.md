---
lastUpdated: "03/26/2020"
title: "MM7 Log Transient Bounce Hook"
description: "A temporarily failed MM 7 submission will be requeued and retried and is considered a transient failure Such a failure will be logged to the bounce log and the main log through the default hook implementation of the MM 7 log tempfail hook mms log tempfail This hook is triggered..."
---


## <a name="MM7LogTransientBounceHook.purpose"></a> Purpose

A temporarily failed MM7 submission will be requeued and retried and is considered a transient failure. Such a failure will be logged to the bounce log and the main log through the default hook implementation of the MM7 log tempfail hook, `mms_log_tempfail`. This hook is triggered in the same way as the MM7 log tempfail hook. The <StatusCode> from a remote response or hook return value indicates that a MM7 submission has been temporarily failed. The differences between the MM7 Log Transient Bounce Hook and the MM7 log tempfail hook are as follows: default implementation of these two hooks are:

*   the log destination; one logs to the main log, the other to the bounce log

*   the log format