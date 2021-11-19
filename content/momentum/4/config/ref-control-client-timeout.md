---
lastUpdated: "03/26/2020"
title: "control_client_timeout"
description: "control client timeout network timeout for Momentum control client connections Control Client Timeout 60 Specifies the timeout in seconds that will be used for control client connections The eccmgrio wrapper used in clustered configurations is one example of a control client connection The default value is 60 control client timeout..."
---

<a name="conf.ref.control_client_timeout"></a> 
## Name

control_client_timeout — network timeout for Momentum control client connections

## Synopsis

`Control_Client_Timeout = 60`

<a name="idp23981248"></a> 
## Description

Specifies the timeout in seconds that will be used for control client connections. The `eccmgrio://` wrapper used in clustered configurations is one example of a control client connection. The default value is `60`.

<a name="idp23984128"></a> 
## Scope

control_client_timeout is valid in the global scope.