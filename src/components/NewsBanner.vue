<template>
  <v-container fluid>
    <v-row class="px-lg-10 px-xl-10">
      <v-col cols="12">
        <v-img
          :lazy-src="newsItem.picture"
          max-height="autu"
          max-width="100%"
          :src="newsItem.picture"
        ></v-img>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-between">
        <v-btn text>
          <v-icon color="green" class="mr-2">{{ dateIcon }}</v-icon>
          {{ newsItem.date }}
        </v-btn>
        <v-btn text>
          <v-icon color="green" class="mr-2">{{ eyesIcon }}</v-icon>
          {{ newsItem.view }}
        </v-btn>
      </v-col>
      <v-col cols="12">
        <div class="news_title font-weight-bold p-2">
          {{ newsItem.title }}
        </div>
      </v-col>
      <v-col cols="12">
        <div class="news_subtitle p-2 mb-16">
          {{ newsItem.text }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiCalendarRange, mdiEye } from "@mdi/js";
export default {
  props: {
    newsItem: Object,
  },
  data() {
    return {
      dateIcon: mdiCalendarRange,
      eyesIcon: mdiEye,
    };
  },
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
</style>
