<template>

  <div class="form-container">
    <div class="form-group">
      <label>Title</label>
      <input type="text" v-model="aPost.title" />
    </div>
    <div class="form-group">
      <label>Body</label>
      <input type="text" v-model="aPost.body" />
    </div>
    <div class="button-group">
      <button>Add</button>
      <button @click="editPost">Edit</button>
      <button>Cancel</button>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';


export default {
  name: 'InputForm',
  props: {

  },
  data() {
    return {
      post: {}
    }
  }
  ,
  methods: {
    editPost() {
      //set apost > updateposts

      this.$store.dispatch('editAPostFromAPI', this.aPost);
    }
  },
  computed: {
    ...mapGetters(['aPost']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-group {
  display: flex;
  justify-items: start;
  margin: 10px;
}

input {
  width: 400px;
}

button {
  margin: 7px;
}
</style>
