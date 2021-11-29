---
lastUpdated: "03/26/2020"
title: "Control Functions"
description: "Table of Contents cli conn Establish an ec console control connection ec control factory init Initialize the Control Listener subsystem ec control get command construct gets the command construct for the currently dispatched session ec control register command Register a command handler deprecated ec control register command 2 Register a..."
---


| Name                                                                                                                                    | Description                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [cli_conn](/momentum/3/3-api/apis-cli-conn)                                                         | Establish an ec_console control connection                      |
| [ec_control_factory_init](/momentum/3/3-api/apis-ec-control-factory-init)                           | Initialize the Control_Listener subsystem                       |
| [ec_control_get_command_construct](/momentum/3/3-api/apis-ec-control-get-command-construct)         | gets the command_construct for the currently dispatched session |
| [ec_control_register_command](/momentum/3/3-api/apis-ec-control-register-command)                   | Register a command handler (deprecated)                         |
| [ec_control_register_command2](/momentum/3/3-api/apis-ec-control-register-command-2)                 | Register a command handler with the system                      |
| [ec_control_register_command3](/momentum/3/3-api/apis-ec-control-register-command-3)                 | Register a command handler with the system                      |
| [ec_control_register_command_allsched](/momentum/3/3-api/apis-ec-control-register-command-allsched) | Register a command handler (deprecated)                         |
| [ec_control_register_type](/momentum/3/3-api/apis-ec-control-register-type)                         | Register a command handler (deprecated)                         |
| [ec_control_send_command](/momentum/3/3-api/apis-ec-control-send-command)                           | Send a command over an ec_console control connection            |
| [ec_is_shutting_down](/momentum/3/3-api/apis-ec-is-shutting-down)                                   | Is the ecelerity process shutting down?                         |
| [ec_shutdown_ex](/momentum/3/3-api/apis-ec-shutdown-ex)                                             | Initiates a shutdown of the ecelerity process                   |
| [run_command](/momentum/3/3-api/apis-run-command)                                                   | deprecated, use run_command2                                    |
| [run_command2](/momentum/3/3-api/apis-run-command-2)                                                 | Execute the console command referenced by a command_construct   |
| [send_command](/momentum/3/3-api/apis-send-command)                                                 | Send a command over an ec_console control connection            |

These functions relate to the Momentum system console commands that are documented here: [System Console Commands Summary](/momentum/3/3-reference/console-commands-summary-table).