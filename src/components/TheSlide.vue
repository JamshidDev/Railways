<template>
  <v-container>
    <v-row class="mb-16">
      <v-col cols="12" class="mb-10">
        <h3 class="news_title">Fotogalereya</h3>
      </v-col>
      <v-col cols="12" class="d-flex justify-center mb-16">
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

  computed: {
    breakpointSlide() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1;
        case "sm":
          return 1;
        case "md":
          return 2;
        case "lg":
          return 2;
        case "xl":
          return 3;
        default:
          return 3;
      }
    },
  },

  methods: {
    getImageUrl() {
      return `https://qarshimtu.uz/23116590653561.JPG`;
    },
    onSwiper(swiper) {},
    onSlideChange() {},
    breakpoint() {},
  },
};
</script>

<style lang="scss" scoped>
.news_title {
  font-size: 24px;
  font-weight: 600;
  color: #41b983;
  text-transform: uppercase;
}
.slide_img_container {
  position: relative;
  width: 100%;
  min-width: 300px;
  height: 300px;
  overflow: hidden;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  z-index: 11;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    &::before {
      opacity: 1 !important;
      z-index: 10;
    }
  }
  &::before {
    content: " ";
    backdrop-filter: blur(4px);
    background: #1e222899;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s ease;
    transition-delay: 0.1ms;
  }
}

.img-fluid {
  max-width: 100%;
  width: 100% !important;
  height: auto;
  border-radius: 8px;
  position: absolute;
  top: 0px;
}
.w-100 {
  width: 100%;
}
.ml-auto,
.mx-auto {
  margin-left: auto;
}
.mr-auto,
.mx-auto {
  margin-right: auto;
}
.book-name {
  font-size: 16px;
  font-weight: 600;
}
.book-amount {
  font-size: 14px;
}
.book-description {
  font-size: 14px;
}
.all-link {
  font-size: 2px;
}
.category-title {
  font-weight: 700;
}
</style>
