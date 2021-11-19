---
lastUpdated: "03/26/2020"
title: "ec_bounce_classify"
description: "ec bounce classify perform bounce classification on the message code classification orig rcpt ec bounce classify ec bounce classify allows you to perform bounce classification on a message from within Sieve It returns a string list which contains three members code The numeric bounce classification code See Section E 2..."
---

<a name="sieve.ref.ec_bounce_classify"></a> 
## Name

ec_bounce_classify — perform bounce classification on the message

## Synopsis

`($code, $classification, $orig_rcpt) = ec_bounce_classify`

<a name="idp29208720"></a> 
## Description

`ec_bounce_classify` allows you to perform bounce classification on a message from within Sieve++. It returns a string list which contains three members:

*   $code - The numeric bounce classification code. See [“Bounce Classification Codes”](/momentum/3/3-reference/3-reference-bounce-logger-classification-codes) for information about the built-in classification codes. To create your own classification codes see [“bounce_classifier – Bounce Classifier”](/momentum/3/3-reference/modules-bounce-classifier).

*   $classification - The text description for the bounce classification.

*   $orig_rcpt - The original recipient of the e-mail message which generated the bounce. If this value is not able to be determined, it will be a blank string.

<a name="example.ec_bounce_classify"></a> 


```
if envelope :all :regex "to" "^bounces-.+@mydomain.com$") {
  ($code, $classification, $orig_rcpt) = ec_bounce_classify;
  ec_log "Bounce ${classification} code ${code} for address ${orig_rcpt}";
  discard;
}
```

<a name="idp29217648"></a> 
### See Also

[Table 9.7, “logging options”](/momentum/3/3-reference/options-summary#logging-options-table)