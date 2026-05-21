---
lastUpdated: "07/01/2026"
title: "LogHiresTimestamp"
description: "LogHiresTimestamp enables microsecond resolution for log timestamps written by Momentum across the mainlog, bouncelog, rejectlog, paniclog, custom logs, and other logging modules"
---

<a name="conf.ref.log_hires_timestamp"></a>
## Name

LogHiresTimestamp — enable microsecond resolution for log timestamps

## Synopsis

`LogHiresTimestamp = true`

<a name="idp.log_hires_timestamp"></a>
## Description

When `LogHiresTimestamp` is set to `true`, Momentum writes log timestamps with microsecond (1 µs) resolution instead of the default 1-second resolution.

### Rationale

Several Momentum log files are produced concurrently by independent loggers (for example `mainlog`, `bouncelog`, `rejectlog`, and `paniclog`). With the default 1-second resolution, many events that happen within the same second share an identical timestamp, and the relative ordering of events between files becomes ambiguous when the logs are read together — for instance when merging them in a log viewer such as [lnav](https://lnav.org/) or feeding them into a SIEM or analytics pipeline. Microsecond timestamps preserve the true ordering across files, which is essential for diagnostics, latency analysis, and other investigations.

### Scope of the option

The setting is global and affects every log file whose timestamps are produced by the core logging code, including:

*   `mainlog` (reception, delivery, transient failure, permanent failure, heartbeat, accounting and import records — see [mainlog](/momentum/4/log-formats-mainlog))

*   `bouncelog` (bounce and heartbeat records — see [bouncelog](/momentum/4/log-formats-bouncelog))

*   `rejectlog` (rejection records — see [rejectlog](/momentum/4/log-formats-rejectlog))

*   `paniclog` (panic and HTTP request records — see [paniclog](/momentum/4/log-formats-paniclog))

*   Custom logs produced by [custom_logger](/momentum/4/modules/custom-logger) and [custom_bounce_logger](/momentum/4/modules/custom-bounce-logger)

*   Chunk logs produced by [chunk_logger](/momentum/4/modules/chunk-logger)

*   Message generation logs produced by the `msg_gen` module

*   Critical messages written to `stderr` by the [ec_logger](/momentum/4/modules/ec-logger), formatted with [timestampformat](/momentum/4/config/ref-timestampformat)

The effect on each timestamp depends on how it is rendered:

*   **Numeric (epoch) timestamps.** A timestamp emitted as a decimal Unix epoch value (for example, the first field of every `mainlog`, `bouncelog`, `rejectlog`, or `paniclog` line) changes from a 10-digit seconds-since-epoch value (`1064868656`) to a 16-digit microseconds-since-epoch value (`1064868656123456`). No separator is inserted, so the field remains a single integer that downstream parsers can keep treating as a number.

*   **Formatted (`strftime`) timestamps.** Timestamps rendered through a `strftime(3)` format string — such as the `timestamp_format` of [chunk_logger](/momentum/4/modules/chunk-logger), the `%t{...}` macro of [custom_logger](/momentum/4/modules/custom-logger), or [timestampformat](/momentum/4/config/ref-timestampformat) — keep the configured format, but every `%S` or `%T` conversion is followed by a `.NNNNNN` six-digit microsecond fraction. For example, the default `[%a %d %b %Y %H:%M:%S] ` becomes `[%a %d %b %Y %H:%M:%S.NNNNNN] ` and renders as `[Mon 20 May 2026 14:32:17.482915] `.

When `LogHiresTimestamp` is `false` (the default), timestamps are emitted exactly as in previous releases of Momentum, with 1-second resolution and no `.NNNNNN` fraction.

## Compatibility

Tools that parse the numeric epoch field must accept either 10 or 16 decimal digits when this option is enabled. The Perl modules under `Ecelerity::Log` shipped with Momentum (`Ecelerity::Log::Auto`, `Ecelerity::Log::Bounce`, `Ecelerity::Log::Reject`, `Ecelerity::Log::Statp`) recognize both forms; when the source field is in microseconds, they expose it on the parsed record as `epoch_us` and keep populating `epoch` with the integer seconds, so existing consumers continue to work unchanged.

<a name="idp.log_hires_timestamp.online"></a>
## Online Modification

`LogHiresTimestamp` is not online-tunable. Changing the option requires a Momentum restart.

<a name="idp.log_hires_timestamp.scope"></a>
## Scope

`LogHiresTimestamp` is valid in the global scope.

## See Also

[timestampformat](/momentum/4/config/ref-timestampformat), [mainlog](/momentum/4/log-formats-mainlog), [bouncelog](/momentum/4/log-formats-bouncelog), [rejectlog](/momentum/4/log-formats-rejectlog), [paniclog](/momentum/4/log-formats-paniclog)
