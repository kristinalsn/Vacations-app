
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../../../Services/isLoggedIn";
import authService from "../../../Services/AuthService";

function Home(): JSX.Element {
  const navigate = useNavigate();
  const loggedIn = useSelector(isLoggedIn);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLogoutClick = () => {
    authService.logout();
    navigate("/home");
  };
  return (
    <div className="Home" style={{ position: "relative" }}>
      <h1>Welcome to the Vacations App!</h1>
      <div>
        {loggedIn ? (

          <div  className="container">
           <button className="logout-button"  onClick={handleLogoutClick} >Logout</button>
           </div>
          
        ) : (
          <div className="buttons">

            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

