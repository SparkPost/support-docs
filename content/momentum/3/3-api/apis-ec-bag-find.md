---
lastUpdated: "03/26/2020"
title: "ec_bag_find"
description: "ec bag find Find something in the specified bag void ec bag find bag typedname ec bag bag const char typedname Find something in the specified bag The default behavior is to attempt to find the type and then attempt to locate the type within other types provided that the..."
---

<a name="apis.ec_bag_find"></a> 
## Name

ec_bag_find — Find something in the specified bag

## Synopsis

`#include "ec_boh.h"`

| `void * **ec_bag_find** (` | <var class="pdparam">bag</var>, |   |
|   | <var class="pdparam">typedname</var>`)`; |   |

`ec_bag * <var class="pdparam">bag</var>`;
`const char * <var class="pdparam">typedname</var>`;<a name="idp47339952"></a> 
## Description

Find something in the specified bag. The default behavior is to attempt to find the type, and then attempt to locate the type within other types, provided that the original type is known.

The second parameter may look redundant, but since we're dealing with void pointers, it allows us a sanity check that the type we are returning is still correct in cases where the type of a structure member changes. For example:

```
struct foo {
  email_message *message;
};
```

Suppose the preceding code was changed to:

```
struct foo {
  ec_message *message;
};
void *m = foo->message;
```

This code will compile happily and return us something when asked for a message, but that something will not be what we were looking for. For this reason, we assign to a typed local variable first before returning so that the compiler will warn us about changes of this kind.

**<a name="idp47344752"></a> Parameters**

<dl class="variablelist">

<dt>bag</dt>

<dd>

The bag we are looking in.

</dd>

<dt>typedname</dt>

<dd>

The data type that we are looking for.

</dd>

</dl>

**<a name="idp47349328"></a> Return Value**

This function returns a void pointer to the named data type.

**<a name="idp47350288"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47351392"></a> 
## See Also

[ec_bag_create](/momentum/3/3-api/apis-ec-bag-create)