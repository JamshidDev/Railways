<template>
  <v-app id="inspire">
    <!-- <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar> -->

    <v-app-bar app color="primary">
      <v-app-bar-nav-icon
        class="white--text"
        @click="
          $vuetify.breakpoint.mobile ? (drawer = !drawer) : (mini = !mini)
        "
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Admin Panel NOK</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        v-model="messageNote"
        :close-on-content-click="false"
        max-width="300"
        origin="top right"
        transition="scale-transition"
        offset-y
        offset-x
      >
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on" size="36" class="mr-4">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </template>

        <v-card class="px-4">
          <v-list subheader v-model="selectedItem">
            <v-subheader class="font-weight-bold">Shaxsiy kabinet</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-if="get_adminDetails" >
                <v-list-item-avatar size="60">
                  <v-img
                  alt=""
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    class="font-weight-medium"
                   
                  >{{get_adminDetails.firstName+ " "+ get_adminDetails.lastName}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-btn color="primary" elevation="0" block @click="menu = false">
            Profil
          </v-btn>
          <v-card-actions>
            <v-btn color="error" text elevation="0" block @click="logOut()">
              Chiqish
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
    <div class="d-flex">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        color="white"
        class="px-1 blue lighten-5"
        mini-variant-width="60"
        app
      >
        <!-- Sidebar -->
        <v-card class="blue" elevation="0">
          <v-list v-if="get_adminDetails">
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="white--text font-weight-medium"
                  >{{get_adminDetails.login}}</v-list-item-title
                >
                <v-list-item-subtitle class="white--text text-caption" v-for="item in get_adminDetails.permissions" :key="item"
                  >{{item}}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
        </v-card>

        <v-list active-class class="px-2" shaped>
          <v-list-item-group v-model="selectedItem" >
            <div v-for="(item, i) in items" :key="i">
              <v-list-item
                v-if="get_adminPermission(item.permission)"
                color="indigo"
                class="px-4 rounded-lg py-0"
                
                @click="pushRouter(item.link)"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon" :color="item.color"></v-icon>
                </v-list-item-icon>
                <v-list-item-content class="py-0">
                  <v-list-item-title
                    class="font-weight-bold font-montserrat text-uppercase"
                    v-text="item.text"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-main class="white lighten-2 px-2 pt-4">
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import authService from "@/services/service/authService";
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    drawer: null,
    mini: null,
    messageNote: null,
    messagesCount: 3,
    selectedItem: null,
    messages: [
      {
        avatar: `https://materialpro-vue3-dark.vercel.app/assets/images/users/3.jpg`,
        name: "Shuxrat Fazilov",
        role: "Dizayner",
      },
      {
        avatar: `https://materialpro-vue3-dark.vercel.app/assets/images/users/3.jpg`,
        name: "Jamshid Raximov",
        role: "Developer",
      },
      {
        avatar: `https://materialpro-vue3-dark.vercel.app/assets/images/users/3.jpg`,
        name: "Jasur Raximov",
        role: "Marketolog",
      },
    ],
    items: [
      {
        text: "Statistika",
        icon: "mdi-chart-pie",
        link: "/admin/statistic",
        color: "red",
        permission: "superadmin",
      },
      {
        text: "Murojatlar",
        icon: "mdi-email-seal",
        link: "/admin/apeal",
        color: "primary",
        permission: "reportadmin",
      },
      {
        text: "Yangiliklar",
        icon: "mdi-new-box",
        link: "/admin/news",
        color: "primary",
        permission: "newsadmin",
      },
      {
        text: "Sozlamalar",
        icon: "mdi-cog",
        link: "/admin/news",
        color: "green",
        permission: "superadmin",
      },
       {
        text: "Kabinet",
        icon: "mdi-account-cog",
        link: "/admin/news",
        color: "green",
        permission: "superadmin",
      },
      {
        text: "Versiya",
        icon: "mdi-gamepad-circle-right",
        link: "/admin/news",
        color: "red",
        permission: "superadmin",
      },
     
    ],
  }),
  computed: {
    ...mapGetters(["get_adminPermission", "get_adminDetails"]),
  },
  methods: {
    ...mapActions(["set_adminPermission", "set_adminDetails"]),
    pushRouter(link) {
      this.$router.push(link);
    },
    logOut() {
      sessionStorage.removeItem("token");
      this.$router.push("/login");
    },
    getUserDetails(){
      if(!this.get_adminDetails){
        authService.getAdmin().then((res)=>{
          this.set_adminPermission(res.data.data.permissions)
          this.set_adminDetails(res.data.data)
        })
      }
    }
  },
  mounted(){
    this.getUserDetails()
  }
};
</script>
<style lang="scss" scoped>
.v-item--active {
  background-color: #1385fa !important;
  color: white !important;
  & i {
    color: white !important;
  }
}
</style>
