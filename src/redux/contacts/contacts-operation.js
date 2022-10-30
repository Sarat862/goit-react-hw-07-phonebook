import * as api from "shared/api/contactsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

function isDublicate({ name }, contacts) {
    const result = contacts.find((contact) => contact.name === name);
    return result;
}

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (text, thunkAPI) => {
        try {
            const result = await api.addContact(text);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
    {
        condition: (data, { getState }) => {
            const contacts = getState();
            if (isDublicate(data, contacts.items)) {
                return alert(`${data.name} is already in contacts.`);
            }
        }
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {
            await api.deleteContact(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)