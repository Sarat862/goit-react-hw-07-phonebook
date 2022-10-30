export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});

export const getFilteredContacts = ({ filter, contacts }) => {

    if (!filter) {
      return contacts.items;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.items.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    })  
    return filteredContacts;
  }