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
      <button @click="addNewPostInput" v-if="!input.id">Add</button>
      <button @click="editPost" v-if="input.id">Edit</button>
      <button @click='cancelEdit' v-if="input.id">Cancel</button>
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
      if (this.checkForm()) {
        this.$store.commit('setInput', { title: '', body: '' });
        this.$store.dispatch('addNewPost', data);
      }
    }
  }
}                                                                                       
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-container {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  border-radius: 12px;
}

.form-group {
  display: flex;
  justify-items: start;
  margin: 20px 10px 10px 10px;
}

input {
  width: 400px;
  color: #586068;
  font-size: 16px;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
}

input :focus {
  border: 1px solid rgb(179, 179, 236);
}

input.required {
  border: 1px solid #aa4651;
}

label {
  width: 45px;
  font-size: 16px;
}

button {
  margin: 10px;
  display: inline-block;
  border: unset;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  padding: 3px 12px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 20%);
  transition: box-shadow .35s ease-out;
  background-color: cornflowerblue;
}

p {
  height: 20px;
  color: red;
  font-size: 12px;
  align-self: start !important;
  margin: 5px;
}
</style>
