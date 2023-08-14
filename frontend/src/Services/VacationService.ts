import axios from "axios";
import { VacationModel } from "../Models/VacationModel";
import { appConfig } from "../Utils/Config";
import { store } from "../App/store";

class VacationsService {

    // Get all vacations:
    public async getAllVacations(): Promise<VacationModel[]> {

        let vacations = store.getState().vacations;
        if (vacations.length === 0) {
            const response = await axios.get<VacationModel[]>(appConfig.vacationsUrl); // AJAX
            vacations = response.data;
            vacations = vacations.map((vacation) => {
                vacation.imageUrl = appConfig.assetsUrl + vacation.imageName;
                vacation.imageName = appConfig.imageUrl;

                return vacation;
            })

            store.dispatch({ type: 'vacations/setVacations', payload: vacations });
        }

        return vacations;
    }

    // Get one vacations:
    public async getOneVacation(id: number): Promise<VacationModel> {

        let vacations = store.getState().vacations;

        let vacation = vacations.find(v => v.id === id);

        if (!vacation) {

            const response = await axios.get<VacationModel>(appConfig.vacationsUrl + id ?? 0);

            vacation = response.data;
        }

        return vacation;
    }

    // Add vacation: 
    public async addVacation(vacation: VacationModel): Promise<void> {
        const formData = new FormData();
        formData.append("destination", vacation.destination);
        formData.append("description", vacation.description);
        formData.append("startDate", vacation.startDate);
        formData.append("endDate", vacation.endDate);
        formData.append("price", vacation.price.toString());
        formData.append("image", vacation.image);
    
        try {
            const response = await axios.post<VacationModel>(appConfig.vacationsUrl + "add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            const addedVacation = response.data;
            store.dispatch({ type: "vacations/add", payload: addedVacation });
        } catch (error) {
            console.error(error);
        }
    }
    

// Edit vacation: 
public async updateVacation(vacation: VacationModel): Promise<void> {

    const myFormData = new FormData(); 
    myFormData.append("destination", vacation.destination);
    myFormData.append("description", vacation.description);
    myFormData.append("startDate", vacation.startDate);
    myFormData.append("endDate", vacation.endDate);
    myFormData.append("price", vacation.price.toString());
    myFormData.append("image", vacation.image);

    const response = await axios.put<VacationModel>(`${appConfig.vacationsUrl}edit/${vacation.id}`, myFormData); // Sending object with files.

    const updatedVacation = response.data;

    store.dispatch({ type: 'vacation/edit', payload: updatedVacation });
}


    // Delete vacation: 
      public async deleteVacation(id: number): Promise<void> {
        try {
            await axios.delete<void>(`${appConfig.vacationsUrl}delete/${id}`);

            store.dispatch({ type: 'vacations/delete', payload: id });
        } catch (error) {
            console.error(error);
        }
    }
    

    // Get all vacations:
    public async getAllVacationsFiltered(filter: 'active' | 'coming' | 'all' = 'all'): Promise<VacationModel[]> {

        let vacations = store.getState().vacations;
        if (vacations.length === 0) {
            const response = await axios.get<VacationModel[]>(appConfig.vacationsUrl); // AJAX
            vacations = response.data;
            vacations = vacations.map((vacation) => {
                vacation.imageUrl = appConfig.assetsUrl + vacation.imageName;
                vacation.imageName = appConfig.imageUrl;

                return vacation;
            })

            store.dispatch({ type: 'vacations/setVacations', payload: vacations });
        }

        // Filter vacations:
        switch (filter) {
            case 'active':
                vacations = vacations.filter(v => new Date(v.startDate) < new Date() && new Date(v.endDate) > new Date());
                break;
            case 'coming':
                vacations = vacations.filter(v => new Date(v.startDate) > new Date());
                break;
            default:
                break;
        }

        return vacations;
    }
}



const vacationsService = new VacationsService();

export default vacationsService;
