# Thai Citizen ID Validator

[![Build Status](https://travis-ci.org/jukbot/thai-citizen-id-validator.svg?branch=master)](https://travis-ci.org/jukbot/thai-citizen-id-validator)
[![javascript style guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/v/thai-id-validator.svg)](https://www.npmjs.com/package/thai-id-validator)

A simpler way to validate Thai Citizen Card ID. 🇹🇭

## Further Plans

* Go Language Implementation Example
* Thai Passport Number Validation

## Read the article

[Building Thai Citizen ID Input Validation with WCAG Standard](https://medium.com/@juk/%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3-%E0%B8%9B%E0%B8%8A%E0%B8%8A-%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99-wcag-13b2c8c9d015)

## Installation

``` bash
$ npm install thai-id-validator
# or
$ yarn add thai-id-validator
```

## Data Type

| Input        | Output
| ------------- |:-------------:|
| String        | boolean       |

## Usage

### Javascipt ES5

Just import script with commonjs

``` javascript
var validThaiID = require('thai-id-validator') // for ES5

var result = validThaiID(‘1101700207030’);
// return true
```

### Javascript ES6 Module

In Javascript file, you can use import, export modules

``` javascript
'use strict';
import validThaiID from 'thai-id-validator';

let result = validThaiID(‘1101700207030’);
// return true
```

## Test

To run all test cases run the following command

``` bash
npm run test
```

You can edit validator.test.js too add your custom test case.

| Test Cases    | Result
| ------------- |:-------------:|
| 1112034563562 | ✅ |
| 1101700230705 | ❌ |
| 110170023073  | ❌ |
| 11017002070d3 | ❌ |
| rytege54fsfsf | ❌ |
| 0             | ❌ |
| '-'           | ❌ |
| ''            | ❌ |
| null          | ❌ |
| 'blablabla'   | ❌ |

`(Tested with Jest)`

### Test Result Screenshot

 <img src="test-result.png" width="350"/>

## Compatibility

Supports all major browsers and IE11+

| [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/edge/edge.png" alt="IE / Edge" width="64px" height="64px"/>](http://caniuse.com/#feat=fetch)</br>IE / Edge | [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/firefox/firefox.png" alt="Firefox" width="64px" height="64px" />](http://caniuse.com/#feat=fetch)</br>Firefox | [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/chrome/chrome.png" alt="Chrome" width="64px" height="64px" />](http://caniuse.com/#feat=fetch)</br>Chrome | [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/safari/safari.png" alt="Safari" width="64px" height="64px" />](http://caniuse.com/#feat=fetch)</br>Safari | [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/opera/opera.png" alt="Opera" width="64px" height="64px" />](http://caniuse.com/#feat=fetch)</br>Opera |
| ---------: | ---------: | ---------: | ---------: | ---------:
| 11+ | 44+ | 45+ | 11+ | 32+

## Issues

If you found any 🐞 or feedback, please report the issue [here](https://github.com/jukbot/thai-citizen-id-validator/issues)

## Contribution

👩🏻‍💻 Contribute are always welcome.

## License

[Apache2.0](https://www.apache.org/licenses/LICENSE-2.0)

Code with love 🦉
