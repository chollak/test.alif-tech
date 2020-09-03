<template>
  <div class="update">
    <h6>
      <router-link :to="{name:'Home'}">Back to home</router-link>
    </h6>
    <div class="contact" v-if="updateContact">
      <h3 class="mb-4">Update contact</h3>

      <form @submit.prevent="save()">
        <div class="form-group">
          <label for="name mb-5">Name</label>
          <input type="text" class="form-control" id="name" required v-model="updateContact.name" />
        </div>
        <div class="form-group mb-5 mt-5">
          <label for="phone" style="width:100%">
            Phone
            <small class="float-right">
              <div class="btn btn-sm btn-primary" @click="add('phones')">+</div>
            </small>
          </label>
          <div class="d-flex mb-1" v-for="(phone,index) in updateContact.phones" :key="index">
            <input
              type="text"
              class="form-control"
              :placeholder="`${index+1} phone`"
              id="phone"
              required
              v-model="updateContact.phones[index]"
            />
            <div class="d-flex ml-3">
              <div class="m-auto btn btn-sm btn-danger" @click="remove('phones',index)">x</div>
            </div>
          </div>
        </div>
        <div class="form-group mb-5 mt-5">
          <label for="address" style="width:100%">
            Address
            <small class="float-right">
              <div class="btn btn-sm btn-primary" @click="add('addresses')">+</div>
            </small>
          </label>
          <div class="d-flex mb-1" v-for="(address,index) in updateContact.addresses" :key="index">
            <input
              type="text"
              class="form-control"
              :placeholder="`${index+1} address`"
              id="address"
              required
              v-model="updateContact.addresses[index]"
            />
            <div class="d-flex ml-3">
              <div class="m-auto btn btn-sm btn-danger" @click="remove('addresses',index)">x</div>
            </div>
          </div>
        </div>
        <div class="form-group mb-5 mt-5">
          <label for="email" style="width:100%">
            Email
            <small class="float-right">
              <div class="btn btn-sm btn-primary" @click="add('emails')">+</div>
            </small>
          </label>
          <div class="d-flex mb-1" v-for="(email,index) in updateContact.emails" :key="index">
            <input
              type="email"
              class="form-control"
              :placeholder="`${index+1} email`"
              id="email"
              required
              v-model="updateContact.emails[index]"
            />
            <div class="d-flex ml-3">
              <div class="m-auto btn btn-sm btn-danger" @click="remove('emails',index)">x</div>
            </div>
          </div>
        </div>
        <button class="btn btn-sm btn-success">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updateContact: null
    };
  },
  mounted() {
    if (!this.contact) {
      this.$router.push({ name: "About" });
    }
    this.updateContact = JSON.parse(JSON.stringify(this.contact));
  },
  computed: {
    contact() {
      return this.$store.getters.getContact(Number(this.$route.params.id));
    }
  },
  methods: {
    save() {
      this.$store.dispatch("updateContact", this.updateContact);
      this.$router.push({
        name: "Read",
        params: { id: Number(this.$route.params.id) }
      });
    },
    add(type) {
      if (
        this.updateContact[type].length &&
        this.updateContact[type][this.updateContact[type].length - 1] == ""
      ) {
        return;
      }
      this.updateContact[type].push("");
    },
    remove(type, index) {
      if (this.updateContact[type].length === 1) {
        this.updateContact[type] = [""];
        return;
      }
      this.updateContact[type].splice(index, 1);
    }
  }
};
</script>

<style>
</style>