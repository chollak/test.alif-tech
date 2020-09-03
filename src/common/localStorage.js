const TABLE_CONTACTS = "alif-contacts";

export const getToken = () => {
    return window.localStorage.getItem(TABLE_CONTACTS);
};

export const saveToken = token => {
    window.localStorage.setItem(TABLE_CONTACTS, token);
};

export const destroyToken = () => {
    window.localStorage.removeItem(TABLE_CONTACTS);
};

export default {
    getToken,
    saveToken,
    destroyToken
};