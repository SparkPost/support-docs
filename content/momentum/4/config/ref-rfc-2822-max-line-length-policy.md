---
lastUpdated: "03/26/2020"
title: "rfc2822_max_line_length_policy"
description: "rfc 2822 max line length policy determine how non RFC compliant line lengths are handled rfc 2822 max line length policy none This option defines how messages with non RFC compliant line lengths are handled When set to none messages are processed as usual When set to fix Momentum will..."
---

<a name="conf.ref.rfc2822_max_line_length_policy"></a> 
## Name

rfc2822_max_line_length_policy — determine how non-RFC-compliant line lengths are handled

## Synopsis

`rfc2822_max_line_length_policy = "none"`

<a name="idp26153728"></a> 
## Description

This option defines how messages with non-RFC-compliant line lengths are handled. When set to `none`, messages are processed as usual. When set to `fix`, Momentum will attempt to fix the body of the message. When set to `reject`, messages with non-RFC-compliant line lengths are rejected.

When `rfc2822_max_line_length_policy` is set to a value other than `none`, it is recommended that `rfc2822_max_line_length` be set to a *numeric* value greater than the RFC guideline. For example, `rfc2822_max_line_length = 2048`.

The default value for this option is `none`.

<a name="idp26160832"></a> 
## Scope

`rfc2822_max_line_length_policy` is valid in the global, pathway, and pathway_group scopes.

<a name="idp26163136"></a> 
## See Also

[rfc2822_max_line_length](/momentum/4/config/ref-rfc-2822-max-line-length)