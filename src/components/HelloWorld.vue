<script setup lang="ts">
import NameTable from './NameTable.vue';
import FooterBanner from './FooterBanner.vue';
import SearchCard from './SearchCard.vue';

const searchHandler = (searchValue: string) => {
  console.log("Searching from HelloWorld:", searchValue);
};

</script>

<template>
  <search-card @search-click="searchHandler" />
  <name-table />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, consequatur? Facilis ratione illum et
    reprehenderit, cum fugiat atque necessitatibus aut, nulla excepturi eligendi odio eius porro id odit aliquam soluta!
  </p>
  <footer-banner />
</template>

<style scoped></style>
