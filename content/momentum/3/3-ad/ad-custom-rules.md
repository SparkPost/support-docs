---
lastUpdated: "03/26/2020"
title: "Custom Rules"
description: "The system rules for adaptive behavior are contained in the opt msys ecelerity libexec scriptlets msys adaptive rules lua file You can customize these rules using Lua scripts that invoke the msys adaptive register Rules function To do this create new rules in the following format Example 4 1 Custom..."
---

The system rules for adaptive behavior are contained in the `/opt/msys/ecelerity/libexec/scriptlets/msys/adaptive_rules.lua` file. You can customize these rules using Lua scripts that invoke the `msys.adaptive.registerRules` function. To do this create new rules in the following format:

<a name="ad.custom.example"></a> 


```
require(‘msys.adaptive’)
local rules = {
  ["<domain>"] = {
    responses = {
      {
        code = "<PCRE>",
        trigger = "1"|"<events>/<interval>",
        action = {
          {"<action1>", "<param11>", "<param12>", ...},
          {"<action2>", "<param21>", "<param22>", ...},
          ...
        },
        message = "<text>",
        phase = "connect",
      },
      {
        <another code-trigger-action block>
      },
      ...
    },
    configuration = {
      <option> = <value>|<sequence>|<Lua function>,
      ...
    },
  },
}
msys.adaptive.registerRules(rules, "augment"|"replace")
```

A description of this format follows.

## <a name="ad.custom.domain"></a> domain

Supply a domain that your rules apply to. In [“Custom Lua rules format”](/momentum/3/3-ad/ad-custom-rules#ad.custom.example) this is indicated by `<domain>`.

If the value for a given key is a string, then the entry is an alias for the value. For example, `["live.com"] = "hotmail.com",` declares that `live.com` is an alias for `hotmail.com`. Aliasing is not recursive; it is invalid to have an alias for a domain that is also an alias.

## <a name="ad.custom.responses.table"></a> The responses Table

The elements of the responses table are as follows:

*   `code` – A PCRE of the SMTP response code to be matched

*   `trigger` – The trigger threshold

    If this element is set to `1`, the action is triggered on the first occurrence of the code. You can also set this to the number of occurrences per given period. For example, `10/1` triggers the action when more than 10 occurrences of this code are detected per second.

*   `action` – The action to take when a rule is triggered. Valid actions are as follows:

    *   {"suspend", "*`num`* hours"} – Suspend for specified number of hours. The adaptive module checks whether to lift suspensions according to the setting of the `suspend_sweep_interval`.

    *   {"blackhole", "*`num`* hours"} – Blackhole the domain for the specified period; seconds, minutes and days are also valid. The adaptive module restores domains according to the setting of the `suspend_sweep_interval`.

    *   {"throttle", "down"} – Reduce the number of messages by the amount calculated.

    *   {"greylisted", "*`num`* minutes"} – Adjust the binding for greylisting.

    *   {"warmup", "*`num`*"} – Set the age of the binding in seconds.

        If `adaptive_scope` evaluates to "global" for a binding scope (binding is a scope in Momentum), the age set for that binding through the warmup action will be applied to that binding across the whole cluster. *Note*: If adaptive_scope evaluates to "global" for a binding::domain combination, it does not imply that `adaptive_scope` will also evaluate to the same value for that binding alone.

    *   {"reduce_connections", *`num`*} – Reduce connections by the specified number.

    *   {"reduce_deliveries", *`num`*} – Reduce deliveries by the specified number.

*   `phase` – When the phase parameter is present in a rule, it is intended to limit the scope of the rule to one of the outbound protocol phases. This is not currently implemented and should be omitted from rule definitions.

## <a name="ad.custom.configuration"></a> The configuration Element

The `configuration` element can be any of the configuration options described in [“Parameters Adjusted by the Rules”](/momentum/3/3-ad/ad-adaptive-rules-parameters).

## <a name="ad.custom.registerrules"></a> The msys.adaptive.registerRules Function

In order for a set of custom rules to be applied, that set must be registered. This is done using the `msys.adaptive.registerRules` method.

To register custom rules, pass the table name (named `rules` in [“Custom Lua rules format”](/momentum/3/3-ad/ad-custom-rules#ad.custom.example)) and the optional registration type parameter. Registration type defaults to `augment` but can also be set to `replace`.

### Warning

Take care when using the `replace` option—the new rule set(s) will replace all existing rules.

## <a name="ad.custom.rules.reference"></a> Referencing Rules in the Scriptlet Module

As with any other Lua script, the custom rules script must be referenced from the scriptlet module. For example, if you created a custom rules script named `adaptive_overrides.lua`, you would reference it from the scriptlet module in the following way:

```
scriptlet "scriptlet" {
  script "adaptive_overrides" {
    source = "adaptive_overrides"
  }
}
```

Any custom adaptive scripts (like other user-defined scripts) should be saved in either the `/opt/msys/ecelerity/etc/conf/default` or `/opt/msys/ecelerity/etc/conf/global` directory or a directory below these directories. For more information about the scriptlet module see [scriptlet – Module](/momentum/3/3-reference/3-reference-modules-scriptlet) .

## <a name="ad.custom.rule.example"></a> Custom Rule Examples

The following example shows a custom rule overriding an existing system rule.

Given the following system rules:

```
rules = {
  ["yahoo.com"] = {
    responses = {
      {
        code = "^553 Mail from a@b.com is not allowed",
        trigger = "1"
        action = {"suspend", "4 hours"},
        message = "Call yahoo",
        phase = "mailfrom",
      },
    },
    configuration = {
      max_outbound_connections = {30,300},
    },
  }
  ["google.com"] = {
    responses = {
      {
        code = "^553 You are not trusted.",
        trigger = "1"
        action = {"blackhole", "4 hours"},
        message = "Call google",
        phase = "mailfrom",
      },
    },
    configuration = {
      max_outbound_connections = {20,400},
    },
  },
}
```

Suppose you create the following rule in a file named `custom_rules.lua`:

```
local custom_rules = {
  ["yahoo.com"] = {
    responses = {
      {
        code = "^540 Too many connections.",
        trigger = "1"
        action = {"reduce_connections", 1},
        phase = "connect",
      },
    },
    configuration = {
  },
}
```

The effective rules after calling `msys.adaptive.registerRules(custom_rules, "augment")` are (changes are shown in bold):

```
rules = {
  ["yahoo.com"] = {
    responses = {
      {
       **code = "^540 Too many connections.",
        trigger = "1"
        action = {"reduce_connections", 1},
        phase = "connect"** ,
      },
      {
        code = "^553 Mail from a@b.com is not allowed",
        trigger = "1"
        action = {"suspend", "4 hours"},
        message = "Call yahoo",
        phase = "mailfrom",
      },
    },
    configuration = {
      max_outbound_connections = {30,300},
    },
  },
  ["google.com"] = {
    responses = {
      {
        code = "^553 You are not trusted.",
        trigger = "1"
        action = {"blackhole", "4 hours"},
        message = "Call google",
        phase = "mailfrom",
      }
    },
    configuration = {
      max_deliveries_per_connection = 4,
      max_outbound_connections = {20,400},
    },
  },
}
```

### Note

In the preceding example, the mode for `msys.adaptive.registerRules` is `augment` so the following response has been added to the configuration for the `yahoo.com` domain:

```
{
  code = "^540 Too many connections.",
  trigger = "1"
  action = {"reduce_connections", 1},
  phase = "connect",
}
```

No custom rules were applied to the `google.com` domain, so it remains unchanged.