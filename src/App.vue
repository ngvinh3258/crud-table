<template>
  <div id="app">
    <div class="crud-table">
      <InputForm />
      <TablePost :header="posts" />
    </div>
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
  display: flex;
  justify-content: center;
}

.crud-table {
  width: 80%;
}
</style>
