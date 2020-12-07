<p align="center">
    <img src="https://i.imgur.com/iu7VdZ7.png" />
</p>

[![npm version](https://badge.fury.io/js/vue-yandex-metrika-ts.svg)](https://badge.fury.io/js/vue-yandex-metrika-ts)
[![npm downloads](https://img.shields.io/npm/dw/vue-yandex-metrika-ts)](https://badge.fury.io/js/vue-yandex-metrika-ts)
[![NPM license](https://img.shields.io/npm/l/vue-yandex-metrika-ts)](https://github.com/s00d/vue-yandex-metrika-ts/blob/master/LICENSE)
[![npm type definitions](https://img.shields.io/npm/types/vue-yandex-metrika-ts)](https://github.com/s00d/vue-yandex-metrika-ts)
[![Build Status](https://travis-ci.org/s00d/vue-yandex-metrika-ts.svg?branch=master)](https://travis-ci.org/s00d/vue-yandex-metrika-ts)
[![donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.me/s00d)
[![GitHub Repo stars](https://img.shields.io/github/stars/s00d/vue-yandex-metrika-ts?style=social)](https://github.com/s00d/vue-yandex-metrika-ts)


# Vue Yandex Metrika with TypeScrypt

**vue-yandex-metrika-ts** allows you to send data about visited pages to [Yandex Metrika].

## Installation

Install with [yarn]:

```bash
$ yarn add vue-yandex-metrika-ts
```

Install with [npm]:

```bash
$ npm install vue-yandex-metrika-ts --save
```


## Ways to use

### <a name="autotracking">Autotracking</a>

Pass the` VueRouter` instance to the plugin and let it handle everything for you ([Metrika API] is also available):
```javascript
// your main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueYandexMetrika from 'vue-yandex-metrika-ts'                               

const router = new VueRouter({...}) // your routes

Vue.use(VueYandexMetrika, {
    id: XXXXXXXX,
    router: router,
    env: process.env.NODE_ENV
    // other options
})
```


### <a name="manual">Manual tracking</a>

Works without router: [Metrika API]
```javascript
// your main.js
import Vue from 'vue'
import VueYandexMetrika from 'vue-yandex-metrika-ts'                               

Vue.use(VueYandexMetrika, {
    id: XXXXXXXX,
    env: process.env.NODE_ENV
    // other options
})
```
___

```javascript
// your code
this.$metrika.hit(path)
```

#### Options:

| Name           | Description                                                                                             | Required | Default                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------- |
| id             | Your tracking `id`                                                                                      | True     | null                                                       |
| router         | [Autotracking](#autotracking) if the `router` is passed, otherwise: [manual tracking](#manual-tracking) | False    | null                                                       |
| env            | API calls are performed only if `env` is "production"                                                   | False    | development                                                |
| scriptSrc      | Src of metrika script to use                                                                            | False    | https://mc.yandex.ru/metrika/tag.js                        |
| debug          | If `env` is not "production" and `debug` is true: API calls are replaced by `console.log()`             | False    | false                                                      |
| ignoreRoutes   | List of ignored routes names                                                                            | False    | []                                                         |
| skipSamePath   | Do not track a page visit if previous and next routes URLs match                                        | False    | true                                                       |
| options        | Original Yandex Metrika [options](https://yandex.ru/support/metrika/code/counter-initialize.html)       | False    | {clickmap:true, trackLinks:true, accurateTrackBounce:true} |

[Yandex Metrika]: https://metrika.yandex.ru
[yarn]: https://yarnpkg.com
[npm]: https://npmjs.com
[Metrika API]: https://yandex.ru/support/metrika/objects/method-reference.html

*   Big thanks to [`vue-yandex-metrika`](https://github.com/vchaptsev/vue-yandex-metrika) to learn how to write the plugin.
