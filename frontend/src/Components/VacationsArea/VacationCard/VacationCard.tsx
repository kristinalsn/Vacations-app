
import { VacationModel } from "../../../Models/VacationModel";
import "./VacationCard.css";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import vacationsService from "../../../Services/VacationService";

interface VacationCardProps {
    vacation: VacationModel;
}

function VacationCard({ vacation }: VacationCardProps): JSX.Element {
    // const dispatch = useDispatch();

    const handleDeleteClick = async () => {
        if (window.confirm("Are you sure you want to delete this vacation?")) {
          console.log("Deleting vacation with id:", vacation.id);
          try {
            await vacationsService.deleteVacation(vacation.id ?? undefined);
          } catch (err) {
            console.error("Error deleting vacation:", err);
          }
        }
      };

    console.log("Rendering vacation card with vacation:", vacation);

    return (
        <Card className="VacationCard Box" style={{ width: '18rem' }}>
            <Card.Img src={vacation.imageName + vacation.id} alt={vacation.destination} />
            <Card.Body>
                <Card.Title><NavLink to={"/vacations/details/" + vacation.id}>{vacation.destination} </NavLink></Card.Title>
                <div >
                    <h5>{vacation.description.substring(0, 200)}...</h5>
                </div>
                <div>
                    <h3>{vacation.startDate && vacation.startDate.substring(0, 10)} / {vacation.endDate && vacation.endDate.substring(0, 10)}</h3>
                </div>
                <div>
                    <h3>${vacation.price}</h3>
                </div>

                <div className="btn">
                    <Button style={{color:"blue"}} ><NavLink to={"/vacations/edit/" + vacation?.id}>Edit</NavLink></Button>
                    <Button style={{color:"red"}}  onClick={handleDeleteClick}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default VacationCard;
