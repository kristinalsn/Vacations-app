import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VacationModel } from "../Models/VacationModel";


const vacationsSlice = createSlice({
    name: 'vacations',
    initialState: [] as VacationModel[],
    reducers: {
        setVacations: (state, action: PayloadAction<VacationModel[]>) => {
            state = [...action.payload];
            return state;
        },
        updateVacation: (state, action: PayloadAction<VacationModel>) => {
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.payload.id) {
                    state[i] = action.payload;
                }
            }
        },
        addVacation: (state, action: PayloadAction<VacationModel>) => {
            state.push(action.payload);
        },
        deleteVacation: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((v) => v.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
})

export const { setVacations, updateVacation, addVacation, deleteVacation } = vacationsSlice.actions;

export default vacationsSlice.reducer;