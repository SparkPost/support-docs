---
lastUpdated: "05/10/2025"
title: "smtp_tls_reporting"
description: "hook invoked after every TLS events for reporting purpose rfc8460 TLSRPT"
---

<a name="hooks.core.smtp_tls_reporting"></a>
## Name

smtp_tls_reporting - This hook is added in 5.1 and allows you inspect a SMTP TLS reporting data
 point in JSON format.

## Synopsis

`#include "hooks/core/smtp_tls_reporting.h"`

`int core_smtp_tls_reporting(void closure, struct json_object *json)`


## Description

This hook is called upon:
- any TLSRPT (rfc8460) defined failures, before a TLS connection is attempted,
  normally during TLS policy (including MTA-STS, TLSA/DANE) fetching stage.
  **Currently, only failures to fetch MTA-STS policies are supported/reported**.
- TLS negotiation failures or successes during outbound delivery when MTA-STS or TLSA/DANE is enabled.
  **Currently, only enabled on domains with successfully fetched MTA-STS policies**.

The JSON fields and values are defined in `tlsrpt.h`, with most of the field names the same as
 defined in the RFC: https://datatracker.ietf.org/doc/html/rfc8460.

The following JSON fields are not defined in the RFC:
*   `epoch` - epoch time of when the hook is invoked
*   `type`  - whether the data is for a successful TLS connection or a failure.
              `0` - failure; `1` - success

**An example JSON for a success**:

```
{
    "epoch": 1746712864,
    "type": 1,
    "policy": {
        "policy-type": "sts",
        "policy-domain": "test.bird.com",
        "policy-string": [
            "version: STSv1",
            "mode: enforce",
            "mx: mx.bird.com",
            "mx: server.ectest.OMNITI.com",
            "max_age: 604800"
        ]
    },
    "sending-mta-ip": "127.0.0.1",
    "receiving-mx-hostname": "server.ectest.OMNITI.com",
    "receiving-ip": "127.0.0.1"
}
```

**An example JSON for a failure**:

```
{
    "epoch": 1746629177,
    "type": 0,
    "policy": {
        "policy-type": "sts",
        "policy-domain": "mismatch.cert.com",
        "policy-string": [
            "version: STSv1",
        "mode: enforce",
        "mx: test.bird.com",
        "max_age: 86400"
        ]
    },
    "result-type": "certificate-host-mismatch",
    "failure-reason-code": "4.7.5 [internal] SSL certificate subject does not match host",
    "sending-mta-ip": "127.0.0.1",
    "receiving-mx-hostname": "test.BIRD.com",
    "receiving-ip": "127.0.0.1"
}
```


**Return Values**

This hook returns `int`, but for now the return value has no significance.


**Threading**

This hook could be called in any thread. Please avoid doing time consuming tasks in the hook's
 implementation.


### Example: a Lua implementation of the hook to log the JSON into the `paniclog`

```
 require("msys.core");
 require("json")

 local mod = {}

 function mod:core_smtp_tls_reporting(js)
   print("tls report: ", js)	-- log the whole JSON
   if js.type == 0 then -- failure
     print(string.format("TLSRPT: %s@%s@%s", js.policy["policy-domain"],
			              js.policy["policy-type"], js["result-type"]))
   else -- success
     print(string.format("TLSRPT: %s@%s@%s", js.policy["policy-domain"],
		  	              js.policy["policy-type"], "OK"))
   end
 end

 msys.registerModule("tlsrpt", mod);
```

**Example of the paniclog output from the above Lua hook**:
```
1746712864:scriptlet: tls report:   { "epoch": 1746712864, "type": 1, "policy": { "policy-type": "sts", "policy-domain": "test.bird.com", "policy-string": [ "version: STSv1", "mode: enforce", "mx: mx.bird.com", "mx: server.ectest.OMNITI.com", "max_age: 604800" ] }, "sending-mta-ip": "127.0.0.1", "receiving-mx-hostname": "server.ectest.OMNITI.com", "receiving-ip": "127.0.0.1" }
1746712864:scriptlet: TLSRPT: test.bird.com@sts@OK
1746719856:scriptlet: tls report:   { "epoch": 1746719856, "type": 0, "policy": { "policy-type": "sts", "policy-domain": "mismatch.cert.com", "policy-string": [ "version: STSv1", "mode: enforce", "mx: test.bird.com", "max_age: 86400" ] }, "result-type": "certificate-host-mismatch", "failure-reason-code": "4.7.5 [internal] SSL certificate subject does not match host", "sending-mta-ip": "127.0.0.1", "receiving-mx-hostname": "test.BIRD.com", "receiving-ip": "127.0.0.1" }
1746719856:scriptlet: TLSRPT: mismatch.cert.com@sts@certificate-host-mismatch
```
