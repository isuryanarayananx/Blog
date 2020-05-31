import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

/* module imports */
import auth from "./modules/auth/index";

export default new Vuex.Store({
  modules: {
    auth, // auth module handles all the login,signup stuff
  },
  state: {
    tokens: {
      access: undefined,
    },
    /* decided to keep endpoints in one file as if changed
    it would be hard to locate where its used */
    endpoints: {
      /* base url for the backend server */
      BASE: "http://127.0.0.1:8000/",
      /* authentication endpoints */
      GET_TOKEN: "users/api/token/", // endpoint to get the token
      REF_TOKEN: "users/api/token/refresh/", // endpoint to refresh the active access token
      VAL_TOKEN: "users/api/token/validate/", // endpoint to validate the active access token
      /* authorization endpoints */
      GET_USER: "users/api/authorization/user/", //endpoint to get user details
    },
  },
  getters: {
    /* returns endpoint based on key */
    endpoints: (state) => {
      return (key) => {
        return state.endpoints[key];
      };
    },
  },
  mutations: {
    /* set token value and store it in local storage */
    SET_token: (state, token) => {
      state.tokens.access = token;
      localStorage.setItem("TOKEN", token);
    },
  },
  actions: {
    /* load action to run on site load */
    LOAD: ({ dispatch, commit }) => {
      let loadedToken = localStorage.getItem("TOKEN");
      let validation = dispatch("auth/VAL_token", loadedToken);
      /* sets the token variable to the loaded token if it's validated */
      validation.then((xhr) => {
        if (xhr.status == 200) {
          commit("SET_token", loadedToken);
        } else if (
          JSON.parse(xhr.response).detail == "Signature has expired." ||
          JSON.parse(xhr.response).detail == "Error decoding signature."
        ) {
          commit("SET_token", undefined);
        }
      });
    },
  },
});
