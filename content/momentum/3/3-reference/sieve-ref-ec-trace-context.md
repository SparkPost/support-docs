---
lastUpdated: "03/26/2020"
title: "ec_trace_context"
description: "ec trace context add X Trace Context header to the current message ec trace context The ec trace context action allows debugging information to be added to the header of the current email in transit ec trace will place a complete copy of the message and connection contexts in a..."
---

<a name="sieve.ref.ec_trace_context"></a> 
## Name

ec_trace_context — add X-Trace-Context header to the current message

## Synopsis

`ec_trace_context`

<a name="idp30711920"></a> 
## Description

The ec_trace_context action allows debugging information to be added to the header of the current email "in-transit". ec_trace will place a complete copy of the message and connection contexts in a new "X-Trace-Context" header of the email.