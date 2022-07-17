/************* VITE **************/
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
/************* QUASAR **************/
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

//Variable pour définir les alias
const chemin = require("path");

export default defineConfig({
  // Définir le chemin public de l'application
  //base: '/tbm2/',
  //Définition des alias
  resolve: {
    alias: {
      "@": chemin.resolve(__dirname, "./src"),
    },
  },
  //Déclaration des plugins utilisés
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    //Localisation du fichier des variables Sass pour Quasar
    quasar({
      sassVariables: "src/css/quasar-variables.sass",
    }),
  ],
});
