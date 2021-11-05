---
lastUpdated: "03/26/2020"
title: "mailerdaemon"
description: "mailerdaemon set the From address for MD Ns mailerdaemon mailer daemon hostname When sending bounce messages upon a permanent delivery failure of a message the recipient is specified as the original sender the envelop sender is null but the From header is dictated by Momentum as mailer daemon hostname where..."
---

<a name="conf.ref.mailerdaemon"></a> 
## Name

mailerdaemon — set the From: address for MDNs

## Synopsis

`mailerdaemon = "mailer-daemon@hostname"`

<a name="idp25085680"></a> 
## Description

When sending bounce messages upon a permanent delivery failure of a message, the recipient is specified as the original sender, the envelop sender is null, but the "From:" header is dictated by Momentum as "mailer-daemon@hostname" where hostname is the hostname of the local machine, as returned by `gethostname` . Alternatively, it can be explicitly set using this option.

<a name="idp25088304"></a> 
## Scope

mailerdaemon is valid in the binding, binding_group, domain, and global scopes.