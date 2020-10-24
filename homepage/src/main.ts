import Vue from "vue";
import App from "./App.vue";
import "./../src/assets/styles/pure-min.css";
import "./../src/assets/styles/grids-responsive-min.css";
import i18n from "./i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

Vue.config.productionTip = false;
library.add(faGithub);
library.add(faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount("#app");
