---
lastUpdated: "03/26/2020"
title: "msys.snmpTrap"
description: "msys snmp Trap Issue an SNMP trap msys snmp Trap traptable Issue an SNMP trap traptable has the following permitted keys type specifies the type of the payload Can be one of string counter gauge or IP payload if type is a string payload must be a string If type..."
---

<a name="lua.ref.msys.snmpTrap"></a> 
## Name

msys.snmpTrap — Issue an SNMP trap

<a name="idp24777248"></a> 
## Synopsis

`msys.snmpTrap(traptable);`

`traptable: table`<a name="idp24779936"></a> 
## Description

Issue an SNMP trap. `traptable` has the following permitted keys:

*   `type` specifies the type of the payload. Can be one of string, counter, gauge or IP.

*   `payload` if `type` is a string, `payload` must be a string. If `type` is a counter or gauge, then this must be a number. If `type` is an IP, then it must be a valid IPv4 address.

*   `address` the IPv4 destination address for the trap. If unspecified, the trap will be sent to all configured `Trap_Destination` stanzas in the config file.

*   `port` the target port number. If not specified, defaults to the SNMP standard port assigned by IANA.

*   `community` the community name. If not specified, this parameter defaults to `public`.

*   `mib` the OID identifying the trap.

*   `trapvar.mib` the OID identifying the trap variable. If not specified, 1.3.6.1.4.1.19552.1.4.1.0 is used (the OmniTI Enterprise MIB assignment). For more information see [*MIB Files*](/momentum/3/3-reference/3-reference-snmp-mib) .

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp24796208"></a> 
## See Also

[SNMP](/momentum/3/3-reference/3-reference-conf-ref-snmp)