<template>
  <v-container fluid>
    <v-row class="pb-16">
       <v-col cols="12">
        <v-card elevation="1" class="rounded-0 blue lighten-5">
          <v-card-title class="font-weight-medium text-uppercase"
            >Yangilik qo'shish</v-card-title
          >
        </v-card>
      </v-col>
      <v-col cols="12" >
        <v-card class="rounded-0 blue lighten-5">
          <v-card-text>
            <v-form ref="news_ref">
              <v-col cols="12">
                <v-file-input
                  v-model="news.files"
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
                  name="input-7-4"
                  label="Yangilik mavzusi"
                  v-model="news.title"
                  :rules="titleRules"
                  rows="3"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Yangilik matni"
                  v-model="news.text"
                  :rules="textRules"
                  rows="6"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="d-flex justify-space-between">
                <v-btn color="error">Bekor qilsih</v-btn>
                <v-btn color="warning" @click="viewNewsControl()"
                  >Ko'rish</v-btn
                >
                <v-btn color="primary" @click="createNews()">Saqlash</v-btn>
              </v-col>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" v-show="isViewNews">
        <v-card>
          <img
            width="100%"
            height="auto"
            id="news_img"
            max-width="100%"
            src=""
          />
          <v-col cols="12" class="d-flex justify-space-between">
            <v-btn text>
              <v-icon color="green" class="mr-2">{{ dateIcon }}</v-icon>
              {{ viewNews.date }}
            </v-btn>
            <v-btn text>
              <v-icon color="green" class="mr-2">{{ eyesIcon }}</v-icon>
              {{ viewNews.view }}
            </v-btn>
          </v-col>
          <v-col cols="12">
            <div class="news_title font-weight-bold p-2 pl-3">
              {{ viewNews.title }}
            </div>
          </v-col>
          <v-col cols="12">
            <div class="news_subtitle pl-6 p-2 mb-16">
              {{ viewNews.text }}
            </div>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import newsService from "@/services/service/newsService";
import { mdiCalendarRange, mdiEye } from "@mdi/js";
export default {
  data() {
    return {
      news: {
        title: null,
        text: null,
        files: [],
      },
      titleRules: [(v) => !!v || "Yangilik mavzusini kiriting"],
      textRules: [(v) => !!v || "Yangilik matnini kiriting"],
      isViewNews: false,
      viewNews: {
        title: null,
        text: null,
        files: [],
        date: "Mar 8 2022",
        view: 0,
      },
      dateIcon: mdiCalendarRange,
      eyesIcon: mdiEye,
    };
  },
  methods: {
    createNews() {
      if (this.$refs.news_ref.validate() && this.news.files.length>0) {
        console.log(this.news);
        const form = new FormData()
        form.append("title", this.news.title)
        form.append("text", this.news.text)
        form.append("picture", this.news.files[0])
        newsService.createNews(form).then((res)=>{
          this.$router.push("/admin/news")
        }).catch(()=>{
          console.log(error);
        })
        
      } else {
        setTimeout(() => {
          this.$refs.news_ref.resetValidation();
        }, 3000);
      }
    },

    // view news
    viewNewsControl() {
      this.imgToDataUrl();
      this.isViewNews = !this.isViewNews;
      this.viewNews.title = this.news.title;
      this.viewNews.text = this.news.text;
    },

    uploadNewsFile() {
      this.imgToDataUrl();
    },
    imgToDataUrl() {
      let img = document.getElementById("news_img");
      const reader = new FileReader();
      const file = this.news.files[0];
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
  },
};
</script>

<style lang="scss" scoped>
.news_subtitle {
  font-size: 16px;
  font-family: "Montserrat", sans-serif !important;
}
.news_title {
  font-size: 16px;
  font-family: "Montserrat", sans-serif !important;
}
</style>
