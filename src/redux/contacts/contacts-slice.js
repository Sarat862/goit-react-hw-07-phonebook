import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contacts-operation";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            // state.loading = true;
            return {
                ...state,
                loading: true,
            }
        },
        [fetchContacts.fulfilled]: (state, action) => {
            // state.loading = false;
            // state.error = null;
            // state.items = action.payload;
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload,
            }
        },
        [fetchContacts.rejected]: (state, action) => {
            // state.loading = false;
            // state.error = action.payload;
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        },

        [addContact.pending]: (state) => {
            // state.loading = true;
            return {
                ...state,
                loading: true,
            }
        },
        [addContact.fulfilled]: (state, action) => {
            // state.loading = false;
            // state.error = null;
            // state.items.push(action.payload);
            return {
                ...state,
                loading: false,
                error:null,
                items: [...state.items, action.payload],
            }
        },
        [addContact.rejected]: (state, action) => {
            // state.loading = false;
            // state.error = action.payload;
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        },

        [deleteContact.pending]: (state) => {
            // state.loading = true;
            return {
                ...state,
                loading: true,
            }
        },
        [deleteContact.fulfilled]: (state, action) => {
            // state.loading = false;
            // state.error = null;
            // state.items = state.items.filter(item => item.id !== action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                items: state.items.filter(item => item.id !== action.payload),
            }
        },
        [deleteContact.rejected]: (state, action) => {
            // state.loading = false;
            // state.error = action.payload;
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        },
    },
});

export default contactsSlice.reducer;