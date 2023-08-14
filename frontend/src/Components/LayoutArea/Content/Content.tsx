import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";

import Login from "../../Autharea/Login/Login";
 import Logout from "../../Autharea/Logout/Logout";
import Register from "../../Autharea/Register/Register";
import Home from "../../Homearea/Home/Home";
import AddVacation from "../../VacationsArea/AddVacation/AddVacation";
import EditVacation from "../../VacationsArea/EditVacation/EditVacation";
import VacationDetails from "../../VacationsArea/VacationDetails/VacationDetails";
import VacationList2 from "../../VacationsArea/VacationList2/VacationList2";
import VacationsList from "../../VacationsArea/VacationsList/VacationsList";
import VacationsStatistics from "../../VacationsArea/VacationsStatistics/VacationsStatistics";
import PageNotFound from "../PageNotFound/PageNotFound";


function Content(): JSX.Element {
    return (
        <div className="Content">
            <Routes>
                

                {/* Register */}
                <Route path="/register" element={<Register />} />

                {/* Login */}
                <Route path="/login" element={<Login />} />

                {/* Logout */}
                <Route path="/logout" element={<Logout />} />

                {/* Home: */}
                <Route path="/home"  element={<Home />} />


                {/* Vacation List: admin */}
                <Route   path="/vacations" element={<VacationsList  />} />
                {/* Vacation List: users */}
                <Route   path="/vacations/user" element={<VacationList2  />} />

                {/* Vacation Statistics for admin: */}

                <Route   path="/statistic" element={<VacationsStatistics />} />

                {/* Vacation Details: */}
                <Route path="/vacations/details/:vacId" element={<VacationDetails />} />

                {/* Add Vacation: */}
                <Route path="/vacations/new" element={<AddVacation />} />

                {/* Edit Vacation: */}
                <Route path="/vacations/edit/:vacId" element={<EditVacation />} />

                {/* About: */}
                <Route path="/about" element={<About  />} />

                {/* Default Route: */}
                <Route path="/" element={<Navigate to="/home" />} />
                {/* <Route path="/" element={<Navigate to="/login" />} /> */}

                {/* Page Not Found: */}
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </div>
    );
}

export default Content;


