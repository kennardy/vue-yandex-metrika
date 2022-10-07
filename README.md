<p align="center">
    <img src="https://i.imgur.com/iu7VdZ7.png" />
</p>

# Vue Yandex Metrika Plugin with TypeScript

**vue-yandex-metrika-ts** allows you to send data about visited pages to [Yandex Metrika].

## Installation

Install with [yarn]:

```bash
$ yarn add yandex-metrika-vue3
```

Install with [npm]:

```bash
$ npm install yandex-metrika-vue3 --save
```

## Ways to use

### <a name="autotracking">Autotracking</a>

Pass the` VueRouter` instance to the plugin and let it handle everything for you ([Metrika API] is also available):

```javascript
// your main.js
import VueYandexMetrika from 'yandex-metrika-vue3'

const router = new VueRouter({...}) // your routes

app.use(VueYandexMetrika, {
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
import VueYandexMetrika from "yandex-metrika-vue3";

app.use(VueYandexMetrika, {
  id: XXXXXXXX,
  env: process.env.NODE_ENV,
  // other options
});
```

---

```javascript
// your code
this.$metrika.hit(path);
```

#### Options:

| Name         | Description                                                                                             | Required | Default                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------- |
| id           | Your tracking `id`                                                                                      | True     | null                                                       |
| router       | [Autotracking](#autotracking) if the `router` is passed, otherwise: [manual tracking](#manual-tracking) | False    | null                                                       |
| env          | API calls are performed only if `env` is "production"                                                   | False    | development                                                |
| scriptSrc    | Src of metrika script to use                                                                            | False    | https://mc.yandex.ru/metrika/tag.js                        |
| debug        | If `env` is not "production" and `debug` is true: API calls are replaced by `console.log()`             | False    | false                                                      |
| ignoreRoutes | List of ignored routes names                                                                            | False    | []                                                         |
| skipSamePath | Do not track a page visit if previous and next routes URLs match                                        | False    | true                                                       |
| options      | Original Yandex Metrika [options](https://yandex.ru/support/metrika/code/counter-initialize.html)       | False    | {clickmap:true, trackLinks:true, accurateTrackBounce:true} |

[yandex metrika]: https://metrika.yandex.ru
[yarn]: https://yarnpkg.com
[npm]: https://npmjs.com
[metrika api]: https://yandex.ru/support/metrika/objects/method-reference.html
