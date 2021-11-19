---
lastUpdated: "03/26/2020"
title: "refresh domain"
description: "refresh domain refresh the DNS information for a domain refresh domain domain This command takes a single argument in the form of a domain name and refreshes the DNS information for the specified domain Instead of specifying a domain name you may specify all to view all domains This console..."
---

<a name="console_commands.refresh_domain"></a> 
## Name

refresh domain — refresh the DNS information for a domain

## Synopsis

`refresh domain` { *`domain`* }

<a name="idp16232656"></a> 
## Description

This command takes a single argument in the form of a domain name and refreshes the DNS information for the specified domain. Instead of specifying a domain name you may specify `all` to view all domains.

### Note

This console command manipulates the *route cache* , and likewise with the [dig](/momentum/3/3-reference/3-reference-console-commands-dig) and [domain](/momentum/3/3-reference/3-reference-console-commands-domain) commands. The *DNS cache* , is manipulated by the [dns_cache](/momentum/3/3-reference/3-reference-console-commands-dns-cache) series of console commands.