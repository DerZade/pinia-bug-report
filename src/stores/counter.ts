import { ref, computed } from 'vue';
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounter = defineStore('counter', () => {
  const n = ref(0);

  const nPlusOne = computed(() => n.value + 1);
  const nPlusX = computed(() => (x: number) => n.value + x);

  return {
    n,
    nPlusOne,
    nPlusX
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta))
}
