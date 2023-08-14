import AuthMenu from "../../Autharea/AuthMenu/AuthMenu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <header className="Header">
        <h1>Vacations App</h1>
        <AuthMenu />
      </header>
    );
    
}

export default Header;


