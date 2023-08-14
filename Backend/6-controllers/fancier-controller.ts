import express from "express";
import {  getAllVacationsLikesStatistic, getFavoritesByUserId, likedOrNotLikedVacation } from "../5-logic/FancierLogic";

export const FancierRoute = express.Router();



    FancierRoute.post('/toggle-like', async (req: any, res: any) => { 
    const vacationId = parseInt(req.body.vacationId);
    const userId = parseInt(req.body.userId);
  
    try {
        if (!userId || !vacationId) {
            throw new Error('Invalid request parameters');
        }
        await likedOrNotLikedVacation(userId, vacationId);
        res.status(200).json({ success: true });
    } catch (e) {
        res.status(400).json(e);
    }
  });



FancierRoute.get('/likes/statistic',async (req,res)=>{
    try{
        const response = await getAllVacationsLikesStatistic();
        res.status(200).json(response);
    }catch(e){
        res.status(400).json(e)
    }
})
FancierRoute.get('/likes/all',async (req,res)=>{
    try{
        const response = await getAllVacationsLikesStatistic();

        res.status(200).json(response);
    }catch(e){
        res.status(400).json(e)
    }
})

FancierRoute.get('/likes/:id([0-9]+)',async (req, res, next) => {
    const id = req.params.id;
    const response = await getFavoritesByUserId(+id);
    res.json(response);

})


export default FancierRoute;