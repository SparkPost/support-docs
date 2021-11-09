---
lastUpdated: "03/26/2020"
title: "MIB Files"
description: "For your convenience the OMNITI SNMP MIB txt file found in the opt msys ecelerity docs directory is reproduced in this appendix The per domain metrics exposed via Momentum's OCC MIB do not support the SNMP GETNEXT operation This means that you can't walk the domain statistics with programs such..."
---

## <a name="snmp-mib"></a> Files


For your convenience, the `OMNITI-SNMP-MIB.txt` file found in the `/opt/msys/ecelerity/docs/` directory is reproduced in this appendix.

### Warning

The per-domain metrics exposed via Momentum's OCC-MIB do not support the SNMP GETNEXT operation. This means that you can't walk the domain statistics with programs such as snmpwalk.

The implication of this is as follows: To get per-domain statistics via SNMP you have to know in advance what domain you are querying for. That's fine if you're monitoring specific known domains, but you cannot use SNMP to get a snapshot of the mail queues.

The Enterprise MIB for OmniTI assigned by the Internet Assigned Numbers Authority is: `1.3.6.1.4.1.19552`. This is further subdivided by products. For example, Momentum (Ecelerity) has the MIB: `1.3.6.1.4.1.19552.1`.

Within Momentum (ecelerity), `1.3.6.1.4.1.19552.1.1` is defined as product information wiith the further subdivisions as shown below:

*   `1.3.6.1.4.1.19552.1.1.1` – string, Product Name (Ecelerity)

*   `1.3.6.1.4.1.19552.1.1.2` – string, version (_EC_VER)

*   `1.3.6.1.4.1.19552.1.1.3` – string, build date (__DATE__)