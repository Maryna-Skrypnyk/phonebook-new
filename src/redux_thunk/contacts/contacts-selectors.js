import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.isLoading;

// через createSelector
const getVisibleContactsSortByName = createSelector(
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

const contactsSelectors = {
  getContacts,
  getFilter,
  getLoading,
  getVisibleContactsSortByName,
};

export default contactsSelectors;

// без createSelector
// export const getVisibleContactsSortByName = state => {
//   const allContacts = getContacts(state);
//     const filter = getContactsFilter(state);
//     const normalizedFilter = filter.toLowerCase();
//     const visibleContacts = allContacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(normalizedFilter),
//     );

//   const visibleContactsSortByName = visibleContacts.sort((a, b) => {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
//   });

//   return visibleContactsSortByName;
// };
