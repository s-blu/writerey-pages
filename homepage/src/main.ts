import Vue from "vue";
import App from "./App.vue";
import "./../src/assets/styles/pure-min.css";
import "./../src/assets/styles/grids-responsive-min.css";
import i18n from "./i18n";

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
