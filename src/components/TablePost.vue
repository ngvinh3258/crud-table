<template>
  <div class="table-post">
    <table>
      <thead>
        <tr>
          <th scope="col" style="width: 20px;">STT</th>
          <th scope="col" style="width: 150px">Title</th>
          <th scope="col">Body</th>
          <th scope="col" style="width: 80px"></th>
          <th scope="col" style="width: 80px"></th>
        </tr>
      </thead>
      <tbody>
        <PostMor v-for="(data, index) in header" :key="index" :stt="index + 1" :data="data" />
      </tbody>
    </table>
  </div>
</template>

<script>
import PostMor from './PostMor.vue'
export default {
  name: 'TablePost',
  components: {
    PostMor,
  },
  props: {
    header: []
  }
}
</script>

<style scoped>
table {
  width: 100%;
}

table,
tr,
th {

  border: 1px solid #000;
}
</style>
