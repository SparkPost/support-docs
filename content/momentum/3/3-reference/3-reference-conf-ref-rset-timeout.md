---
lastUpdated: "03/26/2020"
title: "rset_timeout"
description: "rset timeout set the timeout after RSET RSET Timeout 30 The amount of time in seconds to wait for a response to a RSET command RSET commands are used to reset the state of an SMTP session in which a transaction has only partially succeeded It allows subsequent messages to..."
---

<a name="conf.ref.rset_timeout"></a> 
## Name

rset_timeout — set the timeout after RSET

## Synopsis

`RSET_Timeout = 30`

<a name="idp11544832"></a> 
## Description

The amount of time in seconds to wait for a response to a `RSET` command. `RSET` commands are used to reset the state of an SMTP session in which a transaction has only partially succeeded. It allows subsequent messages to be delivered down a single SMTP session immediately following a transient or permanent failure response from the remote server before the complete and successful delivery of the prior message. The default value for this option is `30`.

<a name="idp11548192"></a> 
## Scope

rset_timeout is valid in the binding, binding_group, domain and global scopes.