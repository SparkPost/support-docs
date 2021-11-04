---
lastUpdated: "03/26/2020"
title: "Post-Installation"
description: "After you install Momentum 4 you will need to perform some additional actions and consider some potential security issues in order to complete your installation Section 12 1 Installing Partner Modules Section 12 2 Reviewing Configuration Files Section 12 3 Rotating Logfiles Section 12 5 Upgrading the Vertica License Section..."
---


After you install Momentum 4, you will need to perform some additional actions and consider some potential security issues in order to complete your installation.

*   [“Installing Partner Modules”](/momentum/4/post-installation#install.additional.packages)

*   [“Reviewing Configuration Files”](/momentum/4/install-post-install-config)

*   [“Rotating Logfiles”](/momentum/4/install-post-install-rotate)

*   [“Upgrading the Vertica License”](/momentum/4/install-vertica-license)

*   [“Security Considerations”](/momentum/4/install-security-considerations)

## <a name="install.additional.packages"></a> Installing Partner Modules

See the specific module documentation for more information.

*   Policy Tools suite – This package contains tools for receivers and requires the pcap library. This gives you passive OS fingerprinting (p0f) and the url_ripper module, needed for SURBL. For more information, see [“url_ripper – URL Extraction”](/momentum/4/modules/url-ripper) and [Passive operating system (OS) fingerprinting](glossary#gloss-p0f "Passive operating system (OS) fingerprinting").

*   Commtouch content scanning – This package provides the CYREN (formerly known as Commtouch) spam protection technology. Only install this module if you have a license from CYREN. For more information, see [“commtouch_ctasd – Commtouch Spam Protection”](/momentum/4/modules/commtouch).

*   Cloudmark Authority® content scanning – This package provides the Cloudmark spam technology. Only install this module if you have a license from Cloudmark. For more information, see [“cloudmark – Cloudmark Authority® Content Scanning”](/momentum/4/modules/cloudmark).

*   Eleven eXpurgate content scanning – This package provides the eXpurgate spam technology. For more information see [“eleven – Eleven eXpurgate Content Scanning”](/momentum/4/modules/eleven).

*   Symantec CSAPI antivirus support – This package provides integration of the Symantec content scanners. Only install this module if you have a license from Symantec. For more information, see [“csapi – Symantec CSAPI Antivirus Support”](/momentum/4/modules/csapi).

*   Symantec Brightmail™ Engine Integration Kit – This package is an in-process version of the Brightmail module. Only install this module if you have a license from Symantec. For more information, see [“beik – Symantec Brightmail™ Engine Integration Kit”](/momentum/4/modules/beik).

*   Symantec Brightmail™ content scanning support – This package checks inbound content against a Symantec Brightmail AntiSpam content server. Only install this module if you have a license from Symantec. For more information, see [“brightmail – Symantec Brightmail™ Content Scanning Support”](/momentum/4/modules/brightmail).

*   Ecelerity Developer Tools – You only need to install these tools if you are compiling your own extensions on the machine on which it is installed. Files related to this package are found under the `/opt/msys/ecelerity` directory.