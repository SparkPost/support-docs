---
lastUpdated: "03/26/2020"
title: "scpt_objtype"
description: "This struct is defined as follows To use this struct include the file modules scriptlets ec scriptlet h Chapter 42 Scriptlet and Alerting Functions Section 68 31 ec hash table and Section 68 72 scpt thread..."
---

This struct is defined as follows:

```
struct scpt_obj_method {
  char *name;
  scpt_function func;
};
/** Defines a "class" of object
 *
 * @since 3.0
 */
struct _scpt_objtype {
  /** ABI safety; must be sizeof(scpt_objtype) */
  unsigned sizeof_scpt_objtype;
  /** the name of the type */
  char *type_name;
  /** action to perform when an object handle wrapper is created,
   * such as bumping a refcount on the underlying object.
   * This is passed through to a call to luaL_registerptrtype as
   * the pushfunc parameter */
  void (*on_create)(scpt_thread *L, void *ptr);
  /** action to perform when an object handle wrapper is garbage
   * collected by lua, such as decrementing a refcount.
   * This a scpt_function and is set directly as the __gc metatable
   * method on the associated metatable */
  int (*on_gc)(scpt_thread *L);
  /** points to an array of method structs, terminated by a method
   * struct with a NULL name.
   * If the first character of a name is the @ sign, then method is
   * assumed to be a getter, if the first character is the * sign,
   * then it is assumed to be a setter handler.
   */
  struct scpt_obj_method *methods;
  /** any getter/setter methods are referenced by this hash for
   * faster runtime resolution by the __index handler for the
   * object.  You must initialize this to NULL and allow the
   * runtime to populate it for you */
  ec_hash_table *properties;

  /** this field exists to force the size of scpt_objtype to change
   * with respect to earlier versions.  This will trigger the ABI
   * checking sanity check and cause older modules to panic on or
   * very close to startup */
  int _abi_trick;
};
```

To use this struct, include the file `modules/scriptlets/ec_scriptlet.h`.

### <a name="idp46402096"></a> See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*                         ](script "Chapter 42. Scriptlet (and Alerting) Functions") [“ec_hash_table”](/momentum/3/3-api/structs-ec-hash-table) and [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread)