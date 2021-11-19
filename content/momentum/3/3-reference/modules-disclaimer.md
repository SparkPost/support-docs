---
lastUpdated: "03/26/2020"
title: "disclaimer – Module"
description: "Use the disclaimer module to append a message to an email For example this module may be used to indicate that an email has been scanned The message will be inserted into the footer of the email Configuration Change In version 3 0 this module is loaded automatically as required..."
---

<a name="idp19167440"></a> 

Use the disclaimer module to append a message to an email. For example, this module may be used to indicate that an email has been scanned. The message will be inserted into the footer of the email.

### <a name="modules.disclaimer.configuration"></a> Configuration

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

### <a name="module.disclaimer.sieve"></a> Sieve Usage

Use the Sieve `disclaimer_add` function to add a plain or an HTML message to an email.

When using `html` as a key, the module will look for all text/html parts that are not attachments and append the HTML disclaimer. When using `plain` as a key, the module will look for all text/plain parts that are not attachments and append the plain disclaimer. If using both, it will look for both, adding the html disclaimer to the html parts, and the plain disclaimer to the plain parts.

### <a name="modules.disclaimer.seealso"></a> See Also

[disclaimer_add](/momentum/3/3-reference/sieve-ref-disclaimer-add)