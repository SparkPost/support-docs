---
lastUpdated: "03/26/2020"
title: "smpp_seg_data"
description: "This struct is defined as follows To use this struct include the file modules mobility smpp smpp util h Chapter 46 SMPP Functions and smpp write seg blob..."
---

This struct is defined as follows:

```
struct smpp_seg_data {
  int segments;
  int request_count;
  unsigned short seg_ref;
  unsigned short next;
  char *tempfailed;
  int *ends;
  char **checklist;
};
```

To use this struct, include the file `modules/mobility/smpp/smpp_util.h`.

### <a name="idp40709328"></a> See Also

[*SMPP Functions*](/momentum/3/3-api/smpp) and [smpp_write_seg_blob](/momentum/3/3-api/apis-smpp-write-seg-blob)