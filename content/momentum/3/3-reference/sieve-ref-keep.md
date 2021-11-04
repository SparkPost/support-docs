---
lastUpdated: "03/26/2020"
title: "keep"
description: "keep ec keep keep the current message stop processing further rules keep ec keep reason The keep and ec keep actions are used to explicitly indicate that the mail should be kept Momentum will continue to deliver it to its final destination This is a terminal action no further Sieve..."
---

<a name="sieve.ref.keep"></a> 
## Name

keep, ec_keep — keep the current message; stop processing further rules

## Synopsis

`keep`

`ec_keep` [ *`reason`* ]

<a name="idp31027632"></a> 
## Description

The `keep` and `ec_keep` actions are used to explicitly indicate that the mail should be kept; Momentum will continue to deliver it to its final destination.

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

In the following script, any mail from the good-guy.com domain is kept, all other mail is thrown out.

<a name="example.keep"></a> 


```
if envelope :domain :is "from" "good-guy.com" {
  keep;
} else {
  discard;
}
```

For an overview of Sieve actions see [“Actions”](/momentum/3/3-reference/sieve-syntax-basic#sieve.syntax.basic.actions).