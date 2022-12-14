import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// через createSelector
export const getVisibleContactsSortByName = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    const visibleContactsSortByName = visibleContacts.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return visibleContactsSortByName;
  },
);

// const contactsSelectors = {
//   getContacts,
//   getFilter,
//   getLoading,
//   getVisibleContactsSortByName,
// };

// export default contactsSelectors;
