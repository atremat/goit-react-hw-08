import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

const filterInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    const visibleContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(nameFilter.trim().toLowerCase());
    });
    return visibleContacts;
  }
);
