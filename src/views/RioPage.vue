<template>
  <div class="main-rio-page">
    <h1>Rio de Janeiro</h1>
    <CardRio />
  </div>
</template>

<script>
import CardRio from "@/components/CardRio.vue";
export default {
  name: "RioPage",
  components: {
    CardRio,
  },
};
</script>

<style lang="scss">
.main-rio-page {
  width: 100%;
  height: calc(100vh - 100px);
  background-image: url(../assets/rio.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15px;
}
</style>
