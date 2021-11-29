---
lastUpdated: "03/26/2020"
title: "Aggregator APIs"
description: "Many mobile aggregators offer proprietary services that provide additional information regarding a terminating handset or phone number For example using the m Blox service API you can identify which mobile network or carrier a particular phone number is using or the handset type This sort of information can help when..."
---


Many mobile aggregators offer proprietary services that provide additional information regarding a terminating handset or phone number. For example, using the mBlox service API you can identify which mobile network or carrier a particular phone number is using or the handset type. This sort of information can help when implementing business logic.

As of Momentum 3.4, it is possible to interface with the mBlox Operator ID Service API.

## <a name="mobility.aggregator.apis.mblox"></a> The mBlox API

mBlox implements their API by using SOAP over HTTPS. Momentum 3.4 uses Lua to provide straightforward calls to query and retrieve information from mBlox Operator ID Service servers.

If you wish to use this mBlox API perform the following actions:

1.  Set up an account with mBlox.

2.  Ensure that the [scriptlet Module](/momentum/3/3-reference/3-reference-modules-scriptlet) is configured.

3.  Create a Lua script that uses the `validate_data_spool_each_rcpt` or the `validate_rcptto` callout. This script will include the statement `require("msys.aggregator.mblox")` and will invoke the `msys.aggregator.mblox.setup` and `msys.aggregator.mblox.get_operatorID` functions. Create this script following the instructions given in [Best Practices for Manually Created Policy Scripts](/momentum/3/3-reference/policy-best-practices).

    If you have not created policy scripts before, be sure to review [Implementing Policy Scripts](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets).

4.  Be sure to add your script to the repository and to reference it from the scriptlet module.

### Warning

The mBlox operator ID API fails on Solaris AMD. As a workaround, place a CA bundle file "ca-bundle.crt" in `/cert/path` and set the environment variable `CURL_CA_BUNDLE` in the following way: **`export CURL_CA_BUNDLE="/cert/path/ca-bundle.crt"`**                                           .

A sample script follows.

### <a name="mobility.aggregator.apis.mblox.sample"></a> mBlox Sample Script

Find below a sample script that invokes the mBlox API.

require("msys.aggregator.mblox") <a name="one"></a> ![1](images/callouts/1.png)
require("msys.core")
require("msys.extended.message_routing")
require("msys.extended.message")
require("msys.extended.ac")
require("msys.mcmt.collector")

local mod ={}

msys.mcmt.collector.setMapping([[message/vnd.msys.smpp]], [[rsrc-smpp]])
msys.mcmt.collector.setMapping([[message/vnd.msys.mm7]], [[rsrc-mm7]])

--function mod:(msg, str, accept, vctx)
function mod:validate_data_spool_each_rcpt(msg, ac, vctx) <a name="two"></a> ![2](images/callouts/2.png)
  local cTable = { <a name="three"></a> ![3](images/callouts/3.png)
    url="https://soap.mblox.com/operatoridservice/lookup",
    user="*`user_name`*",
    password="*`password`*"
  }

  msys.aggregator.mblox.setup(cTable); <a name="four"></a> ![4](images/callouts/4.png)
  local rcptto = msg:rcptto()
  local matches, errstr, errnum = msys.pcre.match(rcptto, "(?P<localpart>[^@]+)@(?P<domain>[^>]+)")
  if (matches != nil) then
    --Validating that this email is meeting the bare basics to be considered for SMS
    if (tonumber(matches["localpart"]) != nil) then
      local result = msys.aggregator.mblox.get_operatorID(matches["localpart"]) <a name="five"></a> ![5](images/callouts/5.png)
      local smppPart = msg:rsrc_get("rsrc-smpp")
      local mm7Part = msg:rsrc_get("rsrc-mm7")

      --Verizon's operatorId is 31003
      if (result["OperatorId"] == "31003") then
        print ("Operator was verizon - sending mm7")

        if (mm7Part != nil) then
          msg:rcptto(matches["localpart"].."@mm7.example.com")
        else
          vctx:set_code("550","Messages to verizon must have mm7 parts. This one did not")
        end

      elseif (result["OperatorId"] == "31002") then -- AT&T's OperatorId
        print "Operator was AT&T - sending smpp"

        if (smppPart != nil) then
          msg:rcptto(matches["localpart"].."@smpp.example.com")
        else
          vctx:set_code("550","Messages to AT&T must have smpp parts, this one did not")
        end
      end
    end
  end
  return msys.core.VALIDATE_DONE
end

msys.registerModule("rcptto", mod)

| 

[![1](/momentumimages/callouts/1-png)](#one)

 | 

You must include the `msys.aggregator.mblox` package.

 |
| 

[![2](/momentumimages/callouts/2-png)](#two)

 | 

Implement your logic in the `validate_data_spool_each_rcpt` or the `validate_rcptto` callout.

 |
| 

[![3](/momentumimages/callouts/3-png)](#three)

 | 

Create a Lua table with key/value pairs. The following keys are supported: url, user, password.

 |
| 

[![4](/momentumimages/callouts/4-png)](#four)

 | 

Use the Lua table as the only parameter to the `msys.aggregator.mblox.setup` function.

Note that this function saves the table to a global table, `mblox.config`, which will be used by the `msys.aggregator.mblox.get_operatorID` function as the default if no argument is passed to `msys.aggregator.mblox.setup`.

Multiple calls to `msys.aggregator.mblox.setup` will overwrite the existing entries in the global table.

 |
| 

[![5](/momentumimages/callouts/5-png)](#five)

 | 

Invoke the mBlox API using the `msys.aggregator.mblox.get_operatorID` function.

This function takes an optional second parameter, a "config" table made up of url, user and password key/value pairs.

On success this function returns a Lua table of operator information containing the following keys:

*   `OperatorId` – The Operator ID for the requested telephone number. These codes are specific to mBlox and are included with the implementation guidelines provided by mBlox.

*   `PSMSEnable` – A flag to indicate whether mBlox supports PSMS services for the operator. This can be either true or false.

*   `HttpCode` – The HTTP response code

*   `HttpDesc` – The HTTP response message.

*   `TelephoneNumber` – The end user telephone number.

On failure, a Lua table of error information is returned. `nil` may also be returned if no response is received.

 |