<template>
  <v-container fluid style="padding: 0px" class="banner_title">
   <v-container fluid>
     <v-row class=" mb-16">
      <v-col cols="12">
        <the-carousel></the-carousel>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="6" sm="6"  v-for="thing in items" :key="thing.title" class="p-4">
        <home-card :Structures="thing"></home-card>
      </v-col>
     </v-row>
   </v-container>
    <the-news class="pb-16 mb-16"></the-news>
    <the-slide></the-slide>
    <the-links></the-links>
    <the-banner></the-banner>
  </v-container>
</template>

<script>
import HomeCard  from "../components/HomeCard.vue"
import TheCarousel from "@/components/TheCarousel.vue";
import TheNews from "../components/TheNews.vue";
import TheSlide from "@/components/TheSlide.vue";
import TheLinks from "@/components/TheLinks.vue";
import TheBanner from "@/components/TheBanner.vue";
export default {
  components: { TheCarousel, TheNews, TheLinks, TheBanner, TheSlide, HomeCard },
  data(){
    return{
      items:[
        {
          title:`Raxbar kadrlar bo'limi `,
          icon:"mdi-shield-account",
          id:3,
        },
         {
          title:`Ishchi kadrlar bo'limi`,
          icon:"mdi-chart-pie",
          id:0,
        },
         {
          title:`Kadrlar tayorlash va o'quv yurtlari bo'limi `,
          icon:"mdi-school",
          id:2,
        },
         {
          title:`Mukofatlash va unvon berish bo'limi`,
          icon:"mdi-finance",
          id:1,
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped></style>
