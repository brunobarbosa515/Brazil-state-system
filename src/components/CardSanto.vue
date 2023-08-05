<template>
  <div class="card">
    <div class="flag-img espirito-santo"></div>
    <h1>Dados</h1>
    <br />
    <span>Nome: </span>
    <span>{{ props.esData.nameCity }}</span>
    <br />
    <span>Habitantes: </span>
    <span>{{ props.esData.population }} Milhões</span>
    <br />
    <span>Data de Fundação: </span>
    <span>{{ props.esData.fundationDate }}</span>
    <br />
    <span>Extenção Territorial: </span>
    <span>{{ props.esData.extensionCity }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CardSanto",
  props: ["esData"],
  setup(props) {
    const cityData = ref({});
    console.log(props);
    return {
      cityData,
      props,
    };
  },
};
</script>

<style lang="scss" scoped>
.espirito-santo {
  background-image: url(../assets/Bandeira-do-Espírito-Santo.png);
}
</style>
