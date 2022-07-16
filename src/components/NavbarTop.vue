<template>
  <div>
    <nav class="navbar_container" id="navbar_content">
      <div class="navbar_item">
        <div class="navbar_item_logo">
          <router-link to="/home" class="navbar_item_link">
            <img
              class="content_logo"
              src="https://www.railway.uz/local/templates/main_v2/img/logo.webp"
              alt="Not found logo"
            />
          </router-link>
          <span class="navbar_control_btn">
            <i
              class="mdi mdi-microsoft-xbox-controller-menu"
              @click="controlNavbar()"
            ></i
          ></span>
        </div>
        <div class="navbar_content" @click="closeNavbar()">
          <router-link to="/home" class="navbar_item_link"
            >Bosh sahifa</router-link
          >
        </div>
        <div class="navbar_content" @click="closeNavbar()">
          <router-link to="/news/0" class="navbar_item_link"
            >Yangiliklar</router-link
          >
        </div>
        <div class="navbar_content" @click="closeNavbar()">
          <router-link to="/services" class="navbar_item_link"
            >Xizmatlar</router-link
          >
        </div>
        <div class="navbar_content multiple_menu" id="submenu_container">
          <div class="navbar_item_link">
            Haqimizda
            <i
              class="mdi mdi-chevron-down submenu_control_icon"
              @click="controlSubmenu()"
            ></i>
          </div>
          <div class="submenu_container">
            <div class="submenu_item" @click="closeNavbar()">
              <router-link to="/leaders" class="submenu_link_items"
                >Rahbariyat</router-link
              >
            </div>
            <div class="submenu_item" @click="closeNavbar()">
              <router-link to="/structurecompany" class="submenu_link_items"
                >Ma’muriy tuzilish</router-link
              >
            </div>
            <div class="submenu_item" @click="closeNavbar()">
              <router-link to="/company" class="submenu_link_items"
                >Korxona va tashkilotlar</router-link
              >
            </div>
            <div class="submenu_item" @click="closeNavbar()">
              <router-link to="/station" class="submenu_link_items"
                >Stansiyalar</router-link
              >
            </div>
            <div class="submenu_item" @click="closeNavbar()">
              <router-link to="/structuraldivision" class="submenu_link_items"
                >Tarkibiy bo’linmalar</router-link
              >
            </div>
            <div class="submenu_item" @click="closeNavbar()">
              <router-link to="/functional" class="submenu_link_items"
                >Funksiya va vazifalar</router-link
              >
            </div>
            <div class="submenu_item" @click="closeNavbar()">
              <router-link to="/history" class="submenu_link_items"
                >O'TY AJ tarixi</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="navbar_item">
        <div class="navbar_content" @click="closeNavbar()">
          <router-link to="/login" class="navbar_item_login"
            >Kirish</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isOpenNavbar: false,
      isOpenSubmneu: false,
      screenEvent: this.$vuetify.breakpoint.name,
    };
  },
  computed: {
    ...mapGetters(["get_appScrollY", "get_screenWidth"]),
  },
  watch: {
    get_appScrollY(scrollY) {
      let navbar = document.getElementById("navbar_content");
      if (scrollY > 0) {
        navbar.classList.add("circle_shadow");
      } else {
        navbar.classList.remove("circle_shadow");
      }
    },
    get_screenWidth() {
      let navbar = document.getElementById("navbar_content");
      if (this.isOpenNavbar) {
        navbar.style.height = "65px";
        this.isOpenNavbar = false;
      }
    },
  },
  methods: {
    controlNavbar() {
      let navbar = document.getElementById("navbar_content");
      if (!this.isOpenNavbar) {
        navbar.style.height = "auto";
        this.isOpenNavbar = true;
      } else {
        navbar.style.height = "65px";
        this.isOpenNavbar = false;
      }
    },
    controlSubmenu() {
      let submenu = document.getElementById("submenu_container");
      if (!this.isOpenSubmneu) {
        submenu.style.height = "270px";
        this.isOpenSubmneu = true;
      } else {
        submenu.style.height = "40px";
        this.isOpenSubmneu = false;
      }
    },
    closeNavbar() {
      let navbar = document.getElementById("navbar_content");
      if (this.isOpenNavbar) {
        navbar.style.height = "65px";
        this.isOpenNavbar = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@media only screen and (min-width: 801px) {
  .navbar_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
    // overflow: hidden;
    height: 65px;
    transition: all 0.2s ease-in-out;
    background-color: transparent;
  }

  .navbar_item {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .content_logo {
    max-height: 40px;
    width: auto;
    margin-right: 20px;
  }
  .navbar_content {
    height: 100% !important;
    display: flex;
    align-items: center;
    margin: 0px 10px;
  }
  .navbar_item_login {
    padding: 10px 30px;
    background-color: #41b983;
    color: #f4f4f4;
    text-decoration: none;
    border-radius: 30px;
  }
  .navbar_content > .navbar_item_link {
    border-top-style: solid;
    border-top-color: transparent;
    border-top-width: 2px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-weight: 600;

    & > .submenu_control_icon {
      display: none;
    }
  }
  .navbar_content > .navbar_item_link:hover {
    border-top-color: #3f9f42;
    color: #3f9f42 !important;
    cursor: pointer;
  }
  .navbar_item_link {
    text-decoration: none;
    color: #111111;
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s ease;
  }
  .navbar_control_btn {
    display: none;
  }

  /* Submenu navbar*/
  .multiple_menu {
    position: relative;
    &:hover {
      & > .submenu_container {
        opacity: 1;
        top: 35px;
        visibility: visible;
      }
    }

    & > .submenu_container {
      top: 80px;
      left: 0px;
      position: absolute;
      padding: 20px 0px;
      width: 280px;
      z-index: 120;
      height: 320px;
      visibility: hidden;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      opacity: 0;
      transition: all 0.4s ease-in-out;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      & > .submenu_item {
        width: 100%;
        padding: 4px 12px;
        display: flex;
        border: 1px solid transparent;
        transition: all 0.3s ease;
        margin: 4px 0px;
        &:hover {
          background-color: #3f9f4223;
          border: 1px solid #3f9f42;
          & > .submenu_link_items {
            color: #3f9f42;
          }
        }

        & > .submenu_link_items {
          color: #111111;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s ease-in-out;
          font-weight: 500;
        }
      }
    }
  }
}
@media only screen and (max-width: 800px) {
  .navbar_control_btn {
    display: flex !important;
    font-size: 40px;
    color: #41b983;
    align-items: start;
    height: 100% !important;
    position: relative;
    top: -5px;
  }
  .navbar_control_btn:hover {
    cursor: pointer;
    display: flex;
    align-items: flex-start;
  }
  .navbar_item_logo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f4f4f4;
  }
  .navbar_item_login {
    padding: 6px 50px;
    background-color: #3f9f42;
    color: #f4f4f4;
    text-decoration: none;
    border-radius: 30px;
  }

  .navbar_container {
    display: flex;
    flex-direction: column;
    border: 1px solid #f4f4f4;
    padding: 8px 20px;
    overflow: hidden;
    height: 65px;
    transition: all 0.4s ease;
  }
  .navbar_item {
    display: flex;
    width: 100% !important;
    flex-direction: column;
    align-items: center;
  }
  .content_logo {
    max-height: 40px;
    width: auto;
    margin-right: 20px;
    display: flex;
    justify-content: center;
  }
  .navbar_content {
    padding: 6px 10px;
    display: flex;
    align-items: center;
    margin: 5px 10px;
  }
  .navbar_content > .navbar_item_link {
    border-top-style: solid;
    border-top-color: transparent;
    border-top-width: 2px;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    gap: 20px;
    & > .submenu_control_icon {
      font-size: 20px;
      color: #111111;
    }
  }
  .navbar_content > .navbar_item_link:hover {
    border-top-color: #41b983;
    color: #41b983 !important;
    cursor: pointer;
    & > .submenu_control_icon {
      color: #41b983 !important;
      cursor: pointer;
    }
  }
  .navbar_item_link {
    text-decoration: none;
    color: #111111;
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s ease;
  }
  .navbar_control_btn {
    display: none;
  }

  // Submenu mobile
  .multiple_menu {
    display: flex;
    flex-direction: column;
    height: 40px;
    overflow: hidden;
    position: relative;
    width: 100%;
    transition: all 0.1s ease;
    & > .submenu_container {
      width: 100%;
      & > .submenu_item {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 4px 0px;

        & > .submenu_link_items {
          color: #111111;
          text-decoration: none;
          margin: 0px auto;
        }
      }
    }
  }
}

/* no media css style */
.circle_shadow {
  border-radius: 30px;
  border: 1px solid #ededed;
  box-shadow: -1px 3px 10px 0 rgb(0 0 0 / 6%);
  top: 10px;
  position: fixed;
  z-index: 200;
  width:calc(100% - 40px) !important;
  margin: 0px 20px;
  background-color: white;
}
</style>
