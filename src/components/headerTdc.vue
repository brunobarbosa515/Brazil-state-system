<template>
  <header>
    <div>
      <router-link to="/"><button>Rio de Janeiro</button></router-link>
      <router-link to="/sao"><button>São Paulo</button></router-link>
      <router-link to="/minas"><button>Minas Gerais</button></router-link>
      <router-link to="/santo"><button>Espírito Santo</button></router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerTdc",
};
</script>

<style lang="scss">
#tdc {
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
      background-color: white;
      color: black;
      width: 140px !important;
      height: 60px !important;
      border-radius: 5px;
      font-size: 1.1rem;
      cursor: pointer;
      &:hover {
        background-color: rgb(241, 241, 241);
      }
      &:active {
        background-color: rgb(255, 250, 244);
      }
    }
  }
}
</style>
