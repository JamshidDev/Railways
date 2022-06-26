<template>
  <v-container fluid style="padding: 0px">
    <the-carousel></the-carousel>
    <the-news></the-news>
    <the-slide></the-slide>
    <the-links></the-links>
    <the-banner></the-banner>
  </v-container>
</template>

<script>
import TheCarousel from "@/components/TheCarousel.vue";
import TheNews from "../components/TheNews.vue";
import TheSlide from "@/components/TheSlide.vue";
import TheLinks from "@/components/TheLinks.vue";
import TheBanner from "@/components/TheBanner.vue";
export default {
  components: { TheCarousel, TheNews, TheLinks, TheBanner, TheSlide },
};
</script>

<style lang="scss" scoped></style>
