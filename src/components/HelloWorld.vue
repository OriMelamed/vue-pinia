<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>Ori</h1>
  <h2>Test title</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, consequatur? Facilis ratione illum et
    reprehenderit, cum fugiat atque necessitatibus aut, nulla excepturi eligendi odio eius porro id odit aliquam soluta!
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
