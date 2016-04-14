# JS Async Workflow

It's an internal teabreak topic in ShineTech Wuhan. It introduces several high level abstractions to better organize asynchronous workflow.

They're:

- Thunk
- Promise
- Generator
- Async Function

## Slides

See the Keynote file.

## Requirement

- A node.js version which support Promise and Generator natively (v5 is OK).
- `npm install` the dependencies.

## How to run the example

There're 5 examples. The name follows `example-<type>`. Just open and check them, they're very simple.

To run the example, just use `node example-<type>`.

Async Function example is different because it requires `babel-node` command line. To reduce some typing I write an NPM script in `package.json`. You can run `npm run ex-async`.
