<template>
  <v-container fluid>
    <template v-if="newsItem">
    <v-row class="px-lg-10 px-xl-10">
      <v-col cols="12">
        <v-img
          :lazy-src="getImg(newsItem.picture)"
          max-height="autu"
          :aspect-ratio="16/9"
          max-width="100%"
          :src="getImg(newsItem.picture)"
        ></v-img>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-between">
        <v-btn text>
          <v-icon color="green" class="mr-2">{{ dateIcon }}</v-icon>
          {{ newsItem.created }}
        </v-btn>
        <v-btn text>
          <v-icon color="green" class="mr-2">{{ eyesIcon }}</v-icon>
          {{ newsItem.views }}
        </v-btn>
      </v-col>
      <v-col cols="12">
        <div class="news_title font-weight-bold p-2">
          {{ newsItem.title }}
        </div>
      </v-col>
      <v-col cols="12">
        <div class="news_subtitle p-2 mb-16 font-weight-medium line_height">
          {{ newsItem.text }}
        </div>
      </v-col>
    </v-row>
    </template>


    <!-- Loader -->
    <template v-else>
       <v-row>
      <v-col cols="12">
        <v-skeleton-loader
          class="px-4"
          type="image"
        ></v-skeleton-loader>
          <v-skeleton-loader
          class="px-4"
          type="image"
        ></v-skeleton-loader>
      </v-col>
      <v-col>
        <v-row justify="space-between">
          <v-col cols="3">
             <v-skeleton-loader
          class="px-4"
          type="button"
        ></v-skeleton-loader>
          </v-col>
           <v-col cols="3" class="d-flex justify-end">
             <v-skeleton-loader
          class="px-4"
          type="button"
        ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
         <v-skeleton-loader
          class="px-4"
          width="100%"
          type="heading"
        ></v-skeleton-loader>
      </v-col>
      <v-col cols="12">
         <v-skeleton-loader
          class="px-4"
          width="100%"
          type="text@6"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    </template>
    
   
  </v-container>
</template>

<script>
import { mdiCalendarRange, mdiEye } from "@mdi/js";
export default {
  props: ["newsItem"],
  data() {
    return {
      dateIcon: mdiCalendarRange,
      eyesIcon: mdiEye,
    };
  },
  methods:{
    getImg(picture){
      return `https://calm-fjord-14028.herokuapp.com/news/picture/${picture}`
    }
  }
};
</script>

<style lang="scss" scoped>
.news_subtitle {
  font-size: 16px;
  font-family: "Montserrat", sans-serif !important;
}
.news_title {
  font-size: 16px;
  font-family: "Montserrat", sans-serif !important;
}
.line_height{
  line-height: 2 !important;
}
</style>
