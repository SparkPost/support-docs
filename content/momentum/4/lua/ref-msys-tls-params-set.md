---
lastUpdated: "10/05/2021"
title: "msys.tls_params.set"
description: "msys tls_params set Set a tls parameter string on a per connection basis, overriding if the parameter is already set"
---

<a name="lua.ref.msys.tls_params.set"></a> 
## Name

msys.tls_params.set — Set a tls parameter string on a per connection basis, overriding if the parameter is already set.

## Synopsis

`require('msys.tls_params');`

`msys.tls_params.set(tls_params, "param", "val");`

```
tls_params: mixed
param: string
val: string
```

## Description

This function allows you to set a tls parameter string value on a per connection basis. If a tls parameter is already set in the Momentum configuration, this will override that parameter temporarily.

This should only be used in hooks where the tls parameters are passed as an argument such as `get_outbound_tls_parameters` and `get_inbound_tls_parameters`.

<a name="lua.ref.msys.tls_params.set.example"></a> 

The following example shows how to use this function in the `get_outbound_tls_parameters` hook to override tls parameters in a mutual tls connection.
It is important to note that the use of this hook will reset outbound tls configurations for the current connection.

```
local core = require("msys.core");
require("msys.tls_params");
local mod = {};

function mod:core_get_outbound_tls_parameters(msg, params)

  -- 0 = no, 1 = ifavailable, 2 = required
  params.use_tls = 2;

  -- The tls_params module is used here for setting all string values from the `ec_ssl_ctx_params` struct
  msys.tls_params.set(params, "certfile", "path/to/cert");
  msys.tls_params.set(params, "keyfile", "psth/to/key");
  
  -- Other valid params that can be set include:
  -- cipherlist
  -- ca
  
end

msys.registerModule("custom_tls_hook", mod);
```

## See Also

[get_outbound_tls_parameters](/momentum/3/3-api/hooks-core-get-outbound-tls-parameters), [ec_ssl_ctx_params](/momentum/3/3-api/structs-ec-ssl-ctx-params)
