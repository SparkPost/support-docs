---
lastUpdated: "03/26/2020"
title: "SIEVE (sieve_state)"
description: "This struct is defined as follows The struct sieve state is typedef ed in the following way typedef struct sieve state SIEVE To use this struct include the file sieve parser internals h Chapter 44 Sieve Functions..."
---

This struct is defined as follows:

```
struct _sieve_state {
  char *source;
  AST *commands;
  SIEVEOP *ops;
  int nops;
  int errors;

  ECDict  required; /* things that the script declared as required */

  unsigned int needs; /* SIEVEREQ_XXX mask */

  string *error_log;  /* sieve_error() appends output here if set */

  ec_atomic_t refcount;

  int skip_requires; /* if non-zero, a missing requires is not a problem */
};
```

The struct `_sieve_state` is typedef'ed in the following way: `typedef struct _sieve_state SIEVE;`

To use this struct, include the file `sieve-parser-internals.h`.

### <a name="idp41232864"></a> See Also

[*Sieve Functions*](/momentum/3/3-api/3-api-sieve)