 import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../App/store";
import "./Menu.css";
import { isLoggedIn } from "../../../Services/isLoggedIn";

function Menu(): JSX.Element {
    const role = useSelector((state: RootState) => state.auth.role);
    const loggedIn = useSelector(isLoggedIn);
  
    return (
      <div className="Menu">
        <NavLink to="/home">Home</NavLink>
  
        {loggedIn && role === "admin" && (
          <>
          
             <NavLink to="/statistic">Statistic</NavLink>
            <NavLink to="/vacations">Vacations</NavLink>
          </>
        )}
  
        {loggedIn && role !== "admin" && (
          <NavLink to="/vacations/user">Vacations </NavLink>
        )}
        
  
        <NavLink to="/about">About</NavLink>
      </div>
    );
  }
  
  export default Menu;

