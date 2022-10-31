import * as api from "shared/api/contactsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

function isDublicate({ name }, contacts) {
    const normalizedName = name.toLowerCase();
    const result = contacts.find((contact) => contact.name.toLowerCase() === normalizedName);
    return Boolean(result);
}

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const data = await api.getContacts();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (data, thunkAPI) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
    {
        condition: (data, { getState }, thunkAPI) => {
            const {contacts} = getState();
            if (isDublicate(data, contacts.items)) {
                alert(`${data.name} is already in contacts.`);
                return thunkAPI.rejectWithValue;
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
            return thunkAPI.rejectWithValue(error);
        }
    }
)