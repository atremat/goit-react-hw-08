import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const contactsInitialState = { items: [], loading: false, error: null };

const isPending = (state) => {
  state.loading = true;
  state.error = null;
};

const isRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      //fetch contacts
      .addCase(fetchContacts.pending, isPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, isRejected)
      //add contact
      .addCase(addContact.pending, isPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, isRejected)
      //delete contact
      .addCase(deleteContact.pending, isPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(deleteContact.rejected, isRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
