import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { db } from "../plugins/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
  },
  getters: {
    getUser: (state) => state.user,
  },
  mutations: {
    settingUser: (state, user) => (state.user = user),
  },
  actions: {
    setUser: async ({ commit }, user) => {
      if (user) {
        const userObject = {
          displayName: user.displayName,
          email: user.email,
          roles: {
            user: true,
          },

          lastAccess: new Date(),
        };
        const userRef = db.collection("users").doc(user.uid);
        await userRef.set(userObject, { merge: true }); // if the database already has the account, merge new account info with existing info
        const userDB = await userRef.get();
        commit("settingUser", { uid: user.uid, ...userDB.data() });
      } else {
        commit("settingUser", "");
      }
    },
  },
  plugins: [createPersistedState()],
});
