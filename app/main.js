import Lies from './vendor/loader.js';
import Refs from './vendor/dom/refs.js';
import Router from './vendor/plugin/router.js';
import Transition from './vendor/plugin/transition.js';

self.Lies = Lies;
self.Refs = Refs;
self.Transition = Transition;
self.transition = new Transition({ el: document.body });
self.Router = Router;
self.router = new Router({
  afterRedirect () {
    transition.end();
  }
});