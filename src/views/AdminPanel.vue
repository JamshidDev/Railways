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
        v-model="avatarNote"
        :close-on-content-click="false"
        bottom
        origin="top right"
        transition="scale-transition"
        offset-y
        max-width="300"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-badge
            :content="messagesCount"
            :value="messagesCount"
            color="green"
            overlap
            class="mr-4"
          >
            <v-icon v-bind="attrs" v-on="on" size="36" color="white"
              >mdi-facebook-messenger</v-icon
            >
          </v-badge>
        </template>

        <v-card class="px-4">
          <v-divider></v-divider>
          <v-list subheader v-model="selectedItem">
            <v-subheader class="font-weight-bold">Xabarlar</v-subheader>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="chat in messages" :key="chat.name">
                <v-list-item-avatar>
                  <v-img
                    :alt="`${chat.title} avatar`"
                    :src="chat.avatar"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    class="font-weight-medium"
                    v-text="chat.name"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="chat.role"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-card-actions>
            <v-btn color="primary" block @click="menu = false">
              Hammasini ko'rish
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
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
              <v-list-item v-for="chat in userDetails" :key="chat.name">
                <v-list-item-avatar size="60">
                  <v-img
                    :alt="`${chat.title} avatar`"
                    :src="chat.avatar"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    class="font-weight-medium"
                    v-text="chat.name"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="chat.role"
                  ></v-list-item-subtitle>
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
        <v-card class="blue accent-2" elevation="0">
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="white--text font-weight-medium"
                  >Jamshid Raximov</v-list-item-title
                >
                <v-list-item-subtitle class="yellow--text text-caption"
                  >NewsAdmin</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
        </v-card>

        <v-list active-class class="px-2">
          <v-list-item-group v-model="selectedItem">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              color="indigo"
              class="px-4 rounded"
              @click="pushRouter(item.link)"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon" :color="item.color"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-medium font-montserrat"
                  v-text="item.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
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
export default {
  data: () => ({
    drawer: null,
    mini: null,
    messageNote: null,
    avatarNote: null,
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
    userDetails: [
      {
        avatar: `https://cdn.vuetifyjs.com/images/john.jpg`,
        name: "Jamshid Raximov",
        role: "Developer",
        email: "Raximovj662@gmail.com",
      },
    ],
    items: [
      { text: "Statistic", icon: "mdi-chart-pie", link: "/admin/statistic", color:"red" },
      { text: "Reports", icon: "mdi-email-seal", link: "/admin/apeal", color:"primary" },
      { text: "News", icon: "mdi-new-box", link: "/admin/news", color:"primary" },
      { text: "Setting", icon: "mdi-chart-pie", link: "/admin/news", color:"green" },
      { text: "Version", icon: "mdi-chart-pie", link: "/admin/news", color:"red" },
      { text: "Profile", icon: "mdi-chart-pie", link: "/admin/news", color:"green" },
    ],
  }),
  methods: {
    pushRouter(link) {
      console.log();
      this.$router.push(link);
    },
    logOut() {
      sessionStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
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
