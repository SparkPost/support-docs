---
lastUpdated: "03/26/2020"
title: "ec_message_part"
description: "The members of this struct are as follows To use this struct include the file ec message h Section 68 38 ec message and Chapter 34 Message Functions..."
---

The members of this struct are as follows:

```
struct _ec_message_hdrs {
  ec_atomic_t ref;
  rfc2822_context rfc2822ctx;
  unsigned rfc2822ctx_valid:1;
};

struct _ec_message_part {
  ec_atomic_t ref;
  ec_message_hdrs *headers;

  ec_mime_component_type type;
  ec_mime_encoding_type  encoding;
  /**
   * If this part contains other parts, boundary and boundary_len
   * indicate the boundary text used to separate those contained
   * parts.
   * This part owns the boundary string, and it must have been allocated
   * as MEMTYPE_MESSAGE_BODY.
   */
  char *boundary;
  int boundary_len;
  int preamble_len;

  /* we own refs on NEXT and PARTS.
   * THREAD and PARENT are weak references; we don't
   * own those parts so we don't own refs */
  ec_message_part *next, *parts, *thread, *parent;

  io_object *body;

/*

Mime-Version: 1.0
Content-Type: multipart/mixed; boundary=foo
Subject: foo

--foo
Content-Type: text/plain; name=foobar.bat

echo foobar

--foo--

.

The above message is represented by a part containing the top level
information:

top:
 headers_start = 0
 preamble_start = blank line before the first --foo
 body_start = first --foo
 body_end = the blank line after --foo--
 epilogue_end = .CRLF

it contains a single part:
 headers start = Content-Type
 preamble_start = body_start = echo foobar
 body_end = epilogue_end = blank line before --foo--

this allows re-assembly of the message using alternate boundary markers,
if required, and to easily get at just the content pieces that are required.

*/

  /** offset from start of body stream to the headers for this part. */
  off_t headers_start;
  /** offset from start of body stream to the preamble for this part. */
  off_t preamble_start;
  /** offset from start of body stream to the actual body content for this part */
  off_t body_start;
  /** offset from start of body stream to the end of the actual body content for this part */
  off_t body_end;
  /** offset from start of body stream to the end of the epilogue for this part */
  off_t epilogue_end;

  /* we did a cheap parse; will need to do a full parse if someone
   * wants to walk each part */
  unsigned did_cheap_parse:1;

  int touched;
};
```

To use this struct, include the file `ec_message.h`.

### <a name="idp41181408"></a> See Also

[“ec_message”](/momentum/3/3-api/structs-ec-message) and [*Message Functions*](/momentum/3/3-api/ec-message) .