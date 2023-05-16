---
lastUpdated: "02/23/2023"
title: Inside IntelliSeeds™ - Tools and Techniques
description: Breakdown your intelliseed list with Python
---

This article takes a look inside the recently updated IntelliSeed™ list that’s made available for users of Inbox Tracker. We walk through a simple free Python script that can help you see inside the list.

### Why Intelliseeds?

IntelliSeeds™ are virtual users who interact with emails using real behavior attributes. Intelliseeds interact with email in their inbox to provide realistic modeling, based on engagement profiles from our consumer panel.

As mailbox providers look at engagement when making inbox placement decisions, Intelliseeds provide senders with a realistic view of inbox performance. This provides more valuable data-points for senders to monitor mailings, craft their communications strategy and drive decision-making.

### Intelliseed coverage

SparkPost recently updated [Intelliseeds](https://www.edatasource.com/intelliseeds/#) to cover a wider range of mailbox providers.

If you haven’t updated your seed lists in a while, this is well worth doing.

The list is now over 360 entries long:

wc -l intelliseed_list.txt

366 intelliseed_list.txt

But which mailbox providers and domains are covered? Let’s take a deeper look.

Using a simple 50 line Python script, we can extract and count the distinct domains in the file. The output is in “comma separated variable” (CSV) format, so it can be processed by other tools. We can put the output into a CSV file like this.

./count-domains.py intelliseed_list.txt > intelliseed_count.csv

### Tool usage

Usage help is available (as usual) with -h or --help options:

./count-domains.py -h

usage: count-domains.py [-h] [-mx] [file [file ...]]

List the distinct domains (and their frequency) from file(s) of email addresses

positional arguments:

file input filename. If omitted, will read from stdin

optional arguments:

-h, --help show this help message and exit

-mx show MX record lookup

On a Mac, you can open the output file directly in Excel, from the command line:

open intelliseed_count.csv

What if you don’t have Excel or Google Sheets to display your .CSV file output? No problem! Using the free, excellent [csvkit](https://csvkit.readthedocs.io/en/0.9.1/index.html) tools, we can make the output easy to read directly on the terminal, and even sort by count to show the most frequent domains at the top of the list:

./count-domains.py intelliseed_list.txt | csvsort -c 2 -r | csvlook

| domain | count |
| ------------------------------- | ----- |
| gmail.com | 126 |
| aol.com | 35 |
| outlook.com | 35 |
| yahoo.com | 33 |
| seznam.cz | 14 |
| interia.pl | 12 |
| 163.com | 12 |
| web.de | 7 |
| onet.pl | 7 |
| mail.competamail.com | 5 |
| laposte.net | 5 |
| mail.xcorp5.com | 5 |
| mail.com | 4 |
| mail.ru | 4 |
| mail.reduxprime.com | 4 |
| freenet.de | 4 |
| Freemail.hu | 4 |
| comcast.net | 4 |
| mail.mordiprime.com | 3 |
| brighthouse.com | 3 |
| 21cn.com | 3 |
| zohomail.com | 3 |
| daum.net | 3 |
| gmx.ch | 3 |
| gmx.de | 3 |
| tiscali.it | 3 |
| libero.it | 3 |
| sina.cn | 3 |
| wp.pl | 3 |
| rackspace.sparkpostseed.com | 3 |
| windstream.net | 2 |
| mail.primemordius.com | 2 |
| att.net | 2 |
| shaw.ca | 1 |
| yandex.ru | 1 |
| Mail.com | 1 |
| mail.primusnumberus.com | 1 |
| evun-campaigns.emailanalyst.com | 1 |

This shows the mailbox coverage, and also that there’s a good number of Gmail seeds in the list. You can also see the trigger address at the end.

OK, you may say, you could do this with some Excel formulas instead of code! Maybe. The next bit is where using Python scripting really pays off.

### Looking up the MX records (and why it’s interesting)

What are those unusual domains like primordius.com, you ask? You could investigate them manually with tools such as dig, but there’s an easier way. Just add the -mx option to your command-line, and the Python script does a DNS MX (mail exchange) record lookup for each domain, and shows you the results.

You can see where incoming mail to those addresses will be routed. This reveals several domains in the Intelliseed list served by Google mail - i.e. by business “G Suite”.

This is useful to many Inbox Tracker users, because an increasing number of businesses choose to use hosted email services for their corporate mail. If you’re sending email to this type of domain, these seeds help your inboxing results be more representative of your actual customer base.

### Combining Intelliseeds and Traditional seeds

[This article](/analyst/inbox-and-design-tracker/intelliseed-sending-guide) explains how you should deploy these two different kinds of seed lists. Let’s just get a quick sense of the different domains covered in the traditional list, and in total. We can show the domains just in the traditional seed list:

./count-domains.py -mx seedlist.txt | csvsort -c 2 -r | csvlook

If you have seeds in multiple files, no problem! We can count the distinct domains across all those files. Let’s look at the combined intelliseed plus traditional seed coverage:

./count-domains.py -mx intelliseed_list.txt seedlist.txt | csvsort -c 2 -r | csvlook

The tool will read multiple input files from the command-line - as many as you wish. So if you’ve split up your seed lists into sub-files for segmentation purposes, you can still count all the addresses and check you’ve got everything covered.

### Some neat tricks - piping

We’ve already used pipes with csvkit to format the output. Another neat trick is that the tool can read from its standard input. In other words it can act as a [filter](https://en.wikipedia.org/wiki/Filter_(software)):

cat intelliseed_list.txt| ./count-domains.py

That means if we forget to add any arguments, it will have to just sit there dumbly waiting for input, rather than printing usage tips (that’s why the -h option is needed for usage).

It would be nice to let the user know. Fortunately Python provides a nice way to do this - we can test if our incoming stream is [from a terminal](https://github.com/tuck1s/sparkySeedTools/blob/b1211a790c0fe8526105a97dbb5dd07f0ce9f1f3/count-domains.py#L45) and provide a comfort message.

./count-domains.py

(Awaiting input from stdin)

### Internals

The script uses the [argparse library](https://docs.python.org/3/library/argparse.html) to early take care of the command-line arguments, and [csv.reader](https://docs.python.org/3/library/csv.html?highlight=csv) to parse the input. Domains are counted and displayed using [this class](https://github.com/tuck1s/sparkySeedTools/blob/b1211a790c0fe8526105a97dbb5dd07f0ce9f1f3/count-domains.py#L11), which takes care of whether a domain’s already been seen in the input as we read it. [Dnspython](https://dnspython.readthedocs.io/en/stable/) is used to read the MX records.

The repo has a basic Travis CI plugin that does a basic test of the code across recent Python 3.x versions, each time a code change is checked in.

### Summary

We’ve seen how the Intelliseed list covers a wider range of mailbox providers than before, and how it’s easy to examine and work with these lists using a simple Python script, available freely from [this Github repo](https://github.com/tuck1s/sparkySeedTools).

What more do you want to do with seed lists? Would it be useful to have tools to segment the lists into parts, for example?

Let us know if you find this useful - we love feedback! Contact us on Github, or on Twitter @sparkpost.

Happy Sending,

Steve Tuck

