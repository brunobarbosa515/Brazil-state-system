<template>
  <div class="card">
    <h1>components</h1>
    <span>Nome: </span>
    <span>Bruno Barbosa</span>
    <br />
    <span>Data de nascimento: </span>
    <span>01/02/1990</span>
    <br />
    <span>CPF: </span>
    <span>101.087.517-38</span>
    <br />
    <span>Identidade: </span>
    <span>26.762.313-8</span>
  </div>
</template>

<script>
export default {
  name: "CardData",
};
</script>

<style lang="scss" scoped>
.card {
  background-color: rgb(237, 237, 237);
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
