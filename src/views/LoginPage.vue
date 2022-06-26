<template>
  <div>
    <v-container fluid style="padding: 0px">
      <v-row class="min_height_screen" justify-lg="center">
        <v-col
          lg="8"
          md="7"
          class="login_banner d-xl-none d-none d-lg-flex d-md-flex justify-center align-center"
        >
          <div class="login_logo_container">
            <img
              src="https://www.railway.uz/local/templates/main_v2/img/logo.webp"
              alt=""
              class="logo_picture"
            />
            <div class="logo_title mt-lg-10">O'zbekiston temir yo'llari</div>
            <div class="logo_subtitle">Aksiyadorlik jamiyati</div>
          </div>
        </v-col>
        <v-col lg="4" sm="12" cols="12" md="5" class="px-sm-16 pt-sm-16">
          <v-form v-model="valid">
            <v-container>
              <v-row justify-lg="center">
                <v-col lg="12" md="12">
                  <h3
                    class="text-center text-lg-h4 text-uppercase font-weight-bold pt-lg-16 pt-md-16"
                  >
                    Tizmga kirish
                  </h3>
                </v-col>
                <v-col cols="12" md="12" lg="12">
                  <v-text-field
                    v-model="login"
                    :rules="nameRules"
                    label="Login"
                    required
                    dense
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12" lg="12">
                  <v-text-field
                    v-model="password"
                    :rules="emailRules"
                    label="Parol"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col lg="12">
                  <v-btn width="100%" depressed color="primary">
                    Tizmga kirish
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      login: "",
      password: "",
      nameRules: [
        (v) => !!v || "Login kiritilishi shart",
        (v) =>
          v.length <= 10 || "Login kamida 6 ta belgidan iborat bo'lishi shart",
      ],
      emailRules: [
        (v) => !!v || "Parol kiritilishi shart",
        (v) =>
          /.+@.+/.test(v) || "Parol kamida 8 ta belgidan iborat bo'lishi shart",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.min_height_screen {
  min-height: 100vh;
  height: 100%;
}
.login_banner {
  background-color: #1e293b;
  min-height: 100%;
}
.login_logo_container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  & > .logo_picture {
    height: 200px;
    margin: 0px auto;
  }

  & > .logo_title {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0px auto;
    color: #ffffff;
  }
  & > .logo_subtitle {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0px auto;
    color: #ffffff;
  }
}
</style>
