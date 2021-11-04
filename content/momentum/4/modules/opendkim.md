---
lastUpdated: "03/26/2020"
title: "opendkim – Open Source DKIM"
description: "The opendkim module adds Open DKIM capabilities to Momentum It implements the DKIM standard and provides for signing email messages on a global per domain per binding or per binding per domain basis You can choose to sign messages through module configuration settings or do so at runtime using Lua..."
---

The opendkim module adds OpenDKIM capabilities to Momentum. It implements the DKIM standard and provides for signing email messages on a global, per domain, per binding, or per binding-per domain basis. You can choose to sign messages through module configuration settings or do so at runtime using Lua functions. Validation of DKIM messages with the opendkim module is driven only through Lua policy.

OpenDKIM is an open source implementation of the Domain Keys Identified Mail (DKIM) sender authentication system that implements the DKIM service. For a full description, see [OpenDKIM.org](http://www.opendkim.org/). For a general overview of DKIM signing and validation, as well as how to generate DKIM public and private keypairs, see [Chapter 23, *Using DomainKeys Identified Mail (DKIM) Signatures*](using_dkim "Chapter 23. Using DomainKeys Identified Mail (DKIM) Signatures") .

### <a name="idp22234560"></a> Configuration

In your `ecelerity.conf` file, set [opendkim_sign](/momentum/4/config/ref-opendkim-sign) in the appropriate scope and configure the opendkim module. The following is an example configuration:

<a name="modules.opendkim.example"></a> 


```
Binding_Group "opendkim_signing" {
  opendkim_sign = "true"

  binding "foo"{
    domain "test1.example.com" { opendkim_sign = "true" }
    domain "test2.example.com" { opendkim_sign = "false" }
  }
}

opendkim "opendkim1" {
  header_canon = "relaxed"
  body_canon = "relaxed"
  headerlist = ("from", "to", "message-id", "date", "subject", "Content-Type")
  digest = "rsa-sha256"
  key = "/opt/msys/ecelerity/etc/conf/dkim/%{d}/%{s}.key"
  dkim_domain "ectest.example.com" {
    selector = "dkim-s1024"
  }
}
# reference a Lua script to sign using a script
scriptlet "scriptlet" {
  ...
  script "opendkim_sign" {
    source = "luaScripts.opendkim_sign"
  }
}
```

This example enables DKIM signing through the module configuration settings and at runtime using the Lua script `opendkim_sign.lua`. DKIM signing using module configuration options is controlled by the scope of `opendkim_sign` and by the `dkim_domain` scope.

The following are the configuration options defined by this module:

<dl class="variablelist">

<dt>base_domain</dt>

<dd>

Specifies which domain should be used for signing. DKIM allows for emails to be signed by a parent domain. For example, an email from `test@corp.example.com` can be signed in the `example.com` domain. This option is only valid within the `dkim_domain` scope.

</dd>

<dt>body_canon</dt>

<dd>

Specifies the canonicalization that should be performed on the email body before digesting and signing the message. The two supported canonicalizations are `simple` and `relaxed`. Default value is `simple`.

</dd>

<dt>body_length_limit</dt>

<dd>

Whether or not there is a limit on the length of the email body. Default value is `false`.

</dd>

<dt>copy_headers</dt>

<dd>

This option causes all of the headers that were selected for signing by `headerlist` to be quoted-printable encoded and placed in the `z=` tag of the `DKIM-Signature` header. This can be useful for debugging. Default value is `false`.

</dd>

<dt>digest</dt>

<dd>

Specifies the algorithms that should be used to create the message digest and the resulting signature. The supported mechanisms are `rsa-sha1` and `rsa-sha256`. Default value is `rsa-sha256`.

</dd>

<dt><a name="modules.opendkim.dkim_domain"></a> dkim_domain</dt>

<dd>

This *option* is a scope within the opendkim scope. It is used to define a selector or signing domain for specified domains. Use this option in the following way:

```
opendkim "opendkim1" {
  ...
  selector = "dkim1024"  # default selector
  ...

  dkim_domain "corp.example.com" {
    selector = "dkim-s1024"
    base_domain = "example.com"
  }
}
```

The following options are valid in this scope:

*   `base_domain`

*   `body_canon`

*   `body_length_limit`

*   `digest`

*   `header_canon`

*   `key`

*   `key_cache_size`

*   `neg_keycache_ttl`

*   `pos_keycache_ttl`

*   `selector`

*   `sign_condition`

*   `testing`

</dd>

<dt>header_canon</dt>

<dd>

Specifies the canonicalization that should be performed on the email headers before digesting and signing the message. The two supported canonicalizations are `simple` and `relaxed`. Due to the way MTAs operate, the simple canonicalization is very fragile and prone to failure because of header rewriting and rewrapping. Default value is `simple`.

</dd>

<dt><a name="modules.opendkim.headerlist"></a> headerlist</dt>

<dd>

The headerlist configuration directive is required. During digestion, DKIM will sign all headers specified in the headerlist in the order they are specified. Although there is no default headerlist, the DKIM specification requires signing the "From" header and any header field that describes the role of the signer such as "Sender" or "Resent-From". The specification also recommends signing "Subject", "Date", all MIME header fields, and all existing, non-repeatable header fields.

The headerlist itself is a comma or space separated list of header field names such as `headerlist = ( "From", "Subject", "Content-Type" )`.

DKIM provides for a signer to sign a non-existent header. This mechanism can be used to prevent the header from being added to the message during transit. If the header is added during transit, the DKIM signature will not verify. Using this mechanism, the signer asserts that the header was not there when the message was signed. There is no default value for this option.

### Note

In the OpenDKIM API, the header list is a global setting; consequently, you cannot change the header list per message.

</dd>

<dt>key</dt>

<dd>

This option is required and specifies the location of the RSA private key file on disk. The key file must be readable by the user that Momentum is running as and must be in Privacy Enhanced Mail (PEM) format.

### Warning

Note that Google requires all senders to sign with a 1024 bit or greater DKIM key size.

The file name has two expandable variables that may be used to ease deployment over multiple domains: %{d} expands to the responsible domain and %{s} expands to the selector.

If you are working within a cluster environment, you may want to consider setting the `key` option to a directory that is under revision control. The recommended directory is `/opt/msys/ecelerity/etc/conf/dkim/`. Since the `conf` directory is under revision control anything stored below this directory will also be under revision control. Any files in this directory are visible to both the default node configuration and any node-specific configuration.

</dd>

<dt>keycache_size</dt>

<dd>

The key cache size expressed as the number of keys. Default value is `2048`.

</dd>

<dt>lifetime</dt>

<dd>

Specifies the length of time a signature remains valid. An expiration value is included in the signature header added to each email message. The lifetime of the signature begins at signing and expires some time later as determined by the `lifetime` option value. A message will not verify after the signature lifetime has expired. The value of this option is specified in hours. Default value is `0`, indicating that the module does not mark the signature with *any* expiration timestamp.

</dd>

<dt>neg_keycache_ttl</dt>

<dd>

In the event that the key is not already in the cache, the amount of time in seconds before retrieving it again. Default value is `3600`.

</dd>

<dt>oversign_headerlist</dt>

<dd>

This option asserts headers. It has no default value.

</dd>

<dt>pos_keycache_ttl</dt>

<dd>

Total time in seconds for items to stay in the cache before fetching them again. Default value is `300`.

</dd>

<dt>selector</dt>

<dd>

Specifies the DKIM selector to be used for signing. During verification, the `selector` is used, along with the signing domain, to retrieve the signing domain's public key. The key retrieved will be contained in the DNS TXT record for {selector}._domainkey.{domain}. There is no default value for this option.

</dd>

<dt>sign_condition</dt>

<dd>

Specifies which validation context variable must exist as a predicate to signing messages. When an SMTP client performs an SMTP AUTH action, the [auth_user](/momentum/4/4-policy-context-variables#predefined-context-conn-global) context key will be set to the username used during authorization. When an SMTP client is allowed to relay through Momentum because of an entry in the [relay_hosts](/momentum/4/config/ref-relay-hosts) option or a `relaying` declaration in an ESMTP_Listener IP access control list, the [can_relay](/momentum/4/4-policy-context-variables#predefined-context-conn-global) context key is set to `true`.

In most corporate environments, `sign_condition` should be `auth_user`. In large sending architectures where the relaying SMTP clients are implicitly trusted, `sign_condition` should be `can_relay`. There is no default value for this option.

</dd>

<dt>skip_headerlist</dt>

<dd>

Array of the headers that will be skipped. For more information about headers, see [headerlist](/momentum/4/modules/opendkim#modules.opendkim.headerlist) . There is no default value for this option.

</dd>

<dt>testing</dt>

<dd>

Set this option to `true` if you are not in a production environment. Default value is `false`.

</dd>

</dl>

### <a name="modules.opendkim.lua.functions"></a> Lua Functions

You can sign OpenDKIM domains using module configuration settings or at runtime using Lua functions. The Lua APIs mirror the OpenDKIM API. In order to sign at runtime, you must create a Lua policy script and reference it from the [scriptlet](/momentum/4/modules/scriptlet) module as shown in [“opendkim Configuration”](/momentum/4/modules/opendkim#modules.opendkim.example).

Verification of DKIM messages is only driven through Lua policy.

Loading the opendkim module exposes the following Lua functions:

*   [msys.validate.opendkim.get_num_sigs](/momentum/4/lua/ref-msys-validate-opendkim-get-num-sigs)

*   [msys.validate.opendkim.get_sig](/momentum/4/lua/ref-msys-validate-opendkim-get-sig)

*   [msys.validate.opendkim.get_sig_canons](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-canons)

*   [msys.validate.opendkim.get_sig_domain](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-domain)

*   [msys.validate.opendkim.get_sig_errorstr](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-errorstr)

*   [msys.validate.opendkim.get_sig_flags](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-flags)

*   [msys.validate.opendkim.get_sig_hdrsigned](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-hdrsigned)

*   [msys.validate.opendkim.get_sig_identity](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-identity)

*   [msys.validate.opendkim.get_sig_keysize](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-keysize)

*   [msys.validate.opendkim.get_sig_selector](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-selector)

*   [msys.validate.opendkim.get_sig_signalg](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-signalg)

*   [msys.validate.opendkim.sign](/momentum/4/lua/ref-msys-validate-opendkim-sign)

*   [msys.validate.opendkim.verify](/momentum/4/lua/ref-msys-validate-opendkim-verify)

The following OpenDKIM objects are passed in to or returned by these functions:

*   `DKIM` – A signing or verifying context for a message

*   `DKIM_SIGINFO` – Private handle referencing information about a particular signature on a signed message

*   `DKIM_STAT` – Return value or status

For more information about these data types, see [OpenDKIM Library](http://www.opendkim.org/libopendkim/index.html).