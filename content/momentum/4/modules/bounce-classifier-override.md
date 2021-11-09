---
lastUpdated: "03/26/2020"
title: "bounce_classifier_override – Override/Augment Bounce Classifications"
description: "The Live Bounce Updates service is provided free of charge with your support agreement however you must configure this module in order to use the service For more information see Section 71 44 Live Bounce Updates Live Bounce Updates Service Use the bounce classifier override module to augment and override..."
---

<a name="idp19966624"></a> 
### Note

The Live Bounce Updates service is provided free of charge with your support agreement; however, you must configure this module in order to use the service. For more information, see [“Live Bounce Updates – Live Bounce Updates Service”](/momentum/4/modules/live-bounce-updates).

Use the bounce_classifier_override module to augment and override the built-in bounce classification system. It allows new rules (static and wildcarded) and new categories to be registered. Logs can be pulled out of either flat files or via an arbitrary datasource. The types of datasources available are:

*   `CSV` (installed by default)

*   `SQLite` (installed by default)

*   `PostgreSQL` (installed by default)

*   `ODBC`

*   `LDAP`

### <a name="modules.bounce_classifier_override.configuration"></a> Configuration

The following is an example configuration:

<a name="example.bounce_classifier_override"></a> 


```
datasource "my_sqlite" {
  uri = ( "sqlite:/path/to/db" )
}

bounce_classifier_override {
  user_smtp_classification_override =
    ":datasource:my_sqlite:SELECT domain, bounce_code, rule FROM overrrides;"
  refresh = 900
  custom_classes = [
    99 = "profanity"
  ]
}
```

Use the datasource layer to manage your custom classifications in a central database rather than in a file. This can make distribution of the rules easier in some cases, although those rules will effectively be missing if the database is unreachable for extended periods of time (e.q. longer than the `cache_life` setting for your selected datasource cache).

There are two kinds of classification overrides, SMTP and Message Disposition Notification (MDN). SMTP overrides apply to the classification of errors that are returned over the SMTP dialog. MDN overrides apply to messages that are received out-of-band with the delivery. SMTP overrides can be special-cased to apply only to particular domains, whereas MDN overrides apply globally.

"SMTP bounces" are much more common than "MDN bounces". To determine the kind of bounce, look at the connection stage code in the bounce log (offset field `11`). For a description of these codes, see [“Connection Stages”](/momentum/4/4-log-formats-connection-stages). The bounce log itself is described in [Table 35.4, “Bounce Record Fields”](/momentum/4/log-formats-bouncelog#log_formats.bounce.record.fields).

The following configuration options are available:

<dl class="variablelist">

<dt>custom_classes</dt>

<dd>

Map of user-defined bounce_codes that have a numeric value less than 100 and a user-defined description string. Registering new bounce codes in this manner will allow you to setup `user_smtp_classification_override` and `user_mdn_classification_override` rules to assign to that bounce code. This description string is currently available via the custom_logger or other internal calls.

</dd>

<dt>enable_system_updates</dt>

<dd>

Load unclassified bounce reasons into memory. This option must be enabled if you use the Live Bounce Updates service provided by Message Systems. Default value is `1`.

</dd>

<dt>refresh</dt>

<dd>

Frequency (in seconds) for refreshing the bounce classifications lists. Default value is `300` seconds.

</dd>

<dt>system_smtp_classification_override</dt>

<dd>

Default value is `/opt/msys/ecelerity/etc/updates/smtp_classification.ovr`. Do **not** change this option without consulting support.

</dd>

<dt>system_mdn_classification_override</dt>

<dd>

Default value is `/opt/msys/ecelerity/etc/updates/mdn_classification.ovr`. Do **not** change this option without consulting support.

</dd>

<dt>user_smtp_classification_override</dt>

<dd>

SMTP classification override file. Default name of this file is `user_smtp_classification.ovr`.

This file is found in the `/opt/msys/ecelerity/etc/` directory. The file format for SMTP overrides is: `domain,bounce_code,rule`, where

*   `domain` can be the empty string, in which case the rule is considered to be global. Otherwise, the rule will only apply to responses given when talking to the specified domain.

*   `bounce_code` is the numeric bounce classification code you want to assign. This must either be an internal code or one registered via the `custom_classes` directive. For more information about the internal codes, see [“Bounce Classification Codes”](/momentum/4/4-bounce-logger-classification-codes). When adding new codes be careful not to use existing internal code numbers.

*   `rule` can take one of two forms. If the ‘`|`’ character appears anywhere in the string, it will act as a globbing character in a wildcard. Otherwise, the string will be considered a simple static pattern. In both cases, the rule will return true if the pattern matches any substring of the classification text.

If you use a datasource instead of a flat-file, the datasource query must return 3 fields: domain, bounce_code, rule.

Use the prefix :datasource:*`ds_name:query`* when assigning a datasource as the value for `user_smtp_classification_override`. Select the fields that contain the domain name, the bounce code and the rule, in that order. When querying a flat file instead of a datasource, simply specify the path to the file.

</dd>

<dt>user_mdn_classification_override</dt>

<dd>

Default name of this file is `user_mdn_classification.ovr`.

It is found in the `/opt/msys/ecelerity/etc/` directory. The file format for MDN overrides is: `bounce_code,rule`, where

*   `bounce_code` is the numeric bounce classification code you want to assign. This must either be an internal code or one registered via the `custom_classes` directive. For more information about the internal codes, see [“Bounce Classification Codes”](/momentum/4/4-bounce-logger-classification-codes). When adding new codes be careful not to use existing internal code numbers.

*   `rule` can be of one of two forms. If the ‘`|`’ character appears anywhere in the string, it will act as a globbing character in a wildcard. Otherwise, the string will be considered a simple static pattern. In both cases, the rule will return `true` if the pattern matches any substring of the classification text.

Use the prefix :datasource:*`ds_name:query`* when assigning a datasource as the value for `user_mdn_classification_override`. Select the fields that contain the bounce code and the rule, in that order. When querying a flat file instead of a datasource, simply specify the path to the file.

</dd>

</dl>

### <a name="modules.bounce_classifier_override.console"></a> Console Commands

The bounce_classifier module can be controlled through `ec_console`. The following command(s) are available:

<dl class="variablelist">

<dt>bounce_classifier_override reload</dt>

<dd>

Use this command to trigger a manual reload of the bounce classification overrides at runtime.

</dd>

<dt>bounce_classifier_override test *`<my_reply>`*</dt>

<dd>

Use this command to determine how a specific SMTP reply is classified. This command reports the classification followed by the rule.

</dd>

</dl>

### <a name="modules.bounce_classifier_override.lua"></a> Lua Functions

You can also use Lua to classify bounces at runtime. For more information see [msys.bounce.classify_smtp_response](/momentum/4/lua/ref-msys-bounce-classify-smtp-response) and [msys.bounce.classify](/momentum/4/lua/ref-msys-bounce-classify).

### <a name="modules.bounce_classifier_override.seealso"></a> See Also

[“Live Bounce Updates – Live Bounce Updates Service”](/momentum/4/modules/live-bounce-updates)