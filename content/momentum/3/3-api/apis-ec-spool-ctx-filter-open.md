---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_filter_open"
description: "ec spool ctx filter open Access the spool in the specified way io object ec spool ctx filter open ctx mess what filename options mode ec spool ctx ctx ec message mess int what const char filename int options int mode Access the spool in the specified way ctx The..."
---

<a name="apis.ec_spool_ctx_filter_open"></a> 
## Name

ec_spool_ctx_filter_open — Access the spool in the specified way

## Synopsis

`#include "spool.h"`

| `io_object * **ec_spool_ctx_filter_open** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">what</var>, |   |
|   | <var class="pdparam">filename</var>, |   |
|   | <var class="pdparam">options</var>, |   |
|   | <var class="pdparam">mode</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`ec_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">what</var>`;
`const char * <var class="pdparam">filename</var>`;
`int <var class="pdparam">options</var>`;
`int <var class="pdparam">mode</var>`;<a name="idp62320672"></a> 
## Description

Access the spool in the specified way.

**<a name="idp62321888"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The spool context.

</dd>

<dt>mess</dt>

<dd>

The message.

</dd>

<dt>what</dt>

<dd>

The filter to use. Legitimate values for this parameter are as follows:

```
#define EC_SPOOL_FILTER_META_READ     1
#define EC_SPOOL_FILTER_META_WRITE    2
#define EC_SPOOL_FILTER_CONTENT_READ  3
#define EC_SPOOL_FILTER_CONTENT_WRITE 4
#define EC_SPOOL_FILTER_OVERLAY_READ  5
#define EC_SPOOL_FILTER_OVERLAY_WRITE 6
#define EC_SPOOL_FILTER_GROWBUF_WRITE 7
#define EC_SPOOL_FILTER_GROWBUF_READ  8
#define EC_SPOOL_FILTER_RSRC_READ     9
#define EC_SPOOL_FILTER_RSRC_WRITE    10
```
</dd>

<dt>filename</dt>

<dd>

The file name.

</dd>

<dt>options</dt>

<dd>

Options can be any combination of the following system constants:

```
O_RDWR
O_CREAT
O_RDONLY
O_WRONLY
O_TRUNC
O_EXCL
```
</dd>

<dt>mode</dt>

<dd>

The octal representation of the file mode.

</dd>

</dl>

**<a name="idp62336208"></a> Return Values**

This function returns an io_object.

**<a name="idp62337136"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62338240"></a> 
## See Also

[“ec_spool_ctx”](/momentum/3/3-api/structs-ec-spool-ctx), [“ec_message”](/momentum/3/3-api/structs-ec-message) and [“io_object”](/momentum/3/3-api/structs-io-object)