---
lastUpdated: "02/08/2020"
title: "554 5.7.1 - Recipient address was suppressed due to system policy"
description: "The system policy that this error is referring to is actually our suppression list Spark Post has its own suppression list that encompasses many alias email addresses that are often sent to by spammer and malware senders An example of this would be unsubscribe and in some cases individual email..."
---

The "system policy" that this error is referring to is actually our suppression list. SparkPost has its own suppression list that encompasses many alias email addresses that are often sent to by spammer and malware senders. An example of this would be unsubscribe@, and in some cases, individual email addresses that are now defunct but people recognize, such as sjobs@apple.com. The global suppression list also has a large list of commonly misspelled domains that arise from major domains, e.g. "gmial.com".

These protections are in place for your reputation - the global suppression list's goal is to prevent spammers from sending spam and malware to aliases in the hopes that an individual on the alias list will open the email, and to ensure that the number of potential spam trap hits is kept as low as possible.
