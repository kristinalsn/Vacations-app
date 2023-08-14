import path from 'path';
import express, { NextFunction, Response, Request, request } from 'express';
import { addVacation, deleteVacation, editVacation, getAllActiveVacationsLikes, getAllVacations, getCommingVacationsLikes, getImageName, getVacationById, getVacationsWhatILike } from '../5-logic/VacationLogic';
import { ResourceNotFoundError } from '../4-models/Errors/ResourceNotFoundError';

export const VacationRoute = express.Router();

VacationRoute.get('/vacations', async (req, res, next) => {
  const vacations = await getAllVacations();
  const vacationsWithImages = vacations.map(vacation => ({
    ...vacation,
    imageUrl: '/images/' + vacation.imageName,
  }));
  res.json(vacationsWithImages);

}
)

VacationRoute.get('/vacations/images/:id([0-9]+)', async (req, res, next) => {
  try {
    const id = req.params.id;
    const vacImage = await getImageName(+id);

    res.sendFile(path.resolve(__dirname, '../1-assets/vacImages/' + vacImage.imageName));
  } catch (e) {
    console.log(e);

    next(new ResourceNotFoundError());
  }
})

VacationRoute.get('/vacations/:id([0-9]+)', async (req, res, next) => {
  const id = req.params.id;
  const response = await getVacationById(+id);
  res.json(response);
})


VacationRoute.post('/vacations/add', async (req: any, res: any) => {
  const vacation = req.body;
  if (!req.files || !req.files.image) {
    res.status(400).json({ message: 'Image not provided' });
    console.log(req.files);
    return;
  }

  const imageFile = req.files.image;
  const imageName = imageFile.name;

  const imagePath = path.join(__dirname, '..', '1-assets', 'vacImages', imageName);
  console.log(imageName, imagePath);
  imageFile.mv(imagePath, (error: any) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      vacation.imageName = imageName;
      addVacation(vacation)
        .then(() => res.sendStatus(200))
        .catch((error) => {
          console.log(error);
          res.sendStatus(500);
        });
    }
  });
});


VacationRoute.delete('/vacations/delete/:id([0-9]+)', async (req: any, res: any) => {
  const id = req.params.id;
  try {
    const response = await deleteVacation(+id);
    res.status(200).json(response);
  } catch (e) {
    res.status(400).json(e)
  }
})

VacationRoute.put('/vacations/edit/:id([0-9]+)', async (req: any, res: any) => {
  const vacation = req.body;
  const id = req.params.id;

  if (!req.files || !req.files.image) {
    res.status(400).json({ message: 'Image not provided' });
    console.log(req.files);
    return;
  }
  const imageFile = req.files.image;
  const imageName = imageFile.name;
  const imagePath = path.join(__dirname, '..', '1-assets', 'vacImages', imageName);
  console.log(imageName, imagePath);
  imageFile.mv(imagePath, (error: any) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      vacation.imageName = imageName;
      editVacation(id, vacation)

        .then(() => res.sendStatus(200))
        .catch((error) => {
          console.error(error);
          res.sendStatus(500);
        });
    }
  })
})




VacationRoute.get('/vacations/likes', async (req, res, next) => {
  const response = await getVacationsWhatILike();
  res.json(response);
})
VacationRoute.get('/active', async (req, res, next) => {
  const response = await getAllActiveVacationsLikes();
  res.json(response);
})
VacationRoute.get('/comming', async (req, res, next) => {
  const response = await getCommingVacationsLikes();
  res.json(response);
})













