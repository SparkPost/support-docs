---
lastUpdated: "03/26/2020"
title: "sieve_parse_args"
description: "sieve parse args Parses arguments for a Sieve extension int sieve parse args args errbuf errbuflen offset fmt SIEVEARGS args char errbuf int errbuflen int offset const char fmt This function parses arguments for a Sieve extension args The arguments to parse errbuf The buffer to hold the reason for..."
---

<a name="apis.sieve_parse_args"></a> 
## Name

sieve_parse_args — Parses arguments for a Sieve extension

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_parse_args** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">errbuf</var>, |   |
|   | <var class="pdparam">errbuflen</var>, |   |
|   | <var class="pdparam">offset</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;
`char * <var class="pdparam">errbuf</var>`;
`int <var class="pdparam">errbuflen</var>`;
`int <var class="pdparam">offset</var>`;
`const char * <var class="pdparam">fmt</var>`;
`<var class="pdparam">...</var>`;<a name="idp60369904"></a> 
## Description

This function parses arguments for a Sieve extension.

**<a name="idp60371136"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The arguments to parse.

</dd>

<dt>errbuf</dt>

<dd>

The buffer to hold the reason for an error.

</dd>

<dt>errbuflen</dt>

<dd>

The size of `errbuf` in bytes.

</dd>

<dt>offset</dt>

<dd>

Which argument to treat as the first.

</dd>

<dt>fmt</dt>

<dd>

A format string that specifies the types of the arguments that you expect.

</dd>

<dt>...</dt>

<dd>

The variable argument(s).

</dd>

</dl>

The format string can be composed from the following place holders:

*   `?` – indicates that the next placeholder is optional. If the argument is not present, then the corresponding variadic arguments will be skipped over unmodified, allowing you to initialize to some default value.

*   `%` – expects a hash parameter. Corresponds to the address of a SIEVEARGS * to hold the hash pointer.

*   `s` – expects a string parameter. Corresponds to the address of a const char * and the address of an int to receive the string and its length.

*   `i` – expects a numeric parameter. Corresponds to the address of a SIEVEARGS * and an u_int32_t to receive its value.

*   `@` – expects a stringlist. Corresponds to the address of a SIEVEARGS* to hold the stringlist pointer.

*   `*` – expects any Sieve value. Corresponds to the address of a SIEVEARGS * to hold the pointer.

*   `:{COMPARATOR}` – an optional Sieve comparator specifier. Corresponds to an int * arg that will be set to one of the `SIEVE_COMP_XXX` comparator identifiers.

*   `:{ADDRESS-PART}` – an optional addressing qualifier, such as `:localpart` or `:domain`. Corresponds to an int * arg that will be set to one of the `SIEVE_ADDRPART_XXX` addressing identifiers.

*   `:{MATCH-TYPE}` – an optional match type specifier, such as `:is`, `:contains` or `:matches`. Corresponds to two int* args that will be set to one of the `SIEVE_MATCH_XXX` identifiers and `SIEVE_REL_XXX` identifiers.*

*   `:{name`} expects a tagged argument `:name` to be present. Has no corresponding argument, unless prefixed by a `?`, in which case the argument must be the address of an int that will be set to `1` if the parameter is present.

*   `:{name:s}` – expects `:name` followed by a string. Corresponding args are as though you specified `s`. The Boolean flag that `:{name}` would have had does not apply to this case. You may specify any argument specifiers inside the curly braces, except for additional tagged argument names (rfc3028 forbids that usage style).

*   `?:{name=i}` – `:name` is optional. Corresponding args are &int, int. The former will be updated to the value of the latter. This can be used to implement mutually exclusive tags. See the example below.

Find below some examples with error handling omitted:

```
const char *str; int str_len; 
sieve_parse_args(args, errbuf, sizeof(errbuf), 0, 's', &str, &str_len);
```

```
SIEVEARGS *arg; 
sieve_parse_args(args, errbuf, sizeof(errbuf), 0,
'@', &arg);
sieve_parse_args(args, errbuf, sizeof(errbuf), 0,
'%', &arg); 
sieve_parse_args(args, errbuf, sizeof(errbuf), 0,
'*', &arg);
```

```
u_int32_t num; sieve_parse_args(args, errbuf, sizeof(errbuf), 0,
'i', &num);
```

```
// requires that :tagged be in the args 
sieve_parse_args(args, errbuf, sizeof(errbuf), 0, ':{tagged}');
```

```
// :tagged is optional 
int tagged = 0; 
sieve_parse_args(args, errbuf, sizeof(errbuf), 0, '?:{tagged}', &tagged);
```

```
// mutually exclusive tags.
// selected will be set to either USE_LOCALPART or USE_DOMAIN 
// depending on whether :localpart or :domain tags were found. 
// or left at 0 if neither were present.
int selected = 0; 
sieve_parse_args(args, errbuf, sizeof(errbuf), 0, '?:{localpart=i}?:{domain=i}',
&selected, USE_LOCALPART, &selected, USE_DOMAIN);
```
**<a name="idp60415456"></a> Return Values**

On success this function returns `1`, zero on failure.

**<a name="idp60416848"></a> Threading**

It is legal to call this function in any thread.