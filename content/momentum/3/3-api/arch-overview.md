---
lastUpdated: "07/14/2021"
title: "General Architecture Overview"
description: "Momentum's memory management model is one of a monolithic address space with multiple threads of execution accessing it Said another way all threads of execution within Momentum have access to all memory in the system in a literal sense Consequently third party code can corrupt the system or otherwise cause..."
---

### <a name="arch.memory.thread"></a> Memory and Thread Management

Momentum's memory management model is one of a monolithic address space with multiple threads of execution accessing it. Said another way, all threads of execution within Momentum have access to all memory in the system in a literal sense. Consequently, third party code can corrupt the system or otherwise cause problems so care must be taken when developing extensions.

Momentum also maintains its own memory management interface with type counters both for built-in types as well as types available to external modules. These counters provide some sanity checking but their best use is in monitoring memory use and detecting memory leaks. Another benefit of using the Momentum memory management interface is that it provides access to the third party allocators Momentum uses. `jemalloc` has demonstrated excellent performance and stability and is in the process of becoming the default allocator.

Threads within Momentum are designed to be long-lived; either for the entire life of the server, or, in the case of thread pools that are online tunable in size, for a single configuration generation. Thread Pools are where blocking tasks should be performed. Momentum provides APIs for creating and maintaining appropriate thread pool sizes (as configured within the system) such that, should you need to perform a blocking task, just push the job to the thread pool and await completion.

### <a name="arch.task.management"></a> Task Management

In Momentum, programmers are encouraged to scope all tasks to the relevant events or structures such as message, connection and so on. Momentum itself maintains its own long-running loops for the purpose of managing the server and its APIs are built around the notion of extended functionality being implemented in the context of the existing infrastructure and idioms. For example, when augmenting Momentum's routing information handling, the best results will be achieved by continuing to embrace Momentum's domain-container-centric model for message routing through the creation of synthetic domain-containers instead of working to implement per-message routing. Per-message routing is common in classical open source MTA products, but Momentum does things differently and, for such use cases, a different approach is necessary to achieve the best architecture.

Said another way, when implementing new functionality the best results will be achieved by embracing the Momentum way of doing things. If you find yourself needing to implement a great deal of additional infrastructure, create long-running self-contained loops for maintenance tasks, or otherwise subverting Momentum's built-in functionality for a task, a better approach may need to be envisioned. In such cases, please seek assistance from support, professional services or engineering.

### <a name="arch.network"></a> Network IO

Momentum leverages IO multiplexor APIs to manage its network connections for message reception and delivery as well as some other tasks such as DNS. An IO multiplexor is typically described in terms of a POSIX API, which includes two system calls: `select` and `poll`. Select is one of the oldest IO multiplexor APIs. It takes a bitmap which indicates which file descriptors it should watch for IO, and likewise returns the said bitmap. This is a fairly efficient interface, but it has a hard limitation of 1024 file descriptors. For a system such as Momentum, this is unacceptably limiting.

Poll has no such file descriptor limit. It may watch any number of file descriptors, but the problem is that its interface takes an array of data structures that must be built and maintained for each call. This isn't difficult when a few dozen or hundred file descriptors are being watched, but when you are watching tens of thousands of file descriptors, creating the structure to pass to poll and then parsing the structures that are returned creates unacceptable overhead.

Unfortunately, there is no portable operating system interface that does not suffer from these problems. However, every modern operating system that we support (Solaris and Linux) has its own interface that solves these problems. As Linux is the most common platform we will explore that interface, but the Solaris interface is semantically identical.

Linux exposes an interface called `epoll` (we don't know what exactly the 'e' stands for but can assume it's something like 'enhanced'). `epoll` consists of a series of Linux system calls:

*   `epoll_create` – Creates an epoll file descriptor called an epoll_set, to be used by subsequent epoll calls.

*   `epoll_ctl` – Used to add, modify and remove file descriptors from an epoll_set.

*   `epoll_wait` – Waits on a defined epoll_set, also taking an optional timeout argument. This is the semantic equivalent of a poll or select call, in that it is the only one that can block.

There is a huge benefit to simplicity here. Basically, all the application has to do when there are events that need watching, is use `epoll_ctl` to push changes to those events into the `epoll_set`. Furthermore, when `epoll_wait` is called, it just takes the `epoll_set` as the argument and hands back an array of file descriptors that need action. The application then need only walk that array to figure out what needs to be done.
