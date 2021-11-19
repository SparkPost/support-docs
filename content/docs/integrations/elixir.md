---
lastUpdated: "02/08/2020"
title: "Using SparkPost with Elixir"
description: "This article assumes you are familiar with Elixir and the mix and iex CL Is We also assume that you have created an API key with the Send via SMTP permission This article will show you how to use Spark Post via SMTP with Elixir and the Mailman library mix..."
---

**This article assumes you are familiar with Elixir and the `mix` and `iex` CLIs. We also assume that you have [created an API key](https://www.sparkpost.com/docs/getting-started/create-api-keys/) with the "Send via SMTP" permission.**

This article will show you how to use SparkPost via SMTP with Elixir and the [Mailman](https://github.com/kamilc/mailman) library.

```
mix new myapp
cd myapp
```

Add the dependencies to your `mix.exs` file:

```elixir
defmodule MyApp.Mixfile do
  # ... omitted for brevity

  defp deps do
    [
      {:mailman, "~> 0.2.0"},
      {:eiconv, github: "zotonic/eiconv"}
    ]
  end
end
```

Install the dependencies:

```
mix deps.get
```

Next up, create an Elixir module that uses Mailman, an abstraction on top of Erlang's `gen_smtp` library. With Mailman you create a context and an email. Think of the context as the configuration you use to connect to SparkPost, and the email as the message you are going to send. You then invoke the `Mailman.deliver` method and pass it both the email and the context.

Create a new file called `mailer.ex` with the following contents and save it in `lib/myapp/mailer.ex`, replacing the values with your information:  

```elixir
defmodule MyApp.Mailer do
  @moduledoc """
  Sample module for sending email through SparkPost using Mailman.

  ## Examples

      iex> MyApp.Mailer.deliver
      {:ok, "FULLY FORMED RFC EMAIL WILL BE HERE"}

  """

  @doc """
  Sends a message using Mailman.
  """
  def deliver do
    email = %Mailman.Email{
      subject: "Using SparkPost with Elixir!",
      from: "elixir@sparkpostbox.com",
      to: [ "someone@example.com" ],
      text: "Sending using SparkPost, Elixir, and Mailman.",
      html: "

Sending using SparkPost, Elixir, and Mailman.

"
    }
    Mailman.deliver(email, config)
  end

  @doc """
  Sets up the Mailman context for use with Mailman.deliver.
  """
  def config do
    %Mailman.Context{
      config: %Mailman.SmtpConfig{
        relay: "smtp.sparkpostmail.com",
        username: "SMTP_Injection",
        password: "YOUR-API-KEY",
        port: 587,
        tls: :always,
        auth: :always,
        ssl: false
      },
      composer: %Mailman.EexComposeConfig{}
    }
  end
end
```

In your terminal, test out the `deliver` method using `iex`:

```
$ iex -S mix
iex(1)> MyApp.Mailer.deliver
{:ok, "FULLY FORMED RFC EMAIL WILL BE HERE"}
```

You are now ready to start sending email through SparkPost using Elixir. Modify the deliver method above as you'd like and call it from wherever you'd like in your application. The `Mailman.deliver` method returns either an error tuple or an ok tuple. Check out [Mailman's source code](https://github.com/kamilc/mailman/blob/master/lib/mailman/external_smtp_adapter.ex#L20) on github for more info.
