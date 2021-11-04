---
lastUpdated: "03/26/2020"
title: "maildir – Maildir Delivery Support"
description: "The maildir I O module subverts the regular spooling actions for qualified messages to storage in maildir format as specified by qmail http www qmail org man man 5 maildir html Example 14 74 maildir module all domains If set to true all domains will be delivered to the maildir..."
---

<a name="idp20355024"></a> 

The maildir I/O module subverts the regular spooling actions for qualified messages to storage in maildir format as specified by qmail: [http://www.qmail.org/man/man5/maildir.html](http://www.qmail.org/man/man5/maildir.html) .

### <a name="idp20358000"></a> Configuration

<a name="example.maildir.3"></a> 


```
maildir "maildir1" {
  basedir = "/var/tmp/popbase"
  dirmode = 775
  filemode = 664
  create_users = true
  domain_in_path = true
  all_domains = false
  domains = ( "example.com"
            "another.example.com")
}
```

<dl class="variablelist">

<dt>all_domains</dt>

<dd>

If set to true, all domains will be delivered to the maildir store, otherwise, only the domains configured by the `domain` option will be delivered to the maildir store.

</dd>

<dt>basedir</dt>

<dd>

The base directory under which to create maildir mailboxes.

</dd>

<dt>createusers</dt>

<dd>

If set to true, any user for one of the configured domains will be accepted for local delivery; the mailbox will be created if it does not already exist. This is most useful in conjunction with custom logic programmed using policy scripts.

If set to false, the message will be rejected if the mailbox does not already exist.

</dd>

<dt>dirmode</dt>

<dd>

The file permission mode to use on directories created by the module.

</dd>

<dt>domain</dt>

<dd>

This option configures a domain for delivery to the maildir store. It can be specified multiple times.

</dd>

<dt>domain_in_path</dt>

<dd>

If set to true the mailbox path will include the domain name, otherwise it will not.

</dd>

<dt>filemode</dt>

<dd>

The file permission mode to use on files created by the module.

</dd>

</dl>

### <a name="idp20375424"></a> Sieve support

In addition to the `domain` configuration, you can use [ec_maildir](/momentum/3/3-reference/sieve-ref-ec-maildir) to selectively store messages in the maildir store.