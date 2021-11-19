---
lastUpdated: "04/08/2020"
title: "Message Scope Legacy Changelog"
description: "Changelogs for legacy versions of Message Scope"
---

## Message Scope 1.2.4 released on 2013-07-02
* Fixed ticket #PKG-49: Upgrade to Apache 2.2.24 which addresses security vulnerability
* Fixed ticket #PKG-50: Upgrade to PHP 5.3.24 which addresses security vulnerability
* Fixed ticket #MSC-4: Add email address validation in Search Parameters
* Fixed ticket #MSC-6 & MSC-7: Too many open files filling up Scope Ingestors node

## Message Scope 1.2.2 released on 2013-01-28
* Fixed ticket #BZ4039: Updated example driver to work with the new UI driver API
* Fixed ticket #BZ4720: Fixed an issue in which invalid remediation lists are shown (or valid remediation lists are not shown) when adding entries to IP-based lists.
* Fixed ticket #BZ5245: Added additional information regarding hostname configuration values at install-time
* Fixed ticket #BZ5861: Improved error handling around processing of stale and invalid data.
* Fixed ticket #BZ5863: Fixed an issue in which entry point events are not returned for some searches, causing errors in the UI.
* Fixed ticket #BZ6111: Changed semantics of the Janitor process to only remove stale data. Indexes are no longer merged.
* Fixed ticket #BZ6130: Fixed an issue in which UTF-8 data can the UI to not display any results for a search.
* Fixed ticket #BZ6167: Fixed a bug in which custom-defined required fields can make it impossible to complete a search in IE8.
* Fixed ticket #BZ6200: Improve localized display of dates and times based on the user's clock.
* Fixed ticket #BZ6242: Improve handling and interpretation of dates and times to reflect the value of the user's clock.
* Fixed ticket #BZ6303: Fix an issue in which the 'Today' button would not populate the date / time range filter.
* Fixed ticket #BZ6304: Stricter validation rules are applied to date ranges in searches.
* Fixed ticket #BZ6609: this release supports the upgrade from 1.2.0 to 1.2.2 as well as the upgrade from 1.2.1 to 1.2.2
* Fixed ticket #BZ6612: Existing config files will be backed up prior to upgrade. After upgrade, any custom changes to the config files need to be re-applied.
* Fixed ticket #ESC-134: Upgrade now possible for multinode installations, e.g. web/db on one node and ingestor on other node(s)