---
title: "refresh domain"
description: "refresh domain refresh the DNS information for a domain refresh domain domain This command takes a single argument in the form of a domain name and refreshes the DNS information for the specified domain Instead of specifying a domain name you may specify all to view all domains This console..."
---

<a name="console_commands.refresh_domain"></a> 
## Name

refresh domain — refresh the DNS information for a domain

## Synopsis

`refresh domain` { *`domain`* }

<a name="idp13188880"></a> 
## Description

This command takes a single argument in the form of a domain name and refreshes the DNS information for the specified domain. Instead of specifying a domain name you may specify `all` to view all domains.

### Note

This console command manipulates the *route cache* , and likewise with the [dig](console_commands.dig "dig") and [domain](console_commands.domain "domain") commands. The *DNS cache* , is manipulated by the [dns_cache](console_commands.dns_cache "dns_cache") series of console commands.