import Vue from "vue";
import Vuex from "vuex";


// stores
import auth from "./stores/authStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  },
});
