<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row>
      <v-col cols="12">
        <h1 class="py-16 text-center banner_title">Yangiliklar</h1>
      </v-col>
    </v-row>
    <v-row class="white pt-4 mb-4">
      <v-col cols="12" lg="8" xl="8" md="7">
        <news-banner :newsItem="currentNews"></news-banner>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        xl="4"
        md="5"
        class="grey lighten-3 mt-4 d-flex flex-column"
      >
        <div class="recently_title font-weight-bold pb-4 pl-4">
          So'ngi yalgiliklar
        </div>
        <news-mini-card
          :recentlyNew="recentlyNews"
          @change_current_news="changeCurrent"
        ></news-mini-card>
        <v-btn
          color="green"
          class="my-6 mx-auto"
          text
          width="auto"
          rounded
          elevation="2"
          @click="pushRouter()"
          >Barchasini ko'rish</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import newsService from "../services/service/newsService";
import NewsBanner from "@/components/NewsBanner.vue";
import NewsMiniCard from "@/components/NewsMiniCard.vue";
export default {
  components: {
    NewsBanner,
    NewsMiniCard,
  },
  data() {
    return {
      recentlyNews: [],
      currentNews: false,
    };
  },
  created() {
    this.getRecently();
    this.getCurrentlynews(this.$route.params.id);
  },
  watch: {},
  methods: {
    pushRouter() {
      this.$router.push("/allnews");
    },
    changeNews() {},
    getRecently() {
      newsService.getRecently().then((res) => {
        this.recentlyNews = res.data.data;
      });
    },
    getCurrentlynews(payload) {
      newsService.getOneNews(payload).then((res) => {
        console.log(res.data.data);
        this.currentNews = res.data.data;
        console.log(this.currentNews);
      });
    },
    changeCurrent(id) {
      console.log(id);
      this.getCurrentlynews(id);
      window.scrollTo(0, 0);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.recently_title {
  font-size: 20px;
  font-family: "Montserrat", sans-serif !important;
}
</style>
