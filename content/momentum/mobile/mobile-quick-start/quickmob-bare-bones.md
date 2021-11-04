---
lastUpdated: "03/26/2020"
title: "Bare Bones Configurations"
description: "This section describes the absolute minimum configurations for using Mobile Momentum However your aggregator or provider may require additional parameters In bare bones configurations loggers are not required for either SMPP or MM 7 A minimal SMPP client can be configured as follows Example 5 1 smpp client A minimal..."
---

This section describes the absolute minimum configurations for using Mobile Momentum. *However, your aggregator or provider may require additional parameters.* 

In bare bones configurations loggers are not required for either SMPP or MM7.

## <a name="idp165856"></a> SMPP

A minimal SMPP client can be configured as follows:

<a name="quickmob.bare.bones.smpp.client"></a> 


```
smpp {debug_level="debug"}
domain "example.com" {
  SMPP_SMSC_Server  = "10.0.0.1"
  SMPP_SMSC_Port = "2775"
  SMPP_SMSC_System_ID = "GSMSGW"
  SMPP_SMSC_Password = "secret"
  SMPP_ESME_Address = "12345"
}
```

## <a name="idm38480"></a> MM7

A minimal MM7 client can be configured as follows:

<a name="quickmob.bare.bones.mm7.client"></a> 


```
mm7 {debug_level = "debug"}
domain "mms.example.com" {
  MM7_MMSC_Server = "10.0.0.1"
  MM7_MMSC_Port = "8192"
  MM7_HTTP_Auth_User = "admin"
  MM7_HTTP_Auth_Password = "admin"
}
```

A minimal MM7 server can be configured as follows:

<a name="quickmob.bare.bones.mm7.server"></a> 


```
mm7_serv {
  MM7_VASP_URI_Paths = ("/mm7/" "/test1/" "/test2/")
  debug_level = "debug"
}

HTTP_Listener {
  Listen ":8089" { }
  Listen "[::1]:8089" {}
}

httpsrv {
  debug_level = "debug"
}
```

In this case the listener is listening on port 8089 and the server responds to URIs `http://host/mm7/, http://host/test1/, http://host/test2/`. These are local SOAP endpoints.

URI paths are registered to the HTTP_Listener by the mm7 server. When the HTTP_Listener recognizes a registered URI, it wakes the mm7 server with the incoming mm7 XML SOAP message.