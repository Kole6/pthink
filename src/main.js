import './assets/style/reset.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import global from './common/global/global'
Vue.prototype.$Global = global
//element-ui
import {
  Input,
  Option,
  Button,
  Popover,
  Tooltip,
  Card,
  Carousel,
  CarouselItem,
  Image,
  MessageBox,
  Message,
} from 'element-ui';

Vue.use(Input);
Vue.use(Option);
Vue.use(Button);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Image);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

import './assets/style/element.scss'
Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')