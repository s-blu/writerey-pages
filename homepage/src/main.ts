import Vue from "vue";
import App from "./App.vue";
import "./../src/assets/styles/pure-min.css";
import "./../src/assets/styles/grids-responsive-min.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
