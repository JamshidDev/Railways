<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row class="py-16" justify-lg="center">
      <v-col cols="12">
        <v-form ref="sms_validate">
          <v-container>
            <v-col cols="12" lg="12" class="mb-16 px-0">
              <v-card elevation="6" class="light-blue lighten-4 mx-0">
                <v-card-title
                  class="text-6 red lighten-1 white--text text-uppercase text-center"
                  >Tasdiqlash</v-card-title
                >
                <v-card-text class="text-subtitle-1">
                  <p class="font-weight-bold">
                    Biz sizning telefon raqamingizga sms kod(tasdiqlash kodi)
                    yubordik, Siz mazkur kodni kiritish orqali murojatni
                    rasmiylashtirgan hisoblanasiz. Agar murojat
                    rasmiylashtirilmasa murojat hech qanday kuchga ega
                    bo'lmaydi.
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-card elevation="6" class="light-blue lighten-4">
              <v-row class=" py-6 px-4" justify="center">
              <v-col cols="12" sm="3" md="2" lg="2" xl="2">
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
                <v-btn width="auto" large color="warning"   @click="goBack()"> Orqaga </v-btn>
                <v-btn
                  width="auto"
                  large
                  @click="smsValidate()"
                  color="primary"
                >
                  Tasdiqlash
                </v-btn>
              </v-col>
            </v-row>
            </v-card>
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
    goBack(){
      this.$router.push("/reference")
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
