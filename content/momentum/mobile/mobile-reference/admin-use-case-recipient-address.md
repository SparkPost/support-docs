---
lastUpdated: "03/26/2020"
title: "Route to SMS Based on the Recipient Address"
description: "When a specific email address appears in the To header you can map the email address to a phone number Create a Lua script named change SMS lua and save it in a directory that is in the Lua search path opt msys ecelerity etc conf default policy for example..."
---

When a specific email address appears in the `To` header, you can map the email address to a phone number.

Create a Lua script named `changeSMS.lua` and save it in a directory that is in the Lua search path—`/opt/msys/ecelerity/etc/conf/default/policy`, for example. Be sure to add the script to the repository as described in [Best Practices for Manually Created Policy Scripts](/momentum/3/3-reference/policy-best-practices).

```
## support files
require('msys.core');
require('msys.extended.message');
require('msys.pcre');
require('msys.extended.message_routing')

local mod = {};

--Each RCPT Phase ##############################
function mod:validate_data_spool_each_rcpt(msg)
-- This script is setting the RCPT TO of the message based on the recipients preference.  For the purpose of this demonstration
-- the system will use the RCPT TO address to look up the preference in a static table provided below.  If the preference is 'email'
-- the message will unaltered and delivers to the supplied email address.  If the preference is 'mobile' the RCPT TO will be
-- rewritten to the mobile number as follows <mobile>@smpp.mblox.com

-- Subscriber preferences are stored in the prefab table defined below.  The table columns are
--        email    localpart  email domain  preference  mobile#   mobileDomain

  local preftab = {  {"john.doe",   "messagesystems.com",   "mobile",  "16508922465",   "smpp.deliver.com"},
        {"jane.doe",  "messagesystems.com",  "smtp",  "16508922465",   "smpp.deliver.com"},
        {"georgie.porgie",    "messagesystems.com",  "mobile",  "12062250488",   "smpp.deliver.com"}
      };

  print ("table size = " .. #preftab);
  local i = 1;

  local localpt = msg:context_get(msys.core.ECMESS_CTX_MESS, "rcptto_localpart");
  local domain = msg:context_get(msys.core.ECMESS_CTX_MESS, "rcptto_domain");

  print ("rcpt to address = " .. localpt .. "@" ..  domain);  --This will appear in the /var/log/ecelerity/panic.log  (remove or comment out for production use)

  while i <=  #preftab do        -- loop through the available values in opts
    if (preftab[i][1] == localpt) then
      print ("match on localpt in row: " .. i);  -- (remove or comment out for production use)
      if (preftab[i][2] == domain) then
        print ("Match on domain, getting preference");
        if (preftab[i][3] == "mobile") then
          local mobnum = preftab[i][4];
          local mobdom = preftab[i][5];
                                            print ("User preference " .. preftab[i][3] ..  "rewriting destination to: " .. mobnum .. "@" .. mobdom);
          msys.core.ec_message_context_set(msg, msys.core.ECMESS_CTX_MESS, "SMS_Destination_Address", mobnum);
          msg:routing_domain(mobdom)
          return msys.core.VALIDATE_CONT;
        else
          print ("Sending as email");
          return msys.core.VALIDATE_CONT;
        end
      end
    end
  end
  print ("No email address match, sending as email ");

  return msys.core.VALIDATE_CONT;
end

--Module Register
msys.registerModule("changeSMS", mod);
```