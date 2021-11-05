---
lastUpdated: "03/26/2020"
title: "command_construct"
description: "This struct is defined as follows To use this struct include the file control h run command 2 and Console Commands..."
---

This struct is defined as follows:

```
struct _command_construct
{
  unsigned short type;
  unsigned short command_len;
  unsigned short mode;
  string command;
  struct ec_auth_info auth_info;
  struct ec_authz_info authz_info;
  unsigned short tus[2];
  char respheader[6];
  string response;
  unsigned int responseoff;
  unsigned writing_header:1;
  unsigned xml:1;
  unsigned _spare:30;

  char *personality;

  int argc;
  const char **argv;
  const char **argv_offsets;

  accept_construct *ac;
  ec_config_header *transaction;

  void *async_ptr;
  ec_control_function2 async_resume_func;
};
```

To use this struct, include the file `control.h`.

### <a name="idp27651008"></a> See Also

[run_command2](/momentum/3/3-api/apis-run-command-2) and [Console Commands](/momentum/3/3-reference/console-commands-summary-table)