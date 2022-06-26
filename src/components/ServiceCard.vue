<template>
  <div class="service_card_container">
    <div class="card_box">
      <div class="card_header">
        <i :class="icon"></i>
      </div>
      <div class="card_body mt-8">
        <h3 class="card_body_title mb-4">{{ title }}</h3>
        <p class="card_body_subtitle">
          {{ subtitle }}
        </p>
      </div>
      <div class="card_action">
        <button class="card_btn">
          <router-link class="card_btn_link" :to="cardURL"
            >Yuborish</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    cardURL: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.service_card_container {
  width: 100%;
  display: flex;
  justify-content: center;

  & > .card_box {
    max-width: 300px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    border: 1px solid #b6b6b6;
    border-radius: 10px;
    background-color: #f4f4f4;
    border: 1px solid transparent;
    padding: 20px;

    & > .card_header {
      padding: 20px 40px;
      border-radius: 100px;
      border: 1px solid #3f9f42;
      background-color: rgba(22, 233, 163, 0.308);
      margin: 0px auto;
      & > i {
        font-size: 80px;
        color: #3f9f42;
      }
    }
    & > .card_body {
      width: 100%;
      & > .card_body_title {
        text-align: center;
        color: #3f9f42;
        font-weight: 500;
        text-transform: uppercase;
      }
      & > .card_body_subtitle {
        font-size: 14px;
        color: #b6b6b6;
        text-align: center;
      }
    }
    & > .card_action {
      width: 100%;
      display: flex;
      justify-content: center;
      & > .card_btn {
        padding: 6px 20px;
        background-color: #3f9f42;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 16px;
        border: 1px solid transparent;
        transition: all 0.4s ease-in-out;
        & > .card_btn_link {
          text-decoration: none;
          color: #f4f4f4;
        }
        &:hover {
          border: 1px solid #3f9f42;
          background-color: transparent;
          & > .card_btn_link {
            color: #3f9f42;
          }
        }
      }
    }
  }
}
</style>
