<template>
  <div class="leader_card_container">
    <div class="card_header">
      <div class="header_img">
        <v-img :src="user_img" alt="16/9" :lazy-src="user_img">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
      <div class=" header_subtitle font-weight-medium pt-6 text-center  blue--text">
        {{ user_position }}
      </div>
      <div class="header_title text-uppercase  pt-2 blue--text">
        {{ user_fullname }}
      </div>
    </div>
    <div class="card_body pt-8">
      <div class="body_text">
        <!-- Bog‘lanish uchun telefon: -->
        <v-chip class="ma-2" color="primary" outlined>
          <v-icon left color="primary"> mdi-phone </v-icon>
          {{ user_phone }}
        </v-chip>
        <!-- <a :href="'tel:' + user_tell"> {{ user_phone }}</a> -->
      </div>
      <div class="body_text">
        <!-- E-mail:
        <a :href="'mailto:' + user_email"> {{ user_email }}</a>
         -->
        <v-chip class="ma-2" color="indigo" outlined>
          <v-icon left color="indigo"> mdi-email-edit-outline </v-icon>
          {{ user_email }}
        </v-chip>
      </div>
      <v-chip class="ma-2" color="orange" outlined>
        <v-icon left color="orange"> mdi-clock-edit </v-icon>
        {{ user_visittime }}
      </v-chip>
      <!-- <div class="body_text">{{ user_visittime }}</div> -->
    </div>
    <div class="card_action my-6 d-flex justify-space-between">
      <v-btn
        color="primary"
        large
        outlined
        rounded
        elevation="0"
        @click="openDialog()"
        >Tarjimai hol</v-btn
      >
      <v-btn
        color="primary"
        large
        rounded
        elevation="0"
        outlined
        @click="opentObligations()"
        >Vazifalari</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user_id: Number,
    user_img: String,
    user_position: String,
    user_fullname: String,
    user_phone: String,
    user_tell: Number,
    user_email: String,
    user_visittime: String,
  },
  methods: {
    openDialog() {
      this.$emit("openPanel", this.user_id);
    },
    opentObligations() {
      this.$emit("openDialog", this.user_id);
    },
  },
};
</script>

<style lang="scss" scoped>
.leader_card_container {
  backdrop-filter: blur(4px);
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #ffffff;
  & > .card_header {
    .header_img {
      & > img {
        width: 100%;
      }
    }

    & > .header_title,
    .header_subtitle {
      width: 100%;
      font-size: 16px;
      font-weight: 600;
      color: #111111;
    }
  }
}
</style>
