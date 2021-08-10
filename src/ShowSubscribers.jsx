import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "./css/show-subscribers.css";
import { connect } from "react-redux";

const ShowSubscribers = (props) => {
  const history = useHistory();

  function navigateToAddSubscriber() {
    history.push("/add");
  }

  return (
    <>
      <Header heading="PHONE DIRECTORY" />
      <Button
        style={{ margin: "20px" }}
        color="primary"
        variant="contained"
        onClick={navigateToAddSubscriber}
      >
        Add
      </Button>

      <div className="subscriber-info-container">
        <div className="grid-container">
          <span className="grid-item heading">Name</span>
          <span className="grid-item heading">Phone</span>
        </div>

        {props.subscribersList.map((contact) => {
          return (
            <div key={contact.id} className="grid-container">
              <span className="grid-item">{contact.name}</span>
              <span className="grid-item">{contact.phone}</span>
              <span className="grid-item">
                <Button
                  onClick={function () {
                    props.onDelete(contact.id);
                  }}
                  color="secondary"
                  variant="contained"
                >
                  Delete
                </Button>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

function mapStateToProps(store) {
  return {
    subscribersList: store.subscribersList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: function (id) {
      dispatch({ type: "DELETE_SUBSCRIBER", payload: { id: id } });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowSubscribers);
