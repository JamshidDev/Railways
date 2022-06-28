<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row class="py-16" justify-lg="center">
      <v-col cols="12">
        <v-form ref="user_reference">
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
              <v-col cols="12" md="6" lg="4" xl="4">
                <v-text-field
                  v-model="user.fullName"
                  :rules="fullNameRules"
                  label="Tasdiqlash kodini kiriting"
                  required
                  dense
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col lg="12" class="d-flex justify-space-between">
                <v-btn
                  width="auto"
                  outlined
                  @click="sendReference()"
                  color="error"
                >
                  Bekor qilish
                </v-btn>
                <v-btn
                  width="auto"
                  outlined
                  @click="sendReference()"
                  color="primary"
                >
                  Tasdiqlash
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        fullName: "",
        adress: "",
        phone: "",
        email: "",
        referenceText: "",
      },

      fullNameRules: [(v) => !!v || "Ism kiritilishi shart"],
      adressRules: [(v) => !!v || "Manzil kiritilishi shart"],
      referenceRules: [(v) => !!v || "Murojat kiritilishi shart"],
      phoneRules: [
        (v) => !!v || "Telefon raqam kiritilishi shart",
        (v) => /^998[1-9]{2}[0-9]{7}$/.test(v) || "Namuna 998995016004",
      ],
    };
  },

  methods: {
    sendReference() {
      if (this.$refs.user_reference.validate()) {
        console.log(this.user);
      } else {
        setTimeout(() => {
          this.$refs.user_reference.resetValidation();
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
