---
lastUpdated: "03/26/2020"
title: "ec_interfaces"
description: "ec interfaces obtain a list of network interfaces ec interfaces This function returns a stringlist of all I Pv 4 addresses assigned to the local machine except for localhost 127 0 0 1 This feature is an extension to the Sieve system and can be made available by loading the..."
---

<a name="sieve.ref.ec_interfaces"></a> 
## Name

ec_interfaces — obtain a list of network interfaces

## Synopsis

`ec_interfaces`

<a name="idp29952304"></a> 
## Description

This function returns a stringlist of all IPv4 addresses assigned to the local machine except for localhost (127.0.0.1).

### Note

This feature is an extension to the Sieve system and can be made available by loading the mail_loop module. See [“mail_loop – Mail Loop Detection”](/momentum/3/3-reference/3-reference-modules-mail-loop) for more information.

This function can be useful for detecting spoofing attacks that use the local machine's IP address as the argument to EHLO (a common spamming mistake).

<a name="example.ec_interfaces"></a> 


```
$ips = ec_interfaces;
if ec_test :contains "%{spfv1:h}" $ips {
  ec_action 550 "spoof from %{spfv1:i} claiming to be me %{spfv1:h}";
}
stop;
```