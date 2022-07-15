<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card elevation="0">
          <v-col cols="12" class="d-flex justify-end pb-10">
            <v-btn color="primary" class="white--text" @click="pushAddNews()"
              >Adding</v-btn
            >
          </v-col>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="4"
        v-for="item in newsList"
        :key="item._id"
      >
        <v-card width="100%" class="blue lighten-4" elevation="0">
          <v-img
          :aspect-ratio="16/9"
            class="white--text align-end"
            :src="getImg(item.picture)"
          >
          <p class="text-title-2 px-2 white--text font-weight-medium" >
            {{item.title}}
          </p>
          </v-img>
          <v-card-actions>
            <v-divider></v-divider>
            <v-col cols="12" class="d-flex justify-space-between">
              <v-btn color="primary" rounded icon  @click="pushEditNews(item._id)"><v-icon>mdi-pencil</v-icon></v-btn>
              <v-btn color="green" text >{{item.created}} </v-btn>
              <v-btn color="error" rounded icon  @click="deleteNews(item._id)" ><v-icon>mdi-delete</v-icon></v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="py-16" v-if="totalPage">
      <v-divider></v-divider>
        <div class="text-center pt-10">
          <v-pagination
            v-model="currentPage"
            :length="totalPage"
            circle
            @change="changePage()"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import newsService from "../services/service/newsService"
export default {
  data() {
    return {
      currentPage: 1,
      totalPage:null,
      newsList:null,
    };
  },
  created(){
    this.paginationNews()
  },
  methods: {
    pushAddNews() {
      this.$router.push("/admin/addnews");
    },
    pushEditNews(id) {
      this.$router.push(`/admin/editnews/${id}`);
    },
    paginationNews(page_number="1", page_amount="10"){
      newsService.paginationNews(page_number, page_amount).then((res)=>{
        console.log(res.data);
        this.totalPage =Math.floor(res.data.count/10)+1
        this.newsList = res.data.data
      })
    },
    changePage(){
      console.log(this.currentPage);
    },
     getImg(picture){
      return `https://calm-fjord-14028.herokuapp.com/news/picture/${picture}`
    },
    deleteNews(id){
      newsService.deleteNews(id).then((res)=>{
        console.log(res);
        this.paginationNews()
      })
      console.log(id);
    }

  },
};
</script>

<style lang="scss" scoped></style>
