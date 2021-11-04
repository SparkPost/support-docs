---
lastUpdated: "03/26/2020"
title: "Use Cases"
description: "The default use case for routing to SMS via Mobile Momentum is simply to supply a phone number for the localpart of the RCPT TO address By using Lua scripts and adding lookup tables to the Postgre SQL database Mobile Momentum can easily be adapted to other use cases This..."
---


The default use case for routing to SMS via Mobile Momentum is simply to supply a phone number for the localpart of the RCPT TO address. By using Lua scripts and adding lookup tables to the PostgreSQL database, Mobile Momentum can easily be adapted to other use cases.

This chapter documents scripts for the following use cases:

*   Route to SMS matching a Regex in the `Subject` Header

*   Route to SMS based on the recipient address

*   Route to SMS based on the sender IP address

*   Route to SMS based on the sender `From` address

In each case a different Lua script named `smpp_routeSMS.lua` is created. Create the Lua script that suits your purposes and add a `script` stanza to the existing scriptlet module as shown below:

```
scriptlet "scriptlet" {
  ...
  script "t" {
    source = "smpp_routeSMS.lua"
  }
}
```

For more information about creating Lua scripts see [Implementing Policy Using Scriptlets](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets). Depending upon the location of the directory where you save your Lua script, you may need to specify the directory as well as the script name. For more information on this topic see [scriptlet – Module](/momentum/3/3-reference/3-reference-modules-scriptlet).

Each use case described here reads data from a PostgreSQL table. You can create tables using the PostgreSQL client `psql`, which is found in the `/opt/msys/3rdParty/bin` directory on the Momentum machine where the database role has been installed. In a cluster configuration, this is typically the cluster manager. For more information about PostgreSQL and Momentum see [PostgreSQL](/momentum/3/3-reference/operations-postgresql).

## <a name="admin.use.case.regex"></a> Route to SMS Matching a Regex in the Subject Header

When a specific phrase appears in the subject header of an email use a database query to map the email address to a phone number.

In this example, an email with the Subject `toSMS` addressed to `myemail@test.domain.com` is sent as a text message to `3011234567@test.messagesystems.com`.

Create a table in the `smpp` schema:

```
CREATE TABLE smpp.sms_address_mapping
(
  from_address text NOT NULL,
  to_address text NOT NULL,
  CONSTRAINT sms_address_mapping_pkey PRIMARY KEY (from_address, to_address)
)
```

Populate this table with records as in the following example:

```
INSERT INTO smpp.sms_address_mapping values ("myemail@test.domain.com",
  "3011234567@test.messagesystems.com");
```

Create the Lua script shown below, name it `smpp_routeSMS.lua` and save it in a directory that is in the Lua search path—`/opt/msys/ecelerity/etc/conf/default/policy`, for example. Be sure to add the script to the repository as described in [Best Practices for Manually Created Policy Scripts](/momentum/3/3-reference/policy-best-practices).

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

-- match regex within the email subject
local function subject_match(msg, pattern)
  local subject = table.concat(msg:header("Subject"));
  return msys.pcre.match(subject, pattern);
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

  local matches, err = subject_match(msg, "(?i)tosms");
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

  -- DB query to find SMS destination. Query returns "phone_number@domain"
  local orig_address = msg:rcptto();
  local ritr, dberr = msys.db.query("ecdb", "SELECT to_address FROM smpp.sms_address_mapping »
    WHERE from_address = ?", {orig_address});

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