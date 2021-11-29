---
lastUpdated: "03/26/2020"
title: "Creating root and vertica_dba Accounts"
description: "root and vertica dba accounts must have their own RSA or Digital Signature Algorithm DSA keysets This requirement is necessary only if the local security policy has configured SSH Strict Host Key Checking to yes The vertica dba public key s must be in the var db vertica ssh authorized..."
---

`root` and `vertica_dba` accounts must have their own RSA or Digital Signature Algorithm (DSA) keysets.

### Note

This requirement is necessary only if the local security policy has configured SSH `StrictHostKeyChecking` to `yes`.

*   The `vertica_dba` public key(s) must be in the `/var/db/vertica/.ssh/authorized_keys` file on **all** Analytics nodes. Create them if they don't exist.

*   The `root` public key(s) must be in the `/root/.ssh/authorized_keys` and `/var/db/vertica/.ssh/authorized_keys` files on **all** Analytics nodes. Create them if they don't exist.

*   All `root` accounts on the Analytics nodes may have different keysets, depending on local security policy. In this case, public keys from the root account on all Analytics nodes need to be added to both `authorized_keys` files noted above.