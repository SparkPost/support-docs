---
lastUpdated: "03/26/2020"
title: "Introduction"
description: "Momentum is the core platform upon which all Message Systems products are built While its architecture has evolved over the years it maintains a series of premises that are very important to understand when extending it Scheduler A non blocking event time and IO multiplexor Momentum implements an abstraction layer..."
---

### <a name="arch.summary"></a> Overview

Momentum is the core platform upon which all Message Systems products are built. While its architecture has evolved over the years it maintains a series of premises that are very important to understand when extending it.

### <a name="arch.definitions"></a> Definitions

`Scheduler` – A non-blocking event (time and IO) multiplexor. Momentum implements an abstraction layer on top of various POSIX (select, poll) and OS-specific (Linux epoll, BSD kqueue, Solaris ports) multiplexors, such that Momentum consumers do not need to worry about underlying nuances among the various multiplexors. This is also commonly referred to as an event loop. Historically there has been only one scheduler in a given Momentum invocation, but that is scheduled to change in the near future.

`Master Scheduler` – The scheduler that runs on the first thread that is started when Momentum first starts up. Historically this has been the only scheduler running in the system, but that is due to change in the near future. There are still some tasks that only work on a single scheduler, and in that case they are defined as only being allowed or supported on the Master Scheduler.

`Thread` – All of our code is written using the POSIX thread model, and using the 'pthread' API and thread routines. In generic terms, a thread is a distinct stack that shares a heap with other threads.

`Thread-safe` – This has several definitions depending on one's background and perspective, so we will avoid defining a single version and will instead define several.

`Concurrent thread-safe` – If an object or action is concurrent thread-safe, that means that it is safe to access the object or perform the action from multiple threads without any additional synchronization.

`Concurrent read-only thread-safe` – If an object is concurrent read-only thread-safe, that means that it may be read from any thread at any time, but not modified. This is common for items such as generational configurations, which may have new versions created at any time but a given generation is immutable.

`Single thread-safe` – While this may seem like a contradiction, it is not. If an object or method is defined as single thread-safe, it means that it may only be performed on one thread at a time, but that it may be passed between threads and have any operation performed on it, as long as no more than one thread is performing an action on the object at a given time. This is a model that Momentum leverages heavily.

`Non-thread-safe` – Objects or methods in this category provide no thread safety and must never be accessed or manipulated in any thread other than the one in which they were created.

`Netlistener` – In Momentum, a listener refers to any network server. Momentum provides several native listeners (SMTP, ECSTREAM, Control, HTTP, SMPP, MM7, XMPP) which provide various network services. All netlisteners are managed by Momentum, and while they themselves are non-thread-safe, they provide the ability to asynchronously accept new connections and then push new single thread-safe events into the appropriate scheduler.

`Accept Construct` – Any inbound server connection into Momentum that is accepted by a netlistener is assigned to an accept construct. The specific netlistener (for example, SMTP, ECSTREAM etc.) attaches its own closure to the accept construct to keep track of its state. The accept construct is single thread-safe.

`EC Message` – All messages within Momentum are represented as EC message structures. The structures are allocated either by a netlistener on reception, or by the spool system when the message is pulled back in after a restart. The EC message is a refcounted structure and its thread safety varies depending on the stage in the message's life cycle and the operation being performed. This will be explored more later in this chapter.

`Domain Record` – In an SMTP world, a domain is thought of as the right hand side of an email address (right of the ‘`@`’ sign). This is the typical definition of a domain in Momentum as well, but it is possible and permissible to create arbitrary domain record structures and to assign messages to them. Therefore, in general terms a Domain Record is often thought of as a container for messages with a common routing policy. Domain record structures are non-thread-safe; they are only valid on the scheduler thread on which they were initially created. This applies to all information directly attached to domain records as well, including mail queues and MX/Host records, as appropriate.

`Thread Pool` – A non-blocking event multiplexor (scheduler) is a poor place to perform any sort of blocking activity either in terms of CPU-intensive tasks, or IO tasks that cannot be done in a non-blocking manner. For this reason, it is necessary to be able to offload certain tasks and Momentum provides a generic thread pool facility for this functionality.

`Closure` – Closure is a term that is most commonly associated with functions such as qsort (as an example). qsort is a generic sorting function, but it doesn't actually implement any sorting logic. So if you were to just pass a blob of data to qsort and make it sort, nothing would happen because it is not complete. The closure is a function that qsort in turn calls, which follows a specific interface that qsort defines. You need qsort, an array of data, and a closure function to have a complete sorting routine. Our definition of closure is similar. We have many APIs which do a certain thing—like running an event at a given time. But what exactly happens is essential for the event to actually 'do something'. In Momentum, the closure generally returns a void pointer to a function's data, and the 'callback' is the actual function that is called.