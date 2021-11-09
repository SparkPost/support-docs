---
lastUpdated: "03/26/2020"
title: "bounce_classifier_override – The Bounce Classifier Override Module"
description: "As of version 3 1 the bounce classifier module is deprecated This module replaces it Also note that as of version 3 1 the Live Bounce Updates service is provided free of charge with your support agreement You must configure this module if you wish to make use of this..."
---

<a name="idp18083696"></a> 
### Note

As of version 3.1 the bounce_classifier module is deprecated. This module replaces it. Also note that as of version 3.1, the Live Bounce Updates service is provided free of charge with your support agreement. You must configure this module if you wish to make use of this service. For more information see [“Live Bounce Updates – Module”](/momentum/3/3-reference/3-reference-modules-live-bounce-updates).

Use the bounce classifier override module to augment and override the built-in bounce classification system. It allows new rules (static and wildcarded) and new categories to be registered. Logs can be pulled out of either flat files, or via an arbitrary datasource. The types of datasources available are:

*   `CSV` (installed by default)

*   `SQLite` (installed by default)

*   `PostgreSQL` (installed by default)

*   `ODBC`

*   `LDAP`

**Changes in Version 3.5.6**

As of version 3.5.6, when the module [debug_level](/momentum/3/3-reference/modules-overview-implicit#modules.overview.debugging) is set to `debug` the classification and rule for every message appears in the paniclog.

Also, as of version 3.5.6, you can determine how a specific SMTP reply is classified by using the console command described at [“bounce_classifier_override test *`<my_reply>`*”](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override#modules.bounce_classifier_override.console.test).

### <a name="modules.bounce_classifier_override.configuration"></a> Configuration

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

Use the prefix :datasource:*`ds_name:query`* when assigning a datasource as the value for `user_smtp_classification_override`. Select the fields that contain the domain name, the bounce code and the rule, in that order. When querying a flat file instead of a datasource, simply specify the path to the file.

Using the datasource layer if you want to manage your custom classifications in a central database rather than in a file; doing this can make distribution of the rules easier in some cases, although those rules will effectively be missing if the database is unreachable for extended periods of time (longer than the `cache_life` setting for your selected datasource cache).

There are two kinds of classification overrides, SMTP and Message Disposition Notification (MDN). SMTP overrides apply to the classification of errors that are returned over the SMTP dialog. MDN overrides apply to messages that are received out-of-band with the delivery. SMTP overrides can be special-cased to apply only to particular domains, whereas MDN overrides apply globally.

'SMTP bounces' are much more common than 'MDN bounces'. To determine the kind of bounce look at the connection stage code in the bounce log (offset field `11`). For a description of these codes see [“Connection Stages”](/momentum/3/3-reference/3-reference-log-formats-connection-stages). The bounce log itself is described in [Table E.10, “Bounce record fields”](/momentum/3/3-reference/log-formats-version-3#log_formats.bounce.record.fields3).

<dl class="variablelist">

<dt>custom_classes</dt>

<dd>

`custom_classes` is a map of user-defined bounce_codes that have a numeric value less than 100 and a user-defined description string. Registering new bounce codes in this manner will allow you to setup `user_smtp_classification_override` and `user_mdn_classification_override` rules to assign to that bounce code. This description string is currently available via the custom_logger or other internal calls, but will not be rendered in the web UI bounce processing page. In the web UI reports, the text associated with a custom code is 'User-Defined Classification: *`code_number`*.

</dd>

<dt>enable_system_updates</dt>

<dd>

Load unclassified bounce reasons into memory. This option must be enabled if you use the Live Bounce Updates service provided by Message Systems. The default value for this option is `1`.

### Note

Also note that as of version 3.1, the Live Bounce Updates service is provided free of charge with your support agreement. During installation you are asked if you wish to subscribe to this service. For more information see [“Live Bounce Updates”](/momentum/3/3-reference/install-additional-packages#install.additional.packages.lbu) and [“Live Bounce Updates – Module”](/momentum/3/3-reference/3-reference-modules-live-bounce-updates).

</dd>

<dt>refresh</dt>

<dd>

The frequency (in seconds) for refreshing the bounce classifications lists. The default value is `300` seconds.

</dd>

<dt>system_smtp_classification_override</dt>

<dd>

The default value for this option is `/opt/msys/ecelerity/etc/updates/smtp_classification.ovr`. Do **not** change this option without consulting support.

</dd>

<dt>system_mdn_classification_override</dt>

<dd>

The default value for this option is `/opt/msys/ecelerity/etc/updates/mdn_classification.ovr`. Do **not** change this option without consulting support.

</dd>

<dt>user_smtp_classification_override</dt>

<dd>

The SMTP classification override file. The default name of this file is `user_smtp_classification.ovr`. This file is found in the `/opt/msys/ecelerity/etc/` directory. The file format for SMTP overrides is: `domain,bounce_code,rule` . `domain` can be the empty string, in which case the rule is considered to be global, otherwise the rule will only apply to responses given when talking to the specified domain. `bounce_code` is the numeric bounce classification code you want to assign—this must either be an internal code, or one registered via the `custom_classes` directive. For more information about the internal codes see [“Bounce Classification Codes”](/momentum/3/3-reference/3-reference-bounce-logger-classification-codes). When adding new codes be careful not to use existing internal code numbers. `rule` can take one of two forms. If the ‘`|`’ character appears anywhere in the string, it will act as a globbing character in a wildcard, otherwise the string will be considered a simple static pattern. In both cases, the rule will return true if the pattern matches any substring of the classification text. If you use a datasource instead of a flat-file, the datasource query must return 3 fields: domain, bounce_code, rule.

</dd>

<dt>user_mdn_classification_override</dt>

<dd>

The default name of this file is `user_mdn_classification.ovr`. In version 3.0 and higher this file is found in the `/opt/msys/ecelerity/etc/` directory. The file format for MDN overrides is: `bounce_code,rule`. `bounce_code` is the numeric bounce classification code you want to assign—this must either be an internal code, or one registered via the `custom_classes` directive. For more information about the internal codes see [“Bounce Classification Codes”](/momentum/3/3-reference/3-reference-bounce-logger-classification-codes). When adding new codes be careful not to use existing internal code numbers. `rule` can be of one of two forms. If the ‘`|`’ character appears anywhere in the string, it will act as a globbing character in a wildcard, otherwise the string will be considered a simple static pattern. In both cases, the rule will return `true` if the pattern matches any substring of the classification text.

Use the prefix :datasource:*`ds_name:query`* when assigning a datasource as the value for `user_mdn_classification_override`. Select the fields that contain the bounce code and the rule, in that order. When querying a flat file instead of a datasource, simply specify the path to the file.

</dd>

</dl>

### <a name="modules.bounce_classifier_override.console"></a> bounce_classifier Management Using Console Commands

The bounce_classifier module can be controlled through `ec_console`; the following command(s) are available:

**<a name="modules.bounce_classifier_override.console.reload"></a> 14.12.2.1. bounce_classifier_override reload**

Using this command, a manual reload of the bounce classification overrides can be triggered at runtime.

**<a name="modules.bounce_classifier_override.console.test"></a> 14.12.2.2. bounce_classifier_override test *``***

**Configuration Change. ** This command is available as of version 3.5.7\. As of version 3.6.10, the command is **bounce_classifier_override test *`<my_reply>`* *`<domain>`*** , where `domain` is optional.

Use this command to determine how a specific SMTP reply is classified. This command reports the classification followed by the rule.

### <a name="modules.bounce_classifier_override.lua"></a> Bounce Classifying at Runtime

You can also use Lua to classify bounces at runtime. For more information see [msys.bounce.classify_smtp_response](/momentum/3/3-reference/3-reference-lua-ref-msys-bounce-classify-smtp-response) and [msys.bounce.classify](/momentum/3/3-reference/3-reference-lua-ref-msys-bounce-classify).

### <a name="modules.bounce_classifier_override.seealso"></a> See Also

[Table 9.7, “logging options”](/momentum/3/3-reference/options-summary#logging-options-table), [“Live Bounce Updates – Module”](/momentum/3/3-reference/3-reference-modules-live-bounce-updates) and [Table 9.3, “bounce options”](/momentum/3/3-reference/options-summary#bounce-options-table)