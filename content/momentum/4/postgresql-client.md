---
lastUpdated: "03/26/2020"
title: "Using the PostgreSQL Client Program"
description: "The Postgre SQL client program psql enables you to inspect the Postgre SQL database installed by Momentum To use this program do the following Log in as the ecuser user which was created during installation Start the Postgre SQL client by issuing the command Postgre SQL is configured to run..."
---

<a name="idp3866352"></a> 

The PostgreSQL client program `psql` enables you to inspect the PostgreSQL database installed by Momentum.

To use this program, do the following:

1.  Log in as the `ecuser` user, which was created during installation.

2.  Start the PostgreSQL client by issuing the command

    `shell> /opt/msys/3rdParty/bin/psql ecelerity ecuser`

    PostgreSQL is configured to run on the default port, 5432, so there is no need to specify a port when running the PostgreSQL client.

### Warning

We strongly advise against building applications to interface with our database and make no guarantees that the database will remain the same between minor revisions of the product.

Additionally, applications that interface directly may be incompatible with future upgrades to the version of PostgreSQL used with Momentum.