---
lastUpdated: "01/31/2023"
title: "Configuring XFER for Outbound Mail Delivery"
description: "By default Momentum will attempt to deliver mail via the SMTP protocol to the destination MX server.  The XFER delivery method can be used to transfer mail over HTTP to another Momentum server that will handle delivery."
---

## <a name="outbound_mail.XFER"></a> XFER

By default Momentum will attempt to deliver mail via the SMTP protocol to the destination MX server.  The XFER delivery method can be used to transfer mail over HTTP to another Momentum server that will handle delivery.  Some example use cases where this could be useful include transferring tempfailed messages to another server for handling retries, and transferring mail to specific domains to another server that is configured with different settings.

Both XFER client and XFER server configuration changes are needed as described below:

### Server Configuration To Receive XFER messages
To receive XFER messages from an XFER client, configuration like the following is needed on the server MTA:

```
scriptlet "scriptlet" {
  # load the XFER server module
  script xfer_server {
    source = "msys.xfer.server"
  }
}

# stand up an HTTP listener on port 8080
HTTP_Listener {
  Listen ":8080" {}
}
```

### Client Configuration to Send XFER Messages
To reroute messages from an XFER client to an XFER server, configuration like the following is needed on the client MTA (assuming the XFER server is running on 10.10.10.10):

```
scriptlet "scriptlet" {
  # load the XFER client module
  script xfer_client {
    source = "msys.xfer.client"
  }
}

Domain xfer.test {
  reroute_domain = "disabled"
  delayed_reroute_domain = "disabled"

  # use the XFER delivery method
  Delivery_Method = "delay_xfer"
  Delivery_Response_Timeout = "10000"  # 10s

  # retry xfer messages quicker
  host_failure_retry = 1
  max_retry_interval = 2

  # don't swap out xfer message context if there is a temporary xfer failure:
  teleport_enabled = 1

  # XFER to 10.10.10.10
  Routes = (
    "xfer://10.10.10.10?port=8080"
  )
  HTTP_URI = "/delay_message"
  HTTP_METHOD = "POST"
  HTTP_HOST = "localhost"
}
```

Then decide which messages should be rerouted:

To reroute all delayed mail, configure the following on the XFER client MTA:
```
# reroute delayed messages to the synthetic xfer.test domain
delayed_reroute_domain = "xfer.test"
```

To reroute all messages destined for a specific domain, configure the reroute_domain in the relevant domain stanza on the XFER client MTA:
```
# reroute all gmail mail to the XFER server
domain gmail.com {
  reroute_domain = "xfer.test"
}
```
