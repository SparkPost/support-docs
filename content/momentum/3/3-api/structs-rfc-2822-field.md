---
lastUpdated: "03/26/2020"
title: "rfc2822_field"
description: "The members of this struct are as follows To use this struct include the file rfc 2822 parser h rfc 2822 header stringwrite ex and rfc 2822 header append line..."
---

The members of this struct are as follows:

```
struct _rfc2822_field_body {
  char *line;
  int line_len;
  /* cleanup logic for this structure is:
   * if (line_should_free) {
   *   if (wsp_pad) {
   *     ec_free(MEMTYPE_MESSAGE_BODY, wsp_pad);
   *   } else {
   *     ec_free(MEMTYPE_MESSAGE_BODY, line);
   *   }
   * }
   * Rather than code this by hand, it is better to
   * use rfc2822_free_header() to destroy a header
   * correctly, and always replace a header with your
   * own freshly made replacement rather than directly
   * modifying a field_body that you didn't allocate.
   */
  int line_should_free;
  char *wsp_pad;
  int wsp_pad_len;
  struct _rfc2822_field_body *next;
};

struct _rfc2822_field {
  char *field;
  int field_len;
  int field_should_free;
  rfc2822_field_body body;
  struct _rfc2822_field *next;
};
```

To use this struct, include the file `rfc2822_parser.h`.

### <a name="idp34349808"></a> See Also

[rfc2822_header_stringwrite_ex](/momentum/3/3-api/apis-rfc-2822-header-stringwrite-ex) and [rfc2822_header_append_line](/momentum/3/3-api/apis-rfc-2822-header-append-line)