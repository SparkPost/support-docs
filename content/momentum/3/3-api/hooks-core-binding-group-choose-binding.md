---
lastUpdated: "03/26/2020"
title: "binding_group_choose_binding"
description: "binding group choose binding int binding group choose binding closure msg binding group void closure ec message msg const char binding group int has core binding group choose binding hook void register core binding group choose binding hook first hook closure ec hook core binding group choose binding func t..."
---

<a name="hooks.core.binding_group_choose_binding"></a> 
## Name

binding_group_choose_binding

## Synopsis

`#include "hooks/core/binding_group_choose_binding.h"`

| `int **binding_group_choose_binding** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">binding_group</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`const char * <var class="pdparam">binding_group</var>`;

| `int **has_core_binding_group_choose_binding_hook** (` | `)`; |   |

| `void **register_core_binding_group_choose_binding_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_binding_group_choose_binding_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_binding_group_choose_binding_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_binding_group_choose_binding_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_binding_group_choose_binding_hook** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">binding_group</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`const char * <var class="pdparam">binding_group</var>`;<a name="idp36908704"></a> 
## Description

Called whenever the 'correct' binding needs to be selected from a group. The system default behavior is to choose this value randomly from the set of bindings, first preferring local bindings and then picking from among all of the bindings if that fails. Hooking this hookpoint can override that behavior, with the return value serving as the binding slot number that should be assigned to the message. The hook can elect to not perform the assignment by returning EC_BINDING_SLOT_UNBOUND from the hook function. In that case the system default behavior will take over. It must be noted that this hook is almost always called in a different thread from the scheduler thread, and as such all of the functions which hook this point must be thread safe. Any sort of 'round robin' or any other type of assignment that requires state must track that state in a thread safe manner. Furthermore, performance considerations must be accounted for, as if the assignment function blocks on a shared resource for too long that could result in serious performance degradation. Finally, one should be certain that the work being performed here could not be better performed in the set_binding phase of the validation system, since there one can set all binding assignments, as opposed to just group assignments.