import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";

const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
  contactForEdit: null,
};

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
  reducers: {
    //save {id,name,number}, which we have to edit
    setContactForEdit: (state, action) => {
      state.contactForEdit = action.payload;
    },
  },
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
      .addCase(deleteContact.rejected, isRejected)
      //edit contact
      .addCase(editContact.pending, isPending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;

        state.items = state.items.map((item) => {
          return item.id === action.payload.id
            ? {
                name: action.payload.name,
                id: action.payload.id,
                number: action.payload.number,
              }
            : item;
        });
      })
      .addCase(editContact.rejected, isRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { setContactForEdit } = contactsSlice.actions;
