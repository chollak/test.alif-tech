const TABLE_CONTACTS = "alif-contacts";

export const getContacts = () => {
    return window.localStorage.getItem(TABLE_CONTACTS);
};

export const saveContacts = contact => {
    window.localStorage.setItem(TABLE_CONTACTS, contact);
};

export const destroyContacts = () => {
    window.localStorage.removeItem(TABLE_CONTACTS);
};

export default {
    getContacts,
    saveContacts,
    destroyContacts
};