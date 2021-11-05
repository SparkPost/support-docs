---
lastUpdated: "03/26/2020"
title: "pipe_io – Pipe IO Wrapper"
description: "The pipe io module provides facilities for writing content via an arbitrary program Momentum uses an I O abstraction layer for writing logs With this module you can post process or transform logs pipe io should not be used for post processing the paniclog on Momentum nodes For this module..."
---

<a name="idp20792464"></a> 

The `pipe_io` module provides facilities for writing content via an arbitrary program. Momentum uses an I/O abstraction layer for writing logs. With this module, you can post-process or transform logs.

`pipe_io` should not be used for post-processing the paniclog on Momentum nodes.

### Note

For this module to work via the web UI, you must configure a site-specific include file for the web server such that it sets the `ECELERITY_MEMORY` environment variable to `NOREPLACE`. This is not something we recommend turning on unless necessary, because it disables the advanced memory manager.

### <a name="idp20798144"></a> Configuration

The configuration for `pipe_io` is in two parts: module-wide error logging, and options for a specific pipe.

**<a name="idp20800160"></a> 14.54.1.1. Module Options**

<dl class="variablelist">

<dt>error_file</dt>

<dd>

If the invoked program writes to `STDERR`, log it to this file. If this is not set, nothing will be logged.

</dd>

<dt>error_mode</dt>

<dd>

When creating `error_file`, use this file mode. Defaults to `0666`.

</dd>

<dt>output_file</dt>

<dd>

If the invoked program writes to `STDOUT`, log it to this file. If this is not set, nothing will be logged.

</dd>

<dt>output_mode</dt>

<dd>

When creating `output_file`, use this file mode. Defaults to `0666`.

</dd>

<dt>timeout</dt>

<dd>

When closing the pipe, `timeout` specifies how many seconds `pipe_io` should wait for the program to exit normally. If the program does not exit normally, `pipe_io` will terminate it.

</dd>

</dl>

**<a name="idp20814368"></a> 14.54.1.2. URI Parameters**

The URI specifies the path to the program that should be connected to the read end of the pipe. E.g.: `pipe:///usr/bin/myscript`. The URI parameters specify the environment and arguments for the program, and how to handle errors.

<dl class="variablelist">

<dt>argN</dt>

<dd>

The Nth command-line parameter.

</dd>

<dt>clear_env</dt>

<dd>

If `1`, remove all variables from the environment. This can be used with `envN` to specify a complete environment for your program. By default, the program will inherit the environment of the parent process.

</dd>

<dt>envN</dt>

<dd>

Insert a variable into the environment. The value is of the form `name=value`.

</dd>

<dt>shutdown_on_failure</dt>

<dd>

If `1`, shutdown if the program cannot be started, restarted, or exits unexpectedly. This is the default behavior One attempt will be made to restart the program (see `reinvoke`) -- the shutdown will occur if that fails.

If `0`, no shutdown will occur, but data will be lost silently.

</dd>

<dt>reinvoke</dt>

<dd>

If `1`, then one attempt will be made to restart the program if it exits unexpectedly. This is the default. Otherwise no attempt will be made to restart the program.

</dd>

</dl>

**<a name="idp20829408"></a> 14.54.1.3. Post-processing of Clustered Logs**

The following example shows the use of `pipe_io` in `eccluster.conf` for post-processing of logs on the cluster manager.

<a name="example.pipe_io.3"></a> 


```
pipe_io {
  output_file = "/var/log/eccluster/pipe_io_output.log"
  output_mode = 0664
  error_file = "/var/log/eccluster/pipe_io_error.log"
  error_mode = 0664
  timeout = 5
}

Logs {
  # arg1 = path, last component is the log name
  # arg2 = log name
  # arg3 = node name
  logfile = "pipe:///opt/msys/ecelerity/bin/myscript?arg1=/var/log/eccluster/%Y/%m/%d/%{l}&arg2=%{l}&arg3=%{n}"
  file_mode = "0640"
  dir_mode = "0755"

  # Reopen logs every ten minutes, if there's no activity.
  # The pipe reader is expected to manage its own file handles
  # intelligently, so there is less need for eccmgr to age them out.
  max_idle = "600"
}
```

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

### <a name="idp20838064"></a> Considerations for Pipe Readers

Pipe readers should not do intensive post-processing, or any processing that will introduce significant latency (e.g.: database access).

Pipe readers should cope with the write end of the pipe being closed. This will occur when logs are re-opened, or closed when the instance shuts down.

### <a name="modules.pipeio.environment.file"></a> Pipe IO Wrapper on Linux

To use `pipe_io` on Linux, you need to add the following to `/opt/msys/ecelerity/etc/environment`:

`export ECELERITY_MEMORY=NOREPLACE`
### <a name="idp20844320"></a> See Also

[“The `environment` File”](/momentum/3/3-reference/conf-ecelerity-conf#conf.environment.file)