---
lastUpdated: "03/26/2020"
title: "Route to SMS Based on the Sender Address"
description: "For a specific sender From addresses use a database query to map the email address to a phone number In this example an email sent from fromme test com is matched to mytest any messagesystems com and sent as a text message to 3011234567 test messagesystems com Create the following..."
---

For a specific sender `From` addresses, use a database query to map the email address to a phone number.

In this example, an email sent from `fromme@test.com` is matched to `mytest@any.messagesystems.com` and sent as a text message to `3011234567@test.messagesystems.com`.

Create the following table in the `smpp` schema:

```
CREATE TABLE smpp.sms_address_mapping
(
  from_address text NOT NULL,
  to_address text NOT NULL,
  CONSTRAINT sms_address_mapping_pkey PRIMARY KEY (from_address, to_address)
)
```

Populate this table with records as shown below:

```
INSERT INTO smpp.sms_address_mapping values ("mytest@any.messagesystems.com",
  "3011234567@test.messagesystems.com");
```

Create a Lua script named `smpp_routeSMS.lua` and save it in a directory that is in the Lua search path—`/opt/msys/ecelerity/etc/conf/default/policy`, for example. Be sure to add the script to the repository as described in [Best Practices for Manually Created Policy Scripts](/momentum/3/3-reference/policy-best-practices).

```
require("msys.core");
require("msys.db");
require("msys.datasource");
require("msys.extended.message");

local mod = {};

--[[
  use case scenarios: please modify the following function to adjust
  the logic to decide whether a message should be routed to SMS or not
  return value:
  1: success
  0: fail
]]

-- based on sender IP address
local function sender_name_match(name, pattern)
  return msys.pcre.match(name, pattern);
end

--[[
  local funtions starts here
  These functions are used by hook functions to change SMS Destination Address
]]

local function set_sms_dst_domain(msg, domain)
  msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS, "SMS_Destination_Domain", domain);
end

local function set_sms_dst_number(msg, num)
  msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS, "SMS_Destination_Address", num);
end

-- address: RFC2822 format: user+detail@domain
local function set_sms_dst(msg, address)
    set_sms_dst_domain(msg, table.concat(msys.parseRFC2822Addresses(address, "domain")));
    set_sms_dst_number(msg, table.concat(msys.parseRFC2822Addresses(address, "user")));
end

--[[
  exported functions or hooks starts here
]]

function mod:validate_data_spool_each_rcpt(msg, accept, context)
  if msg == nil then
    return msys.core.VALIDATE_CONT;
  end

  local toSMS = 0;
  local sender = msg.mailfrom();

  local matches, err = sender_name_match(sender, "fromme");
  if err ~= nil then
    print("Error when decide route2SMS: ", err);
  elseif matches == nil then
    print("Disable route2SMS!");
  else
    print("Enable route2SMS");
    toSMS = 1;
  end

  if toSMS == 0 then
    return msys.core.VALIDATE_DONE;
  end

  -- DB query to find SMS destination. Query returns "phone-number@domain"
  local orig_dst = msg:rcptto();
  local ritr, dberr = msys.db.query("ecdb", "SELECT to_address FROM smpp.sms_address_mapping »
    WHERE from_address = ?", {orig_dst});

  if ritr == nil then
    print("unable to issue query: ", dberr);
  else
    for row in ritr do
      -- modify SMS destination carried in ec_message
      set_sms_dst(msg, row.to_address);
      break;
    end
  end

  return msys.core.VALIDATE_DONE;
end

function mod:core_config_get_message_routing_domain(cs, msg, buff, len)
  buff:set(msys.core.ec_message_context_get(msg, msys.core.ECMESS_CTX_MESS, "SMS_Destination_Domain"));
  return #buff;
end

msys.registerModule("smpp", mod);
```