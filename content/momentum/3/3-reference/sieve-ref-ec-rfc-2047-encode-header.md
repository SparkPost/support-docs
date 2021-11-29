---
lastUpdated: "03/26/2020"
title: "ec_rfc2047_encode_header"
description: "ec rfc 2047 encode header encode a header to be RFC 2047 compliant ec rfc 2047 encode header raw ec rfc 2047 encode header takes a string and encodes the string following according to RFC 2047 using UTF 8 for the character encoding It will avoid encoding the string if..."
---

<a name="sieve.ref.ec_rfc2047_encode_header"></a> 
## Name

ec_rfc2047_encode_header — encode a header to be RFC2047 compliant

## Synopsis

`ec_rfc2047_encode_header $raw`

<a name="idp30423840"></a> 
## Description

`ec_rfc2047_encode_header` takes a string and encodes the string following according to RFC2047, using UTF-8 for the character encoding. It will avoid encoding the string if possible. The primary use for this action is when building up headers for use in email.

```
($subject) = ec_header_get "Subject";
$subject = ec_rfc2047_encode_header "Re: ${subject}";

generate_mail_raw $from $to text:
From: ${from}
To: ${to}
Subject: ${subject}

hello
.
;
```