<script setup>
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();
</script>

<template>
  <div>
    <p>
      <button @click="flash('About', 'It Works On The About Page!', 'info')">Click Me</button>
    </p>
  </div>
</template>
