/****************************************
 *              IMPORTS                 *
 * **************************************/
//VUE-ROUTER
import { createRouter, createWebHistory } from 'vue-router';
//FICHIER DES ROUTES
import routes from '@/router/routes.js';

/***** CREATION DU ROUTER *****/
const router = createRouter({
  routes,
  history: createWebHistory(),
});

/***** MISE A DISPOSITION DU ROUTER *****/
export default router;