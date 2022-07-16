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
        v-for="item in gallery"
        :key="item.picURL"
      >
        <gallery-card
          :imgUrl="item.picURL"
          @gallery="controlGallery"
        ></gallery-card>
      </v-col>
      <v-col cols="12">

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gallery_1 from "@/assets/gallery/gallery_1.jpg";
import gallery_2 from "../assets/gallery/gallery_2.jpg";
import gallery_3 from "../assets/gallery/gallery_3.jpg";
import gallery_4 from "../assets/gallery/gallery_4.jpg";
import gallery_5 from "../assets/gallery/gallery_5.jpg";
import gallery_6 from "../assets/gallery/gallery_6.jpg";
import gallery_7 from "../assets/gallery/gallery_7.jpg";
import gallery_8 from "../assets/gallery/gallery_8.jpg";
import gallery_9 from "../assets/gallery/gallery_9.jpg";
import gallery_10 from "../assets/gallery/gallery_10.jpeg";
import gallery_11 from "../assets/gallery/gallery_11.jpg";
import gallery_12 from "../assets/gallery/gallery_12.jpg";
import gallery_13 from "../assets/gallery/gallery_13.jpg";
import gallery_14 from "../assets/gallery/gallery_14.jpg";
import gallery_15 from "../assets/gallery/gallery_15.jpg";
import gallery_16 from "../assets/gallery/gallery_16.jpg";
import gallery_17 from "../assets/gallery/gallery_17.jpg";
import gallery_18 from "../assets/gallery/gallery_18.jpg";
import gallery_19 from "../assets/gallery/gallery_19.jpg";
import gallery_20 from "../assets/gallery/gallery_20.jpg";
import gallery_21 from "../assets/gallery/gallery_21.jpg";
import gallery_22 from "../assets/gallery/gallery_22.jpg";

import GalleryCard from "@/components/GalleryCard";
export default {
  components: {
    GalleryCard,
  },
  data() {
    return {
      gallery: [
        {
          picURL: gallery_1,
        },
        {
          picURL: gallery_2,
        },
        {
          picURL: gallery_3,
        },
        {
          picURL: gallery_4,
        },
        {
          picURL: gallery_5,
        },
        {
          picURL: gallery_6,
        },
        {
          picURL: gallery_7,
        },
        {
          picURL: gallery_8,
        },
        {
          picURL: gallery_9,
        },
        {
          picURL: gallery_10,
        },
        {
          picURL: gallery_11,
        },
        {
          picURL: gallery_12,
        },
        {
          picURL: gallery_13,
        },
        {
          picURL: gallery_14,
        },
        {
          picURL: gallery_15,
        },
        {
          picURL: gallery_16,
        },
        {
          picURL: gallery_17,
        },
        {
          picURL: gallery_18,
        },
        {
          picURL: gallery_19,
        },
        {
          picURL: gallery_20,
        },
        {
          picURL: gallery_21,
        },
        {
          picURL: gallery_22,
        },
      ],
    };
  },
  methods: {
    controlGallery() {},
     show() {
        this.$viewerApi({
          images: this.images,
        })
      },
  },
};
</script>

<style lang="scss" scoped>
.z-index-position {
  z-index: 999 !important;
}
</style>
