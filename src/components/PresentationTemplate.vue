<script setup>

</script>

<template>
  <h3> GWF Vite Template </h3>
  <q-img
    src="@/assets/logo.png"
    width="150px"
    spinner-color="primary"
    spinner-size="82px"
  />
  <p>
    <h5>Vite + Vue3 + Vue-Router4 + Pinia + Quasar </h5>
  </p>
  <div class="flex row q-ma-md q-gutter-md justify-center">
    <a href="https://vitejs.dev/" target="_blank">
      <q-btn color="teal" text-color="white" label="Vite"/>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <q-btn color="teal" text-color="white" label="Vue 3"/>
    </a>
    <a href="https://router.vuejs.org/" target="_blank">
      <q-btn color="teal" text-color="white" label="Vue-Router 4"/>
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
      <q-btn color="teal" text-color="white" label="Pinia"/>
    </a>
    <a href="https://quasar.dev" target="_blank">
      <q-btn color="teal" text-color="white" label="Quasar"/>
    </a>

  </div>
  <p>
    <h5>Configuration recommandé pour l'IDE</h5>
  </p>
    <div class="flex row q-ma-md q-gutter-md justify-center">
    <a href="https://code.visualstudio.com/" target="_blank">
      <q-btn color="teal" text-color="white" label="VS Code" />
    </a>
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">
      <q-btn color="teal" text-color="white" label="Volar" />
    </a>
  </div>

  <div class="q-ma-xl">
    <q-markup-table separator="cell">
      <colgroup>
        <col style="width:500px">
        <col>
      </colgroup>
      <thead class="bg-teal">
        <tr>
          <th colspan="2">
          <div class="row no-wrap-items-center">
            <q-img
              src="@/assets/logo.png"
              spinner-color="white"
              style="width: 70px"
              class="rounded-borders"
            />        
            <div class="text-h4 q-ml-md text-white">Post Installation</div>
          </div>
          </th>
        </tr>
      </thead>
      <tbody class="bg-grey-3 text-body1 text-left">
        <tr>
          <td class="text-weight-bold">Titre de l'Application</td>
          <td>Modifier la balise <code><i>title</i></code> dans le fichier <code><i>index.html</i></code></td>
        </tr>
        <tr>
          <td class="text-weight-bold">Désactiver les liens Hyper-Text dans <i>Chrome</i> et <i>Edge</i></td>
          <td>Dans la balise <code><i>router-link</i></code> insérer le style : <code><i>style="display: inline-block;text-decoration:none;"</i></code></td>
        </tr>
        <tr>
          <td class="text-weight-bold"></td>
          <td></td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
          
</template>

<style lang="sass" scoped>
a 
  color: #42b983
.my-table
  height: 310px

.td-class
  text-left
  text-weight-bold



</style>
