# Introduction

MVDB is a movie database demo app.

# Getting Started

## Installation

It is suggested to use `yarn` instead of `npm` to install dependencies.
To start just run following command inside project directory:

```
yarn
```

or

```
npm install
```

This will install all required dependencies into `node_moduels`
directory.

# Development

All commands described here can be also run with `yarn`. To do so
replace `npm` with `yarn` keyword and omit `run`. Example:

```
npm run example
```

will become

```
yarn example
```

## Tests

To run tests use:

```
npm test
```

This will execute all suits inside tests directory.

## Babel

Project is written in ES 2015+. It will require transpilation before
can be run in every browser. To do so use:

```
npm run compile
```

This will transpile code into `dist` directory. You can also use watch
command to automatically repeat this process on any code change.
Just run watcher by typing:

```
npm run watch
```

## Serving

```
npm run serve
```

This will run node server serving `web` as static root content
with `dist` as `scripts` path.
Application will be available at `http://localhost:5000/`.
