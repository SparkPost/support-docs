---
lastUpdated: "03/26/2020"
title: "SIEVEARGS (sieve_ast)"
description: "This struct is defined as follows The sieve ast struct is typedef ed as follows typedef struct sieve ast SIEVEARGS To use this struct include the file sieve sieve parser internals h Chapter 44 Sieve Functions..."
---

This struct is defined as follows:

```
typedef struct sieve_ast AST;
typedef struct _token_value SIEVETOKEN;

struct sieve_ast {
  int op;
  AST *next;
  AST **args;
  int nargs;  /* number of actual args */
  int margs;  /* number of arg slots */
  SIEVETOKEN value;
  ec_atomic_t refcount;
};
struct _token_value {
  enum { TV_VOID, TV_NUMBER, TV_STRING, TV_AST, TV_ACT, TV_HASH, TV_TAG } type;
  union {
    /* RFC3028: all numbers are unsigned and MUST provide
     * at least 31 bits */
    int32_t number;
    string str;
    AST *ast;
    sieve_extension_action *act;
    ec_hash_table *hash;
  } v;
  sieve_accelerator a;
  int lineno;
};
typedef struct _sieve_accelerator {
  enum { TAC_NONE, TAC_PCRE, TAC_USER, TAC_AHO } type;
  int can_accel;
  union {
    ec_pcre_elt *pcre_work;
    void *userdata;
    struct {
      ac_automaton_t *machine;
      ec_hash_table *by_len;
    } aho_work;
  } work;
} sieve_accelerator;
```

The `sieve_ast` struct is typedef'ed as follows: `typedef struct sieve_ast SIEVEARGS;`.

To use this struct, include the file `sieve/sieve-parser-internals.h`.

### <a name="idp34345728"></a> See Also

[*Sieve Functions*](/momentum/3/3-api/3-api-sieve)