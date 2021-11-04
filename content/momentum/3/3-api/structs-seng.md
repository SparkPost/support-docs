---
lastUpdated: "03/26/2020"
title: "SENG (sieve_engine)"
description: "This struct is defined as follows The sieve engine struct is typedef ed in the following way typedef struct sieve engine SENG To use this struct include the file sieve parser internals Chapter 44 Sieve Functions..."
---

This struct is defined as follows:

```
struct sieve_engine {
  SIEVE *sieve;       /* which script */
  ec_message *_vmsg;
  validate_context *ctx;
  accept_construct *ac;
  char *phase;
  int plen;
  struct {
    rfc2822_context rfc2822ctx;
    ec_mime_context mimectx;
    int mime_error;
    unsigned valid_rfc2822:1;
    unsigned valid_mimectx:1;
  } legacy;

  /* misc bits for actions to draw upon at runtime */
  ec_bag *bag;

  int rc; /* return code */
  int pc; /* program counter */

  Event *session;
  int dns_complete;

  SIEVEARGS *rv;        /* return value, for assignment */
  ec_hash_table *variables;   /* maps variable names to SIEVEVARs */

  unsigned should_free_ac:1;
  unsigned can_go_async:1;
  /* if true, then we last use the message in a legacy context */
  unsigned legacy_msg:1;
  unsigned orig_was_legacy:1;
  unsigned _spare:4;

  SIEVEARGS *args;  /* argument context for next extension action call */
  SIEVEARGS *arg_stringlist; /* stringlist being built for insertion into args */

  void *module_data; /* for extension actions to use to stash data when returning SIV_AGAIN */

  /* when we reach the end of the current program, pop the opstack */
  struct sieve_op_stack *opstack;

  int error_mode;
  int can;
};
```

The `sieve_engine` struct is typedef'ed in the following way: `typedef struct sieve_engine SENG;`.

To use this struct, include the file `sieve-parser-internals`.

### <a name="idp34493376"></a> See Also

[*Sieve Functions*](/momentum/3/3-api/3-api-sieve)