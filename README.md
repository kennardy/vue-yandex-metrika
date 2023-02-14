
# Vue Yandex Metrika Plugin with TypeScript
**yandex-metrika-vue3** allows you to send data about visited pages to [Yandex Metrika].
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
Pass the `VueRouter` instance to the plugin and let it handle everything for you ([Metrika API] is also available):
```javascript

// your main.js
import { createApp } from 'vue';
import { createRouter } from "vue-router";
import { initYandexMetrika } from 'yandex-metrika-vue3';

const router = new VueRouter({...}) // your routes

const app = createApp(App)

app.use(initYandexMetrika, {
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

import { createApp } from 'vue';
import { initYandexMetrika } from 'yandex-metrika-vue3';

const app = createApp(App)

app.use(initYandexMetrika, {
    id: XXXXXXXX,
    env: process.env.NODE_ENV,
    // other options
});
```
---

Using in template

```html
<template>
    <button @click="$yandexMetrika.hit(path)"></button>
</template>
```

Using in script

```vue
<script setup>
import { useYandexMetrika } from 'yandex-metrika-vue3'

const yandexMetrika = useYandexMetrika()

const foo = () => {
    yandexMetrika.hit(path)
}
</script>
```

Options
```javascript
/* If you want to override the default options,
 * then add this to the initialization function in main.js
 */
 
// default options
options: {
    accurateTrackBounce: true,
    clickmap: true,
    defer: false,
    ecommerce: false,
    params: [],
    userParams: {},
    trackHash: false,
    trackLinks: true,
    type: 0,
    webvisor: false,
    triggerEvent: false
},
```

[yandex metrika]: https://metrika.yandex.ru

[yarn]: https://yarnpkg.com

[npm]: https://npmjs.com

[metrika api]: https://yandex.ru/support/metrika/objects/method-reference.html
