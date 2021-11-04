---
lastUpdated: "03/26/2020"
title: "Before You Begin"
description: "This chapter describes issues that need to be considered or addressed prior to preparing for the installation on Analytics and or Platform MTA nodes For each of your servers that run the MTA you will need a license file in this directory opt msys ecelerity etc You will need to..."
---


This chapter describes issues that need to be considered or addressed prior to preparing for the installation on Analytics and/or Platform/MTA nodes.

## <a name="byb.msg.gen.license"></a> Momentum License

For each of your servers that run the MTA you will need a `license` file in this directory: `/opt/msys/ecelerity/etc/`

You will need to provide Message Systems with a MAC address for each MTA node in your deployment. Be sure that your nodes have access to the Internet over port 80 so that you can download the license.

### Note

The [Momentum REST Injector](/momentum/3/3-rest) introduced in Momentum 3.14 continues to work in Momentum 4 and does not require a license. You can still use this injector to inject messages with simple template substitutions, but it has a very limited feature set compared to the Momentum 4 REST APIs.