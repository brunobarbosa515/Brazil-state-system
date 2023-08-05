<template>
  <headerTdc />
  <!-- <header>
    <div>
      <router-link to="/"><button>Dados</button></router-link>
      <router-link to="/hobbie"><button>Hobbies</button></router-link>
    </div>
  </header> -->

  <router-view />
</template>

<script>
import headerTdc from "@/components/headerTdc.vue";
export default {
  components: {
    headerTdc,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  height: 100px;
  background-color: #2c3e50;
  div {
    button {
      margin: 30px 10px 0 0;
      background-color: white;
      color: black;
      width: 80px;
      height: 40px;
      border-radius: 5px;
    }
  }
}
.card {
  padding: 3rem 2rem;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  margin-top: 150px;
  background-color: aliceblue;
  .flag-img {
    width: 200px;
    height: 150px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  span {
    font-size: 1.2rem;
    color: rgb(89, 89, 89);
    padding-bottom: 15px;
  }
}
</style>
