---
lastUpdated: "03/26/2020"
title: "The dp_config.lua and custom_policy.lua Files"
description: "This appendix reproduces the files referenced in the title Default policy is configured using the dp config lua file A sample configuration file is found in the opt msys ecelerity etc sample configs directory and is reproduced below..."
---

## <a name="policy.appendix"></a> The `dp_config.lua` and `custom_policy.lua` Files


This appendix reproduces the files referenced in the title.

## <a name="policy.appendixdp_config.lua"></a> The `dp_config.lua` File

Default policy is configured using the `dp_config.lua` file. A sample configuration file is found in the `/opt/msys/ecelerity/etc/sample-configs` directory and is reproduced below.

```
module("msys.dp_config", package.seeall);
require("custom_policy");

--[[
Whitelist support.  If enabled, each default policy may optionally
honor one or more whitelists, such that an IP address that is whitelisted
will not be subjected to the policy in question.

Two types are supported, either from a datasource (such as a database
or LDAP) or an RBLDNSD file.  The following common parameters are required:

type: either "datasource" or "rbldnsd"
name: name of the whitelist
refresh: an integer greater than or equal to 0
default_value: Must always be ""

Syntax for "datasource":
cachename: The name of a Datasource defined in ecelerity.conf
query: A query understood by the Datasource, which returns all CIDR blocks
       to whitelist, one row at a time.  Two columns must be returned, a
       value (which can be anything, even a static value) and the CIDR block.
cidr_column: The name of the column containing the CIDR block
value_column: The name of the column containing the value (the value is ignored
              for the purposes of the whitelist but something must be there)

Syntax for "rbldnsd"
source: Path to the rbldnsd source file on disk
record_type: Either "A" or "TXT"
]]

--[[
Custom Whitelist:
Note that you can define custom policies to create your own whitelists
(for example based on something other than connecting IP, like envelope
parameters).  You may then use the Default Policy whitelist honor mechanism
by setting the whitelist as follows:

msys.pbp.set_whitelist(vctx, "my_whitelist_name", true);

Then you may put "my_whitelist_name" as one of the "honor_whitelist" table
entries if you wish a specific policy honor that whitelist.
]]

--[[
msys.dp_config.whitelist = {
  {
    name = "global",
    type = "rbldnsd",
    refresh = 1800,
    source = "/opt/msys/ecelerity/etc/whitelist.txt",
    record_type = "TXT",
    default_value = "",
  },
  {
    name = "global_datasource",
    type = "datasource",
    refresh = 1800,
    cachename = "sqlite",
    query = "SELECT 1 as val, cidr FROM whitelist",
    cidr_column = "cidr",
    value_column = "val",
    default_value = "",
  }
};
]]

--[[
Supports both DNS and RBLDNSD RBLs.

name: The name of the RBL, must be unique
type: either 'dns' or 'rbldnsd'
code: Numeric SMTP response code to use for an RBL hit
reason: SMTP string to use for an RBL hit, %s is the RBL message

Syntax for 'dns'
base: Base domain to lookup
server: Optional, the IP address of the DNS server to use, by default
        we will use the servers defined in resolv.conf

Syntax for 'rbldnsd':
source: Path to the rbldnsd source file on disk
refresh: How often to reload the rbldnsd file
]]

--[[
For all of the RBLs, you may define a 'process_result' function to override
all processing of the result.  The function is defined like so:

msys.dp_config.rbls = {
  {
  ...
  ...
    process_result = function (ac, vctx, info)
        return vctx:pbp_disconnect(554, "RBL hit: " .. info);
      end,
  },
};

The function is passed three parameters:

ac: The accept construct
vctx: The validation context
info: The result returned by the RBL.  Will be the first A or TXT record
      returned based on how the RBL was configured.

Returns either msys.core.VALIDATE_CONT to continue or msys.core.VALIDATE_DONE
to terminate processing of this phase.
]]

msys.dp_config.rbls = {
--[[
  {
    check = true,
    name = "myrbl",
    type = "dns",
    base = "rbl.myrbl.org",
    record_type = "TXT",
    code = 554,
    reason = "RBL hit on myrbl: %s",
    honor_whitelist = { "global" },
  },
  {
    check = true,
    name = "myrbl2",
    type = "rbldnsd",
    source = "/opt/msys/ecelerity/etc/myrbldnsd.txt",
    refresh = 1800,
    record_type = "A",
    code = 451,
    reason = "RBL hit on myrbl2: %s",
    honor_whitelist = { "global" },
  }
]]
};

-- Early talker detection, requires the 'conntrol' module to be loaded
-- in the ecelerity.conf file
msys.dp_config.early_talker = {
  check = true,
  honor_whitelist = { "global" },
};

-- FCDNS checking
msys.dp_config.fcdns = {
  check = true,
  rdns_failure_code = 554,
  fdns_failure_code = 554,
  honor_whitelist = { "global" },
};

-- Concurrent connection limiting
msys.dp_config.concurrent_connection_limits = {
  { check = true,
    mask = "/32",
    limit = 10,
    service = "SMTP",
    honor_whitelist = { "global" },
  },
  { check = true,
    mask = "/24",
    limit = 100,
    service = "SMTP",
    honor_whitelist = { "global" },
  },
  -- System-wide connection limit, don't honor the whitelists here
  { check = true,
    mask = "/0",
    limit = 20000,
    service = "SMTP",
  }
};

msys.dp_config.audit_series = {};

--[[
Failed SMTP AUTH limiting.  This essentially the same as DHA prevention
for invalid recipient handling, except it is applied to failed AUTH LOGIN
requests

type: cidr
interval: Bucket size in seconds
buckets: Number of intervals

key: /mask length for the threshold (leading slash required)
startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which we do not allow any more SMTP AUTH commands

NOTE: Disabled for the moment
]]

--[[
msys.dp_config.audit_series.invalid_smtp_auth = {
  type = "cidr",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = true,
      key = "/32",
      startv = 0,
      endv = 3,
      threshold = 100,
      honor_whitelist = { "global" } },
    { check = true,
      key = "/24",
      startv = 0,
      endv = 3,
      threshold = 1000,
      honor_whitelist = { "global" } }
  },
  options = {
    persist = true
  }
};
]]

--[[
Connection rate limiting
type: cidr
interval: Bucket size in seconds
buckets: Number of intervals

key: /mask length for the threshold (leading slash required)
startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which rejection happens
honor_whitelist: List of whitelists to honor
]]

msys.dp_config.audit_series.connections = {
  type = "cidr",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = true,
      key = "/32",
      startv = 0,
      endv = 3,
      threshold = 100,
      honor_whitelist = { "global" } },
    { check = true,
      key = "/24",
      startv = 0,
      endv = 3,
      threshold = 1000,
      honor_whitelist = { "global" } }
  },
  options = {
    persist = true
  }
};

--[[
MAIL FROM rate limiting
Note this is disabled by default as there is a potential for a sender
to DoS the system with garbage sender addresses.
type: string
interval: Bucket size in seconds
buckets: Number of intervals

startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which rejection happens
honor_whitelist: List of whitelists to honor
]]

--[[
msys.dp_config.audit_series.mailfrom = {
  type = "string",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = true,
      startv = 0,
      endv = 3,
      threshold = 100,
      honor_whitelist = { "global" }
    }
  },
  options = {
    persist = true
  }
};
]]

--[[
SMTP AUTH user rate limiting
this check is never evaluated if the sender is not authenticated
with SMTP authentication
type: string
interval: Bucket size in seconds
buckets: Number of intervals

startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which rejection happens
honor_whitelist: List of whitelists to honor
]]

msys.dp_config.audit_series.auth_user = {
  type = "string",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = true,
      startv = 0,
      endv = 3,
      threshold = 100,
      honor_whitelist = { "global" }
    }
  },
  options = {
    persist = true
  }
};

-- MAIL FROM domain validation
msys.dp_config.mail_from_domain_validate = {
  check = true,
  failure_code = 554,
  honor_whitelist = { "global" }
};

--[[
Recipient Validation
Assumes a datasource has been setup in the ecelerity.conf file
whose name is provided below.

Use this policy if you wish to perform per-recipient or per-domain
recipient validation.

If this policy is enabled, any Relay_Domains defined in ecelerity.conf
will mean that any recipient in such domains will be allowed without
any query against the defined datasource.  If you wish to perform per-
recipient validation then do _not_ define the domains in question
in the ecelerity.conf Relay_Domains configuration setting.

This policy is designed to be used on 'inbound' systems, and may be
disabled if the system is an 'outbound' system (in this case relay
checking should be enabled)
]]

msys.dp_config.recipient_validation = {
  -- Whether or not to perform recipient validation
  -- Disabled by default, enable if you want to define a recipient validation
  -- policy
  check = true,

  -- Name of the datasource.  If you only want to honor Relay_Domains from
  -- ecelerity.conf then you should not define either ds_name or query.
  -- ds_name = "ldap",

  -- Query, $rcpt is the placeholder for the recipient's email address,
  -- depending on the datasource it may also be ':rcpt'.  If you only
  -- want to check the domain, use $domain or :domain
  -- query = "ldap:///DC=domain,DC=com?mail,status?sub?mail=$rcpt",

  -- Attribute to compare for mailbox status (suspended, active, etc).
  -- Must be queried in the provided URI.  To not perform a status attribute
  -- check comment out the following line.
  -- status_attribute = "status",

  -- Acceptable status values, all other status values will be rejected.
  -- May include Lua-compatible patterns as well as static strings.
  -- status_values = { "active", "online", "other" },

  -- Enable DHA prevention
  dha_prevention = true,
};

--[[
Relay Authorization

For 'outbound' systems, relay checking is generally done based on either
the source IP address (on-net IP addresses) or based on the SMTP
authentication result.
]]

msys.dp_config.relay_authorization = {
  check = false,
  --[[
  Onnet IP addresses.  If this option is defined, the source IP address
  will be checked against the configured datasource, and if it matches
  will be allowed to relay messages.

  Two types are supported, either from a datasource (such as a database
  or LDAP) or an RBLDNSD file.  The following common parameters are required:

  type: either "datasource" or "rbldnsd"
  refresh: an integer greater than or equal to 0
  default_value: Must always be ""

  Syntax for "datasource":
  cachename: The name of a Datasource defined in ecelerity.conf
  query: A query understood by the Datasource, which returns all CIDR blocks
         to whitelist, one row at a time.  Two columns must be returned, a
         value (which can be anything, even a static value) and the CIDR block.
  cidr_column: The name of the column containing the CIDR block
  value_column: The name of the column containing the value (the value is ignored
                for the purposes of the whitelist but something must be there)

  Syntax for "rbldnsd"
  source: Path to the rbldnsd source file on disk
  record_type: Either "A" or "TXT"
  ]]

  --[[
  onnet = {
    type = "rbldnsd",
    refresh = 1800,
    source = "/opt/msys/ecelerity/etc/onnet.txt",
    record_type = "TXT",
    default_value = "",
  };
  ]]

  --[[
  onnet = {
    type = "datasource",
    refresh = 1800,
    cachename = "sqlite",
    query = "SELECT 1 as val, cidr FROM onnet",
    cidr_column = "cidr",
    value_column = "val",
    default_value = "",
  };
  ]]

  -- Allow SMTP-authenticated users to relay
  -- Note that you still must configure SMTP authentication in ecelerity.conf
  -- using the auth_ds module and the appropriate ESMTP_Listener options.
  allow_smtp_auth = true
};

--[[
DHA parameters, to disable comment out invalid recipients audit_series

type: cidr
interval: Bucket size in seconds
buckets: Number of intervals

key: /mask length for the threshold (leading slash required)
startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which rejection happens
honor_whitelist: List of whitelists to honor
]]

msys.dp_config.audit_series.invalid_recipients = {
  type = "cidr",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = true,
      key = "/32",
      startv = 0,
      endv = 3,
      threshold = 50 },
    { check = true,
      key = "/24",
      startv = 0,
      endv = 3,
      threshold = 500 }
  },
  options = {
    persist = true
  }
};

--[[
Message rate limiting, to disable comment out the definition of
messages audit_series

type: cidr
interval: Bucket size in seconds
buckets: Number of intervals

key: /mask length for the threshold (leading slash required)
startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which rejection happens
honor_whitelist: List of whitelists to honor
]]

msys.dp_config.audit_series.messages = {
  type = "cidr",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = true,
      key = "/32",
      startv = 0,
      endv = 3,
      threshold = 200,
      honor_whitelist = { "global" } },
    { check = true,
      key = "/24",
      startv = 0,
      endv = 3,
      threshold = 2000,
      honor_whitelist = { "global" } }
  },
  options = {
    persist = true
  }
};

--[[
SPAM MAIL FROM rate limiting
Note this is disabled by default as there is a potential for a sender
to DoS the system with garbage sender addresses.
type: string
interval: Bucket size in seconds
buckets: Number of intervals

startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which rejection happens
honor_whitelist: List of whitelists to honor
]]

--[[
msys.dp_config.audit_series.spam_mailfrom = {
  type = "string",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = false,
      startv = 0,
      endv = 3,
      threshold = 100,
      honor_whitelist = { "global" }
    }
  },
  options = {
    persist = true
  }
};
]]

--[[
Spam rate limiting, to disable comment out the definition of
spam audit_series

type: cidr
interval: Bucket size in seconds
buckets: Number of intervals

key: /mask length for the threshold (leading slash required)
startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which rejection happens
honor_whitelist: List of whitelists to honor
]]

msys.dp_config.audit_series.spam = {
  type = "cidr",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = true,
      key = "/32",
      startv = 0,
      endv = 3,
      threshold = 50,
      honor_whitelist = { "global" } },
    { check = true,
      key = "/24",
      startv = 0,
      endv = 3,
      threshold = 200,
      honor_whitelist = { "global" } }
  },
  options = {
    persist = true
  }
};

--[[
Virus rate limiting, to disable comment out the definition of
virus audit_series

type: cidr
interval: Bucket size in seconds
buckets: Number of intervals

key: /mask length for the threshold (leading slash required)
startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which rejection happens
honor_whitelist: List of whitelists to honor
]]

msys.dp_config.audit_series.virus = {
  type = "cidr",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = true,
      key = "/32",
      startv = 0,
      endv = 3,
      threshold = 50,
      honor_whitelist = { "global" } },
    { check = true,
      key = "/24",
      startv = 0,
      endv = 3,
      threshold = 200,
      honor_whitelist = { "global" } }
  },
  options = {
    persist = true
  }
};

--[[
VIRUS MAIL FROM rate limiting
Note this is disabled by default as there is a potential for a sender
to DoS the system with garbage sender addresses.
type: string
interval: Bucket size in seconds
buckets: Number of intervals

startv: Starting bucket (0 is the current bucket)
endv: Ending bucket
threshold: Count over which rejection happens
honor_whitelist: List of whitelists to honor
]]

--[[
msys.dp_config.audit_series.virus_mailfrom = {
  type = "string",
  interval = 900,
  buckets = 4,
  thresholds = {
    { check = false,
      startv = 0,
      endv = 3,
      threshold = 100,
      honor_whitelist = { "global" }
    }
  },
  options = {
    persist = true
  }
};
]]

--[[
Message size limits.  Multiple can be defined, with different whitelist honoring
settings.

Size: In bytes (1024b), kilobytes (50k), megabytes (5m)

The policy below applies a general limit of 20M, but allows members of the
global whitelist to send messages up to 50M
]]

msys.dp_config.message_size_limits = {
  { check = true,
    size = "20m",
    honor_whitelist = { "global" } },
  { check = true,
    size = "50m",
    honor_whitelist = { } }
};

--[[
For all of the content scanners, you may define a 'process_result' function
to override all processing of the result.  The function is defined like so:

msys.dp_config.my_scanner = {
...
...
  process_result = function (msg, vctx, info)
      if info.result == "spam" then
        return vctx:pbp_action(555, "No soup for you"), true;
      end
    end,
};

The function is passed three parameters:

msg: The ec_message
vctx: The validation context
info: The information returned by the spam classifier.  This will differ
      for each classifier, and is documented below.

Return values.  Must return two values.  The first is whether to continue
the validate_data phase, which is either msys.core.VALIDATE_CONT to continue
or msys.core.VALIDATE_DONE to stop.  This does not affect whether the default
processing logic will be processed for the spam scanner in question, if you
define a process_result function the default logic is never evaluated.  The
second is a boolean stating whether or not the system-wide 'spam'
audit_series should be incremented.

The disposition for each content scanner may either be 'discard' or 'reject'.
]]

-- Un-comment to enable BEIK scanning
-- process_result info is a table:
-- { rc = rc, verdict = verdict }
--
-- More information on these parameters can be found here:
-- https://support.messagesystems.com/docs/web-ref/lua.ref.msys.symantec_beik.scan.php
--[[
require("msys.symantec_beik");
msys.dp_config.beik = {
  scan = true,
  isspam_disposition = "reject",
  honor_whitelist = { "global" },
};
]]

-- Un-comment to enable Commtouch scanning
-- process_result info is the return value from msys.commtouch.diagnose,
-- documented here: https://support.messagesystems.com/docs/web-ref/lua.ref.msys.commtouch.diagnose.php
--[[
require("msys.commtouch");
msys.dp_config.commtouch = {
  scan = true,
  spam_dispositions = {
    confirmed = "reject",
    bulk = "reject",
    -- suspect = "reject"
  },
  virus_dispositions = {
    virus = "reject",
    high = "reject",
    -- medium = "reject"
  },
  honor_whitelist = { "global" }
};
]]

-- Un-comment to enable Cloudmark scanning
-- process_result info is the return value from msys.cloudmark.score,
-- documented here: https://support.messagesystems.com/docs/web-ref/lua.ref.msys.cloudmark.score.php
--[[
require("msys.cloudmark");
msys.dp_config.cloudmark = {
  scan = true,
  score_threshold = 95,
  isspam_disposition = "reject",
  honor_whitelist = { "global" }
};
]]

-- Uncomment to enable AV scanning.  In order for AV scanning to work
-- you must separately load the antivirus module in ecelerity.conf, and
-- configure each engine you reference in the configuration stanza below.
-- Valid engines are platform dependent and can be found in the
-- Momentum documentation.
--
-- Valid values for 'virus_disposition' are disinfect, reject or discard.
-- disinfect will replace any infected MIME parts with a text string.
--
-- These may also define a process_result function instead of virus_disposition:
-- result == String from the engine giving details of the virus, if any
-- Return msys.core.VALIDATE_CONT or msys.core.VALIDATE_DONE
--[[
  process_result = function (msg, vctx, result)
      return vctx:pbp_action(555, "Virus found");
    end,
]]

--[[
require("msys.av");
msys.dp_config.antivirus = {
  { scan = true,
    engine = "csapi",
    virus_disposition = "disinfect",
    honor_whitelist = { "global" }
  },
  { scan = true,
    engine = "clamav",
    virus_disposition = "reject",
    honor_whitelist = { "global" }
  }
};
]]

-- Keyword filter
--
-- scan: true or false
-- name: Name of the keyword filter, must be unique among keyword filters
-- path: Absolute path of the file on disk
-- charset: Character set of the file, currently we support:
--          UTF-8
--          GBK
--          ISO-8859-1
--          ISO-2022-JP
--          Big5
-- disposition: reject or discard
-- process_result: Takes msg, vctx and number of matches found in the
--                 subject and message together.  Note that each MIME part
--                 is scanned individually, and the num_found value represents
--                 how many were found in the subject plus the MIME part
--                 being scanned.  The subject header is scanned along with
--                 each MIME part.
--
-- The file format is one keyword per line.  You may search for multiple
-- words in a pattern by separating the words with the '|' character
--[[
  process_result = function (msg, vctx, num_found)
    if num_found >= 2 then
      return vctx:pbp_action(554, "Keyword matches");
    end
  end,
]]

msys.dp_config.keyword_filter = {
  { scan = false,
    name = "keywords",
    path = "/opt/msys/ecelerity/etc/conf/default/keyword_filter.txt",
    charset = "UTF-8",
    disposition = "reject",
    honor_whitelist = { "global" },
  }
};

-- vim:ts=2:sw=2:et:
-- $Revision: 2938 $
```