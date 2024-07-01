---
lastUpdated: "06/01/2024"
title: "DANE support"
description: "DANE support TLSA DNSSEC"
---

The dane module handles DANE related DNS lookups and outbound STARTTLS enforcement and
 verifications.

DANE (DNS-Based Authentication of Named Entities) is a standard for improving transport security.
 [RFC 7672](https://datatracker.ietf.org/doc/html/rfc7672) describes the use of DANE for improving
 SMTP security between MTAs.

Momentum has supported STARTTLS for a long time. The use of STARTTLS for establishing channel
 security (encrypting the channel) can be achieved via the use of [tls](/momentum/4/config/ref-tls),
 [tls_verify](/momentum/4/config/tls-verify) configuration options.

DANE for SMTP security allows the remote side to enforce the use of STARTTLS whenever clients like
 Momentum connect to the site to transfer email. RFC 7672 describes various methods through which
 remote sites could advertise the availability of STARTTLS with them, and whether they require
 the connecting clients must always use STARTTLS when communicating with them.
 DANE requires that the DNS resolver support DNSSEC, a secure way of looking up DNS records.
 Google DNS (8.8.8.8) is an example of a DNS lookup service that supports DNSSEC.

Momentum 4.8 and above supports the use of DANE for enforcing SMTP security.
 It is strictly required that Momentum is to be configured with a DNS resolver that supports DNSSEC.
 If the new [dane module](/momentum/4/modules/dane) is enabled and the new directive
 [use_dane](/momentum/4/config/use-dane) for a domain is set to `true`,
 Momentum will lookup the remote site's STARTTLS preferences (through DNS resolution) and use that
 information to influence whether STARTTLS is established or not with the remote site prior to
 transferring email to it. If the remote site requires the use of STARTTLS, Momentum will only
 transfer email to the remote site if STARTTLS was successful in establishing an encrypted channel
 to the remote site. And, in accordance with the DANE standard, Momentum will attempt to verify
 the certificate presented by the remote host during STARTTLS based on the fingerprints it obtained
 through DNS TLSA records. If the remote site is strict about the use of STARTTLS,
 and Momentum could not perform STARTTLS successfully (for e.g, Momentum failed to verify that the
 fingerprint of the certificate presented by the remote site matches the fingerprint of the
 certificate specified in the TLSA DNS records), Momentum will not transfer email to the remote
 server. Email is held in the queue until Momentum can establish STARTTLS successfully in accordance
 with DANE protocol with the remote site.

See RFC 7672 for more descriptions on how certificate matching is specified via the use of
 TLSA DNS records. Please contact support if you have any further questions about DANE protocol.

DANE works independently from and take preference over the configuration controlled STARTTLS
 behavior.

When [MTA-STS](/momentum/4/mta-sts) is also enabled on a binding domain,
 MTA-STS policy will apply to MX selection for
 email delivery, but if secure TLSA record is available, only the DANE TLS validation will be
 applied to establish the STARTTLS connection. If DANE TLS failed, no fallback to other
 verification means (e.g. MTA-STS, or administrator configured STARTTLS behaviors defined by
 [tls](/momentum/4/config/ref-tls) or [tls_verify](/momentum/4/config/tls-verify)).

### <a name="modules.dane.configuration.example"></a> Configuration

You need to enable the dane module in the ecelerity configuration file to use the feature:

```
dane {}
```

### Note
With dane module enabled, you still need to have the following global/binding/domain scope
 configuration options to fully enable the feature application on email sending.

- [use_dane](/momentum/4/config/use-dane)
- [enable_dane](/momentum/4/config/enable-dane)

The following configuration is the minimum needed to enable DANE TLSA lookup and TLS verification
for all domains:

```
dane {}
use_dane = true
```

[domain](/momentum/4/console-commands/domain) command is updated to show the TLSA record if available,
 and a flag of `+dnssec` is added to each DNS record to indicate that they are DNSSEC
 validated. An example is shown here:

```
Domain 'comcast.net' has 8 MXs and a TTL of 58 seconds +dnssec
  [50 mx2c1.comcast.net. TTL:7198] +dnssec
TLSA '_25._tcp.mx2c1.comcast.net' has a TTL of 120 seconds +dnssec
  3 1 1 29b116c43593748345aa7f4c43717e792f94137a88b93d674de2ce1162f98625
  [96.102.18.146]:0 IPv4 (0.00ms con 0.00ms dlv)\
...
```


## Other DANE Related Configuration Options

- [tlsa_expire_interval](/momentum/4/config/tlsa-expire-interval)


## Related [Debug_Flags](/momentum/4/config/ref-debug-flags)
- DANE

