import {Config, YaMetrika} from "./type";
const debug = process.env.NODE_ENV === "production"
import Vue from 'vue';
import {Route} from "vue-router/types/router";



export function loadScript (callback: () => void, scriptSrc = 'https://mc.yandex.ru/metrika/tag.js', err?: OnErrorEventHandler) {
  const head = document.head || document.getElementsByTagName('head')[0]
  const script = document.createElement('script')

  script.async = true
  script.charset = 'utf-8'
  script.src = scriptSrc

  head.appendChild(script)

  script.onload = callback
  if(err) script.onerror = err
}


export function createMetrika (v: typeof Vue, config: Config) {
  if (!debug) {
    // Creates Metrika
    const init = {
      id: config.id,
      ...config.options
    }
    const metrika = (new Ya).Metrika2(init)
    window.yaCounters[`${config.id}`] = metrika
    return v.prototype.$metrika = v.$metrika = metrika

  } else {

    // Mock metrika
    console.warn('[vue-yandex-metrika] Tracking is disabled, because env option is not "production"')
    if (config.debug) {console.warn('[vue-yandex-metrika] DEBUG is true: you\'ll see all API calls in the console')}

    return v.prototype.$metrika = v.$metrika = {
      Metrika2() { return new Ya },
      addFileExtension() {if (config.debug) {console.log('[vue-yandex-metrika] addFileExtension:', arguments)}},
      extLink() {if (config.debug) {console.log('[vue-yandex-metrika] extLink:', arguments)}},
      file() {if (config.debug) {console.log('[vue-yandex-metrika] file:', arguments)}},
      getClientID() {if (config.debug) {console.log('[vue-yandex-metrika] getClientID:', arguments)}},
      hit() {if (config.debug) {console.log('[vue-yandex-metrika] hit:', arguments)}},
      notBounce() {if (config.debug) {console.log('[vue-yandex-metrika] notBounce:', arguments)}},
      params() {if (config.debug) {console.log('[vue-yandex-metrika] params:', arguments)}},
      reachGoal() {if (config.debug) {console.log('[vue-yandex-metrika] reachGoal:', arguments)}},
      replacePhones() {if (config.debug) {console.log('[vue-yandex-metrika] replacePhones:', arguments)}},
      setUserID() {if (config.debug) {console.log('[vue-yandex-metrika] setUserID:', arguments)}},
      userParams() {if (config.debug) {console.log('[vue-yandex-metrika] userParams:', arguments)}}
    }
  }
}


export function startTracking (metrika: YaMetrika, config: Config) {
  // Starts autotracking if router is passed
  if (config.router) {
    config.router.afterEach(function (to: Route, from: Route) {
      // check if route is in ignoreRoutes
      if (config.ignoreRoutes && to.name && config.ignoreRoutes.indexOf(to.name) > -1) {return}
      // do not track page visit if previous and next routes URLs match
      if (config.skipSamePath && to.path == from.path) {return}
      // track page visit
      metrika.hit(to.path, {referer: from.path})
    })
  }
}
