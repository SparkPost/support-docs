---
lastUpdated: "03/26/2020"
title: "SMPP_PDU"
description: "This struct is defined as follows To use this struct include the file modules mobility smpp c Chapter 46 SMPP Functions..."
---

This struct is defined as follows:

```
/* used pre-processor to expand union pdu_u so that APIScan doesn't need
 * further heavy lifting. If smpp_pdu.def changes (e.g. smpp command def
 * needs changes), the expanded union may need to be regenerated.*/
/* 
union pdu_u {
  #define OPTIONAL_BEGIN
  #define TLV_INTEGER(name, octets) unsigned long name;
  #define TLV_NULTERMINATED(name, max_len) string *name;
  #define TLV_OCTETS(name, min_len, max_len) string *name;
  #define TLV_LIST(name, size) ec_ptr_array name;
  #define OPTIONAL_END
  #define INTEGER(name, octets) unsigned long name;
  #define NULTERMINATED(name, max_octets) string *name;
  #define NULDELIMITED(name, max_octets) string *name;
  #define OCTETS(name, field_giving_octets) string *name;
  #define PDU(name, id, fields) struct name { fields } name;
  #include "smpp_pdu.def"
 };*/
typedef union pdu_u pdu_u;
union pdu_u {
  ...
}

typedef struct SMPP_PDU SMPP_PDU;
struct SMPP_PDU {
    unsigned long type;
    const char *type_name;
    pdu_u u;
};
```

To use this struct, include the file `modules/mobility/smpp.c`.

### <a name="idp42833616"></a> See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)