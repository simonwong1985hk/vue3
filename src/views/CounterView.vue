<template>
  <div>
    <h1>{{ counter.count }}</h1>

    <button @click="counter.increment()">Increment</button>
  </div>
</template>

<script setup>
import { counter } from "@/stores/counterStore.js";
</script>
