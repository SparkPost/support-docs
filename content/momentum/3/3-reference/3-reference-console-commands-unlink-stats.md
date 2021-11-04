---
lastUpdated: "03/26/2020"
title: "unlink stats"
description: "unlink stats show statistics of removing messages from the disk unlink stats This command shows statistics of unlinking messages on the disk..."
---

<a name="console_commands.unlink_stats"></a> 
## Name

unlink stats — show statistics of removing messages from the disk

## Synopsis

`unlink stats`

<a name="idp16550320"></a> 
## Description

This command shows statistics of unlinking messages on the disk.

```
10:47:35 /tmp/2025> unlink stats
                   Messages    Headers    Bodies
Submissions    :        6000      6000      6000
Attempts       :        6000      6000      6000
  Failures     :           0         0         0
  Successes    :        6000      6000      6000
  Success Rate :      100.00%   100.00%   100.00%
Current Backlog:      0
Batch Backlog  :      0
```