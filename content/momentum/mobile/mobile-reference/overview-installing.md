---
lastUpdated: "03/26/2020"
title: "Installing Momentum"
description: "The Mobile Momentum SMPP bundle consists of the Momentum core augmented with modules implementing the SMPP protocol and SMPP logging and the MM 7 protocol and MM 7 logging The installation steps are identical to those used to install other Momentum based products namely decompress the bundle and then navigate..."
---

The Mobile Momentum SMPP bundle consists of the Momentum core augmented with modules implementing the SMPP protocol and SMPP logging and the MM7 protocol and MM7 logging. The installation steps are identical to those used to install other Momentum-based products, namely, decompress the bundle and then navigate to the newly created directory and execute the `installer` script.

If you wish to install Mobile Momentum after installation of Momentum proper, you can do this in the following way:

1.  Upgrade your license.

2.  Execute the `/opt/msys/ecelerity/bin/init_ram_db` and `/opt/msys/ecelerity/bin/ec_init_mm7db` scripts.

3.  Uncomment the line in the `ecelerity.conf` file that loads the `mobility.conf` file.

4.  Reload the configuration.