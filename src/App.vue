<template>
  <v-app id="inspire">
    <NavBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  #app {
    background-color: #BDBDBD;
  }
</style>