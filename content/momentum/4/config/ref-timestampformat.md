---
lastUpdated: "03/26/2020"
title: "timestampformat"
description: "timestampformat set the timestamp format used when logging to stderr timestampformat a d b Y H M S Sets the timestamp format used by Momentum when logging to stderr This output is usually not seen unless you invoke ecelerity using the d option The default value is shown above timestampformat..."
---

<a name="conf.ref.timestampformat"></a> 
## Name

timestampformat — set the timestamp format used when logging to stderr

## Synopsis

`timestampformat = "[%a %d %b %Y %H:%M:%S] "`

<a name="idp26782704"></a> 
## Description

Sets the timestamp format used by Momentum when logging to `stderr`. This output is usually not seen unless you invoke **ecelerity** using the `-d` option. The default value is shown above.

> **Note**
> When [log_hires_timestamp](/momentum/4/config/ref-log-hires-timestamp) is enabled (Momentum 5.3 and later), every `%S` or `%T` conversion in the configured format is automatically followed by a `.NNNNNN` six-digit microsecond fraction, so the default value renders as `[Mon 20 May 2026 14:32:17.482915] `.

<a name="idp26785984"></a> 
## Scope

`timestampformat` is valid in the global scope.
