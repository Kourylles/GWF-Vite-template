<script setup>
/****************************************
 *              IMPORTS                 *
 * **************************************/
// PINIA
import useExempleStore from '@/stores/ExempleStore.js'
// Components
import PresentationTemplate from "@/components/PresentationTemplate.vue";
import PresentationStore from "@/components/PresentationStore.vue";

// Récupération du Store
const exempleStore = useExempleStore();

</script>

<template>
  <div>
    <PresentationTemplate />
    <PresentationStore :exempleStore = "exempleStore" />
  </div>
</template>
<style scoped></style>
