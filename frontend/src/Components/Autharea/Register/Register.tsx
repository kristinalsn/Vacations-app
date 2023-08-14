import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { UserModel } from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import "./Register.css";

function Register(): JSX.Element {

    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await authService.register(user);
            alert("Welcome!");
            navigate("/vacations/user");
        }
        catch(err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Register Box">

            <form onSubmit={handleSubmit(send)}>

                <h2>Register</h2>

                <label>First name: </label>
                <input type="text" {...register("firstName", { required: true })} />

                <label>Last name: </label>
                <input type="text" {...register("lastName", { required: true })} />

                <label>Username: </label>
                <input
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    })}
                />

                <label>Password: </label>
                <input type="password" {...register("password", { required: true, minLength: 4 })} />



                <button type="submit">Register</button>
                <p>Already amember?</p>
                <NavLink to="/login">Login</NavLink>


            </form>

        </div>
    );
}

export default Register;

