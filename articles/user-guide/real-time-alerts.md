---
title: "Setting up Alerts"
description: "Automated alerting about what matters as it happens."
---

Alerts track important sending metrics and notify you when something is wrong in real-time. Track your entire account or a few critical resources with powerful filtering. Recieve notifications through email, Slack, and webhooks.

## Metrics to Track
You can set up alerts to track the following metrics:

* Block Bounce Rate
* Hard Bounce Rate
* Soft Bounce Rate
* Monthly Sending Limit
* Health Score

## Channels to Notify
Alerts can send notifications through these channels:

* Email - notify up to 10 email addresses
* Slack - using [incoming webhooks](https://api.slack.com/incoming-webhooks#create_a_webhook)
* Webhooks - we'll send a payload to your custom target URL

No need to pick just one, every alert can notify on multiple channels.

## Custom Thresholds and Filters
Pick trigger thresholds that make sense for you and get as specific as you need with which resources to track. Each alert metric supports a different type of triger threshold and types of filters you can use.

### Bounce Rate Metrics
Bounce rate alerts trigger either above or below a percentage of your choice. Filter what the alert tracks by:
* Subaccounts: Track Master and all subaccounts, any subaccount, or any number of specific subaccounts.
* Sending IPs: Any number of your sending ips.
* Mailbox Providers: Pick any number of popular mailbox providers from from [this list](#header-mailbox-providers).
* Sending Domains: Any number of your sending domains.

### Health Score Metric
Health Score alerts trigger on your choice of:
* Value: Above or below a specific score from 0 to 100.
* Day over Day change: A percent change from one day to next, positive or negative.
* Week over Week change: A percent change from one week to the next, positive or negative.

Filter what the alert tracks by:
* Subaccounts: Track Master and all subaccounts, any subaccount, or any number of specific subaccounts.
* Facet of your score:
  * IP Pools: Any number of IP pools
  * Mailbox Providers: Pick any number of popular mailbox providers from [this list](#header-mailbox-providers).
  * Sending Domains: Any number of your sending domains.

### Monthly Sending Limit
Monthly sending limit alerts trigger when your usage hits a specified percentage of your monthly sending limit.


# How Alerts Work
This section covers the intricacies of how alerts track your metrics when they send notifications.

## Triggers and Incidents
An alert triggers when their metric breaks the threshold for any of the filters it tracks. When an triggers for the first time, an incident is created. Alerts send notifications when a new incident is created. Incidents remain open until the doesn't trigger again for at least 45 mintues. If a metric continues to trigger while an incident is open, the incident will be updated to reflect the metric's value, but notifications will not be sent. Incidents can remain open and continue to be updated for up to 24 hours. If a metric continues trigger past 24 hours, the alert will create a new incident and send notifications again.

*Alerts trigger and create individual incidents for each filter they track.* For example, if your alert tracks 2 sendings domains, up two 2 indepented incidents could be open for the alert at any time. The subaccounts groupds "Master and all subaccounts" and "Any subaccount" act as 1 filter each.

## Muting Alerts
Alerts can be muted. If you're testing or just want to silence an alert for a bit, simply mute it and you will no longer recieve notifications. *Muted alerts still track your metrics and trigger incidents*, so you can still find out if your metric has broken the threshold.

# Recommended Alerts
If you are starting out with alerts, we recommend a few basic ones to start with:

* Monthly Sending Limit alert at 80%, this will let you know when you are near overage pricing for your plan.
* Health Score alert tracking Week of Week change of 10%, this would indicate an upcoming engagments and performance change.
* Block Bounce Rate above 20%, for an immidiate warning of current deliverability issues.

# Mailbox Providers
These are the Mailbox Provider options you can filter by and what domains they cover.

| Mailbox Provider         | Domains covered |
|--------------------------|-----------------|
| Appel                    | mac.com |
| gmail                    | gmail.com, googlemail.com |
| Google Apps              | google.com |
| Microsoft                | hotmail.com |
| Verizon Media            | verizon.net aol.com, aim.com, yahoo.com |
| Yahoo UK                 | yahoo.co.uk, yahoo.fr, yahoo.es, sky.com, yahoo.de, yahoo.it, yahoo.gr, yahoo.ie, yahoo.dk, yahoo.ro, yahoo.se, yahoo.no, yahoo.pl, yahoo.co.za, yahoo.be, yahoo.nl, yahoo.at, yahoo.fi, yahoo.hu, yahoo.bg, yahoo.cz, yahoo.com.hr, yahoo.com.ua, yahoo.pt, yahoo.sk, yahoo.ee, yahoo.lv |
| US Broadband             | att.net, comcast.net, cox.net, charter.net, earthlink.net, optonline.net |
| UK Providers             | btinternet.com, ntlworld.com, talktalk.net |
| Italian Providers        | libero.it, pec.libero.it, alice.it, virgilio.it, tin.it, fastwebnet.it |
| Russian Providers        | mail.ru, yandex.ru, bk.ru, list.ru, inbox.ru, rambler.ru, ya.ru |
| French Providers         | orange.fr, free.fr, sfr.fr, laposte.net, neuf.fr, bbox.fr |
| Chinese Providers        | qq.com, vip.qq.com, 163.com, vip.163.com, 126.com, vip.126.com, easystack.cn, sina.com |
| German Providers         | t-online.de, gmx.de, web.de, freenet.de, gmx.net, arcor.de, online.de |
| Canadian Providers       | shaw.ca, rogers.com, telus.net, sympatico.ca, videotron.ca, sasktel.net, cogeco.ca, bell.net |
| Japanese Providers       | ezweb.ne.jp, yahoo.co.jp, i.softbank.jp, docomo.ne.jp, nifty.com |
| Other European Providers | seznam.cz, wp.pl, onet.pl, telenet.be, skynet.net, bluewin.ch, ukr.net, ziggo.nl, gmx.at, home.nl, centrum.cz, planet.nl, gmx.ch, hetnet.nl, abv.bg |
