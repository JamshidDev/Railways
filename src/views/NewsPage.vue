<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row>
      <v-col cols="12">
        <h1 class="py-16 text-center banner_title">Yangiliklar</h1>
      </v-col>
    </v-row>
    <v-row class="white pt-4 mb-4">
      <v-col cols="12" lg="8" xl="8" md="7">
        <news-banner :newsItem="get_currentlyNews"></news-banner>
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
          v-for="(item, i) in get_recentlyNews"
          :key="i"
          :title="item.title"
          :date="item.date"
          :picture="item.picture"
          :id="item.id"
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
import NewsBanner from "@/components/NewsBanner.vue";
import NewsMiniCard from "@/components/NewsMiniCard.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    NewsBanner,
    NewsMiniCard,
  },
  data() {
    return {};
  },
  created() {
    this.changeNews();
    this.set_recentlyNews();
  },
  computed: {
    ...mapGetters(["get_currentlyNews", "get_recentlyNews"]),
  },
  methods: {
    ...mapActions(["set_currentlyNews", "set_recentlyNews"]),
    pushRouter() {
      this.$router.push("/allnews");
    },
    changeNews() {
      let id = this.$route.params.id;
      if (id == 0) {
        this.set_currentlyNews();
      } else {
        this.set_currentlyNews(id);
      }
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
