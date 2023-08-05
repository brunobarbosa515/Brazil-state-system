<template>
  <div class="card">
    <div class="flag-img sao-paulo"></div>
    <h1>Dados</h1>
    <br />
    <span>Nome: </span>
    <span>{{ cityData.nameCity }}</span>
    <br />
    <span>Habitantes: </span>
    <span>{{ cityData.population }}</span>
    <br />
    <span>Data de Fundação: </span>
    <span>{{ cityData.fundationDate }}</span>
    <br />
    <span>Extenção Territorial: </span>
    <span>{{ cityData.extensionCity }}</span>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  name: "CardSao",
  setup() {
    const cityData = ref({});
    onMounted(() => {
      axios.get("http://localhost:5000/sp").then((response) => {
        cityData.value = response.data.SpData;
      });
    });
    return {
      cityData,
    };
  },
};
</script>

<style lang="scss" scoped>
.sao-paulo {
  background-image: url(../assets/bandeira-sao-paulo.jpg);
}
</style>
