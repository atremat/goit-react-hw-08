import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, valueFilter) => {
    const visibleContacts = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(valueFilter.trim().toLowerCase()) ||
        number.includes(valueFilter.trim())
      );
    });
    return visibleContacts;
  }
);
