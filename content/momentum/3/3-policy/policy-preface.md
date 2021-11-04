---
lastUpdated: "03/26/2020"
title: "Preface"
description: "The default policy scripts perform recipient and domain validation authorize users protect against directory harvest attacks and other such policy related actions The intended use case is to create policy suitable for a receiver domain accepting mail for a smaller set of recipient domains For example a company such as..."
---

The default policy scripts perform recipient and domain validation, authorize users, protect against directory harvest attacks and other such policy-related actions.

The intended use case is to create policy suitable for a receiver domain accepting mail for a smaller set of recipient domains. For example, a company such as Yahoo has millions of users for which it accepts email, but only a handful of domains.

This default policy assumes that you will configure the `relay_hosts` option as `0.0.0.0/0`, and that one of the two following actions is taken:

*   `relay_domains` is defined as the set of domains you want to accept mail for (for all recipients in those domains).

*   You do not set `relay_domains` to anything, and instead set up a datasource query to validate the full email address of each individual recipient