<template>
  <div class="card">
    <h1>components</h1>
    <span>Academia: </span>
    <span>2 por dia</span>
    <br />
    <span>Corrida: </span>
    <span>28 quilometros por semana</span>
    <br />
    <span>Andar de bike: </span>
    <span>40 quilometros por semana</span>
    <br />
    <span>Sexo: </span>
    <span>6 vezes por semana</span>
  </div>
</template>

<script>
export default {
  name: "CardHobbie",
};
</script>

<style lang="scss" scoped>
.card {
  background-color: aliceblue;
  padding: 3rem 2rem;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  margin-top: 150px;
  span {
    font-size: 1.2rem;
    color: rgb(89, 89, 89);
    padding-bottom: 15px;
  }
}
</style>
