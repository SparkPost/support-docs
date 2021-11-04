---
lastUpdated: "03/26/2020"
title: "msys.counter.open"
description: "msys counter open Create a counter object msys counter open counter path semantics For performance it is always recommended that counter handles be used rather than strings Momentum counters are generic counters that may be associated with a name in the counter namespace This namespace may be exported to other..."
---

<a name="lua.ref.msys.counter.open"></a> 
## Name

msys.counter.open — Create a counter object

<a name="idp26406864"></a> 
## Synopsis

`msys.counter.open(counter_path, semantics);`

```
counter_path: string
semantics: number, optional
```
<a name="idp26409600"></a> 
## Description

For performance it is always recommended that counter handles be used rather than strings.

Momentum counters are generic counters that may be associated with a name in the counter namespace. This namespace may be exported to other facilities for visualization, analysis and more. The namespace hierarchy is defined as follows.

*   `/` reserved for Message Systems use.

*   `/sieve` reserved for Sieve counters.

*   `/vendor/<name>` reserved for vendors. For example, vendor `Foo` may reserve `/vendor/foo`.

*   `/site/<name>` reserved for clients. For example, client `Joe` may use `/site/joe`.

Sieve counters are integrated into this system. A Sieve counter is an alias to `/sieve/type/[phase/]name` where "type" may have the values 5xx, 4xx or informational. The phase field is optional and represents the SMTP phase the counter is associated with. The name field is the name of the Sieve counter. For example, the Sieve counter `spool_phase1:ec_reject spool (5xx)` is an alias to `/sieve/5xx/spool_phase1/ec_reject spool`.

Counters may be opened with either `msys.counter.STRICT` or `msys.counter.RELAXED` semantics. If a counter value is updated mostly in a single thread on one processor then the STRICT semantics are recommended. Also, for policy-level logic, STRICT semantics are recommended as the counters may later be augmented to support atomic fetch and phi operations. If the counter is often updated across different threads or processors then RELAXED semantics are recommended. STRICT semantics provide almost perfect read scalability and RELAXED semantics provide almost perfect update scalability.

For a code example see [“msys.counter.read example”](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-read#lua.ref.msys.counter.read.example).

Enable this function with the statement `require('msys.counter');`.

<a name="idp26425680"></a> 
## See Also

[msys.counter.reset](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-reset), [msys.counter.add](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-add), [msys.counter.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-inc), [msys.counter.unlink](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-unlink), [counter](/momentum/3/3-reference/3-reference-console-commands-counter)