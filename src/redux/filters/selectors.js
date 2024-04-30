import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

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
