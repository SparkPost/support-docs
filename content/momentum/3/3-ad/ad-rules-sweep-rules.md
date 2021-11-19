---
lastUpdated: "03/26/2020"
title: "Sweep Rules – Configuring Bounce and FBL Behavior"
description: "In Momentum 3 2 sweep rules were introduced in order to enable AD based on bounce and FBL statistics To use this feature you must configure the following modules in addition to the adaptive module and its dependencies The fbl Module If you want to create sweep rules using FBL..."
---

In Momentum 3.2 sweep rules were introduced in order to enable AD based on bounce and FBL statistics.

To use this feature you must configure the following modules (in addition to the adaptive module and its dependencies):

*   The [fbl Module](/momentum/3/3-reference/3-reference-modules-fbl) – If you want to create sweep rules using FBL statistics, you must use this module.

*   The [bounce_classifier_override Module](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override) – If you want to create sweep rules using bounce statistics, you must use this module.

*   [Live Bounce Updates](/momentum/3/3-reference/3-reference-modules-live-bounce-updates) – This optional service keeps the bounce classifications up to date. This service is strongly recommended if you are using bounce sweep rules.

The `adaptive_sweep_rule` scope is central to configuring adaptive behavior to react to bounces and feedback loops. This scope is set in the global, binding, binding_group or domain scopes and defines the thresholds that will trigger actions in response to bounce or FBL codes.

The other options that affect sweep rules are:

*   `bounce_sweep_interval` – This option specifies the interval within which the sweep rules will be evaluated. It is set within the adaptive scope.

*   `suspend_sweep_interval` – How often to perform a sweep that checks for expired suspensions and re-enable the affected binding::domain. The default is 60 seconds. Set to `0` to disable. This option is set within the adaptive scope.

*   `adaptive_attempt_threshold` – This option specifies the minimum number of delivery attempts over a period during which bounce statistics are collected—the number that must be met before a bounce sweep rule can fire. This option is valid in the binding, binding_group, domain, global. See [*Adaptive Options*](/momentum/3/3-ad/ad-options) for a link to this option.

*   `adaptive_FBL_volume_threshold` – This option defines the minimum total delivered mail count over a period during which FBL statistics are collected for a given binding::domain pair. This minimum must be met before a sweep rule for FBL will fire. The period is specified by the adaptive option `FBL_stats_monitor` within the adaptive stanza. This option is valid in the binding, binding_group, domain, global. See [*Adaptive Options*](/momentum/3/3-ad/ad-options) for a link to this option.

*   `adaptive_sweep_rule_enabled` – Enable or disable sweep rules within the following scopes: global, binding, binding_group and domain scopes. This option makes it possible to disable sweep rules in a specific scope without removing or commenting out code. See [Table A.2, “adaptive options”](/momentum/3/3-ad/ad-options#adaptive-options-table) for a link to this option.

A sample configuration showing `adaptive_sweep_rule` defined in the global scope and two different domain scopes follows:

<a name="ad.adaptive.adaptive_sweep_rule.examples"></a> 


```
adaptive_sweep_rule_enabled = true #default value
adaptive_FBL_volume_threshold = 20000 #default value
adaptive {
  suspend_sweep_interval = 5
  bounce_sweep_interval = 3600 #default value
}
adaptive_sweep_rule "fbl" {
  codes = ("fbl:abuse")
  low_threshold = 0.2
  low_action = ("throttle" "down")
  high_threshold = 0.5
  high_action = ("suspend" "4 hours")
}
domain "yahoo.com" {
  adaptive_sweep_rule "y" {
    codes = ("bc:10" "bc:20")
  }
}
domain "hotmail.com" {
  adaptive_sweep_rule "x" {
    codes = ("bc:10")
    low_threshold = 2
    high_threshold = 7
  }
}
```

### Note

You cannot create an adaptive_sweep_rule scope before you have added the adaptive module. If you are using the web UI, you cannot supply a name for the `adaptive_sweep_rule` scope before loading the adaptive module.

"sweep rule" codes differ from the response codes of adaptive rules. A response "code" is typically a PCRE of the SMTP response text and a "sweep rule" code is one of the bounce codes listed at [Bounce Classification Codes](/momentum/3/3-reference/3-reference-bounce-logger-classification-codes) or a feedback loop code such as "abuse". Responses are triggered by individual occurrences of response text but sweep rules examine the ratio of given "codes" over total deliveries (or attempted deliveries). Additionally, sweep rules apply only to bounces and FBL messages.

The configuration options valid in the `adaptive_sweep_rule` scope, are defined in the following list.

<dl class="variablelist">

<dt>codes</dt>

<dd>

This option specifies a list of bounce codes or FBL categories. The summation of their rates is used to evaluate the rule. Although the syntax does not prevent using both bounce codes and FBL categories within a rule, it is bad practice to mix them since they occur in very different time scales.

Valid values for bounce codes start with the prefix `bc:` followed by a legitimate bounce code number. For a list of valid bounce codes see [Bounce Classification Codes](/momentum/3/3-reference/3-reference-bounce-logger-classification-codes). You can also use custom bounce codes defined by the [bounce_classifier_override Module](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override).

Valid values for fbl codes start with the prefix `fbl:` followed by a legitimate fbl category such as `abuse` or `unsubscribe`. Legitimate categories are determined by the requirements of the specific ISP.

This option is required. There is no default value for this option except as defined in [Default Adaptive Sweep Rules](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.default_adaptive_sweep_rule).

</dd>

<dt>low_threshold</dt>

<dd>

This option specifies the low threshold value for the sum of the rates of the bounce codes or FBL categories specified in the `codes` option within a binding::domain.

The default value for this option is `5` meaning `5%`.

</dd>

<dt>low_action</dt>

<dd>

This option specifies the action when the high threshold is not met but the low threshold is met and the number of delivery attempts exceeds the `adaptive_attempt_threshold` parameter. (See [The adaptive_fbl_volume_threshold Option](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_fbl_volume_threshold).)

The default value for this option is `("throttle" "down")`. For a complete list of valid values see [Rule Actions](/momentum/3/3-ad/ad-adaptive-rules-actions). The throttle, blackhole or suspend actions will generate an email to the address associated with the `adaptive_alert_email_destination` option.

</dd>

<dt>high_threshold</dt>

<dd>

This option specifies the high threshold value for the sum of the rates of the bounce codes or FBL categories specified by the `codes` option.

The default value for this option is `10` meaning `10%`.

</dd>

<dt>high_action</dt>

<dd>

This option specifies the action when the high threshold is met and the number of delivery attempts exceeds the `adaptive_attempt_threshold`. (See [The adaptive_fbl_volume_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_fbl_volume_threshold).)

The default value for this option is `("suspend" "4 hours")`. For a complete list of valid values see [Rule Actions](/momentum/3/3-ad/ad-adaptive-rules-actions). The throttle, blackhole or suspend actions will generate an email to the address associated with the `adaptive_alert_email_destination` option.

### Warning

The length of time for a suspension must be specified in hours and must be a power of `2`. For example, 1, 2, 4 hours and so on are valid values for a suspension.

</dd>

</dl>

The low and high thresholds can be considered as two rules combined into one. If the high threshold is met, the high action is executed and the low action ignored. If the high action is not met, the low action is evaluated.

In scopes where no `adaptive_sweep_rule` is defined (and consequently no thresholds or actions are defined), the default thresholds and actions apply. To determine default values and for details about configuring this scope see [adaptive_sweep_rule Scope](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule).

### Note

A rule always fires when its threshold has been met but the action associated with that rule may not execute. This happens because there can be only one action within a specified duration for a binding::domain pair. For example, a user may configure two sweep rules with the same codes and thresholds but with different actions. When the conditions for triggering are met, both rules will fire but only one action will be executed.