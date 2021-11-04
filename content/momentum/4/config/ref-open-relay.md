---
lastUpdated: "03/26/2020"
title: "open_relay"
description: "open relay whether the MTA is an open relay or not open relay true The relay hosts option is valid in the Peer scope but using open relay is more succinct open relay is valid in the esmtp listener listen pathway pathway group and peer scopes relay hosts..."
---

<a name="conf.ref.open_relay"></a> 
## Name

open_relay — whether the MTA is an open relay or not

## Synopsis

`open_relay = true`

<a name="idp25578816"></a> 
## Description

The `relay_hosts` option is valid in the Peer scope but using `open_relay` is more succinct.

```
ESMTP_Listener {
  Peer "10.0.0.0/24" {
    # general options for this netblock here
    # use Open_Relay here instead of Relay_Hosts
    Open_Relay = true
  }
  Listen ":25" {
    Peer "10.0.0.1" {
        # options for 10.0.0.1 here
        SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH LOGIN" )
    }
  }
}
```
<a name="idp25582288"></a> 
## Scope

`open_relay` is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scopes.

<a name="idp25584608"></a> 
## See Also

[relay_hosts](/momentum/4/config/ref-relay-hosts)