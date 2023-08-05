<template>
  <div class="main-personal-page">
    <h1>Página de Dados Pessoais</h1>
    <CardData />
  </div>
</template>

<script>
import CardData from "@/components/CardData.vue";
export default {
  name: "PersonalDataPage",
  components: {
    CardData,
  },
};
</script>

<style lang="scss">
.main-personal-page {
  width: 100%;
  height: calc(100vh - 100px);
  background-color: yellow;
}
</style>
