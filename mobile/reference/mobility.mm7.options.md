---
title: "Chapter 8. Mobile Momentum MM7 Options"
description: "This table displays all the non module specific configuration options used in configuring MM 7 options that are valid outside the mm 7 module scope Options are sorted alphabetically by name If an option has a default value this value is shown and if there are a limited number of..."
---

[navigation post_type="momentum_article" path="/momentum/mobile/reference/mobility.mm7.options"]

This table displays all the non-module-specific configuration options used in configuring MM7—options that are valid outside the mm7 module scope.

Options are sorted alphabetically by name. If an option has a default value, this value is shown and if there are a limited number of legal values these are also shown.

<a name="table-mm7-options"></a> 

**Table 8.1. mm7 options**

| Option/Description | Type | Default | Legal Values | Scopes |
| --- | --- | --- | --- | --- |
| [mm7_delivery_report](mobility.conf.mm7_delivery_report "mm7_delivery_report") – Specify whether to request a Delivery-Report or not in SubmitReq | both | false |   | binding, binding_group, domain, global |
| [mm7_http_auth_password](mobility.conf.mm7_http_auth_password "mm7_http_auth_password") *(deprecated)* – Set the HTTP password in the HTTP request | both |   |   | binding, binding_group, domain, global |
| [mm7_http_auth_user](mobility.conf.mm7_http_auth_user "mm7_http_auth_user") *(deprecated)* – Set the HTTP user account in the HTTP request | both |   |   | binding, binding_group, domain, global |
| [mm7_inactivity_timer](mobility.conf.mm7_inactivity_timer "mm7_inactivity_timer") *(deprecated)* – The idle time before tearing down a MM7 connection | both | 300 |   | binding, binding_group, domain, global |
| [mm7_message_class](mobility.conf.mm7_message_class "mm7_message_class") – The MessageClass element in a submitReq | both |   | Personal, Informational, Advertisement, Auto | binding, binding_group, domain, global |
| [mm7_mmsc_path](mobility.conf.mm7_mmsc_path "mm7_mmsc_path") – Specify the request in the HTTP POST request line | both | / |   | domain, global |
| [mm7_mmsc_port](mobility.conf.mm7_mmsc_port "mm7_mmsc_port") *(deprecated)* – Specify the TCP port number for the target MMSC MM7 entity | both | 8080 |   | domain, global |
| [mm7_mmsc_server](mobility.conf.mm7_mmsc_server "mm7_mmsc_server") *(deprecated)* – Specify the host name or IP address of the target MMSC MM7 entity | both |   |   | domain, global |
| [mm7_mstore_bucket_use_shortcode](mobility.message.retry#modules.mstore.non-module.options "11.1.2. Non-Module Options Related to mstore") – Whether or not to use the shortcode as part of the bucket ID | both | true |   | global |
| [mm7_mstore_save_message](mobility.message.retry#modules.mstore.non-module.options "11.1.2. Non-Module Options Related to mstore") – Whether or not to save messages for resubmission | both | true |   | binding, binding_group, domain, global |
| [mm7_namespace](mobility.conf.mm7_namespace "mm7_namespace") – Specify the MM7 namespace prefix for MM7 schema-defined XML element names | both |   |   | binding, binding_group, domain, global |
| [mm7_number_prefix](mobility.conf.mm7_number_prefix "mm7_number_prefix") – Specify the prefix that will be added to the MM7 MT number value | both |   |   | binding, binding_group, domain, global |
| [mm7_read_reply](mobility.conf.mm7_read_reply "mm7_read_reply") – Specify in the SubmitReq whether to request a ReadReply report from the MMSC or not | both | false |   | binding, binding_group, domain, global |
| [mm7_reply_charging](mobility.conf.mm7_reply_charging "mm7_reply_charging") – Whether ReplyCharging is enabled or not | both | false |   | binding, binding_group, domain, global |
| [mm7_reply_charging_size](mobility.conf.mm7_reply_charging_size "mm7_reply_charging_size") – Specify the ReplyChargingSize (an attribute of ReplyCharging element of a the SubmitReq) | both | 0 |   | binding, binding_group, domain, global |
| [mm7_reply_deadline](mobility.conf.mm7_reply_deadline "mm7_reply_deadline") – Specify the attribute value of ReplyDeadline in the ReplyCharging element in a SubmitReq | both |   |   | binding, binding_group, domain, global |
| [mm7_request_ie_extended](mobility.conf.mm7_request_ie_extended "mm7_request_ie_extended") – This option is used to support future carrier/aggregator integrations | sending | null |   | binding, binding_group, domain, global |
| [mm7_response_timer](mobility.conf.mm7_response_timer "mm7_response_timer") – Specify how long (in seconds) to wait for a MM7 response | sending | 10 |   | binding, binding_group, domain, global |
| [mm7_sender_address](mobility.conf.mm7_sender_address "mm7_sender_address") – Specify the SenderAddress used by the VASP entity | both | null |   | binding, binding_group, domain, global |
| [mm7_service_code](mobility.conf.mm7_service_code "mm7_service_code") – The ServiceCode element in a submitReq, supplied for billing purposes | both | null |   | binding, binding_group, domain, global |
| [mm7_soap_attachment_simple_mime](mobility.conf.mm7_soap_attachment_simple_mime "mm7_soap_attachment_simple_mime") – Specify whether the MM7 SOAP attachment can be simple MIME ( text/plain) or not | both | true |   | binding, binding_group, domain, global |
| [mm7_soap_env](mobility.conf.mm7_soap_env "mm7_soap_env") – Specify the SOAP envelope prefix | both | env |   | binding, binding_group, domain, global |
| [mm7_submit_tracking_cache](mobility.conf.mm7_submit_tracking_cache "mm7_submit_tracking_cache") – The datasource cache name used by MM7 for store and retrieve a SubmitReq's delivery time | both | ecdb |   | global |
| [mm7_submit_tracking_schema](mobility.conf.mm7_submit_tracking_schema "mm7_submit_tracking_schema") – The database schema used by MM7 to store and retrieve a SubmitReq's delivery time | both | mm7 |   | global |
| [mm7_use_namespace_in_body](mobility.conf.mm7_use_namespace_in_body "mm7_use_namespace_in_body") – Whether to use the namespace prefix in the SOAP body part | both | false |   | binding, binding_group, domain, global |
| [mm7_vasid](mobility.conf.mm7_vasid "mm7_vasid") – Specify the VASID used by the VASP entity | both | MessageSystems-VASID |   | binding, binding_group, domain, global |
| [mm7_vaspid](mobility.conf.mm7_vaspid "mm7_vaspid") – Specify the VASPID used by the VASP entity | both |   |   | binding, binding_group, domain, global |
| [mm7_version](mobility.conf.mm7_version "mm7_version") – Specify the MM7 version used in this VASP entity | both | 6.8.0 |   | binding, binding_group, domain, global |
| [mm7_xml_schema](mobility.conf.mm7_xml_schema "mm7_xml_schema") – Specify the XML Schema Namespace used by the VASP domain | both | http://www.3gpp.org/ftp/Specs/archive/23_series/23.140/schema/REL-6-MM7-1-4 |   | binding, binding_group, domain, global |

## <a name="mm7.conf"></a> 8.1. MM7 Configuration Option Details

Detailed descriptions of the MM7 options follow.