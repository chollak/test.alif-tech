import Vue from 'vue'
import Vuex from 'vuex'
import ls from '@/common/localStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
  },
  getters: {
    getContact: state => id => {
      return state.contacts.find(contact => contact.id === id)
    },
    getLength: state => state.contacts.length
  },
  mutations: {
    SET_CONTACTS: (state, payload) => {
      state.contacts = payload
    },
    SAVE_CONTACTS: (state) => {
      ls.saveContacts(JSON.stringify(state.contacts))
    },
    ADD_CONTACT: (state, payload) => {
      state.contacts.push(payload)
    },
    UPDATE_CONTACT: (state, payload) => {
      state.contacts[state.contacts.findIndex(contact => contact.id == payload.id)] = payload
    },
    DELETE_CONTACT: (state, payload) => {
      state.contacts.splice(state.contacts.findIndex(contact => contact.id == payload), 1)
    }
  },
  actions: {
    addContact: ({
      commit
    }, contact) => {
      commit("ADD_CONTACT", contact)
      commit("SAVE_CONTACTS")
    },
    updateContact: ({
      commit
    }, contact) => {
      commit("UPDATE_CONTACT", contact)
      commit("SAVE_CONTACTS")
    },
    deleteContact: ({
      commit
    }, id) => {
      commit("DELETE_CONTACT", id)
      commit("SAVE_CONTACTS")
    },
    setContacts: ({
      commit
    }) => {
      commit("SET_CONTACTS", ls.getContacts())
    }
  },
  modules: {}
})