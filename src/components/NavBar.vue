<template>
  <div>
    <v-app-bar app flat>
      <v-img
        max-width="128"
        src="https://hellopolygon.com/img/logo.abde79e7.svg"
      ></v-img>
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-share-variant-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title> Twitter </v-list-item-title>
            <v-icon>mdi-twitter</v-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-title> Reddit </v-list-item-title>
            <v-icon>mdi-reddit</v-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-title> Blog </v-list-item-title>
            <v-icon>mdi-message-bulleted</v-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-title> Newsletter </v-list-item-title>
            <v-icon>mdi-email-newsletter</v-icon>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary clipped right app>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>
