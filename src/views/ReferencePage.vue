<template>
  <v-container fluid style="padding: 0px" class="banner_bg">
    <v-row class="py-16" justify-lg="center">
      <v-col cols="12">
        <v-form ref="user_reference">
          <v-container>
            <v-col cols="12" lg="12" class="mb-16 px-0">
              <v-card elevation="6" class="light-blue lighten-4 mx-0">
                <v-card-title
                  class="
                    text-6
                    red lighten-1 white--text
                    text-uppercase text-center
                  "
                  > <v-icon color="white" size="30 " class="px-4">mdi-alert-circle-outline</v-icon> Barcha maydonlarni to'ldiring</v-card-title
                >
                <v-card-text class="text-subtitle-1 ">
                  <h4 class="font-eight-medium">
                    O'zbekiston Temir Yo'llari Aksiyadorlik Jamiyati Personalni
                    boshqarish va kadrlar tayorlash boshqarmasiga murojat
                    yo'llash.
                  </h4>
                  <p class="mt-2 mb-0 black--text">
                    Murojat yuborishdan avval
                    <a href="https://www.lex.uz/docs/2509996" target="tab"
                      >Jismoniy va yuridik shaxslarning murojatlarni yuborish
                      to'g'risidagi</a
                    >
                    qounun bilan tanishib chiqishingiz mumkin
                  </p>
                  <p class="mt-0 black--text">
                    Quyidagi toʻldirilishi kerak boʻlgan maydonlarni aniq
                    toʻldirishingiz talab etiladi. Aks holda, yolgʻon
                    maʼlumotlar anonim hisoblanishini Sizga maʼlum qilamiz.
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-row class="white py-6 px-4">
              <v-col cols="12" md="6" lg="6" xl="6">
                <v-card class="px-4 pt-4 light-blue lighten-4" elevation="6">
                  <v-text-field
                    v-model="user.fullName"
                    :rules="fullNameRules"
                    label="To'liq ism sharifingiz"
                    required
                    
                    outlined
                     color="green darken-3"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.adress"
                    :rules="adressRules"
                    label="Manzilingiz"
                    outlined
                    
                    required
                     color="green darken-3"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.email"
                    label="E-mail (mavjud bo'lsa)"
                    required
                    
                    outlined
                     color="green darken-3"
                  ></v-text-field>
                  <v-text-field
                    v-model="user.phone"
                    :rules="phoneRules"
                    label="Telefon raqamingiz"
                    outlined
                    
                    required
                     color="green darken-3"
                  ></v-text-field>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="6" xl="6">
                <v-card class="px-4 pt-4 light-blue lighten-4" elevation="6">
                  <v-textarea
                    v-model="user.referenceText"
                    :rules="referenceRules"
                    label="Murojat matni"
                    outlined
                    rows="11"
                    required
                    color="green darken-3"
                  ></v-textarea>
                </v-card>
              </v-col>
              <v-col lg="12" class="d-flex justify-end">
                <v-btn
                  width="auto"
                  large
                  @click="sendReference()"
                  color="primary"
                >
                   yuborish
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
        this.$router.push("/smsvalidate");
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
