<template>
  <div class="main-sao-page">
    <h1>São Paulo</h1>
    <CardSao />
  </div>
</template>

<script>
import CardSao from "@/components/CardSao.vue";
export default {
  name: "SaoPage",
  components: {
    CardSao,
  },
};
</script>

<style lang="scss">
.main-sao-page {
  width: 100%;
  height: calc(100vh - 100px);
  background-image: url(../assets/sao-paulo.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15px;
}
</style>
