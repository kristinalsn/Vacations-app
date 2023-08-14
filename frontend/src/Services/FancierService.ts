


import axios from "axios";
import { VacationModel } from "../Models/VacationModel";
import { appConfig } from "../Utils/Config";
import { store } from "../App/store";

class FancierService {

    public async likedOrNotLikedVacation(): Promise<VacationModel[]> {

        let vacations = store.getState().vacations;
        if (vacations.length === 0) {
            const response = await axios.get<VacationModel[]>(appConfig.likesUrl); 
            vacations = response.data;
            vacations= vacations.map((vacation)=> {
                return vacation;
            })

            store.dispatch({ type: 'likes/setLikes', payload: vacations });
        }

        return vacations;
    }

    public async getAllVacationsLikesStatistic(): Promise<VacationModel[]> {

        let vacations = store.getState().vacations;
        if (vacations.length === 0) {
            const response = await axios.get<VacationModel[]>(appConfig.likesStatisticUrl); 
            vacations = response.data;
            vacations= vacations.map((vacation)=> {
                return vacation;
            })

            store.dispatch({ type: 'likesStatistic/setLikesStatistic', payload: vacations });
        }

        return vacations;
    }

    public async getAllVacationsLikes(): Promise<VacationModel[]> {

        let vacations = store.getState().vacations;
        if (vacations.length === 0) {
            const response = await axios.get<VacationModel[]>(appConfig.likesStatisticUrl); 

            vacations = response.data;
            vacations= vacations.map((vacation)=> {
                return vacation;
            })

            store.dispatch({ type: 'allLikes/setAllLikes', payload: vacations });
        }

        return vacations;
    }

    public async  getFavoritesByUserId(id: number): Promise<VacationModel[]> {
        const response = await axios.get<VacationModel[]>(`${appConfig.likesUrl}likes/${id}`);
        return response.data;
      }

    

    public async toggleLike(userId: number, vacationId: number): Promise<void> {
        const token = localStorage.getItem('token');
        await axios.post(`${appConfig.likesUrl}toggle-like`, { userId, vacationId }, { headers: { Authorization: token } });
        store.dispatch({ type: 'likes/toggleLike', payload: vacationId });
    }
    

    
}


const fancierService = new FancierService();

export default fancierService;
