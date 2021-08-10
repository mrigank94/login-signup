import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Login from "./Login";
import Movies from "./Movies";
import SignUp from "./SignUp";

const Home = () => {
  const history = useHistory();
  if (localStorage.getItem("isLoggedIn") === "true") {
    history.push("/movies");
  }

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/movies" component={Movies} />
      <Redirect to="/login" />
    </Switch>
  );
};

//If user is logged in, he should directly go to Movies - DONE
//If user is not logged in, he should go to login - DONE
//from login, we can go to signup and vice versa - DONE
//movies component will have a logout button we can use to logout - DONE
//after login user should go to movies  -  DONE

export default Home;
