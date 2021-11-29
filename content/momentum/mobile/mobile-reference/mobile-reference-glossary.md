---
lastUpdated: "03/26/2020"
title: "Glossary"
description: "Definitions for many of these terms are taken from the 3rd Generation Partnership Project 3 GPP Aggregator A mobile aggregator is a company that acts as an intermediary between mobile operators and end users Aggregators may perform services such as reconciling payments for SMS messages Byte Order Mark BOM In..."
---

Definitions for many of these terms are taken from the [3rd Generation Partnership Project (3GPP)](http://www.3gpp.org/).

<dl>

<dt>Aggregator</dt>

<dd class="glossdef"><a name="gloss-aggregator"></a> 

A mobile aggregator is a company that acts as an intermediary between mobile operators and end users. Aggregators may perform services such as reconciling payments for SMS messages.

</dd>

<dt><a name="gloss-bom"></a> Byte Order Mark (BOM)</dt>

<dd class="glossdef">

In UTF, these are the two bytes at the beginning of the text indicating whether the representation is big or little endian.

</dd>

<dt><a name="gloss-cdr"></a> Call Detail Record Logging (CDR Logging)</dt>

<dd class="glossdef">

The logging of SMPP transaction activity for purposes of auditing, billing, customer support etc. For the logging capabilities of Mobile Momentum see [Table 2.1, “Log format macros”](/momentum/mobile/mobile-reference/mobility-configuration-smpp#mobility.log.macros). CDR also stands for Charging Data Record.

</dd>

<dt><a name="gloss-downlink"></a> Downlink</dt>

<dd class="glossdef">

In the context of cellular networks, a downlink is the radio transmission path from a Base Transceiver Station (Cell Site) to a cell phone.

</dd>

<dt><a name="gloss-e164"></a> E.164 (E164)</dt>

<dd class="glossdef">

E.164 is the Telecommunication Standardization Sector recommendation that defines the international public telecommunication numbering plan used in telephone networks and data networks. It defines the format of telephone numbers. The term "ISDN Telephony" is synonymous with E164\. See also [Numbering Plan Indicator](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-npi).

</dd>

<dt>Email Interworking</dt>

<dd class="glossdef">

Email that works with a 3G system. See also [Third Generation](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-3g).

</dd>

<dt><a name="gloss-esme"></a> External Short Messaging Entity (ESME)</dt>

<dd class="glossdef">

External Short Messaging Entity is a component of an SMS network capable of submitting and accepting delivery of SMS messages. When the mobility module is loaded, Momentum functions as an ESME within the SMS network architecture.

</dd>

<dt><a name="gloss-gsm"></a> Global System for Mobile communications (GSM)</dt>

<dd class="glossdef">

The most popular standard for mobile phones. The popularity of this standard allows for roaming and switching carriers without having to switch phones.

</dd>

<dt><a name="gloss-hsdpa"></a> High-Speed Downlink Packet Access (HSDPA)</dt>

<dd class="glossdef">

An enhanced 3G mobile communications protocol that improves data transfer speeds for networks based on Universal Mobile Telecommunications System (UMTS). This protocol can support speeds up to 42 Mbits per second downlink. See also [Third Generation](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-3g) and [Downlink](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-downlink).

</dd>

<dt><a name="gloss-isdn"></a> Integrated Services Digital Network (ISDN)</dt>

<dd class="glossdef">

Integrated Services Digital Network (ISDN) is a set of communication standards for simultaneous digital transmission of voice, video, data, and other network services over the traditional circuits of the public switched telephone network.

</dd>

<dt><a name="gloss-long-code"></a> Long Code</dt>

<dd class="glossdef">

A normal length phone number. See also [Short Code](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-short-code)

</dd>

<dt><a name="gloss-mc"></a> Message Center (MC)</dt>

<dd class="glossdef">

See [Short Message Service Center](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-smsc).

</dd>

<dt><a name="gloss-mm7"></a> MM7 (MM7)</dt>

<dd class="glossdef">

A [Multimedia Messaging Services](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-mms) interface between a [Value Added Service Provider](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-vasp) and an [Multimedia Messaging Service Center](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-mmsc).

</dd>

<dt><a name="gloss-mo"></a> Mobile Originated (MO)</dt>

<dd class="glossdef">

See [Mobile Originated Short Message Service](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-mosms).

</dd>

<dt><a name="gloss-mosms"></a> Mobile Originated Short Message Service (MO-SMS)</dt>

<dd class="glossdef">

The ability to send short text messages from a mobile phone. Usually this is combined with the ability to receive such messages. See also [Mobile Terminated Short Message Service](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-mtsms).

</dd>

<dt><a name="gloss-mt"></a> Mobile Terminated (MT)</dt>

<dd class="glossdef">

See [Mobile Terminated Short Message Service](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-mtsms).

</dd>

<dt><a name="gloss-mtsms"></a> Mobile Terminated Short Message Service (MT-SMS)</dt>

<dd class="glossdef">

The ability of receiving short text messages. Usually this is combined with the ability to send such messages. See also [Mobile Originated Short Message Service](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-mosms).

</dd>

<dt><a name="gloss-mcmt"></a> Multi-Channel Message Type (MCMT)</dt>

<dd class="glossdef">

A Multi-Channel Message Type (MCMT) message is a multi-part MIME message. A MCMT message has a required email attachment with the Content-Type: `message/rfc2822` and optionally other parts with content suitable for delivery over non-email channels such as SMPP and MM7.

See [“The `MCMT_Reception` option”](/momentum/mobile/mobile-reference/mm-7-mcmt-reception) for a description of configuring Momentum for MCMT reception.

</dd>

<dt><a name="gloss-mmsc"></a> Multimedia Messaging Service Center (MMSC)</dt>

<dd class="glossdef">

Multimedia Messaging Service Center, a defined role (typically a carrier resident device for handling [Multimedia Messaging Services](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-mms) traffic) in the various 3GPP MMS specifications.

</dd>

<dt><a name="gloss-mms"></a> Multimedia Messaging Services (MMS)</dt>

<dd class="glossdef">

Multimedia Messaging Services, as defined in the various 3GPP specifications.

</dd>

<dt><a name="gloss-npi"></a> Numbering Plan Indicator (NPI)</dt>

<dd class="glossdef">

An NPI is a number defined in the International Telecommunication Union (ITU) standard indicating the numbering plan of the attached telephone number. The indicators are as follows:

*   `0` – unknown

*   `1` – ISDN Telephony, see [Integrated Services Digital Network](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-isdn) and [164](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-e164)

*   `2` – generic

*   `3` – data

*   `4` – telex

*   `5` – marine mobile

*   `6` – land mobile

*   `7` – ISDN mobile

For command status codes that indicate an invalid NPI see [*Command Status Codes*](/momentum/mobile/mobile-reference/status-codes) .

</dd>

<dt><a name="gloss-pdu"></a> Protocol Data Unit (PDU)</dt>

<dd class="glossdef">

Information that is delivered as a unit among network peers and that may contain data, address or control information.

</dd>

<dt><a name="gloss-qos"></a> Quality of Service (QoS)</dt>

<dd class="glossdef">

In the context of mobile phones, accessibility and reliability are important factors in determining the quality of service.

</dd>

<dt><a name="gloss-short-code"></a> Short Code</dt>

<dd class="glossdef">

Short Codes are the special telephone contact numbers which are used for SMS messages. Short codes are also known as Short Numbers. These codes are designed so that they are easy to remember and are widely used for services such as television voting. See also [Long Code](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-long-code).

</dd>

<dt><a name="gloss-smpp"></a> Short Message Peer-to-Peer Protocol (SMPP)</dt>

<dd class="glossdef">

Short Message Peer-to-Peer Protocol is a protocol enabling the exchange of SMS messages between ESME and SMSC/MC. It is not really a peer-to-peer protocol as the communicating endpoints have distinct functions (SMSC as server, ESME as client) and asymmetric messaging operation depending upon the communicating endpoint type.

</dd>

<dt><a name="gloss-sms"></a> Short Message Service (SMS)</dt>

<dd class="glossdef">

Short Message Service is a communication service in the Global System for Mobile communications (GSM) mobile communication system, using standardized communications protocols for the interchange of short text messages. See also [Global System for Mobile communications](/momentum/mobile/mobile-reference/mobile-reference-glossary#gloss-gsm).

</dd>

<dt><a name="gloss-smsc"></a> Short Message Service Center (SMSC)</dt>

<dd class="glossdef">

Short Message Service Center is a server typically hosted by SMS aggregators and carriers. Later versions of SMPP refer to this component as MC (Message Center).

</dd>

<dt><a name="gloss-3g"></a> Third Generation (3G)</dt>

<dd class="glossdef">

3G stands for third generation mobile phone standards, standards that supersede second generation (2G) wireless telephone technology. 3G networks incorporate high speed Internet access and video telephony.

</dd>

<dt><a name="gloss-3gpp"></a> Third Generation Partnership Project (3GPP)</dt>

<dd class="glossdef">

3GPP produces Technical Specifications and Technical Reports for a 3G Mobile System based on Global System for Mobile communication (GSM) core networks. This includes the maintenance and development of the GSM Technical Specifications and Technical Reports.

This document references elements of the MM7 schema defined on the 3GPPP website. For more information see [http://www.3gpp.org/ftp/Specs/archive/23_series/23.140/schema/REL-6-MM7-1-4](http://www.3gpp.org/ftp/Specs/archive/23_series/23.140/schema/REL-6-MM7-1-4) .

</dd>

<dt><a name="gloss-ton"></a> Type of Number (TON)</dt>

<dd class="glossdef">

The following TON values are used as SME address parameters:

*   `0` – Unknown

*   `1` – International

*   `2` – National

*   `3` – Network Specific

*   `4` – Subscriber Number

*   `5` – Alphanumeric

*   6 – Abbreviated

Mobile Momentum supports `Unknown, National` and `International`. For command status codes that indicate an invalid TON see [*Command Status Codes*](/momentum/mobile/mobile-reference/status-codes) .

</dd>

<dt><a name="gloss-udh"></a> User Data Header (UDH)</dt>

<dd class="glossdef">

UDH is a way of segmenting data. This method of segmenting places a short header in the text message data whereas segmentation and reassembly (SAR) uses optional SMPP TLVs (tag, length, value) fields in the PDU.

</dd>

<dt><a name="gloss-vasp"></a> Value Added Service Provider (VASP)</dt>

<dd class="glossdef">

Value Added Service Provider, a defined role (typically a carrier-external entity) in the various referenced 3GPP MMS specifications.

</dd>

</dl>