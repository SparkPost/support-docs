---
lastUpdated: "03/26/2020"
title: "The MCMT Format"
description: "Modules and subsystems wanting to obtain and process the optional parts of an MCMT message must use the message resources API which is under the ec message rsrc namespace See Figure A 1 MCMT message flow for a simplified control flow of MCMT A MCMT message is a MIME message..."
---

Modules and subsystems wanting to obtain and process the optional parts of an MCMT message must use the message resources API which is under the `ec_message_rsrc` namespace. (See [“MCMT message flow”](/momentum/mobile/mobile-developer-guide/mob-dev-guide-mcmt#figure.mcmt) for a simplified control flow of MCMT.)

A MCMT message is a MIME message laid out as follows:

```
Content-Type: multipart/vnd.msys.mcmt; boundary=MCMT_BOUNDARY

--MCMT_BOUNDARY
Content-Type: message/rfc822

From: sender@example.com
Subject: this is the email
Content-Type: text/plain

Notice how the complete email message is the *body* of the
message/rfc822 portion of this MIME payload

--MCMT_BOUNDARY
Content-Type: message/vnd.msys.smpp

This is the message that will be sent out over SMPP.

--MCMT_BOUNDARY
Content-Type: message/vnd.msys.mm7

<This is the MM7 payload>

--MCMT_BOUNDARY--
```

In the context of Mobile Momentum, MCMT is a multi-part MIME format with the following capabilities:

*   It enables content authors to create messages containing separate sections for email, SMS, and MM7 recipients.

*   It is extensible to other formats.

*   It is injectable via email

An example of the injection format for Mobile Momentum follows:

<a name="idp1317216"></a> 


```
From: Someone <someone@messagesystems.com>
To: 12345678790 <1234567890@somewhere.com>
Date: Fri, 01 Oct 2010 09:41:09 -0800 (PST)
Subject: Sample MCMT message
MIME-Version: 1.0
Content-Type: multipart/vnd.msys.mcmt; boundary=boundaryMCMT

--boundaryMCMT
Content-Type: message/rfc822

(email part is here)
--boundaryMCMT
Content-Type: multipart/vnd.msys.mm7;

Content-Type: multipart/related; boundary=boundaryMM7; type="text/xml"; »
  start="<soap_envelope>"
X-Transaction-Id: soap_transaction_id_used_for_logging_purpose_only
--boundaryMM7
Content-Type: text/xml
Content-ID: <soap_envelope>

(mm7 soap envelope is here)

--boundaryMM7
Content-Type: multipart/related
Content-ID: <soap_attachment>

(mm7 mime payload is here)

--boundaryMM7--

--boundaryMCMT
Content-Type: message/vnd.msys.smpp

short message text body

--boundaryMCMT--
```

### <a name="idp1319856"></a> Content Sections

The content section definitions follow. Each definition describes the Content-Type header, section/type dependent headers, and body/payload parts.

*   `Email Part` – the remainder of the email part contains the email rendering of the MCMT message. The Content-Type header is: `Content-Type: message/rfc822`

*   `SMS Part` – SMS Part The body of SMS section of the MCMT is the short message. The Content-Type header is: `Content-Type: message/vnd.msys.smpp; charset=utf-8`

*   `MM7 Part` – The body of the MM7 section. The Content-Type header is: `Content-Type: multipart/vnd.msys.mm7`

    The MIME part in the MM7 section can be either a valid HTTP payload for MM7 (i.e. a SOAP envelope as the first part and a MIME attachment as the second part), or a valid MIME part without a SOAP envelope.

When the MCMT MM7 section encloses a SOAP envelope, the "Content-Type" header must have the parameter 'type="text/xml"' to indicate the presence of the SOAP envelope, along with the "start" and "boundary" parameters. The header "X-Transaction-ID" must also be defined and consistent with the transaction-id in the SOAP envelope, though it is only used for logging purpose. For example:

<a name="example.soap.envelope"></a> 


```
Content-Type: message/vnd.msys.mm7;

Content-Type: multipart/related; type="text/xml"; start="<main_envelope>"; boundary="XXXX-MM7-boundary"; charset=utf-8
X-Transaction-Id: test_transaction_id

--XXXX-MM7-boundary
Content-Type: text/xml
Content-Disposition: inline
Content-ID: &lt;main_envelope>

&lt;?xml version="1.0" encoding="UTF-8"?>
<env:Envelope
    xmlns:env="http://schemas.xmlsoap.org/soap/envelope/">
  <env:Header>
    <mm7:TransactionID xmlns:mm7="http://www.3gpp.org/ftp/Specs/archive/23_series/»
    23.140/schema/REL-5-MM7-1-0" env:mustUnderstand="1">test_transaction_id</»
    mm7:TransactionID>
  </env:Header>

  <env:Body>
    <SubmitReq xmlns="http://www.3gpp.org/ftp/Specs/archive/23_series/23.140/schema/»
    REL-6-MM7-1-4">
        <MM7Version>6.8.0</MM7Version>
        <SenderIdentification>
          <VASPID>MessageSystems-VASPID</VASPID>
          <VASID>MessageSystems-VASID</VASID>
        </SenderIdentification>
        <Recipients>
          <To>
            <Number>4108470189</Number>
            <RFC2822Address displayOnly="true">julie@mmsc.messagesystems.com</»
            RFC2822Address>
          </To>
        </Recipients>
        <Subject>MCMT</Subject>
        <Content href="cid:mm7_test_mime_content_id-1" allowAdaptations="true"/>
            </SubmitReq>
  </env:Body>
</env:Envelope>

--XXXX-MM7-boundary
Content-Id: <mm7_test_mime_content_id-1>
Content-Type: multipart/mixed;
        boundary="XXXX-MM7-attachment-boundary"

This is a multipart message in MIME format.

--XXXX-MM7-attachment-boundary
Content-Type: text/plain

this is the body text

--XXXX-MM7-attachment-boundary
Content-Type: text/plain;
Content-Disposition: attachment;
        filename="test.txt"

this is the attachment text

--XXXX-MM7-attachment-boundary--

--XXXX-MM7-boundary--
```

The SOAP envelope in the MCMT MM7 section is optional. **Momentum does not yet support the SOAP envelope shown in [“With a SOAP Envelope”](/momentum/mobile/mobile-developer-guide/mobility-mcmt-injection#example.soap.envelope).**                                                                                                                                                                           The following example shows a MCMT MM7 part without a SOAP envelope:

<a name="example.no.soap.envelope"></a> 


```
Content-Type: message/vnd.msys.mm7

Content-Id: <mm7_test_mime_content_id-1>
Content-Type: multipart/mixed;
        boundary="XXXX-MM7-attachment-boundary"

This is a multipart message in MIME format.

--XXXX-MM7-attachment-boundary
Content-Type: text/plain

this is the body text

--XXXX-MM7-attachment-boundary
Content-Type: text/plain;
Content-Disposition: attachment;
        filename="test.txt"

this is the attachment text

--XXXX-MM7-attachment-boundary--
```