---
lastUpdated: "03/26/2020"
title: "ec_spool_space"
description: "ec spool space Return information about the free space on the spool partition ec spool space Method which returns the total and available space in M Bs and the percentage of used space as an int from 0 to 100 on the disk partition with the Momentum spool Example 16..."
---

<a name="sieve.ref.ec_spool_space"></a> 
## Name

ec_spool_space — Return information about the free space on the spool partition

## Synopsis

`ec_spool_space`

<a name="idp30577440"></a> 
## Description

Method which returns the total and available space in MBs and the percentage of used space (as an int, from 0 to 100) on the disk partition with the Momentum spool.

<a name="example.ec_spool_space"></a> 


```
($totalmegs, $availmegs, $pct) = ec_spool_space;
# Turn away connections if more than 90% of disk is free
if ec_test :value "gt" :comparator "i;ascii-numeric" $pct "90" {
    ec_disconnect "421" "Disk is too full";
}
```