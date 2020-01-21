/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";
//import Auth from "@/plugins/firebase/auth";
import Database from "@/plugins/firebase/database";
import axios from "axios";
import router from "@/router/index";
import Cookies from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      email: "",
      idToken: "",
      refreshToken: "",
      expiresIn: "",
      localId: "",
      name: ""
    }
  },
  mutations: {
    authorize: (state, payload) => {
      (state.user.idToken = payload.idToken),
        (state.user.email = payload.email),
        (state.user.localId = payload.localId),
        (state.user.refreshToken = payload.refreshToken),
        (state.user.expiresIn = payload.expiresIn);
    },
    storeUserMeta: (state, payload) => {
      state.user.name = payload.name
    }
  },
  actions: {
    login({ commit }, payload) {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwGuMFPd_NAiaDXZSNgW4ZfJkWUiqyun4`,
          {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          commit("authorize", {
            idToken: res.data.idToken,
            email: res.data.email,
            localId: res.data.localId,
            refreshToken: res.data.refreshToken,
            expiresIn: res.data.expiresIn
          });
          Cookies.set("token", res.data.refreshToken);
          localStorage.setItem('user', JSON.stringify(res.data))

          router.push("/");
        });
    },
    getUserMeta({ commit, state }, payload) {
      return (
        Database
          .collection('admins')
          .doc(state.user.localId)
          .get()
          .then( commit('storeUserMeta', payload.name) )
        )

    }
  },
  getters: {
    authenticated: state => {
      return !!state.user.refreshToken;
    }
  },
  modules: {}
});
