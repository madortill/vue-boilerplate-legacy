<script>
import helloWorld from './components/helloWorld.vue';
  
  export default {
    components: {
      helloWorld
    },
  }
</script>

<template>
    <h1>Vue legacy boilerplate</h1>
    <helloWorld></helloWorld>

</template>


<style scoped>
@font-face {
  font-family: "heebo";
  src: url('./assets/fonts/Heebo/heebo.regular.ttf');
}

.wrapper {
  background-color: #e2e1e1;
  font-family: 'heebo';
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  height: 100vh;
}

</style>
