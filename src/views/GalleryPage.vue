<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row>
      <v-col cols="12" class="pb-16">
        <h1 class="py-16 text-center banner_title">FOTOGALEREYA</h1>
      </v-col>
    </v-row>
    <v-row class="pb-16 px-1">
      <v-col
        lg="4"
        md="4"
        sm="6"
        cols="12"
        class="p-2"
        v-for="item in 21"
        :key="item"
      >
        <gallery-card :imgUrl="url" @gallery="controlGallery"></gallery-card>
      </v-col>
      <v-col cols="12">
        <v-dialog
          v-model="galleryPanel"
          max-width="100%"
          max-height="100%"
          class="z-index-position m-0"
        >
          Galeriya
          <v-divider></v-divider>
          <v-img max-width="100%" src="https://qarshimtu.uz/91107001653561.JPG">
          </v-img>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GalleryCard from "@/components/GalleryCard";
export default {
  components: {
    GalleryCard,
  },
  data() {
    return {
      galleryPanel: false,
      url: `https://qarshimtu.uz/91107001653561.JPG`,
    };
  },
  methods: {
    controlGallery() {},
  },
};
</script>

<style lang="scss" scoped>
.z-index-position {
  z-index: 999 !important;
}
</style>
