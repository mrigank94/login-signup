import { Button } from "@material-ui/core";
import { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "./css/add-subscriber.css";
import { connect } from "react-redux";

const AddSubscriber = (props) => {
  const history = useHistory();

  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  function navigateToHomePage() {
    history.push("/");
  }

  function handleSubmit() {
    props.onAdd(name, phone);
    history.push("/");
  }

  return (
    <>
      <Header heading="ADD SUBSCRIBER" />
      <Button
        style={{ margin: "20px" }}
        variant="outlined"
        onClick={navigateToHomePage}
      >
        BACK
      </Button>
      <ValidatorForm className="subscriber-form" onSubmit={handleSubmit}>
        <TextValidator
          style={{ margin: "20px" }}
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"Enter Name..."}
          validators={["required", "minStringLength: 3"]}
          errorMessages={[
            "Name is required!",
            "Name should be minimum 3 characters!",
          ]}
        />
        <TextValidator
          style={{ margin: "20px" }}
          label="Phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={"Enter Phone..."}
          validators={["required"]}
          errorMessages={["Phone is required!"]}
        />

        <div className="subscriber-info-container">
          <div className="to-add-heading">Subscriber to be added: </div>
          <div className="subscriber-info">Name : {name}</div>
          <div className="subscriber-info">Phone : {phone}</div>
        </div>
        <Button
          style={{ margin: "20px" }}
          type="submit"
          color="primary"
          variant="contained"
        >
          Add Contact
        </Button>
      </ValidatorForm>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    onAdd: function (name, phone) {
      dispatch({
        type: "ADD_SUBSCRIBER",
        payload: { name: name, phone: phone },
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddSubscriber);
