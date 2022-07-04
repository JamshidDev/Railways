<template>
  <v-app class="overflow-y-visible">
    <v-main>
      <router-view />
      <loader-view :loading="isLoading"></loader-view>
    </v-main>
  </v-app>
</template>

<script>
import LoaderView from "./components/AppLoader.vue";
import { mapActions } from "vuex";
export default {
  components: {
    LoaderView,
  },
  name: "App",
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    addEventListener("load", () => {
      this.isLoading = false;
    });
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.reportWindowSize);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.reportWindowSize);
  },
  updated() {
    addEventListener("load", () => {
      this.isLoading = false;
    });
  },
  methods: {
    ...mapActions([
      "set_appScrollX",
      "set_appScrollY",
      "set_screenWidth",
      "set_screenHeight",
    ]),
    handleScroll() {
      this.set_appScrollX(window.scrollX);
      this.set_appScrollY(window.scrollY);
    },
    reportWindowSize(event) {
      this.set_screenWidth(event.currentTarget.innerWidth);
      this.set_screenHeight(event.currentTarget.innerHeight);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");
* {
  font-family: "Montserrat", sans-serif !important;
}
.font-montserrat {
  font-family: "Montserrat", sans-serif !important;
}
.banner_bg {
  background: url("https://www.railway.uz/local/templates/main_v2/img/footer-bg.jpg");
}
.banner_title {
  width: 100%;
  font-size: 34px;
  font-weight: 700;
  color: #41b983;
  text-transform: uppercase;
  text-align: center;
  font-family: "Montserrat", sans-serif !important;
}
.cursor_hover_pointer:hover {
  cursor: pointer;
}
</style>
