---
lastUpdated: "10/28/2020"
title: "How do I use Android digital asset links with SparkPost Enterprise?"
description: "Note This article is for Spark Post Enterprise only Table of Contents Use these quick links to jump to certain sections of this article Introduction What are the potential benefits to configuring Android digital asset links As a Spark Post Enterprise customer what steps do I need to take to..."
---

> **Note:** This article is for SparkPost Enterprise legacy setup *only* - please see [this article](./deep-links-self-serve) for current instructions.

## Table of Contents

Use these quick links to jump to certain sections of this article:

* [Introduction](#introduction)
* [What are the potential benefits to configuring Android digital asset links?](#what-are-the-potential-benefits-to-configuring-android-digital-asset-links)
* [As a SparkPost Enterprise customer, what steps do I need to take to implement digital asset links?](#as-a-sparkpost-enterprise-customer-what-steps-do-i-need-to-take-to-implement-digital-asset-links)

## Introduction

Android digital asset links allow recipients who click on a link in an email on their mobile device to be directed to the mobile app (assuming it's installed) rather than the default browser on the user's Android device. The purpose of this article is to explain how to integrate digital asset links with SparkPost Enterprise, but does not go into in-depth detail on how to configure the backend of your mobile app to accept these links, nor the formation of your digital asset link statements. Please refer to the official [Google Digital Asset Links](https://developers.google.com/digital-asset-links/v1/getting-started) page for further documentation.

## What are the potential benefits to configuring Android digital asset links?

The Digital Asset Links protocol and API enable an app or website to make public, verifiable *statements* about other apps or websites. For example, a website can declare that it is associated with a specific Android app, or it can declare that it wants to share user credentials with another website.

Here are some possible uses for Digital Asset Links:

*   Website A declares that links to its site should open in a designated app on mobile devices, if the app is installed.
*   Website A declares that it can share its Chrome user credentials with website B so that the user won't have to log in to website B if it is logged into website A.
*   App A declares that it can share device settings, such as location, with website B.

Android digital asset links can not only push tracked links to your mobile app, but can also share credentials and settings from their browser/device, which improves the overall end user experience dramatically over standard link formatting.

## As a SparkPost Enterprise customer, what steps do I need to take to implement digital asset links?

**Get familiar with Android digital asset links by referring to their documentation.**

Google has two separate documentation endpoints for the two different types of digital asset links:

* [Handling App Links](https://developer.android.com/training/app-links/index.html)
* [Enabling automatic sign in across apps and websites](https://developers.google.com/identity/smartlock-passwords/android/associate-apps-and-sites)

**Create / Prepare your Android app.**

You may already have a mobile app that supports deep asset links – if that is the case, great! You can go through the following steps to configure an assetlinks.json file for use with your SparkPost Enterprise engagement tracking domain.

As a customer you will need to develop and/or prepare your app according to Google instructions for handling digital asset links. Please refer to the Android developer link above and any other resources that may pertain to app development.

**Create an assetlinks.json file for use with your SPE engagement tracking domain(s).**

Referring to the digital asset links documentation, your engagement tracking domain will be acting as the **principal,** which will host your assetlinks.json file as in the following example, where "click.customer.com" is the engagement tracking domain:

[https://click.customer.com/.well-known/assetlinks.json](http://post.pinterest.com/.well-known/assetlinks.json)

The assetlinks.json file will contain all your statements that will be read by Android devices that click on a tracked link sent through SparkPost. If a statement matches, users will be redirected to the mobile app (if installed), or credentials will have the permission to be shared between apps.

Contact your TAM to upload your assetlinks.json file.

Once you have created your assetlinks.json file, provide it to your TAM by emailing support@enterprise.sparkpost.com. The TAM will complete the hosting of the file.
