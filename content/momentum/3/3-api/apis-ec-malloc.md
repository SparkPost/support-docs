---
lastUpdated: "03/26/2020"
title: "ec_malloc"
description: "ec malloc Allocate a new instance of a defined object type void ec malloc object type int object type Allocate a new instance of a defined memory type The instance contains uninitialized memory This function is only valid with VSIZE memory type not a fixed size type For more information..."
---

<a name="apis.ec_malloc"></a> 
## Name

ec_malloc — Allocate a new instance of a defined object type

## Synopsis

`#include "ec_malloc.h"`

| `void * **ec_malloc** (` | <var class="pdparam">object_type</var>`)`; |   |

`int <var class="pdparam">object_type</var>`;<a name="idp54669536"></a> 
## Description

Allocate a new instance of a defined memory type. The instance contains uninitialized memory.

### Note

This function is only valid with VSIZE memory type, not a fixed size type. For more information about memory types see [Memory Types](/momentum/3/3-api/arch-primary-apis#arch.memory.types).

Memory allocated by this function must be freed using [ec_free](/momentum/3/3-api/apis-ec-free).

**<a name="idp54673616"></a> Parameters**

<dl class="variablelist">

<dt>object_type</dt>

<dd>

This parameter is an integer indicating a memory type as defined in [the section called “Memory Types”](/momentum/3/3-api/apis-ec-malloc#apis.ec_malloc.types).

</dd>

</dl>

**<a name="idp54676960"></a> Return Values**

This function returns a void pointer to the memory location.

**<a name="idp54677920"></a> Threading**

It is legal to call this function in any thread.

<a name="apis.ec_malloc.types"></a> 
## Memory Types

The buit-in memory types are as follows:

```
enum ec_memory_object_type {
  MEMTYPE_EVENT = 0,
  MEMTYPE_SKIPLIST = 1,
  MEMTYPE_DOMAIN_RECORD = 2,
  MEMTYPE_MX_RECORD = 3,
  MEMTYPE_HOST_RECORD = 4,
  MEMTYPE_CONNECTION = 5, /* This isn't managed by us yet */
  MEMTYPE_CONNECTION_HANDLE = 6,
  MEMTYPE_BUF_STORAGE = 7,
  MEMTYPE_MESSAGE_BODY = 8,
  MEMTYPE_RSPLAYTREE = 9,
  MEMTYPE_RSPLAYTREENODE = 10,
  MEMTYPE_BOUND_SKIPLIST = 11,
  /* 12 is obsolete */
  MEMTYPE_BOUNDCONNECTIONS = 13,
  MEMTYPE_ARES = 14,
  MEMTYPE_RFC2822_CONTEXT = 15,
  MEMTYPE_RFC2822_FIELD = 16,
  MEMTYPE_RFC2822_FIELD_BODY = 17,
  MEMTYPE_EC_SSL_CTX = 18,
  MEMTYPE_MIME_COMPONENT = 19,
  MEMTYPE_CIDRNODE_IPV4 = 20,
  MEMTYPE_SIEVE = 21,
  MEMTYPE_SMALL_BUF = 22,
  MEMTYPE_MEDIUM_BUF = 23,
  /* 24 is obsolete */
  MEMTYPE_WIN32_FILE = 25,
  MEMTYPE_TIME_SERIES = 26,
  MEMTYPE_TIME_SERIES_ARRAY = 27,
  MEMTYPE_SKIPLISTNODE_1 = 28,
  MEMTYPE_SKIPLISTNODE_2 = 29,
  MEMTYPE_SKIPLISTNODE_3 = 30,
  MEMTYPE_SKIPLISTNODE_4 = 31,
  MEMTYPE_SKIPLISTNODE_5 = 32,
  MEMTYPE_SKIPLISTNODE_6 = 33,
  MEMTYPE_SKIPLISTNODE_7 = 34,
  MEMTYPE_SKIPLISTNODE_8 = 35,
  MEMTYPE_SKIPLISTNODE_9 = 36,
  MEMTYPE_SKIPLISTNODE_10 = 37,
  MEMTYPE_SKIPLISTNODE_12 = 38,
  MEMTYPE_SKIPLISTNODE_14 = 39,
  MEMTYPE_SKIPLISTNODE_18 = 40,
  MEMTYPE_SKIPLISTNODE_24 = 41,
  MEMTYPE_SKIPLISTNODE_32 = 42,
  MEMTYPE_BINDINGDOMAINSTATS = 43,
  MEMTYPE_32BIT_SIZED = 44,
  MEMTYPE_64BIT_SIZED = 45,
  MEMTYPE_EC_HASH_TABLE = 46,
  MEMTYPE_DNS_CACHE_CACHENODE = 47,
  MEMTYPE_DNS_CACHE_CLOSURE = 48,
  MEMTYPE_DNS_CACHE_DATA_TUPLE = 49,
  MEMTYPE_DNS_CACHE_DATA = 50,
  MEMTYPE_STRING = 51,
  MEMTYPE_MESSAGE_CONSTRUCT = 52,
  MEMTYPE_EC_MESSAGE_CONSTRUCT = 53, /* obsolete */
  MEMTYPE_SP_CLOSE_INFO = 54,
  MEMTYPE_EC_ASYNC_JOB = 55,
  MEMTYPE_SP_ASYNC_INFO = 56,
  MEMTYPE_MEM_POOL = 57,
  MEMTYPE_CIDRRANGE_NODE_IPV4 = 58,
  MEMTYPE_EC_HASH_BUCKET = 59,
  MEMTYPE_SP_ASYNC_MESSAGE = 60,
  MEMTYPE_MESSAGE_LIST = 61,
  MEMTYPE_DOMAIN_LIST = 62,
  MEMTYPE_UNLINKINFO = 63,
  MEMTYPE_DQ_LIST = 64,
  MEMTYPE_SOFT_BOUNCE = 65,
  MEMTYPE_IP_ACL = 66,
  MEMTYPE_ACCEPT_CONSTRUCT = 67,
  MEMTYPE_EC_AUTH_ASYNC_CONTEXT = 68,
  MEMTYPE_ADDRESS_METRICS = 69,
  MEMTYPE_VALIDATE_DATA = 70,
  MEMTYPE_MESSAGE_ID = 71,
  MEMTYPE_CONN_TYPE_METRICS = 72,
  MEMTYPE_ADDRESS_LIST = 73,
  MEMTYPE_MX_INFO_CLOSURE = 74,
  MEMTYPE_SSL_CTX_RETAINER = 75,
  MEMTYPE_DELIVERY_CONSTRUCT = 76,
  MEMTYPE_SNMP = 77,
  MEMTYPE_TEXT_SEARCH_RESULT_OFFSET = 78,
  MEMTYPE_TEXT_SEARCH_RESULT = 79,
  MEMTYPE_EC_CACHE_T = 80,
  MEMTYPE_EC_CACHE_ELT = 81,
  MEMTYPE_EC_CACHE_KEY = 82,
  MEMTYPE_ARP_ENTRY = 83,
  MEMTYPE_NETLISTENER_INSTANCE = 84,
  MEMTYPE_EC_INTERFACE = 85,
  MEMTYPE_PCRE = 86,
  MEMTYPE_THROTTLE = 87,
  MEMTYPE_EC_MESSAGE = 88,
  MEMTYPE_EC_MESSAGE_HDRS = 89,
  MEMTYPE_EC_MESSAGE_PART = 90,
  MEMTYPE_IO_OBJECT = 91,
  MEMTYPE_MSG_PARSER_STATE = 92,
  MEMTYPE_DNS_DIG = 93,
  MEMTYPE_DOUBLE_LIST_NODE = 94,
  MEMTYPE_MSG_PART_EXTRACTOR = 95,
  MEMTYPE_BLOBJECT = 96,
  MEMTYPE_IS_MALLOC_3C = 97,
  MEMTYPE_MX_ROUTES = 98,
  MEMTYPE_MX_ROUTE_INFO = 99,
  MEMTYPE_CIDRRANGE_VAL_NODE_IPV4 = 100,
  MEMTYPE_CIDRRANGE_VAL_BUCKET_IPV4 = 101,
  MEMTYPE_SPOOL_MID_CONTEXT = 102,
  MEMTYPE_EC_BAG = 103,
  MEMTYPE_CIDRNODE_IPV4_MULTI = 104,
  MEMTYPE_ECDICT = 105,
  MEMTYPE_LEGACY_EMAIL_MESSAGE = 106, /* internal use only */
  MEMTYPE_EMAIL_MESSAGE_PIVOT = 107, /* internal use only */
  MEMTYPE_ECHASH_GAUGE = 108,
  MEMTYPE_WC_PATTERN = 109,
  MEMTYPE_AHO_PATTERN = 110,
  MEMTYPE_AHO_AUTOMATON = 111,
  MEMTYPE_AHO_STATE = 112,
  MEMTYPE_EC_PTR_ARRAY = 113,
  MEMTYPE_ASYNC_TRANSFAIL_INFO = 114,
  MEMTYPE_CIDRNODE_IPV6 = 115,
};
```
<a name="idp54685168"></a> 
## See Also

[ec_free](/momentum/3/3-api/apis-ec-free), [ec_malloc_size](/momentum/3/3-api/apis-ec-malloc-size), [ec_realloc](/momentum/3/3-api/apis-ec-realloc), [*Memory Functions*](/momentum/3/3-api/3-api-memory) [ec_mt_strndup](/momentum/3/3-api/apis-ec-mt-strndup) and [ec_mt_strdup](/momentum/3/3-api/apis-ec-mt-strdup).