---
title: "71.53. persist_io – Persistent IO Wrapper"
description: "The persist io module provides a non volatile cache wrapper for any other IO wrapper For example one could load a file over the HTTP IO wrapper such that if the HTTP server is down then the consumer of the file will be provided with the locally cached copy This..."
---

<a name="idp22451296"></a> 

The `persist_io` module provides a non-volatile cache wrapper for any other IO wrapper. For example, one could load a file over the HTTP IO wrapper, such that if the HTTP server is down then the consumer of the file will be provided with the locally cached copy. This module is loaded automatically as required and does not need to be explicitly included.

### <a name="modules.persistio.configuration"></a> 71.53.1. Configuration

<a name="example.persist_io.3"></a> 

**Example 71.78. persist_io module**

```
persist_io {
  dirmode = 0700
}
```

It should not be necessary to configure this module since the configuration repository functionality provides for persistent configurations that can be centrally managed. Should you need to configure the module, refer to the configuration options below:

<dl class="variablelist">

<dt>dirmode</dt>

<dd>

The octal representation of the permissions for the directory that holds the cached files. The default value is `0700`.

</dd>

<dt>filemode</dt>

<dd>

The octal representation of the permissions for cached files. The default value is `0600`.

</dd>

<dt>persist_path</dt>

<dd>

The path to the directory that holds the cached files. The default value is `/var/log/ecelerity/persist`.

</dd>

</dl>