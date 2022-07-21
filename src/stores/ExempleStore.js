/****************************************
 *              IMPORTS                 *
 * **************************************/
//PINIA
import { defineStore } from 'pinia';
//DATA
import dataExemple from '@/data/ExempleData.json';

const useExempleStore = defineStore('ExempleStore', {
  //State
  state: () => {
    return {
      dataExemple,
    };
  },
});

export default useExempleStore;
