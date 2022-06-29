<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-img
          :lazy-src="picture"
          max-height="autu"
          max-width="100%"
          :src="picture"
        ></v-img>
      </v-col>
      <v-col cols="8" class="d-flex flex-column">
        <div class="recently_subtitle font-weight-medium link">
          {{ title }}
        </div>
        <v-btn text color="green" class="text-caption font-weight-medium">
          <v-icon color="green" class="mr-2">{{ dateIcon }}</v-icon>
          {{ date }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiCalendarRange } from "@mdi/js";
export default {
  props: {
    title: String,
    picture: String,
    date: String,
  },
  data() {
    return {
      dateIcon: mdiCalendarRange,
    };
  },
};
</script>

<style lang="scss" scoped>
.recently_subtitle {
  font-size: 16px;
  font-family: "Montserrat", sans-serif !important;
}
</style>
