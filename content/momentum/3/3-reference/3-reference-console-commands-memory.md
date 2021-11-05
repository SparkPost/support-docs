---
lastUpdated: "03/26/2020"
title: "memory"
description: "memory report detailed memory usage memory memory type The memory command provides a detailed overview of the type count and size of the various memory objects that Momentum uses internally Sample output is displayed below The output of this command can be used to diagnose memory growth issues as well..."
---

<a name="console_commands.memory"></a> 
## Name

memory — report detailed memory usage

## Synopsis

`memory` [ *`memory_type`* ]

<a name="idp16068976"></a> 
## Description

The **memory** command provides a detailed overview of the type, count and size of the various memory objects that Momentum uses internally. Sample output is displayed below:

```
10:47:35 /tmp/2025> memory
                        memory   buf  active  peak    allocd    current
                        type     size objects objects objects   bytes
------------------------------ ------ ------- ------- ------- ---------
                         Event     36      15      16     101      4096
                      Skiplist     28      75      75     127      4096
                 domain_record     76       1       1      50      4096
                     mx_record     12       1       1     254      4096
                   host_record     44       1       1      84      4096
                 email_message    136       1       1      29      4096
                    RSplayTree     20       7       7     169      4096
                 cidrnode_ipv4     32       6       6     127      4096
                   time_series     24       1       1     169      4096
               skiplistnode(1)     28      53      56     127      4096
               skiplistnode(2)     36      12      15     101      4096
               skiplistnode(3)     44       5       8      84      4096
               skiplistnode(4)     52       2       2      72      4096
          binding_domain_stats    120       1       1      33      4096
                         int32      4      62      62     508      4096
                 ec_hash_table     24      25      25     169      4096
                ec_hash_bucket     16     889     889    1016     16384
                  message_list     20       0       1     169      4096
                      _dq_list      8       0       1     508      4096
                        ip_acl     44      14      14      84      4096
              accept_construct    132       5       5      29      4096
------------------------------ ------ ------- ------- ------- ---------
                                                                  98304

       memory                  current       peak      mmap
       type                    bytes         bytes     count/peak/current %
------------------------------ ----------- ----------- ---------------------
       buf_storage             16384       16384
       message_body            17          17
       sieve                   113         113
       string                  8802        8802
       snmp                    32768       32768
       ec_cache_key            42          42
       ec_interface            72          72
       ecdict                  53503       53503
       ec_fc_fifo              6576128     6576128
       ds_core:datasource      3276        3276
       statp:vsize             429         429
       scriptlet               14957       14957
       scriptlet:lua           221427      221427
------------------------------ ----------- ----------- ---------------------
       6927918

RSS:            8658726            8,658,726   1.66%
System RSS:   115417088          115,417,088  22.08%
```

The output of this command can be used to diagnose memory growth issues as well as to help determine whether custom modules are leaking memory. The output consists of three parts: memory usage of objects whose size is fixed, memory usage of objects whose size is not fixed and RSS (resident set size).

### Note

This feature is available starting from Momentum 3.0.17\. Output in XML format using the **xml memory**        command is available as of version 3.1.

The **memory** command can also be issued passing a memory type as an argument. Valid memory types are those listed under the "memory type" column. For example, to view the memory used by Sieve, issue the command, **`memory sieve`**       .

The column names used in the first part for fixed-size objects are:

<dl class="variablelist">

<dt>memory type</dt>

<dd>

The name of active objects. Any values shown in this column are valid memory types when the memory command is issued with a parameter.

</dd>

<dt>buf size</dt>

<dd>

The size of a memory type.

</dd>

<dt>active objects</dt>

<dd>

Number of active objects for a memory type.

</dd>

<dt>peak objects</dt>

<dd>

Peak number of active objects ever used for a memory type.

</dd>

<dt>allocd objects</dt>

<dd>

Number of objects pre-allocated for a memory type.

</dd>

<dt>current bytes</dt>

<dd>

Total memory allocated for a memory type.

</dd>

</dl>

Additional column names used for objects whose allocations are not of fixed size are:

<dl class="variablelist">

<dt>peak bytes</dt>

<dd>

The peak bytes ever allocated to a memory type.

</dd>

<dt>mmap count/peak/current %</dt>

<dd>

Percentage of memory allocations that were satisfied using mmap, when system allocators are in use.

</dd>

</dl>

The System RSS represents the current resident set size as seen by the underlying operating system. Note that Momentum tracks its own RSS which can grow and shrink based on usage. On most Unix systems, memory is appropriated by extending a programs heap space using the sbrk() call and as such will never decrease in size.

For more information about memory as it relates to the C API see [Memory Functions](/momentum/3/3-api/3-api-memory).