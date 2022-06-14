<template>

  <tr class="post-container">
    <td>{{ stt }}</td>
    <td>{{ data.title }}</td>
    <td>{{ data.body }}</td>
    <td scope="row">
      <button type="button" class="button-edit" @click="handleEdit(data.id)">
        Update
      </button>
    </td>
    <td scope="row">
      <button type="button" class="button-delete" @click="handleDelete(data.id)">
        Delete
      </button>
    </td>
  </tr>

</template>

<script>

export default {
  name: 'PostMor',
  props: {
    stt: Number,
    data: {}
  }, methods: {

    handleEdit(id) {
      this.$store.dispatch('getAPostFromApi', id);
    }
    ,
    handleDelete(id) {
      this.$store.dispatch('deletePostFromAPI', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-container,
tr,
td {
  border: 1px solid #000;
}
</style>
