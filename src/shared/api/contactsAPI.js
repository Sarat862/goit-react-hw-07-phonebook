import axios from "axios";

const instanceContacts = axios.create({
    baseURL: "https://635bba6baa7c3f113dc4a744.mockapi.io/api/contacts",
});

export const getContacts = async() => {
    const response = await instanceContacts.get("/");
    return response.data;
}

export const addContact = async (data) => {
    const response = await instanceContacts.post("/", data);
    return response.data;
}

export const deleteContact = async (id) => {
    const response = await instanceContacts.delete(`/${id}`);
    return response.data;
}