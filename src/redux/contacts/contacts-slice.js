import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contacts-operation";
// import { nanoid } from 'nanoid';

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
            state.loading = true;
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [addContact.pending]: (state) => {
            state.loading = true;
        },
        [addContact.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [deleteContact.pending]: (state) => {
            state.loading = true;
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        [deleteContact.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        // addContact: {
        //     reducer: (state, { payload }) => {
        //         state.push(payload);
        //     },
        //     prepare: (contact) => {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 ...contact,
        //             },
        //         };
        //     },
        // },

        // removeContact: (state, { payload }) => state.filter(contact => contact.id !== payload)
    },
});

// export const {  removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;