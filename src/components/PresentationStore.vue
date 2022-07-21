<script setup>
  const props = defineProps({
  exempleStore : { type: Object, required: true}
});
</script>

<template>
  <div class="q-ma-xl">
    <q-markup-table separator="cell">
      <colgroup>
        <col style="width: 500px" />
        <col />
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
              <div class="text-h4 q-ml-md text-white">Données du Store</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="bg-grey-3 text-body1 text-left">
        <tr v-for="item in exempleStore.dataExemple" :key="item.nom">
          <td>{{ item.prenom }}</td>
          <td>{{ item.nom }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<style lang="scss" scoped></style>
