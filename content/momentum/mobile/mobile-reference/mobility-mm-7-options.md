---
lastUpdated: "03/26/2020"
title: "Mobile Momentum MM7 Options"
description: "This table displays all the non module specific configuration options used in configuring MM 7 options that are valid outside the mm 7 module scope Options are sorted alphabetically by name If an option has a default value this value is shown and if there are a limited number of..."
---


This table displays all the non-module-specific configuration options used in configuring MM7—options that are valid outside the mm7 module scope.

Options are sorted alphabetically by name. If an option has a default value, this value is shown and if there are a limited number of legal values these are also shown.

<a name="table-mm7-options"></a> 


| Option/Description | Type | Default | Legal Values | Scopes |
| --- | --- | --- | --- | --- |
| [mm7_delivery_report](/momentum/mobile/mobile-reference/mobility-conf-mm-7-delivery-report) – Specify whether to request a Delivery-Report or not in SubmitReq | both | false |   | binding, binding_group, domain, global |
| [mm7_http_auth_password](/momentum/mobile/mobile-reference/mobility-conf-mm-7-http-auth-password) *(deprecated)* – Set the HTTP password in the HTTP request | both |   |   | binding, binding_group, domain, global |
| [mm7_http_auth_user](/momentum/mobile/mobile-reference/mobility-conf-mm-7-http-auth-user) *(deprecated)* – Set the HTTP user account in the HTTP request | both |   |   | binding, binding_group, domain, global |
| [mm7_inactivity_timer](/momentum/mobile/mobile-reference/mobility-conf-mm-7-inactivity-timer) *(deprecated)* – The idle time before tearing down a MM7 connection | both | 300 |   | binding, binding_group, domain, global |
| [mm7_message_class](/momentum/mobile/mobile-reference/mobility-conf-mm-7-message-class) – The MessageClass element in a submitReq | both |   | Personal, Informational, Advertisement, Auto | binding, binding_group, domain, global |
| [mm7_mmsc_path](/momentum/mobile/mobile-reference/mobility-conf-mm-7-mmsc-path) – Specify the request in the HTTP POST request line | both | / |   | domain, global |
| [mm7_mmsc_port](/momentum/mobile/mobile-reference/mobility-conf-mm-7-mmsc-port) *(deprecated)* – Specify the TCP port number for the target MMSC MM7 entity | both | 8080 |   | domain, global |
| [mm7_mmsc_server](/momentum/mobile/mobile-reference/mobility-conf-mm-7-mmsc-server) *(deprecated)* – Specify the host name or IP address of the target MMSC MM7 entity | both |   |   | domain, global |
| [mm7_mstore_bucket_use_shortcode](/momentum/mobile/mobile-reference/mobility-message-retry#modules.mstore.non-module.options) – Whether or not to use the shortcode as part of the bucket ID | both | true |   | global |
| [mm7_mstore_save_message](/momentum/mobile/mobile-reference/mobility-message-retry#modules.mstore.non-module.options) – Whether or not to save messages for resubmission | both | true |   | binding, binding_group, domain, global |
| [mm7_namespace](/momentum/mobile/mobile-reference/mobility-conf-mm-7-namespace) – Specify the MM7 namespace prefix for MM7 schema-defined XML element names | both |   |   | binding, binding_group, domain, global |
| [mm7_number_prefix](/momentum/mobile/mobile-reference/mobility-conf-mm-7-number-prefix) – Specify the prefix that will be added to the MM7 MT number value | both |   |   | binding, binding_group, domain, global |
| [mm7_read_reply](/momentum/mobile/mobile-reference/mobility-conf-mm-7-read-reply) – Specify in the SubmitReq whether to request a ReadReply report from the MMSC or not | both | false |   | binding, binding_group, domain, global |
| [mm7_reply_charging](/momentum/mobile/mobile-reference/mobility-conf-mm-7-reply-charging) – Whether ReplyCharging is enabled or not | both | false |   | binding, binding_group, domain, global |
| [mm7_reply_charging_size](/momentum/mobile/mobile-reference/mobility-conf-mm-7-reply-charging-size) – Specify the ReplyChargingSize (an attribute of ReplyCharging element of a the SubmitReq) | both | 0 |   | binding, binding_group, domain, global |
| [mm7_reply_deadline](/momentum/mobile/mobile-reference/mobility-conf-mm-7-reply-deadline) – Specify the attribute value of ReplyDeadline in the ReplyCharging element in a SubmitReq | both |   |   | binding, binding_group, domain, global |
| [mm7_request_ie_extended](/momentum/mobile/mobile-reference/mobility-conf-mm-7-request-ie-extended) – This option is used to support future carrier/aggregator integrations | sending | null |   | binding, binding_group, domain, global |
| [mm7_response_timer](/momentum/mobile/mobile-reference/mobility-conf-mm-7-response-timer) – Specify how long (in seconds) to wait for a MM7 response | sending | 10 |   | binding, binding_group, domain, global |
| [mm7_sender_address](/momentum/mobile/mobile-reference/mobility-conf-mm-7-sender-address) – Specify the SenderAddress used by the VASP entity | both | null |   | binding, binding_group, domain, global |
| [mm7_service_code](/momentum/mobile/mobile-reference/mobility-conf-mm-7-service-code) – The ServiceCode element in a submitReq, supplied for billing purposes | both | null |   | binding, binding_group, domain, global |
| [mm7_soap_attachment_simple_mime](/momentum/mobile/mobile-reference/mobility-conf-mm-7-soap-attachment-simple-mime) – Specify whether the MM7 SOAP attachment can be simple MIME ( text/plain) or not | both | true |   | binding, binding_group, domain, global |
| [mm7_soap_env](/momentum/mobile/mobile-reference/mobility-conf-mm-7-soap-env) – Specify the SOAP envelope prefix | both | env |   | binding, binding_group, domain, global |
| [mm7_submit_tracking_cache](/momentum/mobile/mobile-reference/mobility-conf-mm-7-submit-tracking-cache) – The datasource cache name used by MM7 for store and retrieve a SubmitReq's delivery time | both | ecdb |   | global |
| [mm7_submit_tracking_schema](/momentum/mobile/mobile-reference/mobility-conf-mm-7-submit-tracking-schema) – The database schema used by MM7 to store and retrieve a SubmitReq's delivery time | both | mm7 |   | global |
| [mm7_use_namespace_in_body](/momentum/mobile/mobile-reference/mobility-conf-mm-7-use-namespace-in-body) – Whether to use the namespace prefix in the SOAP body part | both | false |   | binding, binding_group, domain, global |
| [mm7_vasid](/momentum/mobile/mobile-reference/mobility-conf-mm-7-vasid) – Specify the VASID used by the VASP entity | both | MessageSystems-VASID |   | binding, binding_group, domain, global |
| [mm7_vaspid](/momentum/mobile/mobile-reference/mobility-conf-mm-7-vaspid) – Specify the VASPID used by the VASP entity | both |   |   | binding, binding_group, domain, global |
| [mm7_version](/momentum/mobile/mobile-reference/mobility-conf-mm-7-version) – Specify the MM7 version used in this VASP entity | both | 6.8.0 |   | binding, binding_group, domain, global |
| [mm7_xml_schema](/momentum/mobile/mobile-reference/mobility-conf-mm-7-xml-schema) – Specify the XML Schema Namespace used by the VASP domain | both | http://www.3gpp.org/ftp/Specs/archive/23_series/23.140/schema/REL-6-MM7-1-4 |   | binding, binding_group, domain, global |

## <a name="mm7.conf"></a> MM7 Configuration Option Details

Detailed descriptions of the MM7 options follow.