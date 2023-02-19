import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueYouTubeEmbed from "vue-youtube-embed";
import Clipboard from "v-clipboard";
import Notifications from "vue-notification";

Vue.use(VueYouTubeEmbed);
Vue.use(Clipboard);
Vue.use(Notifications);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
