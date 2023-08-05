<template>
  <div class="main-hobbie-page">
    <h1>Página de Hobbies</h1>
    <CardHobbie />
  </div>
</template>

<script>
import CardHobbie from "@/components/CardHobbie.vue";
export default {
  name: "HobbiePage",
  components: {
    CardHobbie,
  },
};
</script>

<style lang="scss">
.main-hobbie-page {
  width: 100%;
  height: calc(100vh - 100px);
  background-color: yellowgreen;
}
</style>
