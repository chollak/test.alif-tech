<template>
  <div class="home">
    <router-link to="/create">Create</router-link>
    <hr />
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
  computed: {
    count() {
      return this.$store.getters.getLength;
    },
    contacts() {
      return this.$store.state.contacts;
    }
  },
};
</script>
