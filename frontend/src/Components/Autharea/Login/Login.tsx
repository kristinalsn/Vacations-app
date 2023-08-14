import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import authService from "../../../Services/AuthService";
import "./Login.css";

//to login as admin : email: admin@gmail.com, password: admin

type CredentialsModel = {
    email: string;
    password: string;
  };
  
  function Login(): JSX.Element {
    const { register, handleSubmit } = useForm<CredentialsModel>();
    const navigate = useNavigate();
  
    async function send(credentials: CredentialsModel) {
      try {
        await authService.login(credentials);
        alert("Welcome Back!");
        navigate("/home");

      }
      catch(err: any) {
        alert(err.message);
      }
    }
  
    return (
      <div className="Login Box">
        <form onSubmit={handleSubmit(send)}>
          <h2>Login</h2>
          <label>Email: </label>
          <input
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    })}
                />

          <label>Password: </label>
          <input type="password" {...register("password", { required: true, minLength: 4 })} />

          <button>Login</button>
          <p>Don't Have Account</p>
          <NavLink to="/register">Register Now</NavLink>

        </form>
      </div>
    );
  }
  
  export default Login;