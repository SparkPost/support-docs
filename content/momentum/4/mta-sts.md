---
lastUpdated: "06/01/2024"
title: "MTA-STS support"
description: "MTA-STS support"
---

MTA-STS (MTA Strict Transport Security) improves email security by requiring authentication
checks and encryption for delivering email.  RFC 8461 describes the use of MTA-STS for improving
SMTP security between MTAs. Momentum starts to support MTA-STS in 4.8.

If the config option [use_mta_sts](/momentum/4/config/mta-sts/use-mta-sts) for a domain is set to `true`,
 Momentum will attempt to discover the recipient domain's MTA-STS policy
 (via a DNS lookup to retrieve the MTA-STS policy ID and a HTTPS lookup to retrieve the
  MTA-STS policy), and if the [enable_mta_sts](/momentum/4/config/mta-sts/enable-mta-sts)
  for the binding/domain is `true`, Momentum will apply the MTA-STS policy for validating
  the connection to the remote site.
 If the recipient domain enforces MTA-STS, Momentum delivers email to the remote
 domain's MX if and only if the following conditions are satisfied:
 - remote site matches at least one of the MX patterns defined in the recipient domain's MTA-STS
   policy
 - connection to remote site can be encrypted (via the use of STARTTLS)
 - Momentum can authenticate both - the certificate chain presented by the server on the connection
   and the server name in the certificate

For verifying certificates, Momentum uses the configured CA for outbound email defined by
 [TLS_CA](/momentum/4/config/tls-ca).
 Momentum does not currently check for certificate revocation via the Online Certificate Status
Protocol (RFC 6960).

Momentum caches the MTA-STS policy for up to `max-age` specified in the policy, and attempts to
refresh the cached policy once every 24 hours.

Momentum does not currently implement SMTP TLS Reporting (RFC 8460).

The examples below illustrate a few cases describing how Momentum implements MTA-STS.
For all examples the recipient domain would be `domain.com`.

### Example 1: Recipient domain enforces MTA-STS and MX is allowed as per the MTA-STS policy

> **MTA-STS policy retrieved from `https://mta-sts.domain.com/.well-known/mta-sts.txt`**
```
version: STSv1
mode: enforce
mx: *.domain.com
max_age: 86400
```
> **DNS results for domain's MX lookup**
```
mx1.domain.com
```
> **Explanation**
> Momentum attempts to deliver email to `mx1.domain.com` as it matches at least one of the
MX patterns defined in the MTA-STS policy.

### Example 2: Recipient domain enforces MTA-STS and MX is not allowed as per the MTA-STS policy

> **MTA-STS policy retrieved from `https://mta-sts.domain.com/.well-known/mta-sts.txt`**
```
version: STSv1
mode: enforce
mx: *.domain.com
max_age: 86400
```
> **DNS results for domain's MX lookup**
```
mx1.other.com
```
> **Explanation**
> Momentum does not attempt to deliver email to `mx1.other.com` as it does not match any of the
MX patterns defined in the MTA-STS policy.

### Example 3: Recipient domain does not enforce MTA-STS and MX is not allowed as per the MTA-STS
policy

> **MTA-STS policy retrieved from `https://mta-sts.domain.com/.well-known/mta-sts.txt`**
```
version: STSv1
mode: testing
mx: *.domain.com
max_age: 86400
```
> **DNS results for domain's MX lookup**
```
mx1.other.com
```
> **Explanation**
> Momentum attempts to deliver email to `mx1.other.com` even though it does not match any of the
MX patterns defined in the MTA-STS policy since the policy mode is not `enforce`.


## Related Configuration Options
- [MTA-STS configuration Options](/momentum/4/config/mta-sts/index)


## Related [Debug_Flags](/momentum/4/config/ref-debug-flags)
- MTA_STS


## ec_console commands
- [mta_sts](/momentum/4/console-commands/mta-sts)
