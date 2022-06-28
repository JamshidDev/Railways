<template>
  <div class="leader_card_container">
    <div class="card_header">
      <div class="header_img">
        <img
          :src="user_img"
          width="100%"
          height="auto"
          :lazy-src="user_img"
          alt=""
        />
      </div>
      <div class="header_title pt-6">
        {{ user_position }}
      </div>
      <div class="header_subtitle font-weight-bold pt-2">
        {{ user_fullname }}
      </div>
    </div>
    <div class="card_body pt-8">
      <div class="body_text">
        Bog‘lanish uchun telefon:
        <a :href="'tel:' + user_tell"> {{ user_phone }}</a>
      </div>
      <div class="body_text">
        E-mail:
        <a :href="'mailto:' + user_email"> {{ user_email }}</a>
      </div>
      <div class="body_text">{{ user_visittime }}</div>
    </div>
    <div class="card_action my-6 d-flex justify-space-between">
      <v-btn color="primary" @click="openDialog()">Tarjimai hol</v-btn>
      <v-btn color="primary" @click="opentObligations()">Majburiyatlari</v-btn>
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

    & > .header_title {
      width: 100%;
      font-size: 18px;
      font-weight: 500;
      color: #41b983;
      text-transform: uppercase;
    }
  }
}
</style>
