import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer: (state, { payload }) => {
                state.push(payload);
            },
            prepare: (contact) => {
                return {
                    payload: {
                        id: nanoid(),
                        ...contact,
                    },
                };
            },
        },

        removeContact: (state, { payload }) => state.filter(contact => contact.id !== payload)
    },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;