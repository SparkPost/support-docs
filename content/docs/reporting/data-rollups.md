---
lastUpdated: "10/02/2020"
title: "Coming Soon: Data Rollups"
description: "Learn about how we've changed our data storage schema and what changes you may see"
---

## What's changing and why?

In order to get you the data you want faster, we've changed our data storage schema that powers the Metrics API to use roll-ups instead of only raw event data. Data roll-ups is a common method of compressing and pre-aggregating historic data which helps improve overall user performance and response times. We will continue performing real-time aggregation on raw event data for up to the minute reporting.

Most users of the UI or Metrics API will not notice differences in results. In fact there will be  significant performance improvements, especially for our highest volume customers and when looking at reports that span multiple months. However, this update does mean that some of the detailed results may change in the ways set out below.

## What will be different?

Aside from the faster load times, there are a few small changes you may notice:

* [Time Zone](#time-zone) will be respected at precisions of hour or less.

* ["Unique" Metrics](#unique-metrics) may be slightly inflated when the precision does not align with the roll-up increment

* [Time frame rounding on the Time Series API endpoint](#time-frame-rounding-on-the-time-series-api-endpoint) will round down to match the Aggregate API endpoint and UI

* [Deliveries by Attempt grouping](#deliveries-by-attempt-grouping) will group attempts 3+ into a single value

### Time Zone

In an API call, `timezone` will only be respected when `precision` is hour or less. API calls where `precision` is `day`, `week`, or `month` will always return UTC time. An API call with a `precision` of  `day` or above that also includes a `timezone` will still succeed, but the results will be returned in UTC rather than the timezone included in the request.

In the UI, the new Timezone selector will only let you change the timezone when the Precision selector is set for `hour` or less. The UI will always display in UTC when the Precision selector is set for `day`, `week`, or `month`. If you want to change the Timezone selector but can't, please first change the Precision selector to `hour` or less.

### "Unique" Metrics

The raw data is pre-aggregated into minute, hour, and day increments, which are used to support the various precision options:

| Precision | Roll-up Increment |
| --------- | ----------------- |
| `1min`    | minute            |
| `5min`    | minute            |
| `15min`   | minute            |
| `hour`    | hour              |
| `day`     | day               |
| `week`    | day               |
| `month`   | day               |

This means that at some precisions, engagement events that occurred within the same precision period but in different roll-up increments cannot be deduped. This can slightly inflate "unique" metrics. Our analysis indicated that this inflation was 3-4% at most.

In both the API and the UI, `unique clicks` and `unique opens` will report the unique events that occurred during the roll-up increment. At precisions that do not strictly align with roll-up increments, uniques may be slightly inflated.

Example: Recipient opens an email at 1:08pm, 1:13pm, and 2:37pm.

* At `1min` precision, these events will be reported as 3 separate "unique" opens, each within the minute they occured.
* At `5min` precision, these events will be reported as 3 separate "unique" opens, 1 during 1:05-1:09, 1 during 1:10-1:14, and 1 during 2:35-2:40.
* At `15min` precision, these events will be reported as 3 separate "unique" opens, 2 during 1:00-1:14 and 1 during 2:30-2:44. This is because `15min` precision is using 15 individual one-minute roll-up increments, and the opens cannot be deduped across the different roll-up increments.
* At `hour` precision, these events will show up as 2 separate "unique" opens, 1 during 1:00-1:59 and 1 during 2:00-2:59.
* At `day` precision, these events will show up as 1 "unique" open for the day.

In the UI, the name of the metric will change to show the period being used for the unique values.

Example: Unique Clicks **per hour**

### Time frame rounding on the Time Series API endpoint

When the time frame selected does not match the precision selected in the [time series endpoint](https://developers.sparkpost.com/api/metrics/#metrics-get-time-series-metrics), the response will round to the closest time frame that matches the precision.

Example: Time series request for 3:12pm - 3:28pm at 5 minute precision.

Previously, the API would return the following buckets:

* 3:12:00-3:14:59
* 3:15:00-3:19:59
* 3:20:00-3:24:59
* 3:25:00-3:29:59

Now, the API will return the following buckets:

* 3:10:00-3:14:59
* 3:15:00-3:19:59
* 3:20:00-3:24:59
* 3:25:00-3:29:59

This rounding method is already used by the [aggregate endpoints](https://developers.sparkpost.com/api/metrics/#header-precision-parameter) and the UI, so the experience will be more consistent.

### Deliveries by Attempt grouping

The [deliveries by attempt](https://developers.sparkpost.com/api/metrics/#metrics-get-deliveries-by-attempt) endpoint will group attempts that are 3 or greater into a single value.  96% of deliveries are made on the 1st or 2nd attempt, so the additional granularity above 3 attempts is generally not valuable.

Example:

Previously, the API would return the following:

| Attempt | Count_Delivered |
| ------- | --------------- |
| 1       | 100             |
| 2       | 30              |
| 3       | 10              |
| 4       | 5               |
| 5       | 3               |
| 17      | 1               |
| 131     | 1               |

Now, the API will return:

| Attempt | Count_Delivered |
| ------- | --------------- |
| 1       | 100             |
| 2       | 30              |
| 3+      | 20              |

The UI already groups delivery attempts into "Delivered 1st Attempt" and "Delivered 2+ Attempts" so there is no change to the UI.


As always, reach out to us if you have any questions or concerns. You can contact your Technical Account Manager directly or submit a support ticket [in the app](https://app.sparkpost.com/) ([EU](https://app.eu.sparkpost.com/)) and we'll be happy to assist.
