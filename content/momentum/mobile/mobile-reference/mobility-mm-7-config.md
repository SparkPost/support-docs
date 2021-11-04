---
lastUpdated: "03/26/2020"
title: "Configuration for MM7"
description: "Prior to Momentum version 3 5 6 MM 7 domains are configured in the following way Example 7 4 Configuration prior to 3 5 6 In Momentum 3 6 domains continue to be configured in the same way as shown in Example 7 4 Configuration prior to 3 5 6..."
---

<a name="idp1043712"></a> 

Prior to Momentum version 3.5.6, MM7 domains are configured in the following way:

<a name="mobility.mm7.config.domain.example1"></a> 


```
domain "mm7.example.com" { 
  mm7_xml_schema = "http://www.3gpp.org/ftp/Specs/archive/23_series/ »
    23.140/schema/REL-5-MM7-1-0.xsd" 
  mm7_version = "5.3.0" 
  mm7_mmsc_port = "8080" 
  mm7_http_auth_user = "admin" 
  mm7_http_auth_password = "secret" 
  mm7_mmsc_server = "example.com" 
  mm7_vasid = "test_domain_vas_id" 
  mm7_vaspid = "test_global_vasp_id" 
  mm7_message_class="personal" 
  mm7_delivery_report="true" 
  mm7_inactivity_timer = 300
  generate_bounces = "true" 
}
```

### Note

In Momentum 3.6, domains continue to be configured in the same way as shown in [“Configuration prior to 3.5.6”](/momentum/mobile/mobile-reference/mobility-mm-7-config#mobility.mm7.config.domain.example1).

As of Momentum version 3.5.6 generic HTTP options replace MM7-specific options. Configure MM7 domains as follows:

<a name="mobility.mm7.config.domain.example2"></a> 


```
domain "mm7.example.com" { 
  http_host = "example.com" 
  http_uri = "/mmssend" 
  mm7_xml_schema = "http://www.3gpp.org/ftp/Specs/archive/23_series/23.140/ »
    schema/REL-5-MM7-1-0.xsd" 
  mm7_version = "5.3.0" 
  delivery_method = "mm7"
  routes = ( "mm7://example.com/mmssend?port=8080" ) 
  http_basic_auth = "admin:secret" 
  mm7_vasid = "test_domain_vas_id" 
  mm7_vaspid = "test_global_vasp_id" 
  mm7_message_class="personal" 
  mm7_delivery_report="true"
  idle_timeout = 300
  generate_bounces = "true" 
}
```

The changes are as follows:

*   `mm7_mmsc_port` and `mm7_mmsc_server` – These options have been replaced by [routes](/momentum/3/3-reference/3-reference-conf-ref-routes), which specifies the protocol, the server and the port. Note that you must also set the [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method) to `mm7`.

*   `mm7_http_auth_user` and `mm7_http_auth_password` – These options have been replaced by [http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth).

*   `mm7_inactivity_timer` – This option has been replaced by [idle_timeout](/momentum/3/3-reference/3-reference-conf-ref-idle-timeout).

*   `mm7_mmsc_path` – This option has been replaced by [http_uri](/momentum/3/3-reference/3-reference-conf-ref-http-uri).

Additionally, as of version 3.5.6, you must also specify [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host).