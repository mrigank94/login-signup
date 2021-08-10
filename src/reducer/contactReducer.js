const initialState = {
  subscribersList: [
    { id: 1, name: "Akash", phone: "7391309812" },
    { id: 2, name: "Rushikesh", phone: "9023901232" },
    { id: 3, name: "Puja", phone: "7391309812" },
    { id: 4, name: "Pallavi", phone: "9023901232" },
  ],
};

export default function contactReducer(store = initialState, action) {
  switch (action.type) {
    case "ADD_SUBSCRIBER":
      const newContact = {
        id: store.subscribersList.length + 1,
        name: action.payload.name,
        phone: action.payload.phone,
      };
      return {
        ...store,
        subscribersList: [...store.subscribersList, newContact],
      };
    case "DELETE_SUBSCRIBER":
      const filteredSubscribersList = store.subscribersList.filter(
        (contact) => contact.id !== action.payload.id
      );
      return { ...store, subscribersList: filteredSubscribersList };
    default:
      return store;
  }
}
