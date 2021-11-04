---
lastUpdated: "03/26/2020"
title: "Installing Additional Packages"
description: "If you are installing Momentum with the mta role after entering your admin and service account password you will be asked whether you wish to install additional packages The additonal packages vary depending upon whether you are installing Momentum receiving or sending Not all packages are supported on all operating..."
---

If you are installing Momentum with the `mta` role, after entering your admin and service account password you will be asked whether you wish to install additional packages.

### Note

The additonal packages vary depending upon whether you are installing Momentum receiving or sending. Not all packages are supported on all operating systems (OS). See the specific module documentation for more information.

These packages are as follows:

*   The Policy Tools suite – This package contains tools for receivers and requires the pcap library. This gives you passive OS fingerprinting (p0f) and the url_ripper module, needed for SURBL. For more information see [“url_ripper – URL Extraction”](/momentum/3/3-reference/3-reference-modules-url-ripper) and [Passive operating system (OS) fingerprinting](glossary#gloss-p0f "Passive operating system (OS) fingerprinting").

*   Commtouch content scanning – This package provides the Commtouch spam protection technology. Only install this module if you have a license from Commtouch. For more information see [“commtouch_ctasd – Commtouch_ctasd Module”](/momentum/3/3-reference/3-reference-modules-commtouch).

*   Cloudmark content scanning – This package provides the Cloudmark spam technology. Only install this module if you have a license from Cloudmark. For more information see [“cloudmark – Cloudmark Authority Module”](/momentum/3/3-reference/3-reference-modules-cloudmark).

*   Eleven eXpurgate content scanning – This package provides the eXpurgate spam technology. For more information see [“eleven – Module”](/momentum/3/3-reference/3-reference-modules-eleven).

*   The Image Analyzer imageanalyzer – This package is only supported for Red Hat 5 32 bit operating systems.

*   Symantec CSAPI Antivirus support – This package provides integration of the Symantec content scanners. Only install this module if you have a license from Symantec. For more information see [“csapi – The Content Scanning API Module”](/momentum/3/3-reference/3-reference-modules-csapi).

*   Symantec Brightmail Engine Integration Kit – This package is an in-process version of the Brightmail module. Only install this module if you have a license from Symantec. For more information see [“beik – BEIK Module”](/momentum/3/3-reference/3-reference-modules-beik).

*   Symantec Brightmail content scanning support – This package checks inbound content against a Symantec Brightmail AntiSpam content server. Only install this module if you have a license from Symantec. For more information see [“brightmail – Brightmail Module”](/momentum/3/3-reference/3-reference-modules-brightmail).

*   Ecelerity developer tools – You only need to install these tools if you are compiling your own extensions on the machine on which it is installed. Files related to this pacakage are fiund under the `/opt/msys/ecelerity` directory.

### <a name="install.additional.packages.lbu"></a> Live Bounce Updates

**Configuration Change. ** This feature is available starting from Momentum 3.1.

As of version 3.1, the installer asks if you would like to enable the Live Bounce Updates uploading functionality.

Enabling Live Bounce Updates means that your unclassified bounce data is submitted to the Message Systems online update service. These bounces are then classified and included in a future Live Bounce Updates override file that is automatically downloaded. The unknown bounces sent back to Message Systems are submitted anonymously. This service requires outbound port 443.

For more information about Live Bounce Updates, see [“Live Bounce Updates – Module”](/momentum/3/3-reference/3-reference-modules-live-bounce-updates).

As of version 3.1, the Live Bounce Updates service is provided free of charge with your support agreement. Previously this service was a paid subscription service.

For your convenience, the question asked during installation is reproduced below:

```
Live Bounce Updates
  ===================

  Message Systems Live Bounce Updates ensures you automatically receive the
  latest bounce classification rules as quickly as possible. The Live Bounce
  Update rule set works in conjunction with any existing user bounce override
  rules, with user rules taking precedence. Message Systems' support offering
  for the Momentum product includes the Live Bounce Updates service at no
  additional cost.

  Live Bounce Updates is enabled by default when installing Momentum 3.1 or
  higher when bounce_logger is enabled in ecelerity.conf.

  To help improve the effectiveness of the Live Bounce Update classification
  rules, you can automatically upload your anonymized bounce data to Message
  Systems. That data will be analyzed and used to update and improve our
  classification rules. For additional information on this service, or to
  change options at any time in the future, please see the online support
  documentation.

  Do you want to enable LBU uploading of anonymized bounce data (Requires
  outbound TCP to support.messagesystems.com on port 443)? (y,n)
```

If, after enabling Live Bounce Updates during installation, you wish to disable this service see [“Disabling Live Bounce Updates”](/momentum/3/3-reference/3-reference-modules-live-bounce-updates#modules.live.bounce.updates.disabling).

### <a name="install.additional.packages.adaptive.updates"></a> Adaptive Delivery Rule Updates

**Configuration Change. ** This feature is available as of version 3.2.

As of version 3.2, the installer asks if you would like to enable the Apaptive delivery update functionality.

To use this server you must have Adaptive Delivery enabled in your license. To enable this service, answer `y` to the following question:

```
Adaptive Delivery Rules Update
==============================

If you have Adaptive Delivery enabled in your license, you can set the
server to automatically download Rule updates.  Do you want to enable
Adaptive Rules downloading (Requires outbound TCP to support.messagesystems.com
on port 443)? (y,n)
```

You can also update Adaptive rules manually. To do this see [Automated Updates for the Adaptive Rules](/momentum/3/3-ad/ad-adaptive-update).

To find out more about the adaptive module see [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive). To disable updates after installation see [“Adaptive Rule Updates”](/momentum/3/3-reference/3-reference-modules-live-bounce-updates#modules.live.updates.adaptive).