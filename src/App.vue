<template>
  <v-app id="inspire">
    <NavBar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer
    color="#E0E0E0"
    padless
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
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