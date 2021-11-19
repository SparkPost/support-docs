---
lastUpdated: "03/26/2020"
title: "signing_stats"
description: "signing stats show DK DKIM signing stats signing stats This command shows DKIM and Domainkeys signing statistics since startup or the last reset of statistics Global and Per Binding statistics are persistent across Momentum shutdown and startup Per Domain and Per Binding Per Domain statistics are not persistent Global The..."
---

<a name="console_commands.signing_stats"></a> 
## Name

signing_stats — show DK/DKIM signing stats

## Synopsis

`signing_stats`

<a name="idp14106896"></a> 
## Description

This command shows DKIM and Domainkeys signing statistics since startup or the last reset of statistics. Global and Per Binding statistics are persistent across Momentum shutdown and startup. Per Domain and Per Binding-Per Domain statistics are not persistent.

```
10:47:35 /tmp/2025> signing_stats
Signing Statistics

Global
        DomainKeys
                AccumulatedSigningTime    0.0494
                TotalMessagesSigned            1
                FailedSigningAttempts          0
                TotalMessagesProcessed         1
        DKIM
                AccumulatedSigningTime    0.0187
                TotalMessagesSigned            1
                FailedSigningAttempts          0
                TotalMessagesProcessed         1
Per Domain
        DomainName  omniti.com
        DomainKeys
                AccumulatedSigningTime    0.0494
                TotalMessagesSigned            1
                FailedSigningAttempts          0
                TotalMessagesProcessed         1
        DKIM
                AccumulatedSigningTime    0.0187
                TotalMessagesSigned            1
                FailedSigningAttempts          0
                TotalMessagesProcessed         1
Per Binding
        binding_name example
        DomainKeys
                AccumulatedSigningTime    0.0494
                TotalMessagesSigned            1
                FailedSigningAttempts          0
                TotalMessagesProcessed         1
        DKIM
                AccumulatedSigningTime    0.0187
                TotalMessagesSigned            1
                FailedSigningAttempts          0
                TotalMessagesProcessed         1
        Per Binding Per Domain
        DomainName omniti.com
        DomainKeys
                AccumulatedSigningTime    0.0494
                TotalMessagesSigned            1
                FailedSigningAttempts          0
                TotalMessagesProcessed         1
        DKIM
                AccumulatedSigningTime    0.0187
                TotalMessagesSigned            1
                FailedSigningAttempts          0
                TotalMessagesProcessed         1
```

<dl class="variablelist">

<dt>Global</dt>

<dd>

The statistics in this section are accumulated across all domains and bindings.

</dd>

<dt>Per Domain</dt>

<dd>

The statistics in this section are grouped by domain and identified by the domain name. The statistics under each domain name are accumulated for that domain only.

</dd>

<dt>Per Binding</dt>

<dd>

The statistics in this section are grouped by binding, headed by the binding name, and by domain within the binding. The statistics under each binding name are accumulated for all domains within that binding. Statistics headed by domain name are accumulated for that domain within the binding only.

</dd>

<dt>DomainKeys</dt>

<dd>

This term labels signing statistics accumulated by Domainkeys signing.

</dd>

<dt>DKIM</dt>

<dd>

This term labels statistics accumulated by DKIM signing.

</dd>

<dt>AccumulatedSigningTime</dt>

<dd>

The total amount of time (in seconds) spent processing messages.

</dd>

<dt>TotalMessagesSigned</dt>

<dd>

The total number of Messages successfully signed.

</dd>

<dt>FailedSigningAttempts</dt>

<dd>

The total number of failed attempts at signing.

</dd>

<dt>TotalMessagesProcessed</dt>

<dd>

The total number of messages processed including messages that the signing algorithm determines are not to be signed.

</dd>

</dl>

<a name="idp11366448"></a> 
## See Also

[“domainkeys – Yahoo! DomainKeys”](/momentum/4/modules/domainkeys), [“opendkim – Open Source DKIM”](/momentum/4/modules/opendkim), and [signing_stats reset](/momentum/4/console-commands/signing-stats-reset)