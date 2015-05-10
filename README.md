# JsonIt

Simplified JSONIC which is a JSON parser that isn't strict

<!-- [![build status](https://secure.travis-ci.org/yieme/jsonit.png)](http://travis-ci.org/yieme/jsonit) -->

## Installation

This module is installed via npm:

```sh
npm i jsonit --save
```

For Command Line Interface:

```sh
npm i jsonit -g
```

## Examples

```js
var jsonit = require('jsonit')
jsonit('ok')              // { "op": "ok" }
jsonit('ok', 'you')       // { "you": "ok" }
jsonit('say,hello:world') // { "op": "say", "hello": "world" }
```

## Change the default type of the inital assigned parameter

```js
jsonit('ok', 'OneTime', 'DefaultType') // { "OneTime": "ok" }
jsonit('ok')                           // { "DefaultType": "ok" }
jsonit('ok', null, 'NewType')          // { "NewType": "ok" }
```

## Command Line Interface Examples

```sh
jsonit --help
```

```
Simplified JSONIC which is a JSON parser that isn't strict - v0.1.0
Usage: jsonit JsonItString [type] [--pretty]
Examples:
jsonit ok
{ "op": "ok" }

jsonit hello say
{ "say": "hello" }

jsonit say,hello:world --pretty
{
  "op": "say",
  "hello": "world"
}
```


## Rights

Copyright (C) 2015 by Yieme, License: MIT
