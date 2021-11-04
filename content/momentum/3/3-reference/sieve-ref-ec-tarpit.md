---
lastUpdated: "03/26/2020"
title: "ec_tarpit"
description: "ec tarpit impose a time penalty ec tarpit seconds counter This instructs Momentum that the SMTP session should be put on hold for the specified number of seconds The optional counter string is used to count the number of hits for this particular action if omitted the script filename and..."
---

<a name="sieve.ref.ec_tarpit"></a> 
## Name

ec_tarpit — impose a time penalty

## Synopsis

`ec_tarpit` { *`seconds`* } [ *`counter`* ]

<a name="idp30610416"></a> 
## Description

This instructs Momentum that the SMTP session should be put on hold for the specified number of seconds.

The optional counter string is used to count the number of hits for this particular action; if omitted, the script filename and line number will be assumed. You can see the hit count via **ec_console** using the **sieve:*`sieve1`* stats**       command.