---
title: "Are you sending emails as Encrypted messages?"
description: "Spark Post supports Transport Layer Security TLS TLS and its predecessor Secure Sockets Layer SSL are cryptographic protocols that provide security on the Internet and let you encrypt emails All incoming API calls use HTTPS and are SSL TLS encrypted Incoming SMTP offers TLS if the user choses to enable..."
---

SparkPost supports Transport Layer Security (TLS). TLS and its predecessor, Secure Sockets Layer (SSL), are cryptographic protocols that provide security on the Internet and let you encrypt emails.  All incoming API calls use HTTPS and are SSL/TLS encrypted. Incoming SMTP offers TLS, if the user choses to enable *Encryption*: STARTTLS.  We also do opportunistic TLS for outbound traffic, which will depend on whether the receiving SMTP servers supports TLS.
