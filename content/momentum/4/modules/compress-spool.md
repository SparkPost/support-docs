---
lastUpdated: "03/26/2020"
title: "compress_spool – Dynamic Spool Compression"
description: "One of the principle bottlenecks in handling a large amount of inbound mail is writing spool messages to disk on reception and then reading them back from disk again when they need to be delivered The spool compression module attempts to assist in the IO demands of large messages by..."
---

<a name="idp20619744"></a> 

One of the principle bottlenecks in handling a large amount of inbound mail is writing spool messages to disk on reception and then reading them back from disk again when they need to be delivered. The spool compression module attempts to assist in the IO demands of large messages by compressing them prior to writing them to disk. This module is primarily useful on systems which have IO bottlenecks but CPU to spare.

### Warning

This module will fail to load if you set the configuration option `Use_MMAP` to `true`. For more information about this option, see [use_mmap](/momentum/4/config/ref-use-mmap).

### <a name="modules.compress_spool.configuration"></a> Configuration

This module is loaded automatically as required and does not need to be explicitly included. Include it if you wish to change the default values.

The following is an example configuration that enables compression of spool entries over 32k in size:

<a name="example.compress_spool.3"></a> 


```
compress_spool {
  compress = "bzip2"
  minimum_size = 32768
  read_only = 1
}
```

In this example, messages greater than or equal to 32768 will be stored using bzip2 compression.

The following are the configuration options defined within this module:

<dl class="variablelist">

<dt>minimum_size</dt>

<dd>

Messages greater than or equal to the minimum size will be stored with compression. Anything under the minimum_size will be spooled directly to disk uncompressed. Default value is `4096`.

</dd>

<dt>read_only</dt>

<dd>

Default value is `0`.

</dd>

<dt>compress</dt>

<dd>

The default compression algorithm is gzip. The gzipio module is loaded automatically as required and does not need to be explicitly included.

bzip2 compression is also available. The "bzip2io {}" stanza is not necessary as it loads on demand when the compress spool module attempts to use the "bzip2" io wrapper.

</dd>

</dl>

### Warning

This module compresses the spool messages in place. If you enable this module, you MUST be certain that the queue is empty before you disable it, or else you risk sending compressed messages without decompressing them.