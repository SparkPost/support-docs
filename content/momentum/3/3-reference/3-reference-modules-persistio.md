---
lastUpdated: "03/26/2020"
title: "persist_io – Persistent IO Wrapper"
description: "The persist io module provides a non volatile cache wrapper for any other IO wrapper For example one could load a file over the HTTP IO wrapper such that if the HTTP server is down then the consumer of the file will be provided with the locally cached copy An..."
---

<a name="idp20774032"></a> 

The `persist_io` module provides a non-volatile cache wrapper for any other IO wrapper. For example, one could load a file over the HTTP IO wrapper, such that if the HTTP server is down then the consumer of the file will be provided with the locally cached copy. An example of how to use the persist IO wrapper with the HTTP IO wrapper to load a script in the Sieve module is below:

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

<a name="example.persist_io.3"></a> 


```
persist_io {
  dirmode = 0700
}
sieve "sieve1" {
  script "connect_phase1" {
    source = "persist://http://www.foo.com/mysievescript.siv"
  }
}
```

It should not be necessary to use this module in version 3.0, since the configuration repository functionality provides for persistent configurations that can be centrally managed.

Find below a description of the configuration options for the `persist_io` module.

<dl class="variablelist">

<dt>dirmode</dt>

<dd>

The octal representation of the permissions for the directory that holds the cached files. The default value is `0700`

</dd>

<dt>filemode</dt>

<dd>

The octal representation of the permissions for cached files. The default value is `0600`

</dd>

<dt>persist_path</dt>

<dd>

The path to the directory that holds the cached files. The default value is `/var/log/ecelerity/persist`.

</dd>

</dl>