---
lastUpdated: "03/26/2020"
title: "tls_macros – TLS-related Logging"
description: "The tls macros module provides several macros supporting custom logging of TLS related data Configuration Change Support for GNUTLS is available as of version 4 1 for SMTP reception and SMTP deliveries only The tls macros module must be loaded in a configuration file as follows Table 71 2 TLS..."
---

The tls_macros module provides several macros supporting custom logging of TLS-related data.

**Configuration Change. ** Support for GNUTLS is available as of version 4.1 for SMTP reception and SMTP deliveries only.

### <a name="tls_macros.configuration"></a> Configuration

The tls_macros module must be loaded in a configuration file, as follows:

`tls_macros {}`
### <a name="tls_macros.macros"></a> TLS Logging Macros

[Table 71.2, “TLS Logging Macros”](/momentum/4/4-tls-macros#tls-macros-table) lists the TLS logging macros.

<a name="tls-macros-table"></a> 


| Macro | Description | Examples |
| --- | --- | --- |
| outbound_tls:outbound_tls | Whether TLS was used or not | 

*   SMTP ("SMTP" = no TLS)

*   TLS

*   unknown

 |
| outbound_tls:outbound_tls_type | TLS type of connection | 

When TLS is being used, this matches the value of the TLS configuration variable.

*   no ("no" = no TLS)

*   ifavailable

*   required

 |
| outbound_tls:local_ip | IP address to which the message was sent | 1.2.3.4 |
| outbound_tls:outbound_tls_cipher | Cipher suite for TLS session | 

Currently, the cipher suite names are specific to the TLS library used and are different between OpenSSL and GNUTLS.

*   For OpenSSL: ECDHE_RSA_AES_128_GCM_SHA256

*   For GNUTLS: AES256-GCM-SHA384

 |
| outbound_tls:outbound_tls_cipher_algbits | 

*   For OpenSSL: outbound_tls_cipher_algbits returns the bits processed by chosen algorithm.

*   For GNUTLS: outbound_tls_cipher_algbits returns the key size.

 |   |
| outbound_tls:outbound_tls_cipher_usebits | 

*   For OpenSSL: outbound_tls_cipher_usebits returns the secret bits used by chosen cipher.

*   For GNUTLS: outbound_tls_cipher_usebits returns the key size.

 |   |
| outbound_tls:outbound_tls_protocol | TLS/SSL protocol version string | 

*   For OpenSSL: TLSv1.2

*   For GNUTLS: TLS1.2

 |
| outbound_tls:outbound_tls_verified | Whether the certificate passed verification (including subject verification) | 

*   verified

*   unverified

 |
| outbound_tls:outbound_tls_issuer | Issuer from TLS certificate | ca.test.messagesystems.com |
| outbound_tls:outbound_tls_subject | Subject from TLS certificate | server.ectest.examplecompany.com |

The following is an example custom_logger module configuration using the TLS logging macros.

<a name="example.custom_logger.tls"></a> 


```
custom_logger custom_logger1 {
   log_receptions = "on"
   log_deliveries = "on"
   log_transient_failures = "on"
   log_permanent_failures = "on"

   # Use of namespace is critical for the macros to work!
   namespace = "custom_logger,sieve,outbound_tls"

   mainlog = "/tmp/ecelerity.5764/perl-tests_tls_tls_macros.t/customlog.cl"

   reception_format = "%t{%m:%d:%H:%M:%S}@%i@%BI@%CI@R@%r@%R@%m@%M@%H@%B@%p@%g@%b »
   @%r@%R%local_ip@%outbound_tls@%outbound_tls_type@%outbound_tls_cipher »
   @%outbound_tls_cipher_algbits@%outbound_tls_cipher_usebits@%outbound_tls_protocol »
   @%outbound_tls_verified@%outbound_tls_issuer@%outbound_tls_subject"

   delivery_format = "%t{%m:%d:%H:%M:%S}@%i@%BI@%CI@D@%d@%B@%g@%b@%N@%T@%H% »
   @%r@%R%local_ip@%outbound_tls@%outbound_tls_type@%outbound_tls_cipher »
   @%outbound_tls_cipher_algbits@%outbound_tls_cipher_usebits@%outbound_tls_protocol »
   @%outbound_tls_verified@%outbound_tls_issuer@%outbound_tls_subject"

   transient_failure_format = "%t{%m:%d:%H:%M:%S}@%i@%BI@%CI@T@%d@0@%g@%b@%S@%N@%T@%H@%n »
   @%r@%R%local_ip@%outbound_tls@%outbound_tls_type@%outbound_tls_cipher »
   @%outbound_tls_cipher_algbits@%outbound_tls_cipher_usebits@%outbound_tls_protocol »
   @%outbound_tls_verified@%outbound_tls_issuer@%outbound_tls_subject"

   permanent_failure_format = "%t{%m:%d:%H:%M:%S}@%i@%BI@%CI@P@%d@0@%g@%b@%S@%N@%T@%H@%n »
   @r@%R%local_ip@%outbound_tls@%outbound_tls_type@%outbound_tls_cipher »
   @%outbound_tls_cipher_algbits@%outbound_tls_cipher_usebits@%outbound_tls_protocol »
   @%outbound_tls_verified@%outbound_tls_issuer@%outbound_tls_subject"
}
```

For more information on the custom_logger, see [“custom_logger – User-defined Logging”](/momentum/4/modules/custom-logger).