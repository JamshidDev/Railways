<template>
  <v-row class="fixed_bg">
    <v-col cols="12" class="d-flex">
      <h6 class="useful_title mt-4">Foydali havolar</h6>
    </v-col>
    <v-col cols="12" class="px-6">
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
          <div class="slide_card_container mb-16">
            <div class="card_title mb-4">{{ book.title }}</div>
            <div class="card_content mb-10">
              <div class="card_logo">
                <v-img :src="book.logo_url" alt="" class="rounded" />
              </div>
              <div class="card_link">
                <a :href="book.fullURL">{{ book.link }} </a>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </v-col>
  </v-row>
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
          title:
            "O'zbekiston Respublikasi Davlat Soliq qo`mitasi rasmiy veb-sayti",
          link: "www.gov.uz",
          fullURL: "https://gov.uz/",
          logo_url: "https://qarshimtu.uz/client/img/avatars/port3.jpg",
        },
        {
          id: 2,
          title:
            "O'zbekiston Respublikasi Oliy Majlisi Senati rasmiy veb-sayti",
          link: "www.senat.uz",
          fullURL: "https://senat.uz/",
          logo_url: "https://qarshimtu.uz/client/img/avatars/port1.png",
        },
        {
          id: 3,
          title: "O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti",
          link: "www.president.uz",
          fullURL: "https://www.president.uz/",
          logo_url: "https://qarshimtu.uz/client/img/avatars/port1.png",
        },
        {
          id: 4,
          title:
            "O'zbekiston Respublikasi  Davlat Soliq qo`mitasi rasmiy veb-sayti",
          link: "www.soliq.uz",
          fullURL: "https://soliq.uz/",
          logo_url: "https://qarshimtu.uz/client/img/avatars/port2.png",
        },
        {
          id: 5,
          title: `“O‘zbekiston Respublikasi Qonun hujjatlari  ma’lumotlari Milliy bazasi”`,
          link: "www.Lex.uz",
          fullURL: "https://lex.uz/",
          logo_url: "https://lex.uz/assets/img/lex_uz.svg",
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
          return 3;
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
.slide_card_container {
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 10px 20px;

  & > .card_title {
    width: 100%;
    padding: 10px 20px;
    color: #ffffff;
    font-size: 20px !important;
  }

  & > .card_content {
    display: flex;
    gap: 30px;
    align-items: center;

    & > .card_logo {
      width: 80px;
      height: 80px;
      border-radius: 100px;
      overflow: hidden;
      & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    & > .card_link > a {
      text-decoration: none;
      color: #ffffff;
      font-size: 18px;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #3f9f42;
      }
    }
  }
}

.useful_title {
  margin: 0px auto;
  font-size: 50px;
  font-weight: 900;
  filter: blur(0.6px);
  color: #ffffff;
  text-transform: uppercase;
}
@media only screen and (max-width: 600px) {
  .useful_title {
    font-size: 30px;
    font-weight: 700;
  }
}
.fixed_bg {
  height: 600px;
  background: url("https://www.railway.uz/local/templates/main_v2/img/files/news-bg.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);

    background: linear-gradient(
        325.56deg,
        #00a795 -22.1%,
        rgba(0, 167, 149, 0.96875) -0.69%,
        rgba(0, 167, 149, 0) 33.13%
      ),
      linear-gradient(
        160.3deg,
        #00a795 -16.93%,
        rgba(0, 167, 149, 0.96875) -7.7%,
        rgba(0, 167, 149, 0) 48.72%
      );
  }
}
</style>
