<template>
  <v-card class="mx-auto" color="white lighten-4" width="100%" elevation="1">
    <v-hover v-slot="{ hover }">
      <v-img :aspect-ratio="16 / 9" :src="getImg(pics)" :lazy-src="pics">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal white--text cursor_hover_pointer"
            style="height: 100%"
            @click="pushToNewsPage(id)"

          >
            Batafsil
          </div>
        </v-expand-transition>
      </v-img>
    </v-hover>
    <v-card-text class="pt-6" style="position: relative">
      <v-btn absolute color="green" class="white--text" fab large right top>
        <v-icon>mdi-image-filter-center-focus-weak</v-icon>
      </v-btn>
      <v-hover v-slot="{ hover }">
        <div
          @click="pushToNewsPage(id)"
          class="font-weight-medium font-montserrat mb-2 pt-2 cursor_hover_pointer"
          :class="hover && 'text-decoration-underline'"
        >
          {{ title }}
        </div>
      </v-hover>
      <v-col cols="12" class="d-flex justify-space-between mt-6">
        <v-btn text width="auto">
          <v-icon color="green" class="mr-2">mdi-calendar-range</v-icon>
          {{ date }}
        </v-btn>
        <v-btn text width="auto">
          <v-icon color="green" class="mr-2">mdi-eye</v-icon>
          {{ view }}
        </v-btn>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    id: Number,
    pics: String,
    title: String,
    text: String,
    view: String,
    date: String,
  },
  methods: {
    pushToNewsPage(id) {
      this.$router.push(`/news/${id}`);
    },
    getImg(picture){
      return `https://calm-fjord-14028.herokuapp.com/news/picture/${picture}`
    }
  },
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
