---
lastUpdated: "03/26/2020"
title: "http_io – HTTP I/O Provider"
description: "The http io module provides facilities for reading content located in an URI with the schema http and https Momentum uses an I O abstraction layer for reading Sieve scripts and their includes With this module you specify remote web accessible locations for script files that will be fetched on..."
---

<a name="idp20074720"></a> 

The `http_io` module provides facilities for reading content located in an URI with the schema `http` and `https`. Momentum uses an I/O abstraction layer for reading Sieve++ scripts (and their includes). With this module, you specify remote web-accessible locations for script files that will be fetched on the fly.

### Note

This module is designed so that Sieve scripts can include web-accessible files on the fly. It *cannot* be used to include start-up configuration files.

### <a name="idp20079760"></a> Configuration

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.