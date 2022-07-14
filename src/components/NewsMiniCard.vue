<template>
  <v-container>
    <template v-if="recentlyNew.length > 0">
      <v-row v-for="(item, i) in recentlyNew" :key="i">
        <v-col cols="4">
          <v-img
            :lazy-src="getImg(item.picture)"
            max-height="autu"
            max-width="100%"
            :src="getImg(item.picture)"
          ></v-img>
        </v-col>
        <v-col cols="8" class="d-flex flex-column">
          <v-hover v-slot="{ hover }">
            <div
              class="recently_subtitle font-weight-medium link cursor_hover_pointer"
              @click="currentNews(item._id)"
              :class="hover && 'text-decoration-underline'"
            >
              {{ item.title }}
            </div>
          </v-hover>
          <v-btn text color="green" class="text-caption font-weight-medium">
            <v-icon color="green" class="mr-2">{{ dateIcon }}</v-icon>
            {{ item.created }}
          </v-btn>
        </v-col>
      </v-row>
    </template>

    <template v-else>
      <v-row v-for="item in 10" :key="item">
        <v-col cols="4" class="pr-0">
          <v-skeleton-loader height="100%" type="image"></v-skeleton-loader>
        </v-col>
        <v-col cols="8" class="pl-0">
          <v-skeleton-loader
            type="list-item-three-line,card-heading, card-heading"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import { mdiCalendarRange } from "@mdi/js";
export default {
  props: {
    recentlyNew: Array,
  },
  created() {
    console.log(this.recentlyNews);
  },
  data() {
    return {
      dateIcon: mdiCalendarRange,
    };
  },
  methods: {
    currentNews(id) {
      this.$emit("change_current_news", id)
    },
    getImg(picture) {
      return `https://calm-fjord-14028.herokuapp.com/news/picture/${picture}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.recently_subtitle {
  font-size: 16px;
  font-family: "Montserrat", sans-serif !important;
}
.p-none {
  padding: 0 !important;
}
</style>
