<template>
  <div>
    <v-container fluid style="padding: 0px">
      <v-row class="min_height_screen" justify-lg="center">
        <v-col
          lg="8"
          xl="8"
          md="7"
          class="
            login_banner
            d-xl-none d-none d-lg-flex d-md-flex d-xl-flex
            justify-center
            align-center
          "
        >
          <div class="login_logo_container">
            <img
              src="https://www.railway.uz/local/templates/main_v2/img/logo.webp"
              alt=""
              class="logo_picture"
            />
            <div class="animation_text">
              <div class="logo_title mt-lg-10 btn-shine font-montserrat">
                O'zbekiston temir yo'llari
              </div>
              <div class="logo_subtitle btn-shine font-montserrat">
                Aksiyadorlik jamiyati
              </div>
            </div>
          </div>
        </v-col>
        <v-col xl="4" lg="4" sm="12" cols="12" md="5" class="px-sm-16 pt-sm-16">
          <the-notefication :notefication="notefication"></the-notefication>
          <v-form ref="login_ref">
            <v-container>
              <v-row justify-lg="center">
                <v-col lg="12" md="12">
                  <h3
                    class="
                      text-center text-lg-h4 text-uppercase
                      font-weight-bold
                      pt-lg-16 pt-md-16
                    "
                  >
                    Tizmga kirish
                  </h3>
                </v-col>
                <v-col cols="12" md="12" lg="12">
                  <v-text-field
                    v-model="user.login"
                    :rules="loginRules"
                    label="Login"
                    required
                    dense
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12" lg="12">
                  <v-text-field
                    v-model="user.password"
                    :rules="passRules"
                    label="Parol"
                    outlined
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col lg="12">
                  <v-btn
                    width="100%"
                    depressed
                    @click="login()"
                    color="primary"
                  >
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
import loginService from "../services/service/authService";
import TheNotefication from "@/components/TheNotefication.vue";
export default {
  components: { TheNotefication },
  data() {
    return {
      user: {
        login: "jamshid.nok@.ajk",
        password: "user12345",
      },
      notefication: false,
      loginRules: [
        (v) => !!v || "Login kiritilishi shart",
        (v) => /.+@.+/.test(v) || "Login to'g'riligini tekshiring",
      ],
      passRules: [(v) => !!v || "Parol kiritilishi shart"],
    };
  },
  methods: {
    login() {
      if (this.$refs.login_ref.validate()) {
        console.log(this.user);
        // this.$router.push("/admin");
        loginService
          .loginAdmin(this.user)
          .then((res) => {
            this.saveToken(res.data.access_token);
            this.$router.push("/admin");
          })
          .catch((error) => {
            this.alertControl();
          });
      } else {
        setTimeout(() => {
          this.$refs.login_ref.resetValidation();
        }, 3000);
      }
    },
    saveToken(token) {
      sessionStorage.setItem("token", token);
    },
    alertControl() {
      this.notefication = true;
      setTimeout(() => {
        this.notefication = false;
      }, 2000);
    },
  },
};
</script>


<style lang="scss" scoped>
.animation_text {
  position: relative;
}
.btn-shine {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 48px;
  color: #fff;
  background: linear-gradient(to right, #4d4d4d 0, #fff 10%, #4d4d4d 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite ease-in;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
}

@keyframes shine {
  0% {
    background-position: 0;
  }
  25% {
    background-position: 100px;
  }
  50% {
    background-position: 200px;
  }
  75% {
    background-position: 300px;
  }
  100% {
    background-position: 400px;
  }
}

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
  position: relative;
  & > .logo_picture {
    height: 200px;
    margin: 0px auto;
  }

  & > .animation_text > .logo_title {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0px auto;
    color: #ffffff;
  }
  & > .animation_text > .logo_subtitle {
    font-size: 20px;
    top: 100px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0px auto;
    color: #ffffff;
  }
}
</style>
