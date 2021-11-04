---
lastUpdated: "03/26/2020"
title: "Multi Protocol Domain Naming"
description: "In Momentum there is a strong association between a destination domain and its routing information and the domain system is SMTP centric This means that drivers for other protocols need to have a mechanism for naming domains such that they can use them to key into protocol specific routing information..."
---

In Momentum there is a strong association between a destination domain and its routing information and the domain system is SMTP-centric. This means that drivers for other protocols need to have a mechanism for naming domains such that they can use them to key into protocol-specific routing information.

### <a name="mobility.protocol.conventions"></a> Domain Naming Convention

SMTP domains are named in the following way:

```
Domain "example.com" {
  #domain-specific settings
}
```

Multi-protocol domain naming reserves all domain names that begin with the pound sign , ‘`#`’, (also know as an octothorpe or hash). Domain names are interpreted as follows:

*   #protocol#displayname

*   #protocol#displayname#extra

For example:

*   #smpp#air2web

*   #smpp#txt#air2web

*   #smpp#txt#otheraggregator

*   #cluster#binding-a

The pound sign distinguishes valid SMTP domains from domains that use other protocols; SMTP domains must use valid DNS compatible names, and the pound sign is not legal in DNS names.

The protocol drivers can use the protocol prefix to determine whether the domain is significant to them so that they can take appropriate action when the system needs to resolve the destination.

The displayname portion is the part that logically makes sense to the user when interacting with the system, and will usually serve as the key for configuration for the appropriate protocol driver.

The optional "extra" portion can be used to distinguish or otherwise encode additional information into the domain. It is anticipated that this field will not typically be used.

### <a name="mobility.protocol.display"></a> Display Considerations

When Momentum displays domain names, it is preferable to simplify or otherwise unclutter the displayed data by hiding protocol names. The default disposition in the system is to render the domain in this simplified form.

Given the following domain strings, the system will display them as indicated below:

<a name="idp989312"></a> 


| Raw Domain | Display |
| --- | --- |
| somewhere.com | somewhere.com |
| #smpp#air2web | air2web |
| #smpp#txt#air2web | txt (air2web) |
| #cluster#binding-a | binding-a |

Both the system console and the web UI respect these mappings.

The configuration system does not include any special logic for handling multi-protocol domain names. If configuration options need to be set for domains that have a multi-protocol name, they must use the raw domain string as indicated below:

```
Domain "#smpp#txt" {
  Max_Resident_Active_Queue = 20
}
```

### <a name="mobility.protocol.logging"></a> Loggings and Stats

The raw domain strings are output to log files and statp output, and as such, are also fed into the statistics database(s). **Output is rendered in raw form.**