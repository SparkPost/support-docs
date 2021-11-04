---
lastUpdated: "02/08/2020"
title: "Reputation Improvement"
description: "The Signals recommendations for improving your sending reputation."
---

Mailbox providers now focus primarily on engagement and read rates when assigning reputation to an IP or sending domain. This is a shift from the older model in which negative signals like complaint/hard bounce rates were used to measure reputation. In short, _engagement is what matters_ - are recipients opening, reading, and clicking on your email? So, naturally, if you send only what your subscribers want to see when they want to see it, then those subscribers will receive your message in the inbox.

Here are some steps for how to improve your reputation with a mailbox provider.

1. If you’re warming up a new IP/domain combo slow down sending, following our [warm up guide](https://www.sparkpost.com/docs/deliverability/ip-warm-up-overview/).
1. Tighten up the [list hygiene process](/docs/signals/list-hygiene/) for this domain until issue is resolved.
    1. Once you see improvement, you should wait another 14 days. After that you can start slowly increasing your engagement window to include more subscribers for the problem domain. If the blocks return you will need to back off a bit again and that will be your engagement window going forward.
    1. If there is no improvement in 14 days, then mitigation may be required. <br /> **NOTE:** Each mailbox provider has different processes to request mitigation to reset your reputation with them. SparkPost can guide you on what steps to take.  Open a support case for guidance.
1. Run a [re-engagement campaign](/docs/signals/re-engagement-campaign/) for the remainder of the list. 
