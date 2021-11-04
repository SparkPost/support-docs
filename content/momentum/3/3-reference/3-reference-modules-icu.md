---
lastUpdated: "03/26/2020"
title: "icu – ICU"
description: "The International Component for Unicode ICU is a mature portable set of C C libraries for Unicode support software internationalization I 18 N and globalization G 11 N giving applications the same results on all platforms The icu module for Momentum leverages ICU s robust set of unicode character set..."
---

<a name="idp20085968"></a> 

The International Component for Unicode (ICU) is a mature, portable set of C/C++ libraries for Unicode support, software internationalization (I18N) and globalization (G11N), giving applications the same results on all platforms. The icu module for Momentum leverages ICU's robust set of unicode character set handling facilities to assist converting between various character sets and UTF-8.

### <a name="idp20088432"></a> Configuration

ICU configuration is very simple. It takes no configuration parameters and enabling ICU is accomplished by adding the following to your configuration:

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

### Note

If you are deploying on the GA release of Solaris 10, and icu fails to load because libicuuc.so.3 or liblcudata.so.3 is not found, you need to apply Sun patch #119810 to resolve this issue.