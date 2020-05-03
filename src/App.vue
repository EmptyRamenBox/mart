<template>
  <v-app>
    <NavBar />

    <v-content class="background light-blue--text text--lighten-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    NavBar
  }
};
</script>
