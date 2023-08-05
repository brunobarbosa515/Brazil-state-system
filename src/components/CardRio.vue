<template>
  <div class="card">
    <span class="loader" v-if="loading == true"></span>
    <div class="flag-img rio-de-janeiro"></div>
    <h1>Dados</h1>
    <br />
    <span>Nome: </span>
    <span>{{ cityData.nameCity }}</span>
    <br />
    <span>Habitantes: </span>
    <span>{{ cityData.population }} Milhões</span>
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
  name: "CardRio",
  setup() {
    const cityData = ref({});
    const loading = ref(true);
    onMounted(() => {
      axios.get("http://localhost:5000/rj").then((response) => {
        cityData.value = response.data.RjData;
        setTimeout(() => {
          loading.value = false;
        }, 1000);
      });
    });
    return {
      cityData,
      loading,
    };
  },
};
</script>
<style lang="scss">
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  border-color: rgba(119, 159, 232, 0.4) rgba(119, 159, 232, 0.6)
    rgba(119, 159, 232, 0.8) rgba(119, 159, 232, 0.9);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.rio-de-janeiro {
  background-image: url(../assets/bandeira-do-rio-de-janeiro.jpg);
}
</style>
