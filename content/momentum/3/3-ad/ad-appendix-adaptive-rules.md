---
lastUpdated: "03/26/2020"
title: "The adaptive_rules.lua File"
description: "The adaptive rules lua file shown below is the most current version found in the Message Systems repository The version being used by your installation of Momentum is found at opt msys ecelerity libexec scriptlets msys adaptive rules lua For readability some content that appears on a single line in..."
---

## <a name="ad.appendix.adaptive_rules"></a> The `adaptive_rules.lua` File

The `adaptive_rules.lua` file shown below is the most current version found in the Message Systems repository. The version being used by your installation of Momentum is found at `/opt/msys/ecelerity/libexec/scriptlets/msys/adaptive_rules.lua`.

### Note

For readability, some content that appears on a single line in the `adaptive_rules.lua` file may appear here on multiple lines. Lines that have been broken up are indicated by the ‘`»`’ character. You can reproduce the original file by replacing the ‘`»`’ character and its following newline character with a space.

```
-- Copyright (c) 2009-2011 Message Systems, Inc. All rights reserved
--
-- THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF MESSAGE SYSTEMS
-- The copyright notice above does not evidence any
-- actual or intended publication of such source code.
--
-- Redistribution of this material is strictly prohibited.
--
-- $Revision$

module("msys.adaptive_rules", package.seeall);

--[[

The Rules block below is a table keyed by domain name.
If the value for a given key is a string, then the entry is an alias
for the value.  For example:

  ["live.com"] = "hotmail.com",

declares that live.com is an alias for "hotmail.com".  Aliasing is not
recursive; it is invalid to have an alias for a domain that is also an
alias.

Within the rules block are certain keys:

responses:

This block defines a series of SMTP response based rules that will be
evaluated in the order they are defined in this file.  The rules are
a series of pcre pattern matches that are applied to the SMTP response
received during a delivery attempt.

  code:    pcre regex to be matched
  trigger: triggering threshold 
           if set to 1, trigger on the first occurrence
           if set to "C/S", where C is a count and S is a number of seconds,
           (e.g. 10/1 for 10 per second) trigger when the rate is crossed
  action:  the action to take when the rule is triggered.
           {"suspend", "4 hours"} -- causes suspension for 4 hours
           {"blackhole", "4 hours"} -- blackhole domain for 4 hours
           {"throttle", "down"} -- causes parameter adjustment
           {"greylisted", "15 minutes"} -- adjust binding for greylisting
           {"warmup", "age"} -- sets the age of the binding in seconds.
           {"reduce_connections", number} -- causes parameter adjustment
           {"reduce_deliveries", number} -- causes parameter adjustment
  phase:   the expected phase that this response will be triggered
           if this is not set, response could come in any phase
           FIXME: should log when phase differs from expectations???

configuration:

This block defines suggested parameter values for the domain.
It is keyed by the lower case option name.  The value for a given key
can be one of:

  integer:  forces the parameter to be the value specified in this file
  table:  {10,20} causes the value to be clamped within the range 10..20
  function: invokes a custom expression to determine the value.
          The function is passed the value determined by the configuration
          system, the last value that was set by the adaptive framework,
          the age of the binding in seconds and also the observed
          number of attempted messages (this is currently always 0).
          These parameters should be sufficient to apply "warm up" logic.

Note:

In the context of the adaptive framework, outbound_throttle_messages
is considered to be expressed as an integer value measured in
messages-per-hour.

]]

Rules = {
  ["yahoo.com"] = {
    responses = {
      {
        code = "^421 4\\.7\\.0 \\[TS01\\] ",
        trigger = "1",
        action = {"throttle", "down"},
        phase = "connect",
      },
      {
        code = "^421 4\\.7\\.0 \\[TS02\\] ",
        trigger = "5/1",
        action = {"suspend", "4 hours"},
        phase = "connect",
      },
      {
        code = "^421 4\\.7\\.1 \\[TS03\\] ",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Yahoo required",
        phase = "connect",
      },
      {
        code = "^421 Message from \\(.*\\) temporarily deferred - 4\\.16\\.50",
        trigger = "5/1",
        action = {"suspend", "4 hours"},
        phase = "connect",
      },
      {
        code = "^4[25]1 Message temporarily deferred - (\\d+\\.)?\\d+",
        trigger = "5/1",
        action = {"throttle", "down"},
        phase = "data",
      },
      {
        code = "^451 VS.* Excessive unknown recipients - possible Open Relay",
        trigger = "1",
        action = {"suspend", "4 hours"},
        phase = "data",
      },
      {
        code = "^553 5\\.7\\.1 \\[BL2[123]\\] ",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Spamhaus required",
        phase = "connect",
      },
      {
        code = "^553 5\\.7\\.1 \\[BL21\\] ",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Spamhaus required",
        phase = "connect",
      },
      {
        code = "^553 Mail from .*not allowed - 5\\.7\\.1 \\[BL23\\] Connections not accepted from»
IP addresses on Spamhaus XBL",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Spamhaus required",
        phase = "mailfrom",
      },
      {
        code = "^553 Mail from .*not allowed",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Yahoo required",
        phase = "mailfrom",
      },
      {
        code = "^554 Message not allowed\\. DK Email not accepted for policy reasons",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Have you configured DK correctly?",
        phase = "data",
      },

      {
        code = "^554 Message not allowed",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "IP blocked, remediation with Yahoo.com required",
      },
    },
    configuration = {
      max_deliveries_per_connection = 5,
      max_outbound_connections = {30,300},
      outbound_throttle_messages = function(curr, last, age, mc)
        -- start at 50,000 per day, increase by 50,000 per day over
        -- first 4 weeks, then remove limit.
        age = age / 86400; -- convert to age in days
        if age > 28 then
          -- After the warmup is done, go with 100000 per hour 
          return 100000;
        end
        if age < 1 then
          age = 1
        end
        return age * 50000 / 24;
      end
    },
  },
  ["yahoo.com.br"] = "yahoo.com",
  ["yahoo.com.au"] = "yahoo.com",
  ["yahoo.com.in"] = "yahoo.com",
  ["yahoo.com.mx"] = "yahoo.com",
  ["yahoo.com.vn"] = "yahoo.com",
  ["yahoo.com.tw"] = "yahoo.com",
  ["yahoo.com.sg"] = "yahoo.com",
  ["yahoo.com.hk"] = "yahoo.com",
  ["yahoo.com.cn"] = "yahoo.com",
  ["yahoo.com.kr"] = "yahoo.com",
  ["yahoo.com.jp"] = "yahoo.com",
  ["yahoo.com.biz"] = "yahoo.com",
  ["yahoo.com.net"] = "yahoo.com",
  ["yahoo.es"] = "yahoo.com",
  ["yahoo.ca"] = "yahoo.com",
  ["yahoo.fr"] = "yahoo.com",
  ["ymail.com"] = "yahoo.com",
  ["rocketmail.com"] = "yahoo.com",
  ["yahoo.it"] = "yahoo.com",
  ["yahoo.co.uk"] = "yahoo.com",
  ["rogers.com"] = "yahoo.com",
  ["yahoo.de"] = "yahoo.com",
  ["talk21.com"] = "yahoo.com",
  ["sky.com"] = "yahoo.com",
  ["btopenworld.com"] = "yahoo.com",
  ["btinternet.com"] = "yahoo.com",
  ["blueyonder.co.uk"] = "yahoo.com",
  ["yahoo.ie"] = "yahoo.com",
  ["yahoo.gr"] = "yahoo.com",
  ["yahoo.se"] = "yahoo.com",
  ["yahoo.in"] = "yahoo.com",
  ["yahoo.co.in"] = "yahoo.com",
  ["yahoo.com.ar"] = "yahoo.com",
  ["yahoo.cl"] = "yahoo.com",
  ["yahoo.co.nz"] = "yahoo.com",
  ["yahoo.com.pe"] = "yahoo.com",
  ["yahoo.com.tr"] = "yahoo.com",
  ["y7mail.com"] = "yahoo.com",
  ["yahoo.com.ve"] = "yahoo.com",
  ["yahoo.dk"] = "yahoo.com",
  ["yahoo.no"] = "yahoo.com",
  ["yahoo.pl"] = "yahoo.com",
  ["yahoo.in"] = "yahoo.com",
  ["yahoo.co.id"] = "yahoo.com",
  ["yahoo.com.my"] = "yahoo.com",
  ["yahoo.com.ph"] = "yahoo.com",
  ["yahoo.co.th"] = "yahoo.com",
  ["yahoo.co.jp"] = "yahoo.com",

  ["aol.com"] = {
    responses = {
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rtrbb\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rtrch\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rtrbg\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rtrrd\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rtrsc\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol.com/errors/554rtrbl\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol.com/errors/554rtrdu\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol.com/errors/554rtrge\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554hvub1\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "data",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/hvuweb\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "data",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/421hvub2\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "data",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/421dnsnr\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Reverse DNS records are missing for the IP",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554dnsb1\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Reverse DNS error",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554dnsb2\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Reverse DNS error",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rlyb1\\.html",
        trigger = "1",
        action = {"transcode", "454", "suspend", "2 hours"},
        message = "Dynamic block in place",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rlyb2\\.html",
        trigger = "1",
        action = {"suspend", "8 hours"}, 
        message = "Hard block. Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/421rlyb3\\.html",
        trigger = "1",
        action = {"warmup", "1"},
        message = "Temp rate limit due to poor reputation",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rlybd\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/421rlynw\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rlych\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Your network may be compromised",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/421rlych2\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rlycs4\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Your server may be compromised",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554rlysn\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/421dynt1\\.html",
        trigger = "1",
        action = {"throttle", "down"},
        message = "Rate limited due to lack of whitelisting or high volume of mail",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/554conb1\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with AOL required",
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/421conb1\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        phase = "connect",
      },
      {
        code = "http://postmaster\\.info\\.aol\\.com/errors/421conb2\\.html",
        trigger = "1",
        action = {"suspend", "2 hours"},
        phase = "connect",
      },
    },
    configuration = {
      max_deliveries_per_connection = {10,1000},
      max_outbound_connections = {30,500},
      outbound_throttle_messages = function(curr, last, age, mc)
        -- 100/hr for 4 days,
        -- raise to 1000/hr for next 5 days
        age = age / 86400; -- convert to age in days
        if age <= 4 then
          return 1000;
        end
        if age <= 10 then
          return 10000;
        end
        return 100000;
      end,
    },
  },
  ["aim.com"] = "aol.com",
  ["compuserve.com"] = "aol.com",
  ["cs.com"] = "aol.com",
  ["netscape.com"] = "aol.com",
  ["netscape.net"] = "aol.com",
  ["wmconnect.com"] = "aol.com",
  ["aol.co.uk"] = "aol.com",
  ["aol.in"] = "aol.com",
  ["aol.de"] = "aol.com",
  ["aol.fr"] = "aol.com",
  ["aol.nl"] = "aol.com",
  ["aol.pl"] = "aol.com",
  ["aol.jp"] = "aol.com",
  ["aol.es"] = "aol.com",
  ["aol.it"] = "aol.com",
  ["aol.com.ar"] = "aol.com",
  ["aol.fi"] = "aol.com",
  ["aol.cl"] = "aol.com",
  ["aol.com.co"] = "aol.com",
  ["aol.com.ve"] = "aol.com",
  ["aol.com.au"] = "aol.com",
  ["aol.at"] = "aol.com",
  ["aol.be"] = "aol.com",
  ["aol.com.br"] = "aol.com",
  ["aol.cz"] = "aol.com",
  ["aol.dk"] = "aol.com",
  ["myaol.jp"] = "aol.com",
  ["aolnorge.no"] = "aol.com",
  ["aolpolska.pl"] = "aol.com",
  ["aolpolcka.pl"] = "aol.com",
  ["aolpoland.pl"] = "aol.com",
  ["aol.ru"] = "aol.com",
  ["aol.kr"] = "aol.com",
  ["aol.se"] = "aol.com",
  ["aol.ch"] = "aol.com",
  ["aol.com.tr"] = "aol.com",
  ["aol.co.nz"] = "aol.com",
  ["aolchina.com"] = "aol.com",
  ["aol.hk"] = "aol.com",
  ["aol.tw"] = "aol.com",
  ["luckymail.com"] = "aol.com",

  ["bellsouth.net"] = {
    responses = {
      {
        code = "^450 too frequent connects from",
        trigger = "5/1",
        action = {"throttle", "down"},
        phase = "connect",
      },
      {
        code = "^450 temporary failure",
        trigger = "5/1",
        action = {"throttle", "down"},
        phase = "data",
      },
      {
        code = "^450[\\s-].*has too many connections",
        trigger = "5/1",
        action = {"throttle", "down"},
        phase = "connect",
      },
      {
        code = "450 Requested action aborted",
        trigger = "1",
        action = {"suspend", "2 hours"},
        phase = "connect",
      },
      {
        code = "^521[\\s-].*Blocked for abuse",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Bellsouth / AT&T required",
        phase = "mailfrom",
      },
      {
        code = "^550[\\s-].*Blocked for abuse",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Bellsouth / AT&T required",
        phase = "mailfrom",
      },
      {
        code = "^553 Message filtered",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Bellsouth / AT&T required",
        phase = "mailfrom",
      },
      {
        code = "^553.*DNSBL",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with Bellsouth / AT&T required",
        phase = "mailfrom",
      },
      {
        code = "^554 5\\.7\\.1 Service unavailable",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Bellsouth / AT&T required",
        phase = "connect",
      },
    },
    configuration = {
      outbound_throttle_messages = 600,
      max_outbound_connections = 10,
    },
  },
  ["bellsouth.com"] = "bellsouth.net",
  ["worldnet.att.net"] = "bellsouth.net",
  ["att.net"] = "bellsouth.net",
  ["sbcglobal.net"] = "bellsouth.net",
  ["ameritech.net"] = "bellsouth.net",
  ["flash.net"] = "bellsouth.net",
  ["nvbell.net "] = "bellsouth.net",
  ["pacbell.net"] = "bellsouth.net",
  ["prodigy.net"] = "bellsouth.net",
  ["snet.net"] = "bellsouth.net",
  ["swbell.net"] = "bellsouth.net",
  ["wans.net"] = "bellsouth.net",

  ["comcast.net"] = {
    responses = {
      {
        code = "^421 4\\.4\\.0",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "No MXs for this domain could be reached at this time",
      },
      {
        code = "BL000000",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Blocked for Spam",
      },
      {
        code = "^554 PTR record",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "PTR Lookup Failure"
      },
      {
        code = "ES000001",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Blocked due to dynamic IP",
      },
      {
        code = "ES000010",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Blocked due to dynamic IP",
      },
      {
        code = "BL000001",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on Spamhaus Zen Blocklist",
      },
      {
        code = "BL000010",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on Cloudmark CSI",
      },
      {
        code = "BL000011",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on Spamhaus Zen Blocklist and Cloudmark CSI",
      },
      {
        code = "BL000100",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on SenderScore blocklist",
      },
      {
        code = "BL000101",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on Spamhaus and SenderScore Blocklist",
      },
      {
        code = "BL000110",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on SenderScore and Cloudmark CSI",
      },
      {
        code = "BL000111",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on SenderScore, Cloudmark CSI and Spamhaus Zen Blocklist",
      },
      {
        code = "BL001000",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on the TrendMicro MAPS RBL",
      },
      {
        code = "BL001001",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on the TrendMicro MAPS RBL and Spamhaus Zen",
      },
      {
        code = "BL001010",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on the TrendMicro MAPS RBL and Cloudmark CSI",
      },
      {
        code = "BL001011",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed the TrendMicro MAPS RBL, Cloudmark CSI and Spamhaus Zen»
blocklist",
      },
      {
        code = "BL001100",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on the TrendMicro MAPS RBL and SenderScore blocklist",
      },
      {
        code = "BL001101",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on the TrendMicro MAPS RBL, SenderScore blocklist and Spamhaus Zen»
blocklist",
      },
      {
        code = "BL001110",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on the TrendMicro MAPS RBL, SenderScore blocklist and Cloudmark»
CSI",
      },
      {
        code = "BL001111",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on the TrendMicro MAPS RBL, SenderScore blocklist, Cloudmark CSI»
and Spamhaus Zen",
      },
      {
        code = "RL000001",
        trigger = "5/1",
        action = {"suspend", "4 hours"},
      },
      {
        code = "452",
        trigger = "1",
        action = {"reduce_deliveries", 1},
        phase = "rcptto",
      },
    },
    configuration = {
      max_deliveries_per_connection = {100,400},
      max_outbound_connections = 4,
    },
  },

  ["earthlink.net"] = {
    responses = {
      {
        code = "^550 .*blocked by EarthLink",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with Earthlink required",
      },
    },
    configuration = {
      max_outbound_connections = {30,400},
    },
  },
  ["mindspring.com"] = "earthlink.net",

  ["rr.com"] = {
    responses = {
      {
        code = "ERROR: Mail refused - <.*> - See http://security\\.rr\\.com/cgi-bin/block-lookup",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP blocked, remediation with rr.com required",
        phase = "connect",
      },
      {
        code = "http://(postmaster|security)\\.rr\\.com/mail_blocks#directspam",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP blocked, remediation with rr.com required"
      },
      {
        code = "http://(postmaster|security)\\.rr\\.com/mail_blocks#highspam",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP blocked by rr.com due to high spam complaints",
      },
      {
        code = "http://(postmaster|security)\\.rr\\.com/mail_blocks\\.htm#noBounce",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP blocked due to high bounce rate",
      },
      {
        code = "http://(postmaster|security)\\.rr\\.com/mail_blocks#rollup",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Network blocked due to complaints, remediation with rr.com required",
        phase = "connect",
      },
      {
        code = "http://(postmaster|security)\\.rr\\.com/mail_blocks#dynamic",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Suspected dynamic IP",
      },
      {
        code = "^554 5\\.7\\.1 - ERROR: Connection refused. IP name lookup failed ",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP name lookup failed",
      },
      {
        code = "^421 4\\.7\\.1 - ERROR: Connection refused. Cannot resolve PTR record",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Cannot  resolve PTR record",
      },     
      {
        code = "http://(postmaster|security)\\.rr\\.com/mail_blocks#generic",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Generic PTR record?",
      },
      {
        code = ".*rrDynamic ",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Dynamic IP space, ",
      },
      {
        code = "ERROR: Mail refused - <.*> - See http://www\\.spamhaus\\.org",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP blocked, remediation with spamhaus required",
      },
      {
        code = "http://www\\.mail-abuse\\.com",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on RBL-Plus list, contact Trend Micro",
      },
      {
        code = "http://sendersuppport\\.senderscore\\.net",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP is listed on Return Path Sender Score Blacklist",
      },
      {
        code = "Too many recipients ",
        trigger = "1",
        action = {"reduce_deliveries", 1},
        phase = "connect",
      },
      {
        code = "Too many concurrent connections",
        trigger = "1",
        action = {"reduce_connections", 1},
        phase = "connect",
      },
      {
        code = "Exceeded limit for recipients per connection.",
        trigger = "1",
        action = {"reduce_deliveries", 1},
        phase = "connect",
      },
      {
        code = "ERROR: Mail refused - <.*> - See http://csi\\.cloudmark\\.com/reset-request/",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "IP blocked, remediation with cloudmark.com required",
      },
      {
        code = "^554 5\\.7\\.1 - ERROR: Mail refused",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with RoadRunner required",
      },
    },
    configuration = {
      max_deliveries_per_connection = {10,400},
      max_outbound_connections = {10,100},
    },
  },
  ["austin.rr.com"] = "rr.com",
  ["bak.rr.com"] = "rr.com",
  ["berkshire.rr.com"] = "rr.com",
  ["bham.rr.com"] = "rr.com",
  ["bizec.rr.com"] = "rr.com",
  ["bizlaredo.rr.com"] = "rr.com",
  ["bizla.rr.com"] = "rr.com",
  ["bizrgv.rr.com"] = "rr.com",
  ["biz.rr.com"] = "rr.com",
  ["bizsatx.rr.com"] = "rr.com",
  ["bizstx.rr.com"] = "rr.com",
  ["bizwi.rr.com"] = "rr.com",
  ["bizwoh.rr.com"] = "rr.com",
  ["carolina.rr.com"] = "rr.com",
  ["ca.rr.com"] = "rr.com",
  ["cfl.rr.com"] = "rr.com",
  ["cinci.rr.com"] = "rr.com",
  ["columbus.rr.com"] = "rr.com",
  ["dc.rr.com"] = "rr.com",
  ["ec.rr.com"] = "rr.com",
  ["elmore.rr.com"] = "rr.com",
  ["elp.rr.com"] = "rr.com",
  ["eufaula.rr.com"] = "rr.com",
  ["gt.rr.com"] = "rr.com",
  ["hawaii.rr.com"] = "rr.com",
  ["hot.rr.com"] = "rr.com",
  ["hvcbiz.rr.com"] = "rr.com",
  ["hvc.rr.com"] = "rr.com",
  ["indy.rr.com"] = "rr.com",
  ["insight.rr.com"] = "rr.com",
  ["kc.rr.com"] = "rr.com",
  ["maine.rr.com"] = "rr.com",
  ["ma.rr.com"] = "rr.com",
  ["mass.rr.com"] = "rr.com",
  ["mi.rr.com"] = "rr.com",
  ["nc.rr.com"] = "rr.com",
  ["neb.rr.com"] = "rr.com",
  ["neo.rr.com"] = "rr.com",
  ["ne.rr.com"] = "rr.com",
  ["newbc.rr.com"] = "rr.com",
  ["new.rr.com"] = "rr.com",
  ["nj.rr.com"] = "rr.com",
  ["nybiz.rr.com"] = "rr.com",
  ["nycap.rr.com"] = "rr.com",
  ["nyc.rr.com"] = "rr.com",
  ["oh.rr.com"] = "rr.com",
  ["panhandle.rr.com"] = "rr.com",
  ["pa.rr.com"] = "rr.com",
  ["rgv.rr.com"] = "rr.com",
  ["rochester.rr.com"] = "rr.com",
  ["san.rr.com"] = "rr.com",
  ["satx.rr.com"] = "rr.com",
  ["sc.rr.com"] = "rr.com",
  ["si.rr.com"] = "rr.com",
  ["socal.rr.com"] = "rr.com",
  ["stny.rr.com"] = "rr.com",
  ["stx.rr.com"] = "rr.com",
  ["sw.rr.com"] = "rr.com",
  ["tampabay.rr.com"] = "rr.com",
  ["triadbiz.rr.com"] = "rr.com",
  ["triad.rr.com"] = "rr.com",
  ["twcny.rr.com"] = "rr.com",
  ["twmi.rr.com"] = "rr.com",
  ["tx.rr.com"] = "rr.com",
  ["wi.rr.com"] = "rr.com",
  ["woh.rr.com"] = "rr.com",
  ["houston.rr.com"] = "rr.com",

  ["gmail.com"] = {
    responses = {
      {
        code = "http://mail\\.google\\.com/support/bin/answer\\.py\\?answer=6592";
        trigger = "1",
        action = {"throttle", "down"},
        phase = "each_rcpt",
      },
      {
        code = "5\\.7\\.1 .*Our system has detected an unusual rate";
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "IP blocked temporarily due to high complaint rate",
        phase = "connect",
      },
      {
        code = "4\\.7\\.0 .*Our system has detected an unusual rate";
        trigger = "1",
        action = {"suspend", "1 hours"},
        message = "IP blocked temporarily due to high complaint rate",
        phase = "connect",
      },
    },
    configuration = {
      max_deliveries_per_connection = {100,1000},
      max_outbound_connections = {30,500},
      outbound_throttle_messages = function(curr, last, age, mc)
        -- start at 1000/hr for the first 2 weeks, then raise the limit.
        age = age / 86400; -- convert to age in days
        if age > 14 then
          -- raise the limit 
          return 100000;
        end
          return 10000;
      end,
    },
  },
  ["google.com"] = "gmail.com",
  ["googlemail.com"] = "gmail.com",
  ["googlemail.co.uk"] = "gmail.com",
  ["ntlworld.com"] = "gmail.com",
  ["ntlworld.co.uk"] = "gmail.com",
  ["virgin.net"] = "gmail.com",
  ["virginmedia.com"] = "gmail.com",

  ["live.com"] = {
    responses = {
      {
        code = "421 PR\\((dt1|ct1)\\)",
        trigger = "1",
        action = {"throttle", "down"},
        phase = "connect",
      },
      {
        code = "421 RP-00[123]",
        trigger = "1",
        action = {"throttle", "down"},
        phase = "connect",
      },
      {
        code = "^451 4\\.7\\.1",
        trigger = "1",
        action = {"greylisted", "15 minutes"},
      },
      {
        code = "550 OU-001",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Spamhaus required",
      },
      {
        code = "550 DY-002",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Hotmail required",
        phase = "connect",
      },
      {
        code = "550 DY-001",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Hotmail required",
        phase = "connect",
      },
      {
        code = "550 SC-004",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Hotmail required",
        phase = "connect",
      },
      {
        code = "550 SC-003",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Hotmail required",
      },
      {
        code = "550 SC-002",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Hotmail required",
      },
    },
    configuration = {
      max_deliveries_per_connection = {100,1000},
      max_outbound_connections = {30,500},

      --[[
      warmup is disabled for this one for the moment, as we
           don't currently record mc
      outbound_throttle_messages = function(curr, last, age, mc)
        -- 1000/hr for first 200,000 messages
        if mc < 200000 then
          return 1000;
        end
        return 100000;
      end,
      ]]
      outbound_throttle_messages = function(curr, last, age, mc)
        -- start at 1000/hr for the first 2 weeks, then remove limit.
        age = age / 86400; -- convert to age in days
        if age > 14 then
          -- remove limit
          return 100000;
        end
        return 10000;
      end,
    },
  },
  ["msn.com"] = "live.com",
  ["hotmail.com"] = "live.com",
  ["hotmail.de"] = "live.com",
  ["hotmail.co.jp"] = "live.com",
  ["hotmail.it"] = "live.com",
  ["hotmail.es"] = "live.com",
  ["hotmail.fr"] = "live.com",
  ["hotmail.co.uk"] = "live.com",
  ["hotmail.co.kr"] = "live.com",
  ["hotmail.com.ar"] = "live.com",
  ["hotmail.co.il"] = "live.com",
  ["hotmail.com.br"] = "live.com",
  ["hotmail.com.tr"] = "live.com",
  ["hotmail.co.th"] = "live.com",
  ["hotmail.jp"] = "live.com",
  ["hotmail.se"] = "live.com",
  ["live.at"] = "live.com",
  ["live.be"] = "live.com",
  ["live.ca"] = "live.com",
  ["live.cl"] = "live.com",
  ["live.cn"] = "live.com",
  ["live.co.kr"] = "live.com",
  ["live.com.ar"] = "live.com",
  ["live.com.au"] = "live.com",
  ["live.com.mx"] = "live.com",
  ["live.com.my"] = "live.com",
  ["live.com.sg"] = "live.com",
  ["live.de"] = "live.com",
  ["live.dk"] = "live.com",
  ["live.fr"] = "live.com",
  ["live.hk"] = "live.com",
  ["live.ie"] = "live.com",
  ["live.in"] = "live.com",
  ["live.it"] = "live.com",
  ["live.jp"] = "live.com",
  ["live.nl"] = "live.com",
  ["live.no"] = "live.com",
  ["live.ru"] = "live.com",
  ["live.se"] = "live.com",
  ["outlook.com"] = "live.com",
  ["live.co.uk"] = "live.com",
  ["hotmail.gr"] = "live.com",
  ["windowslive.com"] = "live.com",
  ["hotmail.cl"] = "live.com",
  ["live.at"] = "live.com",
  ["live.jp"] = "live.com",
  ["live.ca"] = "live.com",
  ["hotmail.ca"] = "live.com",
  ["hotmail.ch"] = "live.com",
  ["live.fr"] = "live.com",
  ["live.it"] = "live.com",
  ["live.nl"] = "live.com",
  ["outlook.com.br"] = "live.com",
  ["live.com.pt"] = "live.com",
  ["live.be"] = "live.com",
  ["live.co.za"] = "live.com",
  ["sympatico.ca"] = "live.com",

  ["verizon.com"] = {
    responses = {
      {
        code = "^571 Email from .*is currently blocked by Verizon Online's anti-spam system",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Remediation with Verizon required",
      },
    },
  },
  ["verizon.net"] = "verizon.com",

  ["verizonwireless.com"] = {
    responses = {
      {
        code = "^554 \\w+\\.verizonwireless\\.com",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with verizonwireless.com required",
      },
    },
  },

  ["free.fr"] = {
      responses = {
        {
          code = "^421 Server busy .*too many connections",
          trigger = "1",
          action = {"reduce_connections", 1},
          phase = "connect",
        },

        {
          code = "^421 Too many spams from your IP",
          trigger = "1",
          action = {"suspend", "2 hours"},
          message = "Blocked due to spam, Remediation with Free.fr required",
        },

        {
          code = "^451 too many errors from your IP",
          trigger = "1",
          action = {"suspend", "2 hours"},
          message = "Blocked, check your IP configuration",
        },
        {
          code = "^550 Too many spams from your IP",
          trigger = "1",
          action = {"suspend", "2 hours"},
          message = "Blocked due to spam, Remediation with Free.fr required",
        },

      },

  },
  ["aliceadsl.fr"] = "free.fr",
  ["infonie.fr"] = "free.fr",
  ["libertysurf.fr"] = "free.fr",
  ["worldonline.fr"] = "free.fr",

  ["orange.fr"] = {
    responses = {
      {
        code = "^421 .*Veuillez essayer plus tard",
        trigger = "1",
        action = {"suspend", "30 minutes"},
        message = "Service refused, try again later.",
      },
      {
        code = "^421 .*Trop de connexions",
        trigger = "1",
        action = {"reduce_connections", 1},
        phase = "connect",
      },
      {
        code = "http://csi.cloudmark.com/reset-request/",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "IP blocked, remediation with cloudmark.com required",
      },
      {
        code = "550 5.2.0 Mail rejete",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "IP blocked, remediation with Orange.fr required",
      },
    },
    configuration = {
        max_deliveries_per_connection = {50,300},
        max_outbound_connections = {1,3},
    },
  },
  ["orange.com"] = "orange.fr",
  ["wanadoo.fr"] = "orange.fr",
  ["francetelecom.com"] = "orange.fr",
  ["voila.fr"] = "orange.fr",
  ["voila.com"] = "orange.fr",

  ["mac.com"] = {
    responses = {
      {
        code = "^550 5\\.7\\.0 Blocked",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "IP blocked, remediation with ProofPoint required",
      },
      {
        code = "^554 .*ESMTP Blocked",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "IP blocked, remediation with ProofPoint required",
       },
    },
  },

  ["icloud.com"] = "mac.com",
  ["me.com"] = "mac.com",
  ["163.com"] = {
    responses = {
      {
        code = "^421 HL:REP",
        trigger = "1",
        action = {"suspend", "15 minutes"},
        message = "Description => Triggered temporary anti-spam policies on Netease, suspended for»
15 minutes",
      },
      {
        code = "^421 HL:ICC",
        trigger = "1",
        action = {"suspend", "15 minutes"},
        message = "Description => Triggered temporary anti-spam policies on Netease, suspended for»
15 minutes",
      },
      {
        code = "^421 HL:IFC",
        trigger = "1",
        action = {"suspend", "15 minutes"},
        message = "Description => Triggered temporary flow-control policies on Netease, suspended»
for 15 minutes",
      },
      {
        code = "^421 HL:MEP",
        trigger = "1",
        action = {"suspend", "15 minutes"},
        message = "Description => Triggered mail-from_faking policies on Netease, suspended for 15»
minutes",
      },
      {
        code = "^554 MI:STC",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Description => Triggered max_msgs_per_day policy on Netease, suspended for 2»
hours",
        phase = "mailfrom",
      },
      {
        code = "^421 IP<.*> rejected",
        trigger = "1",
        action = {"suspend", "30 minutes"},
        message = "Description => Triggered IP (Temporary) Rejection policy on Netease, suspended»
for 30 minutes.",
        phase = "connect",
      },
      {
        code = "^550 RP:TRC",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Description => Triggered max_rcpts_per_day policy on Netease, suspended for 2»
hours",
        phase = "mailfrom",
      },
      {
        code = "^550 MI:STC",
        trigger = "1",
        action = {"suspend", "15 minutes"},
        phase = "mailfrom",
      },
      {
        code = "^554 HL:IHU",
        trigger = "3/1",
        action = {"suspend", "15 minutes"},
        message = "Description => Triggered anti-spam policies on Netease, suspended for 15»
minutes",
      },
      {
        code = "^554 DT:SUM",
        trigger = "1",
        action = {"suspend", "15 minutes"},
        message = "Description => Triggered header_inconsistency policy on Netease, suspended for»
15 minutes",
      },
      {
        code = "^550 RP:RCL",
        trigger = "1",
        action = {"suspend", "15 minutes"},
      },
      {
        code = "^450 DT:RBL",
        trigger = "1",
        action = {"suspend", "4 hours"},
        message = "Description => Triggered RBL policies on Netease, suspended for 4 hours",
      },
      {
        code = "^451 DT:SPM",
        trigger = "5/1",
        action = {"suspend", "15 minutes"},
        message = "Description => Triggered Anti-spam policies on Netease, suspended for 15»
minutes",
        phase = "data",
      },  
      {
        code = "^550 DT:SPM",
        trigger = "7/1",
        action = {"suspend", "30 minutes"},
        message = "Description => Triggered Anti-spam policies on Netease, suspended for 30»
minutes",
        phase = "data",
      },
      {
        code = "^554 DT:SPM",
        trigger = "7/1",
        action = {"suspend", "30 minutes"},
        message = "Description => Triggered Anti-spam policies on Netease, suspended for 30»
minutes",
        phase = "data",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,7},
      max_outbound_connections = {1,39},
    },
  },
  ["126.com"] = "163.com", 
  ["yeah.net"] = "163.com",

  ["qq.com"] = {
    responses = {
      { 
        code = "^550 Domain frequency limited",
        trigger = "1",
        action = {"suspend", "1 hours"},
        message = "Description => Rejected by (Sending Domain) Flow-control policy on QQ Email,»
suspended for 1 hours",
      },
      {
        code = "^550 Sender frequency limited",
        trigger = "1",
        action = {"suspend", "1 hours"},
        message = "Description => Rejected by (Sender) Flow-control policy on QQ Email, suspended»
for 1 hours",
      },
      { 
        code = "^550 Ip frequency limited",
        trigger = "1",
        action = {"suspend", "1 hours"},
        message = "Description => Rejected by (IP) Flow-control policy on QQ Email, suspended for»
1 hours",
      },
      { 
        code = "^550 Connection frequency limited",
        trigger = "1",
        action = {"reduce_connections", 1},
        message = "Description => Rejected by (IP) Flow-control policy on QQ Email, suspended for»
1 hours",
      },
      { 
        code = "^550 Connection denied",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Description => Aggressive delivery rejected by (IP) Flow-control policy on QQ»
Email, suspended for 2 hours",
      },
      {
        code = "^550 Error: mail rejected by antispam server",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Description => Rejected by Anti-spam on QQ Email, suspended for 2 hours",
        phase = "data",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,4},
      max_outbound_connections = {1,29},
    },
  },
  ["foxmail.com"] = "qq.com",
  ["vip.qq.com"] = "qq.com",

  ["sina.com"] = {
    responses = {
      {
        code = "^421 #4\\.4\\.5 Too many connections to this host",
        trigger = "1",
        action = {"reduce_connections", 1},
        phase = "connect",
      },
      {
        code = "^421 #4\\.4\\.5 Too many connections from your host",
        trigger = "1",
        action = {"reduce_connections", 1},
        phase = "connect",
      },
      {
        code = "^421 #4\\.4\\.5 Too many connections to this listener",
        trigger = "1",
        action = {"reduce_connections", 1},
        phase = "connect",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,3},
      max_outbound_connections = {1,29},
      outbound_throttle_messages = function(curr, last, age, mc)
        -- 21600/hr for 2 days,
        -- raise to 36000/hr for next 7 days, then 54000/hr in the end.
        age = age / 86400; -- convert to age in days

        if age <= 2 then
          return 21600;
        end
        if age <= 9 then
          return 36000;
        end
        if age >= 10 then
          return 54000;
        end
        return 100000;

      end,
    },
  },
  ["sina.com.cn"] = "sina.com",
  ["sina.cn"] = "sina.com",
  ["sina100.com"] = "sina.com",
  ["vip.sina.com"] = "sina.com",
  ["2008.sina.com"] = "sina.com",

  ["21cn.com"] = {
    responses = {
      {
        code = "^553 this mail is rejected by antispam system",
        trigger = "5/1",
        action = {"suspend", "30 minutes"},
        message = "Description => Rejected by Anti-spam on 21CN, suspended for 30 minutes",
        phase = "data",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,3},
      max_outbound_connections = {1,29},
    },
  },

  ["sohu.com"] = {
    responses = {
      {
        code = "^553 5\\.7\\.1 SENDER REJECT",
        trigger = "1",
        action = {"suspend", "1 hours"},
        message = "Description => Sender is rejected on SOHU, suspended for 1 hour",
        phase = "data",
      },
      {
        code = "^553 5\\.7\\.0 IP REJECT",
        trigger = "1",
        action = {"suspend", "1 hours"},
        message = "Description => IP is rejected on SOHU, suspended for 1 hour",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,3},
      max_outbound_connections = {1,29},
    },
  },
  ["sogou.com"] = "sohu.com",
  ["chinaren.com"] = "sohu.com",
  ["vip.sohu.com"] = "sohu.com",

  ["citiz.net"] = {
    responses = {
      {
        code = "^450 Too many connection",
        trigger = "1",
        action = {"reduce_connections", 1},
        phase = "connect",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,3},
      max_outbound_connections = {1,19},
    },
  },

  ["tom.com"] = {
    responses = {
      {
        code = "^421 /32 connection limit exceeded",
        trigger = "1",
        action = {"reduce_connections", 1},
        phase = "connect",
      },
      {
        code = "^553 this mail is blocked by kbas",
        trigger = "5/1",
        action = {"suspend", "30 minutes"},
        message = "Description => Rejected by Anti-spam on Tom Online, suspended for 30 minutes",
        phase = "data",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,3},
      max_outbound_connections = {1,25},
    },
  },
  ["163.net"] = "tom.com",
  ["tiscali.co.uk"] = {
    responses = {
      {
        code = "^421 .*Too many connections",
        trigger = "5/1",
        action = {"reduce_connections", 1},
        phase = "connect",
      },
      {
        code = "^450 greylisted";
        trigger = "1",
        action = {"greylisted", "15 minutes"},
        phase = "each_rcpt",
      },
    },
    configuration = {
      max_deliveries_per_connection = {2,14},
      max_outbound_connections = {2,10},
      outbound_throttle_messages = {45, 2011},
    },
  },

  ["eftel.com"] = {
    responses = {
      {
        code = "^450 too many connections from your IP",
        trigger = "1",
        action = {"reduce_connections", 2},
        message = "Too many connections",
        phase = "connect",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,10},
      max_outbound_connections = {1,24},
    },
  },
  ["eftel.com.au"] = "eftel.com",
  ["eftel.net.au"] = "eftel.com",

  ["aanet.com.au"] = {
    responses = {
      {
        code = "^450 too many connections from your IP",
        trigger = "1",
        action = {"reduce_connections", 2},
        message = "Too many connections",
        phase = "connect",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,10},
      max_outbound_connections = {1,24},
    },
  },

  ["bigpond.com"] = {
    responses = {
      {
        code = "^552 5\\.2\\.0 .*Suspected spam message rejected ",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with BigPond required",
      },
      {
        code = "^452 4\\.1\\.0 .*Max messages per session",
        trigger = "1",
        action = {"reduce_deliveries", 5},
      },
      {
        code = "^452 4\\.1\\.0 .*sender rejected ",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with BigPond required",
      },
      {
        code = "^421 .*BigPond Inbound Connection refused too many sessions",
        trigger = "1",
        action = {"reduce_connections", 1},
      },
      {
        code = "^554 .*Cloudmark Sender Intelligence",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Blocked by Cloudmark CSI filter. Remediation with Bigpond.com required",
      },
    },
    configuration = {
      max_deliveries_per_connection = {10,100},
      max_outbound_connections = {1,24},
    },
  },
  ["bigpond.net.au"] = "bigpond.com",
  ["telstra.com"] = "bigpond.com",

  ["libero.it"] = {
    responses = {
      {
        code = "^421 .*Too many connections to this listener",
        trigger = "1",
        action = {"reduce_connections", 1},
        message = "Too many connections",
        phase = "connect",
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,10},
      max_outbound_connections = {1,24},
    },
  },

  ["arcor.de"] = {
    responses = {
      {
        code = "^554 5\\.7\\.1 .*dnsbl ",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with Arcor.de required",
      },
      {
        code = "^450 4\\.7\\.1 .*too many recipients",
        trigger = "1",
        action = {"reduce_deliveries", 1},
      },
    },
    configuration = {
      max_deliveries_per_connection = {1,100},
      max_outbound_connections = {1,24},
    },
  },

  ["netvision.net.il"] = {
    responses = {
      {
        code = "^421 Connection not accepted at this time",
        trigger = "5/1",
        action = {"throttle", "down"},
        message = "Temporary failure",
      },
    },
    configuration = {
      max_deliveries_per_connection ={1,30},
      max_outbound_connections ={1,2},
    },
  },
  ["013.net"] = "netvision.net.il",
  ["013.net.il"] = "netvision.net.il",
  ["013net.net"] = "netvision.net.il",

  ["O2.co.uk"] = {
    responses = {
      {
        code = "^451 too many messages",
        trigger = "1",
        action = {"reduce_deliveries", 1},
      },
    },
  },

  ["WP.PL"] = {
    responses = {
      {
        code = "^470 .*you sent too many e-mails",
        trigger = "1",
        action = {"reduce_deliveries", 1},
      },
      {
        code = "^550 .*We can't accept this message because it is spam",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "IP blocked, remediation with WP.PL required",
      },
    },
    configuration = {
      max_outbound_connections = {1,10},
    },
  },

  ["INTERIA.PL"] = {
    configuration = {
      max_outbound_connections = {1,10},
    },
  },
  ["interia.eu"] = "INTERIA.PL",
  ["poczta.fm"] = "INTERIA.PL",

  ["onet.pl"] = {
    responses = {
      {
        code = "^450 4\\.7\\.1 .*Greylisting in action",
        trigger = "1",
        action = {"greylisted", "15 minutes"},
      },
    },
    configuration = {
      max_outbound_connections = {1,5},
    },
  },
  ["onet.eu"] = "onet.pl",
  ["op.pl"] = "onet.pl",
  ["adres.pl"] = "onet.pl",
  ["vp.pl"] = "onet.pl",
  ["cyberia.pl"] = "onet.pl",
  ["pseudonim.pl"] = "onet.pl",
  ["buziaczek.pl"] = "onet.pl",
  ["amorki.pl"] = "onet.pl",
  ["autograf.pl"] = "onet.pl",
  ["spoko.pl"] = "onet.pl",
  ["opoczta.pl"] = "onet.pl",

  ["telenet.be"] = {
    responses ={
      {
        code = "^421 .*Too many simultaneous sessions",
        trigger = "1",
        action = {"reduce_connections", 1},
        message = "Reduced connections",
        phase = "connect",
      },
    },
    configuration = {
      max_outbound_connections = {1,20},
    },
  },

  ["facebook.com"] = {
    responses = {
      {
        code = "^554 5\\.7\\.1 POL-P7",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with customer required due to authentication failure",
      },
    },
  },

  ["pandora.be"] = {
    responses ={
      {
        code = "^452 4\\.1\\.1 .*Greylisting in action",
        trigger = "1",
        action = {"greylisted", "15 minutes"},
      },
    },
    configuration = {
      max_outbound_connections = {1,20},
    },
  },

  ["t-mobile.com"] = {
    responses = {
      {
        code = "^554 5\\.7\\.1 Third Party Bad Sender",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with customer or t-mobile.com required",
      },
    },
  },

  ["planet.nl"] = {
    responses = {
      {
        code = "^550 5\\.0\\.0 Mail rejected",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with Planet.nl required",
      },
    },
  },

  ["t-online.de"] = {
    responses = { 
      {
        code = "^554 .*postmaster.*(BL)",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "Remediation with t-online.de required",
      },
    },
  },

  ["iinet.net.au"] = {
    responses = {
      {
        code = "^421 .*Too many messages for this session",
        trigger = "1",
        action = {"reduce_deliveries", 1},
        message = "Remediation with iinet.net.au required",
      },
      configuration = {
        max_deliveries_per_connection = {2,20},
        max_outbound_connections = {1,10},
      },
    },
  },
  ["ozemail.com.au"] = "iinet.net.au",

  ["mail.ru"] = {
    responses = {
      {
        code = "^550 spam message discarded",
        trigger = "1",
        action = {"suspend", "2 hours"},
        message = "IP blocked, remediation with mail.ru required",
      },
      {
        code = "^421 Temporarily rejected",
        trigger = "5/1",
        action = {"suspend", "2 hours"},
        message = "IP blocked, remediation with mail.ru required",
      },
    },
    configuration = {
      max_deliveries_per_connection = {20,100},
      max_outbound_connections = {1,10},
    },
  },
  ["inbox.ru"] = "mail.ru",
  ["bk.ru"] = "mail.ru",
};

-- vim: et ts=2 sw=2:
```