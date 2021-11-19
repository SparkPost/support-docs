---
lastUpdated: "04/08/2020"
title: "Message Central Legacy Changelog"
description: "Changelogs for legacy versions of Message Central"
---

# MC 3.8.8 released on 2015-2-11
* Fixed ticket: MC-277 - fixes issue where generator manager communication with scheduler could stall, neccessitating a scheduler restart
* Fixed ticket: MC-275 - cleans up manager log by changing the debug level of a couple of statements
* Fixed ticket: MC-274 - adds the functionality to update links embedded in content via MC's rest api
* Fixed ticket: MC-236 - improves UI performance while marking mailings as 'ready'

# MC 3.8.7 released on 2014-12-23
* Fixed ticket: MR-947 - fixes MC logger use-after-free bug

# MC 3.8.6 released on 2014-11-4
* Fixed ticket #MC-211: Filtercriteria are now duplicated when duplicating percentage-split mailings
* Fixed ticket #MC-213: Disables clicktracker hooks by default
* Fixed ticket #MC-214: Restores createMailingPostprocess hook point when duplicatingmailings
* Fixed ticket #MC-215: Adds a custom hook point, contentPreviewPostprocess
* Fixed ticket #MC-216: Adds a custom hook point, loginRedirectPreprocess
* Fixed ticket #MC-252: Removes syntax error from activemailings_migrate stored proc

# MC 3.8.5 released on 2014-10-14
* Fixed ticket MC-239: optomizes the index_am_tables stored procedure, dramatically increasing the speed of MC upgrades
* Fixed ticket MC-237: optomizes the activemailings_migrate stored procedure, also speeding up the MC upgrade process

# MC 3.8.4 released on 2014-08-14
* Fixed ticket #MC-229: Optimizes response times on recipients tab
* Fixed ticket #MC-228: Adds OOB logging to mc_logger
* Fixed ticket #MC-225: Optimizes response times on content links page
* Fixed ticket #MC-223: Fixes fatal error caused by sending SIGHUP to pe2httpd
* Fixed ticket #MR-220: Fixes crash in pe2sched
* Fixed ticket #MC-199: Prevents extra space from being inserted into content subjects

# MC 3.8.3 released on 2014-07-01
* Fixed ticket #MR-387: Update php to version 5.4.16 and migrate existing code to use the new version
* Fixed ticket #MR-392: Update perl to version 5.16.3 and migrate existing code to use the new version
* Fixed ticket #MR-396: Fixes the ‘online help’ link
* Fixed ticket #MR-642: Allows DAM recovering after scheduler restart
* Fixed ticket #MR-664: Fixes fatal crash that occurred when message central was installed with reversible encryption
* Fixed ticket #MC-171: Optimize Mailing Summary page to decrease load times
* Fixed ticket #MC-179: Mailings can now have commas in their names
* Fixed ticket #MC-183: Optimize Click Details page to decrease load times
* Fixed ticket #MC-184: Optimize Direct Access Mailing page to decrease load times
* Fixed ticket #MC-208: Fixes error where large mailings would stall at a certain point

# MC 3.8.2 released on 2014-05-02
* Fixed ticket #MC-49: Change sort order of Content selection in mailing, by last modified in descending order by default
* Fixed ticket #MC-84: Changes the buildsql function to make sure that the wholesql list is not appended to the where clause of runsql
* Fixed ticket #MC-106: Fix date filtering on mailing summary report to allow the start date and end date to be the same
* Fixed ticket #MC-113: Fix popup calendars to read the proper time and timezone
* Fixed ticket #MC-170: Fix MC UI to display Subject line with international characters
* Fixed ticket #MC-176: Fix Content update works for content that doesn't have a html part.
* Fixed ticket #MC-178: Fix to support international characters in Content's Description
* Fixed ticket #MC-180: Fix sroted procedure to allow delete List that has been assigned to a Mailing
* Fixed ticket #MC-186: Allow all lists to be selected and cancelled under the monitor tab
* Fixed ticket #MC-187: Fix the 'online help' page URL
* Fixed ticket #MC-190: Fix to allow to schedule mailing when the browser is set to a different locale
* Fixed ticket #MC-192: Fix Content is evently split in a Split mailing.
* Fixed ticket #MC-193: Fix so that space is not replaced with hex caracters is logged in SMS text
* Fixed ticket #MC-194: Fix issues with scheduled mailing when scheduling for `Last Day` when selecting `Every 2 months` or more
* Fixed ticket #MC-196: Fix upgrade patch so the stored procedures are not changed when upgradin to MC3.8.2
* Fixed ticket #MC-198: Fixing issues with the getmailingstatistics_webui stored procedures
* Fixed ticket #MC-202: Add support for multiple MC stacks in MC 3.8.x
* Fixed ticket #MO-1251: Fix so allow create/edit content in MC, introduced with PHP upgrade
* Fixed ticket #MO-1553: Replace obsoleted Perl functions in the upgrade version of Perl
* Fixed ticket #MO-1595: Fix Message Central initialization to work with Multiple Event loops.
* Fixed ticket #MO-1674: Lists fail to import due to current version of perl doesn't support `:=`
* Fixed ticket #MO-2158: Fix so that MC Content Preview page doesn't segfault in MC-3.8.2
* Fixed ticket #MO-2305: Fix to allow international characters in json formatted content.
* Fixed ticket #MO-2549: Change the how we check if the config system is online for MC

# MC 3.7.6 released on 2013-08-14
* Fixed ticket #MC-153: Increased load speed on the Message Central dashboard by including only the latest 10 mailings in the last 72 hours
* Fixed ticket #MC-172: Added a new index to the recurrent_mailings table in order to improve the performance of certain mailings
* Fixed ticket #MC-144: The Message Central API get mailing call now shows whether or not an entity is archived
* Fixed ticket #MC-145: Prevents keeping directories with irrelevant data under certain conditions when a mailing is not sent
* Fixed ticket #MC-149: Corrected the UI success notifications for the duplicating and unsubscribing actions under recipients
* Fixed ticket #MC-151: Removed a join from the mailingregistry table under certain conditions in order to improve the performances of mailing pages.
* Fixed ticket #MC-158: The track opens checkbox on the campaigns page now updates the DB accurately upon uncheck
* Fixed ticket #MC-159: Verified and corrected the mail loop causing syntax error in the pe2batch logrotate config
* Fixed ticket #MC-168: Creates thumbnails for orgs which do not have them after an upgrade from MC 3.6.x
* Fixed ticket #MC-176: A tracking pixel is now inserted once in desired UI and API created content

# MC 3.7.5 released on 2013-08-14
* Fixed ticket #MC-138: New Rest Api to Duplicate Lists
* Fixed ticket #MO-1051 Enhance the installation script to install from user home directories.
* Fixed ticket #MO-1063: Upgrade to jemalloc 3.4.0
* Fixed ticket #MC-49: Content selection in mailing: Change default sort order by last modified
* Fixed ticket #MC-128: Fix write to memory after free
* Fixed ticket #MC-139: Resolve problems with the v1.0/recipient Api. The recipient local part and domain GET and PUT have been made case insensitive
* Fixed ticket #MC-141: Fix crashes in Manager due to a double free of memory
* Fixed ticket #MC-142: Correct Sort order of Admin/fieldassignment page
* Fixed ticket #MC-146: Open Tracking pixel image failed to render in an API trigerred mailing
* Fixed ticket #MC-150: Provide more helpful message when trying to creat user without selecting org

# MC 3.7.4 released on 2013-07-02
* Fixed ticket #PKG-49: Upgrade to Apache 2.2.24 which addresses security vulnerability
* Fixed ticket #PKG-50: Upgrade to PHP 5.3.24 which addresses security vulnerability
* Fixed ticket #PKG-57: Upgrade to Lua 5.1.27 which addresses memory management issues
* Fixed ticket #MC-98: Fixed issue where mailings get stuck in the middle of generation due to unknown template errors
* Fixed ticket #MC-125: Fixed issue with `View in Browser` links in test messages sent from the MC WEBUI content preview page
* Fixed ticket #MC-126: Fixed generator scaling algorithm to launch new generator on the manager with the least load
* Fixed ticket #MC-127: REST cancel mailing API no longer fails when given multiple mailing ids
* Fixed ticket #MC-132: Fixed issue with link personalization when using uppercase letters in personalization data
* Fixed ticket #MC-136: Fix where generators are not started due to race condition in the manager
* Fixed ticket #MC-73: Fix SQL code to reflect updated JSON.pm

# MC 3.7.3 released on 2013-05-13
* Fixed ticket #PKG-30: Upgraded PosgreSQL to version 9.0.13 which addresses security vulnerabililty
* Fixed ticket #PKG-46: Upgraded Lua to version 5.1.12 which addresses garbage collector race conditions
* Fixed ticket #MC-51: Fixed 'Where' conditions disappearing from UI when a custom relation aggregate field has a columnvalue of '0'
* Fixed ticket #MC-53: Fixed a case where mail was not sent when duplicating a recurring mailing before the first clone is created
* Fixed ticket #MC-82: Fixed a case where the Mailing Summary report times out when start date is close to the current date
* Fixed ticket #MC-85: Macro replacement is no longer performed inside perl code blocks in the text parts of Content
* Fixed ticket #MC-90: Uninstall now correctly removes the msys-cpan-compat-XML-SAX-Expat package
* Fixed ticket #MC-91: Fixed case where unsubscribed recipients could be recreated resulting in duplicate email addresses in the database
* Fixed ticket #MC-93: Fixed issue where preview displays nothing when aggregate field is based on certain tables
* Fixed ticket #MC-101: Fixed a case where MTA would crash in MC logger while handling OOB bounce messages

# MC 3.7.2 released on 2013-04-09
* Fixed ticket #PKG-16: Upgrade PostgreSQL to 9.0.12 to fix serious index corruption issue
* Fixed ticket #MC-57: getListsPreprocess() hook is broken: WHERE needs to be passed to the stored proc
* Fixed ticket #MC-53: Duplicating a recurring mailing before the first clone is created causes the duplication mail to never be sent
* Fixed ticket #MC-46: mailing assumes `paused` state upon duplication
* Fixed ticket #MC-60: List count is shown as `count failed` on recipients tab in mailing when count is in progress.
* Fixed ticket #MC-52: Large attachments caused Mailings tab to fail to display
* Fixed ticket #MC-67: Table creation race condition for new API-Triggered Mailings
* Fixed ticket #MC-69: perl macro values missing in API triggered mailings

# MC 3.7.1 released on 2013-01-15
* Fixed ticket #BZ4235: Updated Direct Access purge to include audit tables
* Fixed ticket #BZ4540: Greatly improved reliability and performance around large direct access mailings.
* Fixed ticket #BZ4551: Greatly improved performance and reliability of metrics related to large direct access mailings.
* Fixed ticket #BZ4572: Greatly improved performance and reliability of large, concurrent scheduled mailings
* Fixed ticket #BZ5544: Fix to improve mailing listing page response time
* Fixed ticket #BZ5647: Fix made to validate that reserved keywords ('root','global-sysadmin') are not used as slug
* Fixed ticket #BZ5694: Fixed cases in which scheduled mailings can remain stuck in the `built` state indefinitely.
* Fixed ticket #BZ5727: Fixed cases in which scheduled mailings stall indefinitely during generation.
* Feature ticket #BZ5971: Clarify in documentation that recipient fields smsContact and smsSubscribed are only available in MC 3.7+
* Fixed ticket #BZ6009: Fixed typo on Edit a Role page
* Fixed ticket #BZ6010: Fix to use link macros with double quotes
* Fixed ticket #BZ6074: Fix made to show content name on content listing page with Japanese words
* Fixed ticket #BZ6078: Fix made to save content with UTF-8 characters in content header
* Fixed ticket #BZ6098: Fix made to show personalization field values in content preview and sent mails
* Fixed ticket #BZ6112: Address timing issue in upgrade process that could lead to failure on slower hardware.
* Fixed ticket #BZ6115: Corrected an issue where bounce codes that were longer then 255 characters were not being reported.
* Fixed ticket #BZ6129: Fix the RFC encoding now it splits words into smaller chunks as per the standard
* Fixed ticket #BZ6131: Improve UI performance and reduce overall database load by improving database stored procedures for relational data functionality on systems with many tables (caused by many mailings).
* Fixed ticket #BZ6159: Updated automatic `safe` logout to allow users to keep multiple browser tabs and windows open without getting logged out inadvertently
* Fixed ticket #BZ6169: Fixed bug related to the link tracking in text mode feature in 3.7.
* Fixed ticket #BZ6170: Fixed issue with RFC2047 macro escaping double quotes but not handling single quotes. Now single quotes escaped properly.
* Fixed ticket #BZ6184: Removed Mobility report end point filters from the Momentum UI to resolve performance issues when there is a shared Message Central and Momentum database.
* Fixed ticket #BZ6187: Fixed the Add New Segment link to correct the numbering of the new segment
* Fixed ticket #BZ6194: Fixed errors encountered while applying database schema update on MC 3.6.2
* Fixed ticket #BZ6257: All macros in MC have the leading space of the parameters trimmed by default. This fix changes this default for the rfc2047 macro to allow the leading white space.
* Fixed ticket #BZ6266: Fixed issue with stuck A/B sample mailings
* Feature ticket #BZ6282: Fix performance issue when large exclusion lists are used on mailings, which was introduced when the exclusion functionality was corrected in 3.7.0.
* Fixed ticket #BZ6306: Fix to improve mailing listing page response time
* Fixed ticket #BZ6328: When importing profile data fields in direct access mode, the data will be silently truncated to 4000 characters. When called from UI/import, it will throw an error as before.
* Fixed ticket #BZ6368: Add extra security for Link Encoding/Decoding by replacing + with _ while encoding. Note that this should not be necessary but was added due to how some email clients behave, such as AOL.
* Fixed ticket #BZ6457: Fixed issue that prevented some Lists from being duplicated.
* Fixed ticket #BZ6464: Added missing permissions that were not added in previous upgrades from 3.6.0 in some circumstances.

# MC 3.7.0 released on 2012-06-26
* Fixed ticket #BZ5463: Modified the REST API for mailings to respect the timezone of the org for the task scheduler. If timezone is specified in the mailing against a schedule, then that timezone is stored. If no timezone is provided along with the schedule, then the org timezone is used.
* Fixed ticket #BZ5368: Resolved an IE9 specific issue where right-clicking within the frame of a table resulted in the standard IE9 menu.
* Feature ticket #BZ5079: Enhanced the suite of REST API's for mailings with one's for Archiving and Unarchiving content.
* Feature ticket #BZ5170: Enhanced the suite of REST API's for mailings with one's for Archiving and Unarchiving lists.
* Feature ticket #BZ5451: Enabled creation, sending, and tracking of SMS message via REST API's.
* Feature ticket #BZ5452: Certified Message Central on Redhat 6 64bit
* Fixed ticket #BZ4747: Profile Data (PD) fields can now include the string `cdf` in the name.
* Fixed ticket #BZ5366: Fixed an issue with `View in Browser` content, where the URL was changing the link to include a second period before `com`, which led to the URL not resolving unless a recipient removed the extra period by hand.
* Fixed ticket #BZ3168: Enhanced the functionality of exclusion lists for relational data.
* Fixed ticket #BZ4371: Resolved an issue where `Anniversary` was required when using `Birthday` in the list criteria.
* Fixed ticket #BZ4953: Resolved an IE9 specific issue where mouse button events within the edit list page did not result in a popup window allowing list criteria to be selected.
* Fixed ticket #BZ5063: For recurring mailings the UI will now check whether the last mailing instance coincides with the end time, and if so, will not schedule that instance.
* Fixed ticket #BZ5141: When using the REST API to send API-triggered messages, if the recipient's email address is specified and that email address does not exist in the system, a new contact is created. This fix prevents the creation of a duplicate contact if the email addresses being compared have differences in their casing of the local part and/or the domain part.
* Fixed ticket #BZ5613: Fixed an issue introduced in MC 3.6, where contactid and historical field criteria could not be used together on a list.
* Fixed ticket #BZ5884: When using design mode, in IE 9, the user may need to click on a tool several times for the tool to be inserted.
* Fixed ticket #BZ5325: Updated the installer so that sub packages automatically take on the same version number of the main msys-ecelerity-mc package.
* Feature ticket #BZ4816: Enhanced the functionality of the link tracking feature to include encoding and tracking of links in the text part of a content item.
* Feature ticket #BZ4821: Enhanced the functionality of the link tracking feature to include encoding and tracking of links in the text part of a content item.
* Fixed ticket #BZ4394: For IE9 users, creating and editing content in Design mode, the personalization and tools features are now fully functioning.
* Fixed ticket #BZ5565: Resolved an issue where users were not being redirected from the '/recipients/listbuilder' page to the '/recipients/advancedbuilder' page if the list was created in advanced mode.
* Fixed ticket #BZ446: Tables that have the option to `Filter` were not visually displaying the correct default status of what is being filtered.
* Fixed ticket #BZ452: If a piece of content is blank content is created, the thumbnail for that content will now display as a blank square instead of a question mark.
* Fixed ticket #BZ4228: For IE8 users, creating and editing content in Design mode, the personalization and tools features are now fully functioning.
* Fixed ticket #BZ4472: The list operator `within the last X days` was deprecated from the UI for relational data. The `less than X days ago` operator should be used in it's place.
* Fixed ticket #BZ4644: The name of a relation column and custom names of relation columns can now include the string 'cdf'.
* Fixed ticket #BZ4833: Removed a duplicate `is` operator for lists with relational date fields.
* Fixed ticket #BZ5070: Lists created with relational date field now has 'anniversary' as an option
* Fixed ticket #BZ5078: If a user is idle in the WebUI for a period longer then the session time out interval is configured, the user will be logged out and returned to the Login page.
* Fixed ticket #BZ5228: Resolved an IE 9 specific issue where users were able to drag a list criteria row outside of the list criteria box.
* Fixed ticket #BZ5115: Once a user clears a notification, the notification will not reappear unless the user does something to warrant another distinct instance of the notification
* Feature ticket #BZ5297: Added a new REST API, Content_Duplicatev37, to duplicate existing content
* Fixed ticket #BZ5235: Resolved an issue when editing content, using IE9, caused the editor to hang indefinitely
* Fixed ticket #BZ194: On the link tracking screen labels were added to denote which links were being tracked. Additionally, functionality was added so that users are able to `select all` and `unselect all` as they are with other tables throughout the MC webUI
* Fixed ticket #BZ619: On the Mailing Summary reports page, the report can be sorted by mailings, which by default are ordered in reverse chronological order
* Fixed ticket #BZ5229: 'Delivery date' field under scheduled delivery of mailing overview screen was not aligned correctly on IE 9
* Fixed ticket #BZ5232: 'Operator' and 'Target Field' columns under join conditions on new/edit relation screen were not aligned correctly on IE 9

# MC 3.6.2 released on 2012-04-02
* No code changes made for Message Central. See Momentum 3.4.2 Change Log for details.

# MC 3.6.1 released on 2012-03-07
* Fixed ticket #BZ5261: This change will force the web ui to be installed on a Manager (in a cluster install) or MTA (in the singlenode case, which wasn't formerly possible). In an environment with multiple Manager nodes, the duplicated web ui can be disabled if desired. In either case, the web ui for both Message Central and Momentum will be installed.
* Fixed ticket #BZ5273: Starting with 3.6.0, we let Gimli start Xvfb. In some instances, this caused error/conflicts to be thrown by Gimli repeatedly. The result of this is that the logged errors were putting the server at risk for running out of disk space. This issue has now been addressed.
* Fixed ticket #BZ5276: Changed installer to prevent uncommon race condition during upgrades where installer would appear to hang while trying to install the new packages.
* Fixed ticket #BZ4265: Fixed a memory leak in the scheduler. In Direct Access mode it formerly took under 1/2 day before a 1G of memory was lost. Now it takes over 140 days. Additional improvements will be analyzed for future releases.
* Fixed ticket #BZ5094: Resolved an issue that caused thumbnails to not generate reliably when the khtml2png2 process takes a long time to run. In addition, this fix implements a better queuing system so that if the process does hang, and must be restarted, none of the thumbnail requests are lost.
* Fixed ticket #BZ5201: Beginning with MC 3.5.1 installing just the web role would not start the web service properly. This issue has been resolved and the following role combinations are now fully supported: database/rest, web (only MC webui), manager+web (both webui, Momentum cluster), mta+web (both webui, Momentum singlenode)
* Fixed ticket #BZ5206: Fixed an issue where the version reported inside ec_console was the MC version not the Momentum version, which impacted the ability to pull in Live Updates.

# MC 3.6.0 released on 2012-02-06
* Fixed ticket #BZ3811: Addressed a situation where multiple tracking pixels might be inserted into a piece of Content.
* Fixed ticket #BZ4149: The following options have been added to the Aggregate Field function of the Relational Data Feature: `first`, `last`, `comma separated`, and `array`.
* Fixed ticket #BZ4401: Addressed an issue where the `View in Browser` wasn't properly displaying conditional content of a message.
* Fixed ticket #BZ4125: Creation of Contact Records for Direct Access Mailings has been increased by a little over 40%.
* Fixed ticket #BZ4334: The way Message Central calculates and reports Raw Clicks has changed. Raw clicks are now reported per unique URL. See MC 3.6 Release Notes for additional detail.
* Fixed ticket #BZ2322: Scheduled dates and times are now shown correctly in the Mailing/Schedule screen.
* Feature ticket #BZ1700: Application no longer allows users to create Lists without any criteria - `empty lists` that would always go to 0 Recipients.
* Feature ticket #BZ2165: HTML Source can be viewed in a `View` tab of a Content Item that has already been used in a Mailing.
* Feature ticket #BZ2248: Domain Report has been redesigned for performance and now loads in seconds.
* Feature ticket #BZ4482: A padlock icon indicates which Content Items on the Content Listing page are available for editing and which are not.
* Fixed ticket #BZ3333: Unique Clicked is being correctly reported in the segmentation expansion of the Mailing Summary Reports.
* Fixed ticket #BZ4085: Fixed a situation where copying blank or improperly saved Content Items caused a blank page in the UI.
* Fixed ticket #BZ2086: In-band bounce messages with '-' are now successfully loaded.
* Fixed ticket #BZ3366: Email addresses with spaces will no longer be imported into the Contacts Table.
* Fixed ticket #BZ3425: Recipients are now successfully created with text-type Profile Fields.
* Fixed ticket #BZ4468: A different error message will be displayed, and the user will be redirected to the content editing page instead of the Application error.
* Feature ticket #BZ1666: Users are listed alphabetically by username on the Admin/Users page.
* Feature ticket #BZ2628: Mailing interval warning -- which is only relevant for one-time and recurring Mailings -- no longer shows for API-Triggered Mailings.
* Feature ticket #BZ4157: Personalized URLs, with their values resolved, are now included in the JLog data that's provided to the MC Click Loader (pe2-clicktracker).
* Feature ticket #BZ4327: Save Options are removed from Content that is not editable due to having already been used in a Mailing.
* Fixed ticket #BZ4178: Corrected a mis-labeled column - now correctly labeled `Mailing Type`.
* Feature ticket #BZ1805: Original file size is now reported correctly on the preview page. Note that this is not the same as the encoded size that will be delivered to the Recipient.
* Feature ticket #BZ4176: Columns with numerical data in Reports are right-aligned to make comparisons easier.
* Feature ticket #BZ4302: Introduced APIs to Archive and Unarchive Mailings.

# MC 3.5.0 released on 2011-09-28
* Fixed ticket #bz3430: Running concurrent API-Triggered Mailings in one Org, and Direct Access Mailings in another Org, does not cause the shell to become unresponsive.
* Fixed ticket #bz3444: Corrected a situation where an A/B Split Mailing would not complete the main bulk send.
* Fixed ticket #bz3748: Corrected the issue where `&` was being encoded as `&amp;` in the URL.
* Fixed ticket #bz3786: The first comment in the HTML of a Content Item is no longer being moved to the very top of the source code.
* Fixed ticket #bz2178: This ticket tracks a significant amount of work done to decrease the load time of the Mailings Listing page. The number queries has been reduced and remaining queries optimized.
* Fixed ticket #bz1211: Unsubscribe and Untag links will no longer be visible in Reports unless those links were included in the Mailing.
* Fixed ticket #bz1560: Corrected the incorrect reporting of Unique Clickthroughs in Reports.
* Fixed ticket #bz2230: Personalization placeholders are now evaluated in a case-insensitive manner.
* Fixed ticket #bz2332: Improvements made to the Mailings Listing Page load time.
* Fixed ticket #bz2419: One in a series of tickets tracking work to improve Generator performance and reduce the latency between scheduling and delivery attempt of Mailings.
* Fixed ticket #bz3335: Content changes will save faster.
* Fixed ticket #bz3545: Addresses an issue where duplicating a Recurring Mailing and changing its schedule would change the schedule for the original.
* Fixed ticket #bz3659: Fixed a situation where a Mailing count would not complete if there were Scheduler errors.
* Fixed ticket #bz3777: Corrected a situation where multiple Orgs were causing incomplete open/click statistics to be recorded.
* Fixed ticket #bz3854: Corrected an issue where the Mailing Names for Recurring Mailings were not displaying correctly in the Dashboard.
* Fixed ticket #bz2082: Content Preview now treats fields used in personalization in a case insensitive manner.
* Fixed ticket #bz2166: The Content Editor screen no longer jumps to the top of the page when a user inserts Personalization fields using the Tools Menu.
* Fixed ticket #bz2206: Underscores can now be successfully used in field names in Relational Tables.
* Fixed ticket #bz2880: A new Gimli Monitor and script have been added which will automatically restart the Clicktracker any time it stops.
* Fixed ticket #bz3544: Corrected a situation where a duplicated Direct Access Mailing would not mail if its schedule was not changed from the original.
* Fixed ticket #bz3720: All Lists associated with a Mailing are now displayed on the Mailing Overview page.
* Fixed ticket #bz3727: Addressed an issue where installing MC would fail if the UTF-8 Locale was not available.
* Fixed ticket #bz3745: Addressed an issue where duplicated Recurring Mailings were corrupting data, causing some Reports to fail with an error message. Duplicating Recurring Mailings now works correctly so this situation no longer exists.
* Fixed ticket #bz3791: Content Item descriptions can now be edited.
* Fixed ticket #bz3797: The installer now generates an SSL certificate for any of the following: Web UI, REST, and Clicktracker roles.
* Fixed ticket #bz3809: Corrected a situation where an invalid local part in an email address was invalidating the entire Web UI Import. Now the invalid record is skipped, and the import proceeds for other, valid records.
* Fixed ticket #bz3825: MC no longer displays an application error when a user clicks `Update` in Reports with a blank date range selected.
* Fixed ticket #bz3828: Addressed an issue where creating relations using Relational Tables that had previously dropped columns caused an error.
* Fixed ticket #bz4175: As part of a set of improvements to how MC does logging, reduced the likelihood that a user would accidentally turn on verbose logging and fill up the disk space.
* Fixed ticket #bz3192: A percentage indicator has been added in Reports for Mailing Segments that were split by percentages.
* Fixed ticket #bz1553: Corrected the incorrect reporting of Unique Clickthroughs in the Dashboard.
* Fixed ticket #bz3292: Links are properly encoded. Additionally, users can change the link destination after a Content item has been mailed by using the REST API v1.0/link.
* Fixed ticket #bz1743: Corrected a situation where timestamps were incorrectly recorded in the Generator log file.
* Fixed ticket #bz3851: Personalization inside the text of the anchor tag now works: `<a href=URL>This text can now be personalized </a>`
* Fixed ticket #bz2550: Resolved a situation where attempting to run a Count for a Mailing within a short amount of time resulted in an error.
* Fixed ticket #bz3896: User is now able to modify a Mailing to use a different List via the REST API.
* Fixed ticket #bz1703: The name of the report has been added to each Reporting page.

# MC 3.4.1 released on 2011-07-14
* Fixed ticket #bz3347: Changed the UI such that long Mailing Names will not cause the action check-boxes on the left side of the screen to disappear from the Reports Summary screen.
* Fixed ticket #bz3466: Updated the install script to handle an upgrade by the database-only role.
* Fixed ticket #bz3650: Addressed a situation where external processes connecting to the database during the migration were causing the migration process to halt.
* Fixed ticket #bz3528: Addressed an error where the install script did not respect customer-specified (non-default) dbroot.
* Fixed ticket #bz3527: Addressed an issue where the upgrade script didn't support a symlinked database.
* Fixed ticket #bz4864: Replaced third party component used in bounce classification with improved Momentum Bounce Classifier.

# MC 3.4.0 released on 2011-06-20
* Fixed ticket #bz191: Resolved an issue where the cursor would jump to the top of the page in long content items when inserting from the Tools Menu.
* Fixed ticket #bz819: Addressed an situation where content thumbnails were not being shown in some cases because of a caching issue.
* Fixed ticket #bz534: Resolved a Roles/Permission-related issue where a user with Template Manager, but not Content Manager permission, was able to create new content.
* Fixed ticket #bz533: Corrected a Roles/Permission issue where a user with Template Deleter, but not Content Deleter, permission was able to Delete content items.
* Fixed ticket #bz483: Resolves a Roles/Permission issue where a user without Content Viewer permission may end up in a redirect loop.
* Fixed ticket #bz630: Resolved a situation where a user with all permissions, but who is not Superuser, could not delete relationships in the Relational Data feature.
* Fixed ticket #bz737: Addressed an issue where bindings without a name were being saved in the Org Management Screen and subsequently displayed in the Campaigns Management Screen.
* Fixed ticket #bz779: Addressed several `view-only` permissions in the Content Area.
* Fixed ticket #bz762: Resolved an issue whereby thumbnails were not refreshing for copied Content or Content created from a Template.
* Fixed ticket #bz849: Resolved an issue where a user with all permissions, but not the Superuser Role, could not cancel a mailing on the Monitor page.
* Fixed ticket #bz885: Thumbnails are now reliably being generated for copied content.
* Fixed ticket #bz912: Resolved a situation whereby a user with read-only permissions could export a CSV file for a Mailing.
* Fixed ticket #bz27: Fixes the issue where a User was allowed to create Lists or Segments in a case-sensitive manner. Now, if a List/Segment `TEST` exists, the system won't let you create `Test` or `test`.
* Fixed ticket #bz76: Addresses an issue in the Content area whereby entering a blank link after a bulleted or numbered list would cause the cursor to jump to the beginning of the list and the blank line to be inserted at the beginning of the content.
* Fixed ticket #bz2972: Resolved a situation in which a large number of active mailings would cause the scheduler to become unresponsive.
* Fixed ticket #bz1198: New Relational Data user interface (UI) no longer allows a user to create a Relation without an underlying data relationship.
* Fixed ticket #bz3020: Import List Page: Fixed a UI issue where clicking on or near the Import name did not expand the details of the Export. Now, clicking anywhere on the Import Row expands the Import Details.
* Fixed ticket #bz2958: Relational Fields are listed by their `friendly name` alias in the Content Personalization drop-down.
* Fixed ticket #bz3125: Addressed an issue that caused slow load times on the Mailings List Page.
* Fixed ticket #bz2260: Fixed an issue where very long content with many long URLs made the Link Tracking page poorly legible.
* Fixed ticket #bz2329: On the Direct Access Mailing Recipient Tab, the default ODBC driver name is now pre-populated.
* Fixed ticket #bz3182: Optimized the buildsql that's generated when multiple tags are used. It now runs much faster.
* Fixed ticket #bz2827: Resolved a situation in which pe2mgr & pe2sched unexpectedly halted and required a restart
* Fixed ticket #bz2780: Resolved a situation where the manager silently fails to start generators when instructed by the scheduler to do so.
* Fixed ticket #bz2778: Users are now able to edit the Content Description after creating the Content Item.
* Fixed ticket #bz2777: Very long links are now presented on the Link Tracking page in a way that does not inhibit the ability to put in a friendly name.
* Fixed ticket #bz2774: Fixed an issue where a User with Org-specific Admin rights had access to all the Orgs.
* Fixed ticket #bz2586: Fixed the issue where skipped columns in a CSV Import file caused certain fields, such as mixed-case fields, not to import.
* Fixed ticket #bz3278: Fixed an issue where a Mailing was displaying multiple times if its schedule was updated.
* Fixed ticket #bz2995: Resolved a scheduler deadlock caused by simultaneous direct access mailings
* Fixed ticket #bz2975: Removed the Delete button from the Tags Screen as deleting tags has potentially negative consequences that will be resolved in a future release.
* Fixed ticket #bz2886: Resolved a situation in which completed direct access mailings still report being in a `Running` state.
* Fixed ticket #bz3078: Newly imported list now show up on the List Index page immediately.
* Fixed ticket #bz3184: Addressed an issue where a mis-configured Generator that is later configured correctly caused Direct Access mailings to potentially go out without personalization in the content.
* Fixed ticket #bz3349: Addressed an issue where clicking on some List Tags caused the application to become unresponsive due to a slow query on the database.

# MC 3.3.0 released on 2011-02-28
* Fixed ticket #bz367: Importing a file with the same name changes the import name for previous imports
* Fixed ticket #bz390: Personalization entered in a URL is not expanded in Preview mode.
* Fixed ticket #bz494: `No Campaign` doesn't appear on Campaign page until a mailing is added to it
* Fixed ticket #bz509: Default value for personalizations shows the value of the last entered value
* Fixed ticket #bz532: Unable to Cancel a scheduled Mailing
* Fixed ticket #bz551: When counts fail due to invalid buildsql they do not report a failure
* Fixed ticket #bz629: Deleting a relationship from a relation results in a Page Not Found error
* Fixed ticket #bz644: Text attachments are mishandled by the content editor
* Fixed ticket #bz659: REST created Content displays improperly in Preview
* Fixed ticket #bz740: The content is saved which switching to preview mode whether or not the user has already saved it
* Fixed ticket #bz757: Unable to do `search` in Recipients page in IE browser.
* Fixed ticket #bz786: Link appears to be untracked, when it is actually tracked.
* Fixed ticket #bz862: Content with a mailto link cannot be previewed.
* Fixed ticket #bz881: Creating Recipient with Profile Field `Purchase Now` is displaying blank page, when $ is entered creating a recipient
* Fixed ticket #bz894: A/B split mailing can also be split by percentage or segment
* Fixed ticket #bz911: Adding text causes personalizations in design mode not to render in preview mode.
* Fixed ticket #bz957: No way to notify users that mailings are taking a long time to process and may be in an error state.
* Fixed ticket #bz992: When generation fails, all mailings marked as bounced and no error given.
* Fixed ticket #bz997: A 'pretty from' Address entered in the default from address in the org does not work.
* Fixed ticket #bz1046: Relational data does not show values in the content preview
* Fixed ticket #bz1102: Preview from source mode displays error message.
* Fixed ticket #bz1125: `NOT` Operator gives error in Criteria group with two rows.
* Fixed ticket #bz1142: Switching preview mangles quotes in headers.
* Fixed ticket #bz1197: Unique key check is not enforced in the WebUI for profile fields.
* Fixed ticket #bz1202: Tracking links are only generated once even if there are multiple instances.
* Fixed ticket #bz1246: Personalized links do not work when created in Design mode.
* Fixed ticket #bz1261: `Text block` for Content in IE 8 is not editable.
* Fixed ticket #bz1270: Cannot save content with an @ sign in a link
* Fixed ticket #bz1312: Cannot send previewed content to an email address that is not in MC database
* Fixed ticket #bz1326: Transient or permanent failures in an SMTP session cause all subsequent messages sent via that session to bounce
* Fixed ticket #bz1396: Unable to resume a recurring mailing when paused in Ready status.
* Fixed ticket #bz1482: PrettyTo bug affects Outlook recipients
* Fixed ticket #bz1523: Dynamic Links don't expand
* Fixed ticket #bz1547: Mailing listing page: status of recurrent mailing is 'Ready' after the scheduled time is over
* Fixed ticket #bz1548: Changing the date range on Click Details report page causes application error
* Fixed ticket #bz1555: Link is not tracked when HTML exists between the anchor tags
* Fixed ticket #bz1580: Message Central PHP fatal error
* Fixed ticket #bz1596: Unique key check is not enforced in the importer for profile fields
* Fixed ticket #bz1590: Trailing space in email address
* Fixed ticket #bz1599: Create/Edit Content: Error message on save when content contains more than one relational data field
* Fixed ticket #bz1632: Links with upper case anchor tags () are not tracked on link tracking page
* Fixed ticket #bz1638: Difficult to assign and unassign recipients to mailings in IE 8 on Windows for some users some of the time.
* Fixed ticket #bz1645: Content with pdf attachment display the contents of the attached file in the TEXT view
* Fixed ticket #bz1648: Emailaddress does not appear in the personalization menu in content editor
* Fixed ticket #bz1653: HTML content in source box shifts down when user edits content (IE8/Win)
* Fixed ticket #bz1662: Received email with attachment is not displayed properly in Gmail
* Fixed ticket #bz1677: Inserting View in Browser causes `No HTML Part` error
* Fixed ticket #bz1742: Generator process keeps running when a block does not finish.
* Fixed ticket #bz1745: Cannot use contactid as a placeholder in MC3 drafts/previews.
* Fixed ticket #bz1793: Importer fails to load an entire batch when bad records found
* Fixed ticket #bz1798: Saving Text content with a link macro generates an error message.
* Fixed ticket #bz1840: Clicking on an attachment displays an error
* Fixed ticket #bz1846: Pressing enter key in content editor prevents macros from working
* Fixed ticket #bz1849: When creating/modifying a campaign and set the start or end time to `0`, the date is reset to UNIX Epoc (01 Jan 1970)
* Fixed ticket #bz1850: Clicks/Opens/Delivered reporting bug in MC 3.2.1: wrong percentage calculated
* Fixed ticket #bz1891: Error in text part does not prevent switching editor modes, and drops text part
* Fixed ticket #bz1925: REST GET for nonexistent email should return error
* Fixed ticket #bz1956: Plus sign in sample recipient causes error when previewing
* Fixed ticket #bz2070: CSV report not generating
* Fixed ticket #bz2157: High volumes of mailings result in slow UI response
* Fixed ticket #bz2169: Report Viewer role can export reports in Domain Stats and Bounce Details

# MC 2.1.7 released on 2010-06-23
* Feature ticket #5721: Message Central now utilizes the logging subsystem from the Momentum core library. This results in a more robust logging infrastructure for Message Central, and addresses an issue where some mailings would never finish.
* Fixed ticket #5982: An accounting issue with the way the clicks and opens were recorded meant that certain counters in comparison report and domain report were displayed incorrectly. The stats for bounced_hard and bounced_soft, opened_gross and clicked_gross would show as zero.
* Fixed ticket #5990: Some times, running a contact import via the WebUI would not complete.
* Fixed ticket #6013: This a fix to resolve the problem were mails would get rejected if a Null byte was added to end of the mailing template.
* Fixed ticket #6014: Message Central now utilizes the logging subsystem from the Momentum core library. This results in a more robust logging infrastructure for Message Central, and addresses an issue where some mailings would never finish.
* Fixed ticket #6054: Conditional content created in the Web UI would not always function as intended.
* Fixed ticket #6075: Generator and Soap service logs now show timestamps in local time format
* Fixed ticket #6174: After a period of operation, the WebUI could return a blank page that could be worked around by restarting the WebUI service.
* Fixed ticket #6263: Contact imports could fail if the input data file contained only email addresses and no other columns.
* Fixed ticket #6311: Updated the apache package included with Message Central to version 2.2.15
* Fixed ticket #6344: Added options to control watchdog behavior for the generator processes; pe2g.gimli.enable_heartbeats and pe2g.gimli.beat_every. The default watchdog behavior has been disabled for the soap and generator processes, as slow-running database queries could sometimes be mistakenly interpreted as a hanging process.
* Feature ticket #6353: Improved performance of the generator process by tuning the runSQL join behavior.
* Fixed ticket #6373: Fix for the problem in Message Central WebUI where certain UTF-8 characters are not displayed properly in the preview screen
* Fixed ticket #6494: Fixes the problem where for some recipients an `unsubscribe recipient` operation in the WebUI fails with an error `An error occurred unsubscribing this recipient.`
* Fixed ticket #6503: A user that was created and was given permission to certain orgs via the WebUI, could encounter a 'failed to change organization' error when trying to change orgs when they subsequently log in.
* Fixed ticket #6739: The installer could fail to uncomment the ecelerity_logger.conf line when setting up the MTA role, resulting in delivery and bounce data not being fed back to Message Central from that MTA.
* Fixed ticket #mc1230: This is a fix to resolve the problem were mails would get rejected if a Null byte was added to end of the mailing template.
* Fixed ticket #mc1628: Improve mail generation performance. This corrects a performance regression introduced in MC 2.1.3.

# MC 2.1.2 released on 2009-11-06
* Fixed ticket #mc1093: Improve robustness of the RFC2047 header encoding parameter validation
* Fixed ticket #mc1150: Improved performance in the generator in the case that a generation run was interrupted.
* Fixed ticket #mc1278: The scheduler process could become blocked building mailings if many long-running builds are in progress. While blocked, generators would not be able to be run. The build, generation and list-counting actions are now prioritized independently with their own thread pools. Added config options pe2sched.concurrency.mailings (default 3), pe2sched.concurrency.tasks (default 3) and pe2sched.concurrency.listcount (default 2) to control the number of threads used by these tasks.
* Feature ticket #mc1283: Improved robustness and error recovery in the pe2batch process.
* Feature ticket #mc1302: Clarified wording in the Suppression List management section of the webui
* Fixed ticket #mc1323: Improved scheduler database reconnection logic; it was possible to encounter `search_path [maincontrol] does not contain an org` errors after a database restart.
* Fixed ticket #mc1453: The list criteria editor would display different operators depending on whether you were creating or editing a list.
* Fixed ticket #mc1459: The `AM`/`PM` selector in the mailing scheduling portion of the web UI would not always take effect.
* Fixed ticket #mc1460: The GETEXTERNAL macro will now accept optional quotation marks around the URL, whereas previously it required that they were omitted.
* Feature ticket #mc1461: Improved performance of the recipient list when a large number of recipients are in the system.
* Fixed ticket #mc1464: Improved workflow on the mailing schedule section of the UI.
* Fixed ticket #mc1469: When previewing or generating a test message, tracked links were not clickable. They are now clickable (so you can verify that they work) but will still not be counted as clicks or opens because they are not associated with a mailing.
* Fixed ticket #mc1473: Mailings that are scheduled to run after the end date of their respective Campaign will no longer be launched and generated.
* Fixed ticket #mc1475: Images inserted into content via the content editor of the web UI will now use the webDomain configured for the org, instead of taking the hostname from the current HTTP session (which is usually the same, but may differ for some deployments depending on network topology).
* Fixed ticket #mc1477: Copying an Org via the web UI would sometimes fail with a `Validation constraint violation` error.
* Fixed ticket #mc1478: Images uploaded as assets could not be viewed except when requested from the machine where they were uploaded. This affected systems with multiple deployed `web` roles installed on multiple machines behind a load balancer.
* Fixed ticket #mc1479: Improved performance of the recipient import process, both in the UI and from the command line.
* Fixed ticket #mc1480: When editing a recipient via the web UI, if that recipient had NULL values for one or more profile data fields, a `duplicate key violation` error would be thrown, preventing the edit from taking place.
* Fixed ticket #mc1481: Using the `is not like` operator, or criteria that compared string fields with integer values (or vice versa) could result in invalid SQL being constructed later on when building the mailing. Improved robustness of the list editor so that any detectable errors are displayed at edit time.
* Feature ticket #mc1482: Added option to the UI to force a list re-count, to be used in exceptional circumstances.
* Fixed ticket #mc1483: The user administration screens now prompt for confirmation that a changed password is correct, by requiring that it be filled in twice.
* Fixed ticket #mc1484: The summary screen in the mailing creation section would show a count of 0 when it should instead have indicated that the count is pending.
* Fixed ticket #mc1489: Improved mailing generation performance when a large number of profile data fields are defined.
* Fixed ticket #mc1491: When using load_contacts_db.pl and the `-k email` option to key by email, the import would error out. The workaround in earlier releases is to use `-k localpart,domain`.
* Fixed ticket #mc1492: load_contacts_db.pl would error out if keying the import by date/time fields.
* Fixed ticket #mc1493: Improved performance of the mailings page when a high volume of bounces have been recorded.
* Feature ticket #mc1495: Added new relational data feature
* Fixed ticket #mc1496: Improved robustness and error recovery in the click tracking process.
* Fixed ticket #mc1505: Mailings could fail to build when using historical data from other mailings as criteria.
* Fixed ticket #mc1509: The list editor would not allow the selection of fields based on click performance of content items, due to a missing record associating the link with the content item.
* Fixed ticket #mc1529: The contact import process could generate an incorrectly formatted error report CSV file
* Fixed ticket #mc1544: The web UI would report list counts as zero valued when in fact they were running the background and pending completion. The UI now displays 'not counted' in this case.
* Fixed ticket #mc1545: Web forms would not always display the footer section.

# MC 2.1 released on 2009-07-14
* Fixed ticket #mc1311: Some of the navigation links in the web UI would be greyed out unnecessarily when a user assigned the `Basic User` role logs in.
* Fixed ticket #mc1313: It is no longer possible to enter two conflicting values for the same Profile Data field for a given recipient when using the web UI.
* Fixed ticket #mc1315: Resolved an issue with tracking mailto: links.
* Fixed ticket #mc1317: The mailings screen now lists the mailings with the most recent first.
* Fixed ticket #mc1318: Added the complete set of country codes (ISO 3166) and language codes (ISO 639) to the schema.
* Fixed ticket #mc1319: Standardize on the use of the term `Preference Group` instead of `Tag` in the web UI.
* Feature ticket #mc1339: The content editor now supports the creation of conditional content blocks.
* Feature ticket #mc1340: Lists and Queries now display a count of the number of recipients selected by that List/Query. The count may take some effort to obtain, so it is not automatically populated. When creating a List/Query, you are given the option of Saving and Counting. You may also request a re-count via the List/Queries listings in the web UI. Depending on the complexity of the List/Query, the recount may take some time, and while it is running, it may impact the performance of the database.
* Fixed ticket #mc1346: The `import recipients` link would not appear when using IE to view the web UI.
* Feature ticket #mc1347: Integrated the Gimli process supervision and analysis tool to improve overall robustness of the system.
* Feature ticket #mc1348: Added an SMTP driver for the generator and SOAP components. This is enabled via the use of smtp:// in your soap.relay_url and pe2g.relay_urls configuration options in pe2.conf. New installations will default to SMTP; older installations may need to update the pe2.conf file to switch over. Note that you should adjust your Momentum ESMTP_Listener so that it includes `XSETCONTEXT` in the list of SMTP_Extensions for connections from your generator machine(s) for the validation context data to be passed from Message Central into Momentum. When both Message Central and Momentum are correctly configured, this feature enables binding assignment and throttling information to be configured in Message Central and take effect on the Momentum node(s). The web UI has been updated to allow this information to be set, as well enable the ability to Suspend/Resume and Cancel mailings.
* Fixed ticket #mc1352: The content editor would not apply `dot-stuffing` to the content, resulting in messages appearing `corrupted` when they are sent, if they contain lines that begin with a single period `.`
* Feature ticket #mc1361: Added ability to create webforms to allow recipients to edit their Profile Fields and Preference Groups. Consult the manual for details on their use.
* Feature ticket #mc1362: Increased the width of the text area used for editing HTML source in the content editor
* Fixed ticket #mc1363: Dramatically improved the user experience around scheduling mailings in the web UI
* Fixed ticket #mc1374: The SOAP server process could leak memory while processing a large list of contacts during an import
* Feature ticket #mc1375: Added the load_contacts_db.pl script. This is now the preferred mechanism for performing regular imports of recipient data. `/opt/msys/pe2/bin/load_contacts_db.pl -h` has extensive information on its use.
* Feature ticket #mc1383: Added an UNSUBGROUP macro to the message template language to allow generation of a link that will allow unsubscribes from a particular Preference Group.
* Fixed ticket #mc1387: The content editor would not correctly store URLs that contained ampersands when tracking links, resulting in a broken redirect when the recipient clicked on the link.
* Feature ticket #mc1389: Added the ability to store arbitrary data along with a campaign. The system has no expectations or requirements for this data; it is maintained in the system solely as a way to associate site specific data with a campaign.
* Fixed ticket #mc1393: Unable to add Profile Field or Preference Groups to a recipient when using IE
* Fixed ticket #mc1394: The `Create New Profile Field` page title claimed to be `Create Recipient Field`.
* Fixed ticket #mc1395: The Creat/Edit Mailing portion of the Web UI did not display the mailing name that was being edited.
* Fixed ticket #mc1398: Unable to add a Profile Field or Preference Group to a recipient via the web UI, if the name of that Field or Group contained special punctuation characters.
* Fixed ticket #mc1402: The Copy User function of the web UI would not copy the user, but would edit the original instead.
* Fixed ticket #mc1404: The Import Recipients portion of the UI would stall when running in Update Only mode if the CSV file contained recipients that did not already existing in the system.
* Fixed ticket #mc1408: The Perl SOAP client would not correctly encode strings that contained special XML characters in some cases, resulting in a failure to save Lists or Queries if they used a less-than condition.
* Fixed ticket #mc1414: Sortable tables could float off to the right of other page elements in the web UI, if the browser window was made wide enough.
* Fixed ticket #mc1415: Improved web UI presentation in IE by bringing it into alignment with Firefox and Safari.
* Feature ticket #mc1417: Added Forward-to-Friend functionality. The recipient initiating the forward is tracked, and overall aggregate clicks/opens for friends are tracked. You may use the FORWARDTOFRIEND() macro to embed a forward-to-friend link in your content. The web UI also provides a shortcut for embedding this macro.
* Feature ticket #mc1421: Added the ability to drill down into more detail on the mailing report page of the web UI.
* Feature ticket #mc1422: Added GETEXTERNAL(URL) macro that can be used in content to fetch data from an external URL and automatically track the links it finds within that content.
* Feature ticket #mc1423: You may now edit the destination of links from the mailing report page in the web UI. This allows you to expire or otherwise alter the tracked links.
* Feature ticket #mc1424: The Import Recipients page of the UI and the load_contacts scripts now allow you to associate the batch of recipients with a Preference Group.
* Fixed ticket #mc1425: The installer would not prompt for the webdomain or verp domain when installing the database in some scenarios, so the initial org would be created without them being set. This could be correctly easily by editing the org in the web UI.
* Fixed ticket #mc1426: The WYSIWYG content editor could generate content with an xml:namespace declaration in some cases, and this would cause IE to fail to preview the content and instead display `The XML page could not be displayed`
* Fixed ticket #mc1427: The List/Query editor in the web UI would not show the sub-group delete button for complex targeting criteria.
* Fixed ticket #mc1428: The List/Query editor in the web UI would display a group as `All` instead of `Any` after it had been saved and then re-opened for editing. This was a display issue only.
* Fixed ticket #mc1438: The content editor did not apply RFC2047 encoding to the Subject line. It now automatically encodes portions that are not personalization placeholders or macros. You may use the RFC2047() macro to explicitly encode expressions in content templates.
* Fixed ticket #mc1448: pe2batch would not compress logs files after it had finished processing them and put them in the `save_dir` (/var/log/pe2/archive)