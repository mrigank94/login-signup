import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Movies = () => {
  const history = useHistory();

  if (localStorage.getItem("isLoggedIn") !== "true") {
    history.push("/login");
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    history.push("/login");
  }

  return (
    <div>
      Show movies here
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Movies;
