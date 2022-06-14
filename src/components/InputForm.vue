<template>

  <div class="form-container">
    <div class="form-group">
      <label>Title</label>
      <div> <input type="text" v-model="input.title" :class="[error.title !== undefined ? requiredClass : '']" />
        <p v-if="error.title">{{ error.title }}</p>
      </div>

    </div>

    <div class="form-group">
      <label>Body</label>
      <div> <input type="text" v-model="input.body" :class="[error.body !== undefined ? requiredClass : '']" />
        <p v-if="error.body">{{ error.body }}</p>
      </div>

    </div>

    <div class="button-group">
      <button @click="addNewPostInput">Add</button>
      <button @click="editPost">Edit</button>
      <button @click='cancelEdit'>Cancel</button>
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'InputForm',
  data() {
    return {
      error: [],
      requiredClass: 'required',
    }
  },
  computed: {
    ...mapGetters(['input',]),
    ...mapActions(['addNewPost'])
  },
  methods: {
    checkForm() {
      let count = 0;
      this.error = [];
      if (!this.input.title || this.input.title === '') { this.error.title = "The field is required!"; count++; }
      if (!this.input.body || this.input.body === '') { this.error.body = "The field is required!"; count++; }
      if (count !== 0) {
        return false;
      }
      if (this.input.body && this.input.title) { return true; }
      return true;
    },
    editPost() {
      this.error = [];
      const id = this.$store.getters.input.id;
      const title = this.input.title;
      const body = this.input.body;
      this.$store.dispatch('edistAPostFromAPI', {
        id: id,
        title: title,
        body: body,
      });
    },
    cancelEdit() {
      this.error = [];
      this.$store.commit('setInput', { title: '', body: '' })
    },
    addNewPostInput() {

      const data = {
        id: uuidv4(),
        title: this.input.title,
        body: this.input.body
      }
      // this.$store.commit('setInput', { title: '', body: '' });
      if (this.checkForm()) {
        this.$store.dispatch('addNewPost', data);
      }

    }
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

input.required {
  border: 1px solid #aa4651;
}

label {
  width: 45px;
}

button {
  margin: 7px;
}

p {
  height: 20px;
  color: red;
  font-size: 12px;
  align-self: start !important;
  margin: 5px;
}
</style>
