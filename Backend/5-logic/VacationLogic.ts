import { OkPacket } from "mysql2";
import { execute } from "../2-utils/dal";
import { VacationModel } from "../4-models/VacationModel";


export async function getAllVacations() {
    //limit 10 offset 0
    const query = ' SELECT DISTINCT vacations.id ,destination, description,startDate, endDate, price,imageName,COUNT(vacationslikes.userId) AS fancierCount FROM vacations LEFT JOIN vacationslikes  ON vacations.id = vacationslikes.vacationId GROUP BY vacations.id ORDER BY startDate ';
    const [results] = await execute(query)
    return results
}

export async function getVacationById(id: number) {
    const query = `SELECT * from vacations WHERE id = ?`;
    const [results] = await execute(query, [id]);
    return [results];
}

export async function addVacation(vacation: VacationModel) {
    const { destination, description, startDate, endDate, price, imageName } = vacation;
    const query = 'INSERT INTO vacations(destination,description,startDate,endDate,price,imageName) VALUES(?,?,?,?,?,?)';
    const [results] = await execute<OkPacket>(query, [destination, description, startDate, endDate, price, imageName]);
    return results;
}

export async function deleteVacation(id: number) {
    const query = 'DELETE FROM vacations WHERE id = ?'
    const [results] = await execute<OkPacket>(query, [id])
    return results;
}

//works
export async function editVacation(id: number, vacation: VacationModel) {
    const { destination, description, startDate, endDate, price, imageName } = vacation;
    const query = 'UPDATE vacations SET destination = ?, description = ?, startDate = ?, endDate = ?, price = ?, imageName = ? WHERE id = ?';
    const [results] = await execute<OkPacket>(query, [destination, description, startDate, endDate, price, imageName, id]);
    return results;
  }


export async function getVacationsWhatILike() {
    const query = 'select * ,(SELECT count(*)  FROM vacationslikes where vacationslikes.vacationId= vacations.id and vacationslikes.userId=? ) as TOTALLikes from vacations  ';
    const [results] = await execute(query);
    return results;
}
export async function getAllActiveVacationsLikes() {
    const query = ' select * ,(SELECT count(*)  FROM vacationslikes where  vacationslikes.vacationId= vacations.id   ) as TOTALLikes from vacations where startDate< now() AND endDate > now() ';
    const [results] = await execute(query)
    return results
}

export async function getCommingVacationsLikes() {
    const query = ' select * ,(SELECT count(*)  FROM vacationslikes where  vacationslikes.vacationId= vacations.id   ) as TOTALLikes from vacations where startDate> now()  '
    const [results] = await execute(query);
    return results;
}

export async function getImageName(id: number) {

    const query = "SELECT imageName FROM vacations WHERE id = ?";
    const [results] = await execute(query, [id]);
    return results[0];

}

// SELECT v.*, likes.likes
// FROM vacations v
// LEFT JOIN (
//   SELECT vacationId, COUNT(*) as likes
//   FROM vacationslikes
//   GROUP BY vacationId
// ) likes ON v.id = likes.vacationId;






