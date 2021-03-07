<template>
  <div class="home">
    <v-img
      class="rounded-pill home-logo"
      contain
      max-height="300"
      max-width="354"
      src="polygon_logo.png"
    ></v-img>

  <div class="home-searchContainer">
     <v-text-field
      solo
      class="pa-4 pb-0" 
      label="Search"
      append-icon="mdi-magnify"
    ></v-text-field>
  </div>

  <div>
    <span class="pa-0 searchField-text">Discover your difference, harness your strengths.</span><br/>
    <span>Tele-assessments and support for learning differences.</span><br/>
    <v-btn
      depressed
      class="pa-6 ma-5"
      color="secondary"
    >
      Get Started
    </v-btn>
  </div>
  

  
  </div>
</template>

<script>
  export default {
    name: 'Home',
  }
</script>

<style>
.home {
  background-color: #F5F5F5;
  text-align: center;
}

.home-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.home-searchContainer{
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.searchField-text {
  font-size: 28px;
  font-weight: 800;
}
</style>
