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
    },
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

  border: 1px solid white;
  border-collapse: collapse;
  padding: 5px;
}

button {
  margin-top: 10px;
  display: inline-block;
  border: unset;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(81, 227, 227);
  padding: 3px 12px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
  transition: box-shadow .35s ease-out;
}
</style>
