
//to login as admin : email: admin@gmail.com, password: admin

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../App/store";
import { isLoggedIn } from "../../../Services/isLoggedIn";

function AuthMenu(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const loggedIn = useSelector(isLoggedIn);

  return (
    <div className="AuthMenu">
      <div>
        {loggedIn ? (
          <>
            <span className="user-greeting">
              Hello {user?.firstName} {user?.lastName}
            </span>
          </>
        ) : (
          <>
            <span className="user-greeting" >Hello Guest</span>
            <div className="right-menu">
              <NavLink to="/login" style={{ color: "white" }}>Login</NavLink>
              <span> | </span>
              <NavLink to="/register" style={{ color: "white" }}>Register</NavLink>   
                       </div>
          </>
        )}
      </div>
      {loggedIn && <NavLink style={{color:"red"}} to="/logout">Logout</NavLink>}
    </div>
  );
}

export default AuthMenu;

