<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row>
      <v-col cols="12">
        <h1 class="py-16 text-center banner_title">Barcha Yangiliklar</h1>
      </v-col>
    </v-row>

      <v-row class="pt-10 pb-6 px-2" v-if="news.length>0">
      <v-col
        cols="12"
        lg="4"
        xl="4"
        md="4"
        sm="6"
        class="p-2"
        v-for="(item, i) in news"
        :key="i"
      >
        <all-news-card
          :title="item.title"
          :view="item.views"
          :date="item.created"
          :text="item.text"
          :pics="item.picture"
          :id="item._id"
        ></all-news-card>
      </v-col>
    </v-row>

    
    <!-- Loader -->
     <v-row class="pt-10 pb-6 px-2" v-else >
      <v-col
        cols="12"
        lg="4"
        xl="4"
        md="4"
        sm="6"
        class="p-2"
        v-for="i in 10"
        :key="i"
      >
       <v-skeleton-loader
      class="mx-auto"
      max-width="100%"
      type="image"
    ></v-skeleton-loader>
      <v-skeleton-loader
      class="mx-auto pt-2"
      max-width="100%"
      type="heading"
    ></v-skeleton-loader>
     <v-skeleton-loader
      class="mx-auto pt-2"
      max-width="100%"
      type="text@3"
    ></v-skeleton-loader>
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
        this.news = res.data.data
      })
    }
  },
  created(){
    this.getAllNews()
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped></style>
