<template>
  <div class="card_container">
    <div class="card_content">
      <span class="content_date"> {{format.dataFormatter(lenta.created)}}</span>
      <span class="content_view" @click="pushToNews(lenta._id)"> Batafsil... </span>
      <img
        class="card_picture"
        :src="getImg(lenta.picture)"
        alt="Card picture not found"
      />
      <span class="card_title">
        {{lenta.title}}
      </span>
    </div>
  </div>
</template>

<script>
import Formatter from "../ulit/helper"
export default {
  props:["lenta"],
  data(){
    return{
      format: Formatter,
    }
  },
  methods: {
    pushToNews(id) {
      this.$router.push(`/news/${id}`);
    },
     getImg(picture){
      return `https://calm-fjord-14028.herokuapp.com/news/picture/${picture}`
    }
  },
};
</script>

<style lang="scss" scoped>
.card_container {
  max-width: 400px;
  width: 300px;
  height: auto;

  & > .card_content {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
    border-radius: 10px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    &:hover {
      cursor: pointer;
      &::before {
        opacity: 1 !important;
      }
      & > .content_date {
        opacity: 1;
        top: 10px;
      }
      & > .content_view {
        transform: scale(1);
      }
    }
    &::before {
      content: " ";
      backdrop-filter: blur(4px);
      background: transparent;
      position: absolute;
      top: 0px;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.3s ease;
    }
    & > .content_date {
      position: absolute;
      background: #41b983;
      padding: 6px 12px;
      color: white;
      font-size: 12px;
      border-radius: 4px;
      top: -10px;
      right: 14px;
      opacity: 0;
      transition: all 0.3s ease;
      transition-delay: 0.1s;
    }
    & > .content_view {
      position: absolute;
      top: 40%;
      left: 40%;
      background: transparent;
      text-transform: none !important;
      color: #ffffff;
      padding: 4px 12px;
      border-radius: 100px;
      font-size: 14px;
      transform: scale(0);
      font-weight: 600;
      transition: all 0.3s ease;
    }

    & > .card_picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    & > .card_title {
      position: absolute;
      text-transform: none !important;
      bottom: 0px;
      color: #ffffff;
      font-weight: 500;
      font-size: 16px;
      display: block;
      padding: 4px 6px;
      backdrop-filter: blur(4px);
      background: #41b983;
    }
  }
}
@media only screen and (max-width: 400px) {
  .card_container {
    width: 100%;
  }
}
</style>
