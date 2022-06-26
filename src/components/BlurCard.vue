<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <swiper
          :slides-per-view="breakpointSlide"
          :space-between="10"
          :loop="false"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :pagination="true"
          class="mx-lg-10"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        >
          <swiper-slide v-for="book in books" :key="book.id">
            <div class="slide_img_container mb-16">
              <img :src="getImageUrl()" class="img-fluid" blank="true" />
            </div>
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);
// Import Swiper styles
import "swiper/swiper-bundle.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      books: [
        {
          id: 1,
          title: "English Grammer",
          amount: 67,
        },
        {
          id: 2,
          title: "Red books",
          amount: 123,
        },
        {
          id: 3,
          title: "Grammer 1",
          amount: 34,
        },
        {
          id: 4,
          title: "Grammer 2",
          amount: 56,
        },
        {
          id: 5,
          title: "Grammer 3",
          amount: 23,
        },
        {
          id: 6,
          title: "Essential Grammer",
          amount: 456,
        },
        {
          id: 7,
          title: "English Grammer",
          amount: 67,
        },
        {
          id: 8,
          title: "English Grammer",
          amount: 67,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
