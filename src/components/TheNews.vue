<template>
  <v-container>
    <v-row justify="center" class="mb-16">
      <v-col cols="12 mt-16 mb-10">
        <v-hover v-slot="{ hover }">
          <h3
            class="news_title cursor_hover_pointer text-left"
            :class="hover && 'text-decoration-underline'"
            @click="pushToNews(0)"
          >
            Yangiliklar
          </h3>
        </v-hover>
      </v-col>
      <template v-if="lentaNews.length>0">
          <v-col
        v-for="item in lentaNews"
        :key="item._id"
        class="d-flex justify-center"
        cols="12"
        sm="6"
        md="3"
        lg="4"
        xl="3"
      >
        <news-item :lenta="item"></news-item>
      </v-col>
      </template>
      <template v-else>
        <v-col
          class="d-flex justify-center"
          cols="12"
          sm="6"
          md="3"
          lg="4"
          xl="3"
          v-for="i in 8"
          :key="i"
        >
          <v-skeleton-loader
            class="mx-auto"
            width="100%"
            type="card"
          ></v-skeleton-loader>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import newsService from "@/services/service/newsService";
import NewsItem from "./TheCard.vue";

export default {
  components: {
    NewsItem,
  },
  data() {
    return {
      lentaNews: false,
    };
  },
  created() {
    this.getLenta();
  },
  methods: {
    pushToNews(id) {
      this.$router.push(`/news/${id}`);
    },
    getLenta() {
      newsService.getLenta().then((res) => {
        this.lentaNews = res.data.data;
      });
    },
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
</style>
