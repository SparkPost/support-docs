---
lastUpdated: "02/05/2026"
title: "Managed HTTPS for Tracking Domains"
description: "SparkPost can automatically issue and manage TLS certificates for your tracking domains using Let's Encrypt. This is the recommended method for enabling HTTPS engagement tracking."
---

## Overview

SparkPost supports HTTPS engagement tracking through managed TLS certificates. With this option, SparkPost automatically issues and renews certificates for your tracking domains using [Let's Encrypt](https://letsencrypt.org/), a free certificate authority trusted by all major browsers.

This is the recommended method for most senders. It requires no certificate management and works with standard CNAME delegation to SparkPost's tracking endpoints.

**Managed HTTPS is enabled by default for all new tracking domains** created after December, 2025. Existing tracking domains can opt in by updating their CNAME record and enabling managed HTTPS in the SparkPost UI.

> Alternative: To configure HTTPS using a CDN or reverse proxy with your own certificates, see [this article](./enabling-https-engagement-tracking-on-sparkpost) or [this guide](./using-proxy-https-tracking-domain).

## How It Works

When managed HTTPS is enabled for a tracking domain:

1. SparkPost validates your domain ownership through the existing CNAME record
2. SparkPost requests a certificate from Let's Encrypt
3. Let's Encrypt performs HTTP-01 validation to confirm SparkPost controls your tracking domain
4. SparkPost installs the certificate and begins serving HTTPS traffic
5. The certificate automatically renews before expiration

Certificate issuance typically completes within 15 minutes. SparkPost handles all certificate management, including renewals.

## When to Use Managed HTTPS

Managed HTTPS is suitable for most use cases. Consider a CDN or reverse proxy instead if you:

- Need to use a specific Certificate Authority
- Require Extended Validation (EV) certificates
- Have compliance requirements for certificate handling
- Already have certificate management infrastructure in place

## Tracking Endpoints

SparkPost provides two types of tracking endpoints:

| Endpoint Type | US Endpoint | EU Endpoint | Managed HTTPS Support |
|---------------|-------------|-------------|----------------------|
| Standard | `spgo.io` | `eu.spgo.io` | No |
| V2 (Recommended) | `v2.spgo.io` | `eu.v2.spgo.io` | Yes |

**To use managed HTTPS, your tracking domain must use a V2 endpoint.** New tracking domains created after December, 2025, automatically use V2 endpoints. Existing domains using standard endpoints need to update their CNAME record to the V2 endpoint before enabling managed HTTPS.

## Prerequisites

Before enabling managed HTTPS, ensure:

1. Your tracking domain is verified in SparkPost
2. A CNAME record points to a V2 tracking endpoint:
   - US: `v2.spgo.io`
   - EU: `eu.v2.spgo.io`
   - Enterprise: your account-specific V2 endpoint (contact your TAM)
3. DNS propagation has completed (typically 5-60 minutes)
4. If using CAA records, Let's Encrypt is permitted (see [CAA Configuration](#caa-configuration))

> **Important:** Managed HTTPS requires V2 endpoints. If your tracking domain currently uses a standard endpoint (`spgo.io` or `eu.spgo.io`), update your CNAME record to the V2 endpoint before proceeding.

## Enabling Managed HTTPS

### For New Tracking Domains

1. Create a tracking domain

   Navigate to [Domains > Create](https://app.sparkpost.com/domains/create) ([EU](https://app.eu.sparkpost.com/domains/create)) and select Tracking Domain. Enter your subdomain (e.g., `track.yourdomain.com`).
   In the **HTTPS Configuration** field, make sure the default option _SparkPost manages HTTPS_ is enabled.

   ![](media/managed-https-for-tracking-domains/domain_creation_https_configuration.png)

   Click on _Save and Continue_.

   Note: Tracking domains must be subdomains, not root domains. New tracking domains are automatically configured to use V2 endpoints and have managed HTTPS enabled by default.

2. Verify the domain

   Follow the instructions in the page to add a CNAME record in your DNS provider pointing to the engagement tracking service. Click on _Verify Domain_ after the DNS changes to proceed.

3. Check the certificate status

   Once the domain is verified successfully, go to the domain details page and check the HTTPS section, where the certificate status will be displayed along with the next renewal date.

   ![](media/managed-https-for-tracking-domains/domain_creation_https_configuration.png)

### Enabling on Existing Insecure Domain

If you currently use insecure tracking with a direct CNAME to SparkPost:

1. Navigate to the details page of your insecure domain. In the **HTTPS** section, you will see _HTTPS Disabled_ as the current status.

   ![](media/managed-https-for-tracking-domains/insecure_domain_enable.png)

   Under **Choose how to enable HTTPS**, make sure the default option _SparkPost manages TLS certificate_ is selected. Click on _Enable HTTPS_ to proceed.

2. Follow the wizard instructions to verify if the domain supports managed HTTPS.

   ![](media/managed-https-for-tracking-domains/insecure_domain_enable_modal_1.png)

> If this step fails, managed HTTPS is unavailable for your domain due to Let's Encrypt policies. See [this article](./enabling-https-engagement-tracking-on-sparkpost) or [this guide](./using-proxy-https-tracking-domain) to setup HTTPS using a CDN or proxy server.

3. Make the necessary DNS changes to verify the domain and click on _Confirm_.

   ![](media/managed-https-for-tracking-domains/insecure_domain_enable_modal_2.png)

   Once the domain is verified successfully, certificate provisioning will be handled in the background. Links in previously-sent emails continue to work, as SparkPost serves both HTTP and HTTPS traffic on both endpoint types.

### Migrating from CDN or Reverse Proxy

If your domain has been set up previously to use a CDN

Migration requires DNS changes that may affect links in previously-sent emails.

**Option 1: Keep your existing setup**

If your CDN or proxy is working correctly, you can continue using it. Managed HTTPS is optional.

**Option 2: Migrate to managed HTTPS**

For testing, set up a new tracking domain (e.g., `track2.example.com`) with managed HTTPS before migrating your production domain.

To migrate:

1. Update your CNAME to point to a V2 endpoint (`v2.spgo.io` or `eu.v2.spgo.io`)
2. Wait for DNS propagation
3. Enable managed HTTPS in SparkPost
4. Remove or deactivate your CDN/proxy configuration

Consider the timing:
- Links in emails sent through your CDN/proxy will continue to work only if that infrastructure remains active
- Plan the migration during low email volume to minimize impact
- Engagement tracking links typically have a short lifespan, so impact is usually limited

## TLS Certificate Status

Tracking domains can have the following HTTPS statuses:

| Status | Description |
|--------|-------------|
| Inactive | Managed HTTPS is not enabled |
| Pending | Certificate issuance in progress (typically 5-10 minutes) |
| Valid | Certificate is active |
| Expired | Certificate expired (renewal failed) |
| Failed | Certificate issuance failed |
| Unavailable | Domain is not eligible for managed certificates |

View certificate status and expiration date in your domain's details page.

[TODO: Add screenshot of certificate status display]

## Certificate Renewal

Let's Encrypt certificates are valid for 90 days and SparkPost will renew automatically days before expiration. Renewal happens in the background without service interruption. No action is required.

## Troubleshooting

### Certificate stuck in Pending status

If your certificate remains in Pending status for more than 30 minutes:

- Verify the CNAME record points to the correct SparkPost endpoint
- Confirm the tracking domain is verified
- Check for CAA records blocking Let's Encrypt
- Ensure DNS has fully propagated globally
- Contact support if the issue persists

### Certificate status shows Failed

Common causes:

1. **Domain verification failed** - Re-verify your tracking domain
2. **CNAME not found** - Check your DNS configuration
3. **CAA records blocking Let's Encrypt** - Update CAA records (see below)
4. **Domain not eligible** - Some domains cannot use Let's Encrypt due to policy restrictions

### Certificate status shows Unavailable

Some domains cannot use managed HTTPS due to Let's Encrypt policies. Use [CDN](./enabling-https-engagement-tracking-on-sparkpost) or [reverse proxy](./using-proxy-https-tracking-domain) instead.

### Links still use HTTP

If tracking links use HTTP instead of HTTPS:

1. Verify certificate status is "Valid"
2. Confirm the tracking domain is associated with your sending domain
3. Send a new test email (not a resend)

### Cannot enable managed HTTPS

If you cannot enable managed HTTPS for your tracking domain, verify that your CNAME record points to a V2 endpoint:

```bash
dig CNAME track.yourdomain.com
```

The response should show `v2.spgo.io` or `eu.v2.spgo.io`. If it shows `spgo.io` or `eu.spgo.io`, update your CNAME record to use the V2 endpoint.

## CAA Configuration

Certificate Authority Authorization (CAA) records control which CAs can issue certificates for your domain. If your domain uses CAA records, you must permit Let's Encrypt.

Add this CAA record at your organizational domain:

```
example.com.    CAA    0 issue "letsencrypt.org"
```

Or for wildcard subdomains:

```
example.com.    CAA    0 issuewild "letsencrypt.org"
```

Check for existing CAA records:

```bash
dig CAA example.com
```

## CNAME Delegation and Validation

When you create a CNAME record pointing to a SparkPost V2 endpoint:

- All HTTP and HTTPS traffic for your tracking domain routes to SparkPost
- Let's Encrypt validation requests are handled automatically
- CAA record checks follow the CNAME chain to your organizational domain
- No DNS credentials are required from you

Standard endpoints (`spgo.io` and `eu.spgo.io`) do not support managed certificates and cannot handle Let's Encrypt validation.

## Multiple Tracking Domains

You can enable managed HTTPS for multiple tracking domains. Each domain receives its own certificate. Certificates renew independently.

See [Custom Tracking Domains](./enabling-multiple-custom-tracking-domains) for information on setting up multiple domains.

## API Usage

Enable managed HTTPS via the [Tracking Domains API](https://developers.sparkpost.com/api/tracking-domains/):

```bash
PUT /api/v1/tracking-domains/track.example.com

{
  "secure": true
}
```

Check certificate status:

```bash
GET /api/v1/tracking-domains/track.example.com
```

The response includes certificate status and expiration date.

## Security

SparkPost generates certificate private keys securely within its infrastructure. Private keys are encrypted at rest using AES-256-GCM and never leave SparkPost systems.

Certificates are issued via Let's Encrypt's ACME protocol. The process uses public validation methods and does not require access to your DNS credentials.

All TLS certificates are logged in public Certificate Transparency logs, an industry-standard security practice that does not expose sensitive information about your emails.

## Comparison with Self-Managed Options

| Feature | Managed HTTPS | CDN | Reverse Proxy |
|---------|---------------|-----|---------------|
| Setup | Simple | Moderate | Complex |
| Certificate management | Automatic | Varies | Manual |
| Renewal | Automatic | Varies | Manual |
| Maintenance | None | Some | Ongoing |
| Certificate Authority | Let's Encrypt | Configurable | Configurable |
| Custom CA | No | Yes | Yes |

## Related Articles

- [Getting Started with Engagement Tracking](../getting-started/engagement-tracking)
- [Custom Tracking Domains](./enabling-multiple-custom-tracking-domains)
- [Enabling HTTPS with a CDN](./enabling-https-engagement-tracking-on-sparkpost)
- [Using a Reverse Proxy for HTTPS](./using-proxy-https-tracking-domain)
- [Tracking Domains API Reference](https://developers.sparkpost.com/api/tracking-domains/)
