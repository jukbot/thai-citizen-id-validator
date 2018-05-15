# Thai National ID Validator

[![Build Status](https://travis-ci.org/jukbot/thai-national-id-validator.svg?branch=master)](https://travis-ci.org/jukbot/thai-national-id-validator)
[![npm version](https://badge.fury.io/js/thai-id-validator.svg)](https://www.npmjs.com/package/thai-id-validator)
[![javascript style guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A simpler way to validate Thai Citizen Card ID.

## Further Plans
* Go Language Implementation
* C# Language Implementation
* Java/Scala Language Implementation


# Read the article
[Build Thai National ID Input Validation with WCAG Standard](https://medium.com/@juk/%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3-%E0%B8%9B%E0%B8%8A%E0%B8%8A-%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99-wcag-13b2c8c9d015)


## Installation

```bash
$ npm install thai-id-validator
# or
$ yarn add thai-id-validator
```

## Data Type
| Input        | Output           
| ------------- |:-------------:| 
| String        | boolean | 


## Usage

For general, Import script to html

```html
<script src="../validator.min.js"></script>
```

```javascript
<script>
var result = validThaiCitizenID(‘110170020723’);
</script>
```

For ES Module, In Javascript file

```javascript
'use strict';
import * as validate from 'thai-id-validator';

let result = validate.ThaiCitizenID(‘110170020723’);
// return true 
```

## Test Cases

To run test cases run the following command
```bash
$ npm run test
```

| Cases         | Result
| ------------- |:-------------:| 
| 1101700207050 | ✅ | 
| 110170020705  | ❌ | 
| 11017002070d3 | ❌ | 
| rytege54fsfsf | ❌ | 
| 0             | ❌ | 
| ''            | ❌ | 
| null          | ❌ | 
| 'blablabla'   | ❌ | 

## Compatibility

Supports all major browsers and IE11+ 

| [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/edge/edge.png" alt="IE / Edge" width="64px" height="64px" />](http://caniuse.com/#feat=fetch)</br>IE / Edge | [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/firefox/firefox.png" alt="Firefox" width="64px" height="64px" />](http://caniuse.com/#feat=fetch)</br>Firefox | [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/chrome/chrome.png" alt="Chrome" width="64px" height="64px" />](http://caniuse.com/#feat=fetch)</br>Chrome | [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/safari/safari.png" alt="Safari" width="64px" height="64px" />](http://caniuse.com/#feat=fetch)</br>Safari | [<img src="https://cdn.rawgit.com/alrra/browser-logos/f50d4cc8/src/opera/opera.png" alt="Opera" width="64px" height="64px" />](http://caniuse.com/#feat=fetch)</br>Opera | 
| ---------: | ---------: | ---------: | ---------: | ---------:
| 11+ | 44+ | 45+ | 11+ | 32+


## Contribution

Contribute are always welcome. If you found any bugs please report the issue here https://github.com/jukbot/thai-national-id-validator/issues.

Thank you 
