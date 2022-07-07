<script setup lang="ts">
import { assert } from "@vue/compiler-core";
import { useCounter, } from "./stores/counter";

const counter = useCounter();

// Typescript says, that counter.nPlusX is a number,
// but in fact it is a function, as this assert shows
assert(typeof counter.nPlusX === 'function', 'counter.nPlusX is not a function'); // this does not throw
</script>

<template>
  <p>The counter is at {{ counter.n }}</p>
  <p>The counter + 5 is at {{ counter.nPlusX(5) }}</p>
  <button @click="counter.n++">Increment</button>
  <button @click="counter.n--">Decrement</button>
  <button @click="counter.n = 0">Reset</button>
</template>
