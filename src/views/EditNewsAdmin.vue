<template>
  <v-container class="px-xl-16">
    <v-row class="pb-16">
      <v-col cols="12">
        <v-card elevation="1" class="rounded-0 blue lighten-5">
          <v-card-title class="font-weight-medium text-uppercase"
            >Yangilikni tahrirlash</v-card-title
          >
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card elevation="1" class="rounded-0 blue lighten-5">
          <v-card-text>
            <v-form>
              <v-col cols="12">
                <img
                  width="100%"
                  height="auto"
                  id="edit_news_img"
                  max-width="100%"
                  class="custom_image"
                  :src="getImg(editNews.picture)"
                />
              </v-col>
              <v-col cols="12">
                <v-file-input
                  v-model="editNews.files"
                  color="primary"
                  counter
                  label="Rasm yuklang"
                  multiple
                  placeholder="Kerakli rasmni tanlang"
                  prepend-icon="mdi-paperclip"
                  outlined
                  @change="uploadNewsFile()"
                  :show-size="1000"
                >
                  <template v-slot:selection="{ index, text }">
                    <v-chip v-if="index < 2" color="primary" dark label small>
                      {{ text }}
                    </v-chip>

                    <span
                      v-else-if="index === 2"
                      class="text-overline grey--text text--darken-3 mx-2"
                    >
                      +{{ news.files.length - 2 }} File(s)
                    </span>
                  </template>
                </v-file-input>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  rows="3"
                  label="Yangilik mavzusi"
                  color="primary"
                  v-model="editNews.title"
                  class="font-weight-bold"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  class="font-weight-medium"
                  outlined
                  color="primary"
                  rows="10"
                  label="Yangilik matni"
                  v-model="editNews.text"
                ></v-textarea>
              </v-col>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-col cols="12" class="d-flex justify-space-between px-8">
              <v-btn color="warning" @click="goToBack()">Orqaga</v-btn>
              <v-btn color="primary" @click="updateNews()">Saqlash</v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <the-notefication :notefication="notefication" :NoteColor="'green'" :NoteText="'Muvofaqiyatli yangilandi'" :NoteType="'success'"></the-notefication>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheNotefication from "@/components/TheNotefication.vue";
import newsService from "@/services/service/newsService";
export default {
  components:{
    TheNotefication,
  },
  data() {
    return {
      editNews: {
        title: null,
        picture: null,
        text: null,
        files: null,
        id:null,
      },
      notefication:false
    };
  },
  created() {
    this.getOne(this.$route.params.id);
  },
  methods: {
    goToBack() {
      this.$router.push("/admin/news");
    },
    getOne(id) {
      newsService.getOneNewsAdmin(id).then((res) => {
        console.log(res.data.data);
        this.editNews.title = res.data.data[0].title;
        this.editNews.text = res.data.data[0].text;
        this.editNews.picture = res.data.data[0].picture;
        this.editNews.id = res.data.data[0]._id;
      });
    },
    getImg(picture) {
      if(picture){
        // return `http://localhost:5000/news/picture/${picture}`;
         return `https://calm-fjord-14028.herokuapp.com/news/picture/${picture}`
      }
      
    },

    uploadNewsFile() {
      if(this.editNews.files.length>0){
        this.imgToDataUrl();
      }
      
    },
    imgToDataUrl() {
      let img = document.getElementById("edit_news_img");
      const reader = new FileReader();
      const file = this.editNews.files[0];
      reader.readAsDataURL(file);
      reader.addEventListener(
        "load",
        function () {
          // convert image file to base64 string
          img.src = reader.result;
        },
        false
      );
    },
    updateNews(){
      console.log(this.editNews);
      const form = new FormData();
        form.append("title", this.editNews.title)
      form.append("news_id", this.editNews.id)
      form.append("text", this.editNews.text)
      if(this.editNews.files !==null && this.editNews.files.length>0){
        form.append("picture", this.editNews.files[0])
         newsService.updateNews(form).then((res)=>{
        console.log(res);
        this.controlNotefication()

      })
      }else{
         newsService.updateNoPicture(form).then((res)=>{
        console.log(res);
        this.controlNotefication()

      })
      }
    
     
    },
    controlNotefication(){
      this.notefication=true;
      setTimeout(()=>{
        this.notefication = false
      }, 3000)
    }
  },
};
</script>

<style lang="scss" scoped>
.custom_image{
  aspect-ratio: 16/9 !important;
}</style>
