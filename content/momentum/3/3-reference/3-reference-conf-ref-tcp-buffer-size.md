---
lastUpdated: "03/26/2020"
title: "tcp_buffer_size"
description: "tcp buffer size maximum tcp buffer size for outbound connections tcp buffer size 32768 Momentum uses an auto scaling algorithm to ensure that the tcp buffer size is set optimally This option allows you to set an upper bound on the tcp buffer size selected The default for this option..."
---

<a name="conf.ref.tcp_buffer_size"></a> 
## Name

tcp_buffer_size — maximum tcp buffer size for outbound connections

## Synopsis

`tcp_buffer_size = 32768`

<a name="idp11947440"></a> 
## Description

Momentum uses an auto-scaling algorithm to ensure that the tcp buffer size is set optimally. This option allows you to set an upper bound on the tcp buffer size selected.

The default for this option is 32768 bytes.

### Warning

This is an advanced option. Setting the value too high can cause memory exhaustion. Thorough testing is recommended before deployment in a production environment.

<a name="idp11950640"></a> 
## Scope

tcp_buffer_size is valid in the global scope.

<a name="idp11952288"></a> 
## See Also

[Use_MMAP](/momentum/3/3-reference/3-reference-conf-ref-use-mmap)