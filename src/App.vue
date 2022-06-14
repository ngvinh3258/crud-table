<template>
  <div id="app">
    <InputForm />
    <TablePost :header="posts" />
  </div>
</template>

<script>
import TablePost from './components/TablePost.vue'
import { mapGetters } from 'vuex';
import InputForm from './components/InputForm.vue';
export default {
  name: 'App',
  components: {
    TablePost,
    InputForm
  },
  computed: {
    ...mapGetters(['posts']),
  }, created() {
    this.$store.dispatch('getPostFromAPI')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
