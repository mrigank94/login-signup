import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";

//The component which owns the state should be the one changing it.
//This means that all functions modifying the state should reside in the
//component where the state resides

const Home = () => {
  const [subscribersList, setSubscribersList] = useState([
    { id: 1, name: "Akash", phone: "7391309812" },
    { id: 2, name: "Rushikesh", phone: "9023901232" },
    { id: 3, name: "Puja", phone: "7391309812" },
    { id: 4, name: "Pallavi", phone: "9023901232" },
  ]);

  function handleDelete(id) {
    const filteredSubscribers = subscribersList.filter(
      (contact) => contact.id !== id
    );

    setSubscribersList(filteredSubscribers);
  }

  function handleAdd(name, phone) {
    const newContact = {
      id: subscribersList.length + 1,
      name: name,
      phone: phone,
    };
    const newSubscribersList = [...subscribersList, newContact];
    setSubscribersList(newSubscribersList);
  }

  return (
    <Switch>
      <Route
        path="/add"
        render={() => <AddSubscriber handleAdd={handleAdd} />}
      />
      <Route
        path="/"
        render={() => (
          <ShowSubscribers
            handleDelete={handleDelete}
            subscribersList={subscribersList}
          />
        )}
      />
    </Switch>
  );
};

export default Home;
