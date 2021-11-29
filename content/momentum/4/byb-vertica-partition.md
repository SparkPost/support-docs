---
lastUpdated: "03/26/2020"
title: "Separate Vertica Partition"
description: "In many cases Message Systems recommends creating a separate partition var db vertica for Vertica's data and workspace sometimes on dedicated drives Before installing Vertica we will create a new user vertica dba and new group verticadba Doing this pre step will avoid the following ownership warnings during installation..."
---

In many cases, Message Systems recommends creating a separate partition `/var/db/vertica` for Vertica's data and workspace (sometimes on dedicated drives). Before installing Vertica, we will create a new user (`vertica_dba`) and new group (`verticadba`):

```
groupadd verticadba
useradd -md /var/db/vertica -gverticadba vertica_dba
```

Doing this pre-step will avoid the following ownership warnings during installation:

```
Provided DB Admin account details: user = vertica_dba, group = verticadba, home = /var/db/vertica
Creating group... Adding group
Validating group... Okay
useradd: warning: the home directory already exists.
Not copying any file from skel directory into it.
Creating user... Adding user
Validating user...
ESC[31mFailESC[0m : User's home directory is owned by some other user
```