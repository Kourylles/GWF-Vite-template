/****************************************
 *              IMPORTS                 *
 * **************************************/
//VUE3
import { createApp } from 'vue';
//APPLICATION
import App from './App.vue';
//VUE-ROUTER
import router from '@/router';
//PINIA
import { createPinia } from 'pinia';
//QUASAR
import { Quasar } from 'quasar';
//QUASAR-ICONS
import '@quasar/extras/material-icons/material-icons.css';
//QUASAR-CSS
import 'quasar/src/css/index.sass';

/****************************************
 *              CREATION                *
 *                DE                    *
 *          L'APPLICATION               *
 * **************************************/
const app = createApp(App);

/****************************************
 *              MONTAGE                *
 *                DE                    *
 *          L'APPLICATION               *
 * **************************************/
app
  .use(router)
  .use(createPinia())
  .use(Quasar)
  .mount('#app');
