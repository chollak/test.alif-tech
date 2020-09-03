<template>
  <div class="create">
    <h6>
      <router-link :to="{name:'Home'}">Back to home</router-link>
    </h6>
    <h3>Create contact</h3>
    <hr />
    <form @submit.prevent="save()">
      <div class="form-group">
        <label for="name mb-5">Name</label>
        <input type="text" class="form-control" id="name" required v-model="newContact.name" />
      </div>
      <div class="form-group mb-5 mt-5">
        <label for="phone" style="width:100%">
          Phone
          <small class="float-right">
            <div class="btn btn-sm btn-primary" @click="add('phones')">+</div>
          </small>
        </label>
        <div class="d-flex mb-1" v-for="(phone,index) in newContact.phones" :key="index">
          <input
            type="text"
            class="form-control"
            :placeholder="`${index+1} phone`"
            id="phone"
            required
            v-model="newContact.phones[index]"
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
        <div class="d-flex mb-1" v-for="(address,index) in newContact.addresses" :key="index">
          <input
            type="text"
            class="form-control"
            :placeholder="`${index+1} address`"
            id="address"
            required
            v-model="newContact.addresses[index]"
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
        <div class="d-flex mb-1" v-for="(email,index) in newContact.emails" :key="index">
          <input
            type="email"
            class="form-control"
            :placeholder="`${index+1} email`"
            id="email"
            required
            v-model="newContact.emails[index]"
          />
          <div class="d-flex ml-3">
            <div class="m-auto btn btn-sm btn-danger" @click="remove('emails',index)">x</div>
          </div>
        </div>
      </div>
      <button class="btn btn-sm btn-success">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContact: {
        id: null,
        name: "",
        phones: [""],
        addresses: [""],
        emails: [""]
      }
    };
  },
  methods: {
    save() {
      this.newContact.id = this.$store.getters.getLength;
      this.$store.dispatch("addContact", this.newContact);
      this.$router.go();
    },
    add(type) {
      if (
        this.newContact[type].length &&
        this.newContact[type][this.newContact[type].length - 1] == ""
      ) {
        return;
      }
      this.newContact[type].push("");
    },
    remove(type, index) {
      if (this.newContact[type].length === 1) {
        this.newContact[type] = [""];
        return;
      }
      this.newContact[type].splice(index, 1);
    }
  }
};
</script>

<style>
</style>