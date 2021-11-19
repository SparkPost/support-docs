---
lastUpdated: "06/09/2021"
title: "Are you sending emails as Encrypted messages?"
description: "SparkPost supports Transport Layer Security(TLS). TLS is a cryptographic protocol that provides security on the Internet and lets you encrypt emails during transit. All incoming API calls to SparkPost use HTTPS and are SSL/TLS encrypted. SparkPost also offers TLS support for incoming SMTP traffic if the user chooses to enable it."
---

SparkPost supports the use of Transport Layer Security (TLS). TLS and its predecessor, Secure Sockets Layer (SSL), are cryptographic protocols that provide security on the Internet and let you encrypt emails while they are in transit. All incoming API calls to SparkPost use HTTPS and are SSL/TLS encrypted. SparkPost also offers TLS for incoming SMTP traffic if the user chooses to enable it through the use of the "STARTTLS" SMTP extension. SparkPost strongly recommends using TLS with SMTP to protect your message content, recipient information and API keys in transmission. See more details about using encryption with SMTP <a href="https://developers.sparkpost.com/api/smtp/#header-smtp-security">here</a>.

SparkPost also supports the use of opportunistic TLS for outbound traffic - TLS will be used by default to deliver email over an encrypted channel unless the receiver of the email does not support TLS. Starting August 2020, SparkPost has enforced mandatory TLS use for delivering email to GMail and all Google Apps hosted domains.
