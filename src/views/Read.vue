<template>
  <div class="read">
    <h6>
      <router-link :to="{name:'Home'}">Back to home</router-link>
    </h6>
    <div class="contact" v-if="contact">
      <h3 class="mb-4">
        {{ contact.name }}
        <div class="float-right btn btn-sm btn-danger" @click="deleteContact(contact.id)">X</div>
        <router-link
          :to="{name:'Update',params:{id:contact.id}}"
          class="float-right btn btn-sm btn-primary mr-2"
        >Edit</router-link>
      </h3>

      <h6>Phone</h6>
      <ul class="list-group mb-3">
        <li class="list-group-item" v-for="(phone,index) in contact.phones" :key="index">{{ phone }}</li>
      </ul>
      <h6>Address</h6>
      <ul class="list-group mb-3">
        <li
          class="list-group-item"
          v-for="(address,index) in contact.addresses"
          :key="index"
        >{{ address }}</li>
      </ul>
      <h6>Email</h6>
      <ul class="list-group mb-3">
        <li class="list-group-item" v-for="(email,index) in contact.emails" :key="index">{{ email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.contact) {
      this.$router.push({ name: "About" });
    }
  },
  computed: {
    contact() {
      return this.$store.getters.getContact(Number(this.$route.params.id));
    }
  },
  methods: {
    deleteContact(id) {
      let sure = confirm("Are you sure ? ");
      if (sure) {
        this.$store.dispatch("deleteContact", id);
        this.$router.push({ name: "Home" });
      }
    }
  }
};
</script>

<style>
</style>