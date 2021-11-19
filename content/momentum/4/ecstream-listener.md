---
lastUpdated: "03/26/2020"
title: "Configuring Inbound Mail Service Using ECStream"
description: "The EC Stream Listener is the listener that enables you to inject message using EC Stream The EC Stream protocol is a bare bones high performance injection mechanism It does not support any extended properties Momentum can listen on any number of Unix domain sockets and or IP port addresses..."
---


The ECStream_Listener is the listener that enables you to inject message using ECStream. The ECStream protocol is a bare-bones, high performance injection mechanism. It does not support any extended properties. Momentum can listen on any number of Unix domain sockets and/or IP:port addresses for TCP/IP service.

## <a name="ecstream_listener.config"></a> ECStream_Listener Configuration

The ECStream_Listener is configured in the `ecelerity.conf` file and specifies the end-point(s) on which Momentum should listen for incoming ECStream connections. The following is an example configuration:

```
ECStream_Listener {
  Listen ":1825" {
    ECStream_Idle_Time = 300
    ECStream_Max_Batch_Size = 10000
  }
}
```

In the example, `ECStream_Idle_Time` is the number of seconds of inactivity before a client is disconnected; while `ECStream_Max_Batch_Size` specifies the maximum number of ECStream messages to accept before dropping back into the scheduler. If users are having problems with the MTA becoming unresponsive when injecting messages via ECStream, it can be useful to set this to `1`.

### Note

Use [gateway](/momentum/4/config/ref-gateway) when delivering mail via ecstream.

Not all listener options are valid within the ECStream_Listener or the Listen scope within an ECStream_Listener. For the valid options, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Note that the `ecstream_idle_time` and `ecstream_max_batch_size` options are only valid within the ECStream scope or a listen scope within this scope. They are also the only options valid in the ECStream::Peer scope or ECStream_Listener::Listen::Peer scopes.

For general information regarding listeners, see [“Listeners”](/momentum/4/listeners).