---
lastUpdated: "10/05/2021"
title: "Configuring XFER for Outbound Mail Delivery"
description: "By default Momentum will attempt to deliver mail via the SMTP protocol to the destination MX server.  The XFER delivery method can be used to transfer mail over HTTP to another Momentum server that will handle delivery."
---

## <a name="outbound_mail.XFER"></a> XFER

By default Momentum will attempt to deliver mail via the SMTP protocol to the destination MX server.  The XFER delivery method can be used to transfer mail over HTTP to another Momentum server that will handle delivery.  Some example use cases where this could be useful include transferring tempfailed messages to another server for handling retries, and transferring mail to specific domains to another server that is configured with different settings.

### Server Config To Receive XFER messages
To receive XFER messages from another server, configuration like the following is needed:

```
scriptlet "scriptlet" {
  # load the XFER server
  script xfer_api {
    source = "msys.xfer.server"
  }
}

# stand up an HTTP listener on port 8080
HTTP_Listener {
  Listen ":8080" {}
}
```

### Sending Server Configuration For Delayed Messages
To reroute delayed messages to an XFER server, configuration like the following is needed (assuming the XFER server is running on 10.10.10.10):

```
# reroute the delayed message to the synthetic xfer.test domain
delayed_reroute_domain = "xfer.test"
Domain xfer.test {
  reroute_domain = "disabled"
  delayed_reroute_domain = "disabled"
  # use the XFER delivery method
  Delivery_Method = "delay_xfer"
  Delivery_Response_Timeout = "10000"  # 10s
  # XFER to 10.10.10.10
  Routes = (
    "xfer://10.10.10.10?port=8080"
  )
  HTTP_URI = "/delay_message"
  HTTP_METHOD = "POST"
  HTTP_HOST = "localhost"
}
```

### Sending Server Configuration For Specific Domains
To reroute messages for specific domains to an XFER server configuration like the following is needed:

```

# reroute all gmail mail to the XFER server
domain gmail.com {
  reroute_domain = "xfer.test"
}

Domain xfer.test {
  reroute_domain = "disabled"
  delayed_reroute_domain = "disabled"
  # use the XFER delivery method
  Delivery_Method = "delay_xfer"
  Delivery_Response_Timeout = "10000"  # 10s
  # XFER to 10.10.10.10
  Routes = (
    "xfer://10.10.10.10?port=8080"
  )
  HTTP_URI = "/delay_message"
  HTTP_METHOD = "POST"
  HTTP_HOST = "localhost"
}
```

