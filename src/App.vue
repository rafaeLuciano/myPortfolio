<template>
  <Navbar />
  <router-view/>
</template>

<script lang="ts">
import Navbar from './components/Navbar.vue';

export default {
  components:{
    Navbar
  }
}
</script>

<style>
  
  @import url("https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Teko:wght@300..700&display=swap');

body {
    font-family: 'Anonymous Pro', monospace;
  }
  
h1, h2, h3 {
    font-family: 'Anonymous Pro', monospace;
  }
  
p {
    font-family: 'Anonymous Pro', monospace;
  }
</style>
