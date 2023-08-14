import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
     vacationDescriptionValidation,
      vacationDestinationValidation,
       vacationEndDateValidation, 
       VacationModel,
        vacationPriceValidation,
         vacationStartDateValidation } from "../../../Models/VacationModel";
import vacationsService from "../../../Services/VacationService";
import "./EditVacation.css";

function EditVacation(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<VacationModel>();
    const navigate = useNavigate();
    const {vacId} = useParams<{vacId?: string } >();

    useEffect(() => {
        const id = parseInt(vacId ?? ""); 
        vacationsService.getOneVacation(id)
            .then(vacation => {
                setValue("id", vacation.id);
                setValue("destination", vacation.destination);
                setValue("description", vacation.description);
                setValue("startDate", vacation.startDate);
                setValue("endDate", vacation.endDate);
                setValue("price", vacation.price);
                // setValue("image", vacation.imageName);

            })
            .catch(err => alert(err.message));
    }, [vacId, setValue]);

    const [image, setImage] = useState<File | null>(null);

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    }

    function formatDateToMySQL(date: Date | string): string {
        const d = new Date(date);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    }

    async function send(vacation: VacationModel) {
        try {
            if (image) {
                vacation.image = image;
            }
            vacation.startDate = formatDateToMySQL(vacation.startDate);
            vacation.endDate = formatDateToMySQL(vacation.endDate);
            await vacationsService.updateVacation(vacation);
            alert("Vacation has been successfully updated");
            navigate("/vacations");
        } catch (err: any) {
            alert(err.message);
        }
    }
        return (
        <div className="EditVacation Box">

            <form onSubmit={handleSubmit(send)}>

                <h2>Edit Vacation</h2>

                <input type="hidden" {...register("id")} />

                <label>Destination: </label>
                <input type="text" {...register("destination", vacationDestinationValidation)} />
                <span className="Error">{formState.errors.destination?.message}</span>

                <label>Description: </label>
                <input type="text" {...register("description", vacationDescriptionValidation)} />
                <span className="Error">{formState.errors.description?.message}</span>

                <label>Start Date: </label>
                <input type="text" {...register("startDate", vacationStartDateValidation)} />
                <span className="Error">{formState.errors.startDate?.message}</span>
                
                <label>End Date: </label>
                <input type="text" {...register("endDate", vacationEndDateValidation)} />
                <span className="Error">{formState.errors.endDate?.message}</span>



                <label>Price: </label>
                <input type="number" {...register("price", vacationPriceValidation)} />
                <span className="Error">{formState.errors.price?.message}</span>


                <label>Image: </label>
                <input type="file" accept="image/*" onChange={handleImageChange} />

                <button>Update</button>
                <NavLink className="back-link" to="/vacations">Back</NavLink>

            </form>

        </div>
    );
}

export default EditVacation;

