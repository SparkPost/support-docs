---
lastUpdated: "03/26/2020"
title: "ec_action"
description: "ec action set SMTP status code ec action smtp code reason counter This action will issue the provided SMTP code and reason to the remote MTA Multi line reasons may be provided each line will be prefixed with the SMTP code for you automatically The optional counter string is used..."
---

<a name="sieve.ref.ec_action"></a> 
## Name

ec_action — set SMTP status code

## Synopsis

`ec_action` { *`smtp-code`* } { *`reason`* } [ *`counter`* ]

<a name="idp29138368"></a> 
## Description

This action will issue the provided SMTP code and reason to the remote MTA. Multi-line reasons may be provided; each line will be prefixed with the SMTP code for you automatically.

The optional counter string is used to count the number of hits for this particular action; if omitted, the script filename and line number will be assumed. You can see the hit count via the web console or via **ec_console** using the **sieve stats**       command.

<a name="example.ec_action"></a> 


```
require "ec_action";
if envelope :domain :is "from" "bad-guy.com" {
  ec_action 550 "5.7.1 We don't want mail from %{spfv1:p}";
}
```

```
REMOTE > MAIL FROM:<assailant@bad-guy.com>
LOCAL > 550 5.7.1 We don't want mail from mta01-ft.bad-guy.com
```

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.