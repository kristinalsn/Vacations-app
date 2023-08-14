import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { vacationDescriptionValidation, vacationDestinationValidation, vacationEndDateValidation, VacationModel, vacationPriceValidation, vacationStartDateValidation } from "../../../Models/VacationModel";
import vacationsService from "../../../Services/VacationService";
import "./AddVacation.css";


function AddVacation(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<VacationModel>();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File>();

  async function onSubmit(formData: VacationModel) {
    const image = selectedFile;
  
    if (!image) {
      alert("Please select an image");
      return;
    }
  
    const vacation: VacationModel = {
      destination: formData.destination,
      description: formData.description,
      startDate: formData.startDate,
      endDate: formData.endDate,
      price: +formData.price,
      imageName: image.name,
      image: image,
      imageUrl: "",
      id: 0,
      fancierCount: 0
    };
  
    try {
      await vacationsService.addVacation(vacation);
      alert("Vacation has been successfully added");
      navigate("/vacations");
    } catch (err: any) {
      alert(err.message);
    }
  }
  return (
    <div className="AddVacation Box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add Vacation</h2>
        <label>Destination: </label>
        <input type="text" {...register("destination",vacationDestinationValidation)} />
        <span className="Error">{formState.errors.destination?.message}</span>

        <label>Description: </label>
        <input type="text" {...register("description", vacationDescriptionValidation)} />
        <span className="Error">{formState.errors.description?.message}</span>

        <label>Start Date: </label>
        <input type="date" {...register("startDate", vacationStartDateValidation)} />
        <span className="Error">{formState.errors.startDate?.message}</span>

        <label>End Date: </label>
        <input type="date" {...register("endDate", vacationEndDateValidation)} />
        <span className="Error">{formState.errors.endDate?.message}</span>

        <label>Price: </label>
        <input type="number" {...register("price", vacationPriceValidation)} />
        <span className="Error">{formState.errors.price?.message}</span>

        <label>Image: </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files) {
              setSelectedFile(e.target.files[0]);
            }
          }}
        />

        <button type="submit">Add</button>
        <NavLink className="back-link" to="/vacations">Back</NavLink>

      </form>
    </div>
  );
}

export default AddVacation;