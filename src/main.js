import Vue from 'vue'
import App from './App.vue'
import router from './router'

/** 
 * 
 *  Import Library bootstrap 4
 * 
 * */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

/** 
 * 
 *  Import Library Font Awesome
 * 
 * */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faUsers,
  faSearch,
  faIdCard,
  faPercent,
  faUserTie,
  faChartPie,
  faUserClock,
  faSignOutAlt,
  faUserFriends,
  faTachometerAlt
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBars);
library.add(faUsers);
library.add(faSearch);
library.add(faIdCard);
library.add(faPercent);
library.add(faUserTie);
library.add(faChartPie);
library.add(faUserClock);
library.add(faSignOutAlt);
library.add(faUserFriends);
library.add(faTachometerAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
