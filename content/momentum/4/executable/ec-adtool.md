---
lastUpdated: "03/26/2020"
title: "ec_adtool"
description: "ec adtool adjust adaptive parameters in a cluster configuration opt msys ecelerity bin ec adtool delete common options node opt msys ecelerity bin ec adtool move common options old node new node k keep o override Adaptive parameters are saved to Riak as blog data a JSON object ec adtool..."
---

<a name="executable.ec_adtool"></a> 
## Name

ec_adtool — adjust adaptive parameters in a cluster configuration

## Synopsis

`/opt/msys/ecelerity/bin/ec_adtool delete` [ common_options ] { *`node`* }

`/opt/msys/ecelerity/bin/ec_adtool move` [ common_options ] { *`old_node`* *`new_node`* } [ -k |--keep ] [ -o |--override ]

<a name="idp13021536"></a> 
## Description

Adaptive parameters are saved to Riak as blog data (a JSON object). **ec_adtool** provides the capability of manipulating those parameters and is most useful when you have upgraded from an earlier version of Momentum.

In earlier versions of Momentum, adaptive parameters are stored in a SQLite database and all adaptive data are considered local. If you have just migrated to a newer version of Momentum, you can use this tool to promote the existing parameters from local to global.

### Note

You only need use this tool when the adaptive module is loaded. For more information see [“adaptive – Adaptive Delivery”](/momentum/4/modules/4-adaptive).

The options common to all commands are listed below:

<dl class="variablelist">

<dt>-d | --debug</dt>

<dd>

Show debug data.

</dd>

<dt>-f | --from_url *`url`*</dt>

<dd>

Specify a Riak server URL where data is read from, for example, `http://127.0.0.1:8098`. If this option is not specified, the default is `http://127.0.0.1:8098`. A server URL must start with `http://`.

</dd>

<dt>-t | --to_url *`url`*</dt>

<dd>

Specify a Riak server URL where data is written to. The semantic of the option value is the same as that of the `from_url` option. If this option is not specified, it defaults to the `from_url` default.

</dd>

<dt>-v | --verbose</dt>

<dd>

Use this option for verbose output.

</dd>

</dl>

Various commands can be used with this executable.

<dl class="variablelist">

<dt>/opt/msys/ecelerity/bin/ec_adtool delete [ common_options ] { node }</dt>

<dd>

Delete the local parameters for a given node.

</dd>

<dt>/opt/msys/ecelerity/bin/ec_adtool move [ common_options ] [ global ]{ *`old_node`* *`new_node`* } [ -k |--keep ] [ -o |--override ]</dt>

<dd>

Move all the local parameters from one node to another. The node name is the one used in cluster configuration.

The `keep` option retains the source data when creating a copy. If you use the `override` option the source data is not preserved. The default is not to override.

Use this command with the `global` keyword to change the scope of the parameters for the specified binding/domain from local to global. For example: **`ec_adtool move mta1 global gold-binding`**                               .

### Note

Since `global` is a keyword, you cannot name nodes `global`.

</dd>

</dl>

<a name="executable.ec_adtool.examples"></a> 
### Examples

When one node is replaced by another, you may need to move the local parameters from the old node to the new node. Do this in the following way:

shell> ec_adtool –f http://127.0.0.1:8098 move *`node1`* *`node2`*

`–f http://127.0.0.1:8098` need not be specified since it is the default.

Delete local scope parameters in the following way:

shell> ec_adtool –f http://127.0.0.1:8098 delete *`node1`*

Change the adaptive scope from local to global for a specific binding in the following way:

shell> ec_adtool move *`node1`* global *`binding_name`*

In this example, the `-f` option is not specified so the default URL, `http://127.0.0.1:8098`, is used. Also, since only a binding was specified, only the binding age has been moved to the global scope. To move suspensions and options to a global scope, specify a binding/domain combination as in the following example:

`shell> ec_adtool move mta1 global gold-binding/mydomain.com`

Move parameters from a global to a local scope by reversing the positions of the node name and the keyword `global`.

<a name="idp12858944"></a> 
## See Also

[“adaptive – Adaptive Delivery”](/momentum/4/modules/4-adaptive), [*Riak*](/momentum/4/riak)