 import { useEffect, useState } from "react";
import { NavLink,  useParams } from "react-router-dom";
import { VacationModel } from "../../../Models/VacationModel";
import vacationsService from "../../../Services/VacationService";
import "./VacationDetails.css";

function VacationDetails(): JSX.Element {
    const {vacId} = useParams<{vacId?: string } >();

    const [vacation, setVacation] = useState<VacationModel>();
    // const navigate = useNavigate();

    useEffect(() => {
        const id = parseInt(vacId ?? ""); 
        vacationsService.getOneVacation(id)
            .then(vacation => setVacation(vacation))
            .catch(err => alert("Error: " + err.message));
    }, [vacId]);


    return (
        <div className="VacationDetails">

            <h2>Vacation Details</h2>

            {vacation &&
                <>
                    <h3>DESTINATION: {vacation.destination}</h3>
                    <h3>DESCRIPTION: {vacation.description}</h3>
                    <h3>START DATE: {vacation.startDate.substring(0,10)}</h3>
                    <h3>END DATE: {vacation.endDate.substring(0,10)}</h3>
                    <h3>PRICE: {vacation.price}</h3>

                    <img  src={vacation.imageName + vacation.id} alt={vacation.destination} />
                </>
            }

            <br />
            <br />

            <NavLink to="/vacations">Back</NavLink>
        </div>
    );
}

export default VacationDetails;
