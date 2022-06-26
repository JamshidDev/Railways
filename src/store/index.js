import Vue from "vue";
import Vuex from "vuex";

import appModules from "./modules/appModules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    appModules,
  },
});
