---
lastUpdated: "03/26/2020"
title: "sievelib – The sievelib Module"
description: "The sievelib module is defined in the following way Example 14 95 sievelib module The sievelib console commands add subtract delete and view gauge cache counters created using the the Sieve ec gauge cache init command For more information about this command see ec gauge cache Add a number to..."
---

<a name="idp21323360"></a> 
### <a name="idp21325344"></a> Configuration

The `sievelib` module is defined in the following way:

<a name="idp21327264"></a> 


```
sievelib {
}
```

### <a name="modules.sievelib.console"></a> sievelib Management Using Console Commands

The sievelib console commands add, subtract, delete and view gauge cache counters created using the the Sieve **ec_gauge_cache_init** command. For more information about this command see [ec_gauge_cache](/momentum/3/3-reference/sieve-ref-ec-gauge-cache).

**<a name="idp21333296"></a> 14.65.2.1. sievelib gauge_cache add *`name`* *`key`* *`number`***

Add a number to the key in the specified cache.

**<a name="idp21336048"></a> 14.65.2.2. sievelib gauge_cache sub *`name`* *`key`* *`number`***

Subtract a number from the key in the specified cache.

**<a name="idp21338800"></a> 14.65.2.3. sievelib gauge_cache show *`name`* *`key`***

Show the key in the specified cache.

**<a name="idp21341120"></a> 14.65.2.4. sievelib gauge_cache delete *`name`* *`key`***

Delete the key in the specified cache.