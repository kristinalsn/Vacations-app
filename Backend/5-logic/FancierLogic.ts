import { OkPacket, RowDataPacket } from "mysql2";
import { execute } from "../2-utils/dal";
import { VacationModel } from "../4-models/VacationModel";

export async function getAllVacationsLikes() {
    const query = 'SELECT * FROM vacationsdb.vacationslikes';
    const [results] = await execute(query)
    return results
}

export async function getFavoritesByUserId(id: number): Promise<VacationModel[]> {
  const query = `
    SELECT v.*
    FROM vacations AS v
    INNER JOIN vacationslikes AS vl ON v.id = vl.vacationId AND vl.userId = ?
  `;
  const [results] = await execute<RowDataPacket[]>(query, [id]);
  return results.map((result) => ({
    id: result.id,
    destination: result.destination,
    description: result.description,
    imageName: result.imageName,
    startDate: result.startDate,
    endDate: result.endDate,
    price: result.price,
  }));
}

  
export async function likedOrNotLikedVacation(userId: number, vacationId: number) {
    const checkIfLikedQuery = 'SELECT * FROM vacationslikes WHERE userId = ? AND vacationId = ?';
    const [checkIfLikedRes] = await execute<OkPacket>(checkIfLikedQuery, [userId, vacationId]);

    if (checkIfLikedRes.length === 0) {
        const query = 'INSERT INTO vacationslikes (vacationslikes.vacationId,vacationslikes.userId) VALUES(?,?)'
        const [results] = await execute<OkPacket>(query, [vacationId, userId]);
        console.log("checkIfLikedRes:", checkIfLikedRes);
        console.log("userId:", userId);
        console.log("vacationId:", vacationId);
        console.log("checkIfLikedRes:", checkIfLikedRes);
        return results;

    } else {
        const delLikeQuery = 'DELETE FROM vacationslikes WHERE vacationslikes.vacationId = ? AND vacationslikes.userId = ?'
        const [delLikesRes] = await execute<OkPacket>(delLikeQuery, [vacationId, userId]);
        return delLikesRes;
    }

}

export async function getAllVacationsLikesStatistic() {
    const query = 'SELECT destination as DESTINATION, COUNT(vacationslikes.vacationId) as LIKES FROM vacations LEFT JOIN vacationslikes ON vacations.id = vacationslikes.vacationId GROUP BY vacations.destination'
    const [results] = await execute(query);
    return results;
}

// export async function giveLike(userId: number, vacationId: number) {
//     const query = 'INSERT INTO vacationslikes (vacationslikes.vacationId,vacationslikes.userId) VALUES(?,?)'
//     const [results] = await execute<OkPacket>(query, [vacationId, userId]);
//     console.log('Results:', results);
//     return results;
// }
// export async function removeLike(userId: number, vacationId: number): Promise<number> {
//     const query = 'DELETE FROM vacationslikes WHERE vacationslikes.vacationId = ? AND vacationslikes.userId = ?';
//     const [results] = await execute<OkPacket>(query, [vacationId, userId]);
//     return results.affectedRows;
//   }

// query
// SELECT v.*, COUNT(vl.userId) as isUserLikesFROM Vacations AS vLEFT JOIN vacationslikes AS vlON v.id = vl.vacationId AND vl.userId = 58GROUP BY v.id
