<template>
  <div class="main-santo-page">
    <h1>Espírito Santo</h1>
    <CardSanto :esData="propsCity" />
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import CardSanto from "@/components/CardSanto.vue";
export default {
  name: "SantoPage",
  components: {
    CardSanto,
  },
  setup() {
    const propsCity = ref({});
    onMounted(() => {
      axios.get("http://localhost:5000/es").then((response) => {
        propsCity.value = response.data.EsData;
      });
    });
    return {
      propsCity,
    };
  },
};
</script>

<style lang="scss">
.main-santo-page {
  width: 100%;
  height: calc(100vh - 100px);
  background-image: url(../assets/espirito.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15px;
}
</style>
