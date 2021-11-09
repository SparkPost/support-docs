---
lastUpdated: "03/26/2020"
title: "rfc2822_context"
description: "The members of this struct are as follows To use this struct include the file rfc 2822 parser h Section 68 67 rfc 2822 field and rfc 2822 find first header..."
---

The members of this struct are as follows:

```
struct _rfc2822_context {
  struct _rfc2822_field *headers;
  char *header_crutch;
  const char *body;
  struct timeval now;
  int body_len;
  unsigned body_should_free:1;
  unsigned needs_reassembly:1;
  unsigned had_date:1;
  unsigned add_date_if_needed:1;
  unsigned needs_crlf_dot_crlf:1;
  unsigned pedantic_crlf_headers:1;
  unsigned pedantic_crlf_body:1;
  unsigned pedantic_max_line_length:2;
};
```

To use this struct, include the file `rfc2822_parser.h`.

### <a name="idp34505104"></a> See Also

[“rfc2822_field”](/momentum/3/3-api/structs-rfc-2822-field) and [rfc2822_find_first_header](/momentum/3/3-api/apis-rfc-2822-find-first-header)