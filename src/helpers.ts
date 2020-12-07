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
  const init = {
    id: config.id,
    ...config.options
  }
  const metrika = new window.Ya.Metrika2(init);
  if(!window.yaCounters) window.yaCounters = {}
  window.yaCounters[`${config.id}`] = metrika
  return v.prototype.$metrika = v.$metrika = metrika
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
