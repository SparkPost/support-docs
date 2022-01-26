---
lastUpdated: '05/21/2020'
title: 'Article Title Here'
description: 'Description of the article here'
---

## Heading

Here is a list of examples for how to use headings

# <a name="h1"></a> h1

## <a name="h2"></a> h2

### <a name="h3"></a> h3

#### <a name="h4"></a> h4

##### <a name="h5"></a> h5

###### <a name="h6"></a> h6

To predict the ID for the heading use [this tool](https://codepen.io/avrahamgoldman/full/XRZxrz).

This is a block of text. You can do things like **bold** and _italic_.

### Lists

This is a bulleted list of stuff:

- Item one
- Second item
- Item number three
- A fourth item

This is an ordered list:

1. Item one
1. Second item
1. Item number three
1. A fourth item

### Quotes

> This is a block quote. Use these for quoting another source.
>
> They can span multiple lines.

## Links

You can link to external resources using this format: `[text here](link here)`. For example:

- [Duck, duck, GO! (quick check)](https://duckduckgo.com/)
- [SparkPost website](https://www.sparkpost.com)
- [SparkPost API docs](https://developers.sparkpost.com/api)
- [Relative to current directory Link](./relative-link-test)
- [Internal Link](/momentum/1st-level)

### Images

Here's an example of how an image should be written (put those in the `media` folder for the category in the root `public/content/` directory). For this example, the image path would be in `public/content/momentum/media/test/testing-image.png`. This is because next.js requires that images be contained in `public/`. Creating the link can contain `./` or just `media/`:

![Without ./](media/test/testing-image.png)

![With ./](./media/test/testing-image.png)

### Code

You can do inline `code like this`.

Or a nice little multi-line code block:

```
You can put anything in here. But if you want to do real code snippets with syntax highlighting, read on...
```

You can get syntax highlighting by specifying a language, like JSON:

```json
{
  "something": "value",
  "anotherThing": "anotherValue"
}
```

Or in this case, Python:

```python
def do_something():
    print("Hello there!")

if __name__ == "__main__":
    do_something()
```

## More about Markdown

Check out the official [Markdown syntax guide](https://daringfireball.net/projects/markdown/syntax) for more.
