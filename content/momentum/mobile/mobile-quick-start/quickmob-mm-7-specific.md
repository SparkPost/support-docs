---
lastUpdated: "03/26/2020"
title: "MM7-specific Configuration"
description: "As with SMPP there are numerous options valid in the global domain and binding scopes These options only need to be configured when running an MM 7 client For a list of all the available options see Mobile Momentum MM 7 Options You can enable the MM 7 client by..."
---

### <a name="quickmob.mm7options."></a> MM7 Options in the Global, Domain and Binding Scopes

As with SMPP there are numerous options valid in the global, domain and binding scopes. These options only need to be configured when running an MM7 client. For a list of all the available options see "[Mobile Momentum MM7 Options](/momentum/mobile/mobile-reference/mobility-mm-7-options)".

You can enable the MM7 client by supplying the MM7_MMSC_Server configuration parameter within a domain stanza. The MM7_MMSC_Server parameter value is the IP address or host name of the Multimedia Message Service Center in the mobile provider network. Messages sent to a domain enabled for MM7 will be converted to MM7 XML SOAP format and transmitted to the mobile network's MMSC. Your mobile network provider will supply you with other configuration information as needed for establishing MM7 sessions, such as:

*   port number (MM7_MMSC_Port)

*   authentication credentials (MM7_HTTP_Auth_User, MM7_HTTP_Auth_Password)

In the following example domain stanza, messages will be sent to the MMSC at IP 10.0.0.1, port 8086 and authenticated as "MyID" and password "mysecret". In this case a message with a recipient of the form 15551234567@mms.domain.example.com is sent to the handset with phone number 1 555 123 4567.

```
domain "mms.domain.example.com" {
  MM7_MMSC_Server = "10.0.0.1"
  MM7_MMSC_Port = "8086"
  MM7_HTTP_Auth_User = "MyID"
  MM7_HTTP_Auth_Password = "mysecret"
}
```

Most of the remaining MM7 domain and binding options supply values for the message's MM7 XML SOAP envelope. These include:

*   VASPID (MM7_VASPID)

*   VASID (MM7_VASID)

*   Sender Address (MM7_Sender_Address)

*   Service Code (MM7_Service_Code)

*   MM7 XML Schema version (MM7_Version)

*   MM7 XML Namespace formatting (MM7_Namespace, MM7_XML_Schema)

*   Requesting MM7 Delivery and Read Reply Reports (MM7_Delivery_Report, MM7_Read_Reply)

*   Reply charging and reply deadline parameters (MM7_Reply_Charging, MM7_Reply_Deadline)

Set the values of these parameters within MM7 domain stanzas according to your application requirements, policy enforcement, and/or business logic.