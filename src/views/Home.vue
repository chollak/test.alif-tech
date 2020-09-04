<template>
  <div class="home">
    <router-link to="/create" class="btn btn-outline-primary">Create</router-link>
    <hr />
    <input
      type="text"
      class="form-control mb-3"
      placeholder="Enter name to search"
      v-model="search"
    />
    <p class="lead" v-if="contacts==''">There is no contact</p>
    <div class="list-group">
      <router-link
        :to="{ name: 'Read', params: { id: contact.id }}"
        class="list-group-item list-group-item-action"
        v-for="contact in contacts"
        :key="contact.id"
      >
        {{ contact.name }}
        <small class="float-right">view more</small>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    count() {
      return this.$store.getters.getLength;
    },
    getContacts() {
      return this.$store.state.contacts;
    },
    contacts() {
      return this.getContacts.filter(contact => {
        return contact.name.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>
