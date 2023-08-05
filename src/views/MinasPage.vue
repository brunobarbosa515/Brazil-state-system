<template>
  <div class="main-minas-page">
    <h1>Minas Gerais</h1>
    <CardMinas />
  </div>
</template>

<script>
import CardMinas from "@/components/CardMinas.vue";
export default {
  name: "MinasPage",
  components: {
    CardMinas,
  },
};
</script>

<style lang="scss">
.main-minas-page {
  width: 100%;
  height: calc(100vh - 100px);
  background-image: url(../assets/minas.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15px;
}
</style>
