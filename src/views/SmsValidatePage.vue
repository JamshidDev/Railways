<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row class="py-16" justify-lg="center">
      <v-col cols="12">
        <v-form ref="sms_validate">
          <v-container>
            <v-col cols="12" lg="12" class="mb-16 px-0">
              <v-card elevation="0" class="white lighten-3 mx-0">
                <v-card-title
                  class="text-6 green lighten-2 white--text text-uppercase text-center"
                  >Telefon raqamingizni tasdiqlang</v-card-title
                >
                <v-card-text class="text-subtitle-1">
                  <h4>
                    Biz sizning telefon raqamingizga sms kod(tasdiqlash kodi)
                    yubordik, Siz mazkur kodni kiritish orqali murojatni
                    rasmiylashtirgan hisoblanasiz. Agar murojat
                    rasmiylashtirilmasa murojat hech qanday kuchga ega
                    bo'lmaydi.
                  </h4>
                </v-card-text>
              </v-card>
            </v-col>
            <v-row class="white py-6 px-4" justify="center">
              <v-col cols="12" sm="6" md="4" lg="4" xl="4">
                <v-text-field
                  v-model="smsCode"
                  :rules="codRules"
                  label="Tasdiqlash kodini kiriting"
                  required
                  dense
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="d-flex justify-space-between">
                <v-btn width="auto" outlined color="warning"> Orqaga </v-btn>
                <v-btn
                  width="auto"
                  outlined
                  @click="smsValidate()"
                  color="primary"
                >
                  Tasdiqlash
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
      <v-col cols="12">
        <v-alert
          :value="alert"
          :color="alertColor"
          dark
          border="top"
          :icon="alertIcon"
          transition="scale-transition"
          width="auto"
          class="postisoin_top"
          >{{ alertText }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      smsCode: "",
      alertColor: null,
      alertText: null,
      alertIcon: null,
      alert: false,

      codRules: [
        (v) => !!v || "Kod kiritilishi shart",
        (v) => v.length == 4 || "Kod 4 ta raqamdan iborat bo'lishi shart",
      ],
    };
  },

  methods: {
    smsValidate() {
      if (this.$refs.sms_validate.validate()) {
        // success message
        // this.controlAlert(
        //   "green",
        //   "Murojat muvofaqiyatli rasmiylashtirildi",
        //   "mdi-shield-check",
        //   3000
        // );

        // error message
        this.controlAlert(
          "error",
          "Notog'ri tasdiqlash kodi",
          "mdi-alert-circle",
          3000
        );
      } else {
        setTimeout(() => {
          this.$refs.user_reference.resetValidation();
        }, 3000);
      }
    },
    controlAlert(color, text, icon, time) {
      this.alertIcon = icon;
      this.alertColor = color;
      this.alertText = text;
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, time);
    },
  },
};
</script>

<style lang="scss" scoped>
.postisoin_top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
