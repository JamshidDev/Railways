<template>
  <div class="card_container">
    <div class="card_content">
      <span class="content_date"> 06/07/2022</span>
      <span class="content_view" @click="pushToNews(2)"> Batafsil... </span>
      <img
        class="card_picture"
        src="https://qarshimtu.uz/38127533664561.jpg"
        alt="Card picture not found"
      />
      <span class="card_title">
        "Ilg'or tajriba maktabi" mavzusida seminar-trening
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pushToNews(id) {
      this.$router.push(`/news/${id}`);
    },
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
      top: 50%;
      left: 40%;
      background: transparent;
      color: #ffffff;
      padding: 4px 12px;
      border-radius: 100px;
      font-size: 18px;
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
      bottom: 0px;
      color: #ffffff;
      font-weight: 600;
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
