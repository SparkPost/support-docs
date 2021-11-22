---
lastUpdated: "03/26/2020"
title: "ec_rfc2047_encode_addresses"
description: "ec rfc 2047 encode addresses create an RFC 2047 compliant address ec rfc 2047 encode addresses addresses ec rfc 2047 encode addresses create an RFC 2047 compliant address and is intended for use in mail generation This function might be used in the following way If you are generating email..."
---

<a name="sieve.ref.ec_rfc2047_encode_addresses"></a> 
## Name

ec_rfc2047_encode_addresses — create an RFC2047-compliant address

## Synopsis

`ec_rfc2047_encode_addresses` { *`addresses`* }

<a name="idp30407376"></a> 
## Description

`ec_rfc2047_encode_addresses` create an RFC2047-compliant address and is intended for use in mail generation. This function might be used in the following way. If you are generating email (perhaps via generate_mail_raw) and want to add a To: header of the form: `To: "FirstName LastName" <user@example.com>` and FirstName and/or LastName may have non-ASCII characters, you can call ec_rfc2047_encode_addresses to correctly escape them, per RFC2047, so that they will be understood by MIME compliant software; you would pass the right hand side of the above to the action and it will parse out the address information and correctly compose it for you and return the result.

<a name="example.ec_rfc2047_encode_addresses"></a> 


$to = "*`FirstName LastName`*          ";
$encoded = ec_rfc2047_encode_addresses $to;
...

You might use this function in one of the custom bounce generation hooks, or at any point after data (when you have a message).