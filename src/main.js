import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Import firebase libraries
import vuetify from "./plugins/vuetify";
// Import Firebase libraries
import "./plugins/firebase.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
