import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import NewsArticles from "./NewsArticles";
import Posts from "./Posts";

const Home = () => {
  return (
    <Switch>
      <Route path="/posts" component={Posts} />
      <Route path="/" component={NewsArticles} />
    </Switch>
  );
};

//If user is logged in, he should directly go to Movies - DONE
//If user is not logged in, he should go to login - DONE
//from login, we can go to signup and vice versa - DONE
//movies component will have a logout button we can use to logout - DONE
//after login user should go to movies  -  DONE

export default Home;
