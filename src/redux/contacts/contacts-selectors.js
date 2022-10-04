export const getContacts = state => state.contacts.items;

export const getContactsFilter = state => state.contacts.filter;

const getVisibleContacts = state => {
  const allContacts = getContacts(state);
  const filter = getContactsFilter(state);

  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );
};

export const getVisibleContactsSortByName = state => {
  const visibleContacts = getVisibleContacts(state);

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
};
