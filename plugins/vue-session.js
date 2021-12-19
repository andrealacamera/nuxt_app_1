import Vue from 'vue';
// your imported custom plugin or in this scenario the 'vue-session' plugin
import VueSession from 'vue-session';

export default () => {
  Vue.use(VueSession);
}