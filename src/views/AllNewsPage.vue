<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row>
      <v-col cols="12">
        <h1 class="py-16 text-center banner_title">Barcha Yangiliklar</h1>
      </v-col>
    </v-row>
    <v-row class="pt-10 pb-6 px-2">
      <v-col
        cols="12"
        lg="4"
        xl="4"
        md="4"
        sm="6"
        class="p-2"
        v-for="(item, i) in get_allNews"
        :key="i"
      >
        <all-news-card
          :title="item.title"
          :view="item.view"
          :date="item.date"
          :text="item.text"
          :pics="item.picture"
          :id="item.id"
        ></all-news-card>
      </v-col>
    </v-row>
    <v-row class="pb-16">
      <v-col cols="12" class="d-flex justify-center">
        <v-btn width="auto" text color="green" elevation="2" rounded>
          <v-icon color="green" class="mr-2">mdi-update</v-icon> Yana...</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NewsService from "../services/service/newsService"
import AllNewsCard from "@/components/AllNewsCard";
import { mapGetters } from "vuex";
export default {
  components: {
    AllNewsCard,
  },
  data() {
    return {
      news: [],
    };
  },
  computed: {
    ...mapGetters(["get_allNews"]),
  },
  methods:{


    getAllNews(){
      NewsService.getAll().then((res)=>{
        console.log(res);
      })
    }
  },
  mounted() {
    console.log(this.get_allNews);
    this.news = this.get_allNews;
    this.getAllNews()
  },
};
</script>

<style lang="scss" scoped></style>
