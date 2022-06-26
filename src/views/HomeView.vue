<template>
  <div class="position_relative">
    <v-container fluid style="padding: 0px">
      <the-navbar></the-navbar>
      <alert-top></alert-top>
      <router-view></router-view>
      <the-footer></the-footer>
    </v-container>
  </div>
</template>

<script>
import AlertTop from "../components/AlertTop.vue";
import TheNavbar from "../components/NavbarTop.vue";
import TheFooter from "../components/TheFooter";

export default {
  components: {
    TheNavbar,
    AlertTop,
    TheFooter,
  },
  data: () => ({
    user: "Salom",
  }),
};
</script>
<style scoped>
.position_relative {
  position: relative;
}
</style>
