---
lastUpdated: "05/19/2026"
title: "Before You Begin"
description: "This chapter describes issues that need to be considered or addressed prior to preparing for the installation on Analytics and or Platform MTA nodes For each of your servers that run the MTA you will need a license file in this directory opt msys ecelerity etc You will need to..."
---


This chapter describes issues that need to be considered or addressed prior to preparing for the installation on Analytics and/or Platform/MTA nodes.

## <a name="byb.msg.gen.license"></a> Momentum License

For each of your servers that run the MTA you will need a `license` file in this directory: `/opt/msys/ecelerity/etc/`

You will need to provide Message Systems with a MAC address for each MTA node in your deployment. Be sure that your nodes have access to the Internet over port 80 so that you can download the license.

### Note

Starting with Momentum 5.3.0, licenses issued by Message Systems are signed with ECDSA P-256 / SHA-256 ([FIPS 186-4](https://csrc.nist.gov/pubs/fips/186-4/final)). A re-issued license in this format is required only on deployments that **enforce** FIPS 140-3 at the crypto-library level — for example, when running against SafeLogic CryptoComply (a FIPS 140-3 validated drop-in for OpenSSL), or against OpenSSL 3.x configured with `default_properties = fips=yes`. In those configurations the DSA-2048 / SHA-1 verify path is rejected as non-compliant and the MTA reports the license as invalid.

Existing DSA-2048 / SHA-1 licenses continue to validate on all other deployments, including OpenSSL 3.x with the FIPS provider merely loaded (without `default_properties = fips=yes`).

### Note

The [Momentum REST Injector](/momentum/3/3-rest) introduced in Momentum 3.14 continues to work in Momentum 4 and does not require a license. You can still use this injector to inject messages with simple template substitutions, but it has a very limited feature set compared to the Momentum 4 REST APIs.
