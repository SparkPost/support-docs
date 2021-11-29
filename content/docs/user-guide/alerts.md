---
lastUpdated: "02/03/2021"
title: "Alerts"
description: "Get notified about deliverability issues as they happen."
---

Alerts track important sending metrics and notify you when something is wrong in real-time. Track your entire account or a few critical resources with powerful filtering and receive notifications through email, Slack, and webhooks. You can get started from the [Alerts page](https://app.sparkpost.com/alerts)([EU](https://app.eu.sparkpost.com/alerts)).

## Metrics to Track
You can set up alerts to track the following metrics:

* Block Bounce Rate
* Hard Bounce Rate
* Soft Bounce Rate
* Monthly Sending Limit
* Health Score

## Notification Channels
Alerts can send notifications through these channels:

* Email - notify up to 10 email addresses
* Slack - using [incoming webhooks](https://api.slack.com/incoming-webhooks#create_a_webhook)
* Webhooks - we'll send a [payload](#webhook-payload-sample) to your custom target URL

No need to pick just one, alerts can notify on multiple channels.

## Custom Thresholds and Filters
Pick thresholds that make sense for you and specific resources to track. Each alert metric supports different type of thresholds and filters you can use.

### Bounce Rates
Bounce rate alerts trigger above a percentage of your choice. Filter what the alert tracks by:
* Subaccounts: Track Primary and all subaccounts, any subaccount, or specific subaccounts.
* Sending Domains
* Sending IPs
* Mailbox Providers: Pick popular mailbox providers from [this list](#mailbox-providers).

### Health Score
Health Score alerts trigger on your choice of:
* Value: Above or below a specific score from 0 to 100.
* Day over Day change: A percent change from one day to next, positive or negative.
* Week over Week change: A percent change from one week to the next, positive or negative.

Filter what the alert tracks by:
* Subaccounts: Track Primary and all subaccounts, any subaccount, or specific subaccounts.
* Facet of your score:
  * IP Pools
  * Sending Domains
  * Mailbox Providers: Pick any number of popular mailbox providers from [this list](#mailbox-providers).

### Monthly Sending Limit
Monthly sending limit alerts trigger when your usage hits a specified percentage of your monthly sending limit.


## How Alerts Work
How alerts track your metrics and when they send notifications.

### Triggers and Incidents
An alert triggers when the metric it tracks breaks the threshold you set. When an alert triggers for the first time, an incident is created. **Alerts send notifications when a new incident is created.** You can see the most recent alerts that triggered from the [Alerts page](https://app.sparkpost.com/alerts)([EU](https://app.eu.sparkpost.com/alerts)). Click on any alert to see it's active or closed incidents.

Incidents remain open until the alert doesn't trigger again for at least 30 minutes. If a metric continues to trigger while an incident is open, the incident will be updated to reflect the metric's latest value, but notifications will not be sent. Incidents can be open and updated for up to 24 hours. If a metric continues trigger past 24 hours, the alert will create a new incident and send notifications again.

**Alerts trigger and create individual incidents for each filter they track.** For example, if your alert tracks 2 sendings domains, up two 2 independent incidents could be open for the alert at any time. The subaccounts groups "Primary and all subaccounts" and "Any subaccount" act as one filter each.

### Muting Alerts
Alerts can be muted. If you're testing or want to silence an alert, mute it and it will no longer send notifications. **Muted alerts still track your metrics and trigger incidents**, so you can still find out if your metric has broken the threshold.

## Recommended Alerts
If you are starting out with alerts, we recommend a few basic ones to start with:

* Monthly Sending Limit alert at 80%, this will let you know when you are near overage pricing for your plan.
* Health Score alert tracking Week over Week change of 10%, this would indicate an upcoming engagement and performance change.
* Block Bounce Rate above 10%, for an immidiate warning of current deliverability issues.

## Mailbox Providers
These are the Mailbox Provider options you can filter by and what domains they cover.

| Mailbox Provider         | Routing domains covered |
|--------------------------|-----------------|
| Apple                    | mac.com |
| Gmail                    | gmail.com, googlemail.com |
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

## Webhook Payload Sample

```
[
  {
    "alert_id": 1,
    "incident_id": 1,
    "name": "Health Score dropped",
    "metric": "health_score",
    "triggered_value": 40,
    "triggered_at": "2019-06-01T14:48:00.000Z",
    "threshold_evaluator": {
      "operator": "lt",
      "source": "raw",
      "value": 50
    },
    "filters": {
      "subaccount_id": 0,
      "ip_pool": "default"
    }
  }
]
```
