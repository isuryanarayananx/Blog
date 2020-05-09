import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

/* module imports */
import auth from "./modules/auth/index";
import config from "./modules/config/index";

export default new Vuex.Store({
  modules: {
    config, // config module directs state change to ui implimentation
    auth, // auth module handles all the login,signup stuff
  },
  state: {
    /* decided to keep endpoints in one file as if changed
    it would be hard to locate where its used */
    endpoints: {
      /* base url for the backend server */
      BASE: "http://127.0.0.1:8000/",
      /* authentication endpoints */
      GET_TOKEN: "users/api/token/",  // endpoint to get the token
      REF_TOKEN: "users/api/token/refresh/",  // endpoint to refresh the active access token
      VAL_TOKEN: "users/api/token/validate/"  // endpoint to validate the active access token
    }
  },
  getters: {},
  mutations: {},
  actions: {}
});
