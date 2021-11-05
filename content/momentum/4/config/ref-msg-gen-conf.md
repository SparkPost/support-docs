---
lastUpdated: "03/26/2020"
title: "msg_gen.conf File"
description: "The msg gen conf file contains the configuration relevant to message generation This file is included from within ecelerity conf Restart the ecelerity process if you make any changes to the msg gen conf file Running the config reload command will not suffice The following is an example msg gen..."
---

The `msg_gen.conf` file contains the configuration relevant to message generation. This file is included from within `ecelerity.conf`.

### Warning

Restart the ecelerity process if you make any changes to the `msg_gen.conf` file. Running the **`config reload`**         command will not suffice.

The following is an example `msg_gen.conf` file:

<a name="conf.ref.msg_gen.conf.example"></a> 


```
httpsrv { }
HTTP_Listener {
  Listen ":2081" {}
}
substitution_engine {}

scriptlet "scriptlet" {
  script "rest_templates" { source = "msys.rest.templates" }
  script "rest_users" { source = "msys.rest.users" }
  script "rest_transmissions" { source = "msys.rest.transmissions" }
  script "open_track" { source = "msys.rest.open_tracker" }
  script "click_tracker" { source = "msys.rest.click_tracker" }
}
# One entry for each Platform node
cassandra_client {
  uri = ("name=cassandra_db;host=192.168.1.204;port=9160"
         "name=cassandra_db;host=192.168.1.206;port=9160")
}

engagement_tracker {}

msg_gen {
  engagement_tracking_host = "example.com:81"
  cluster_cfg = true
  quorum = 2
  # a node stanza for each Platform node
  node node1.lan {
    mta_id = 1
    votes = 1
  }
  node node2.lan {
    mta_id = 2
    votes = 1
  }
}
```

For a discussion of scopes and fallbacks, see [“Configuration Scopes and Fallback”](/momentum/4/4-ecelerity-conf-fallback).

For a summary of all the non-module specific configuration options, refer to [*Configuration Options Summary*](/momentum/4/config-options-summary) .

Modules and their configuration options are discussed in the [*Modules Reference*](/momentum/4/modules/) .

The following are the modules configured in the `msg_gen.conf` file:

<dl class="variablelist">

<dt>cassandra_client</dt>

<dd>

This module configuration includes a `uri` entry for each Platform node in your cluster. Do not change this setting.

</dd>

<dt>engagement_tracker</dt>

<dd>

This module handles the creation of open-tracked and click-tracked links and the corresponding parsing of the links when an open or click event occurs. See [“engagement_tracker – HTTP Engagement Tracking”](/momentum/4/modules/engage-tracker).

</dd>

<dt>HTTP_Listener</dt>

<dd>

To use the REST API, this listener module must be loaded. By default, the HTTP_Listener listens on port 2081\. See [*Configuring Inbound Mail Service Using HTTP*](/momentum/4/http-listener) .

</dd>

<dt>httpsrv</dt>

<dd>

To use the REST API, this HTTP server infrastructure module must be loaded. See [“httpsrv – HTTP Server”](/momentum/4/modules/4-httpsrv).

</dd>

<dt>msg_gen</dt>

<dd>

Handles message generation. See [“msg_gen – Message Generation”](/momentum/4/modules/msg-gen).

</dd>

<dt>scriptlet</dt>

<dd>

The scriptlet module defined in `msg_gen.conf` supplements the scriptlet module defined in `ecelerity.conf`. The various `script` scopes point to the scripts needed to support message generation. Note that the scriptlet module instance name, `scriptlet`, is the same as the scriptlet instance name in the `ecelerity.conf` file. All instances of the scriptlet module must use the same instance name. For more information, see [“scriptlet - Lua Policy Scripts”](/momentum/4/modules/scriptlet).

</dd>

<dt>substitution_engine</dt>

<dd>

This module handles substitution in the templates. It has no configuration options.

</dd>

</dl>