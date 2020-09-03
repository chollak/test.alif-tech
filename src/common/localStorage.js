const TABLE_CONTACTS = "alif-contacts";

export const getConctacts = () => {
    return window.localStorage.getItem(TABLE_CONTACTS);
};

export const saveContacts = contact => {
    window.localStorage.setItem(TABLE_CONTACTS, contact);
};

export const destroyContacts = () => {
    window.localStorage.removeItem(TABLE_CONTACTS);
};

export default {
    getConctacts,
    saveContacts,
    destroyContacts
};