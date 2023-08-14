
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../App/store";
import { VacationModel } from "../../../Models/VacationModel";
import fancierService from "../../../Services/FancierService";
import vacationsService from "../../../Services/VacationService";
import Spinner from "../../SharedArea/Spinner/Spinner";
import VacationCard2 from "../VacationCard2/VacationCard2";
import "./VacationList2.css";


enum VacationStatus {
  ALL = "All",
  ACTIVE = "Active",
  COMING = "Coming",
  FAVORITES = "Favorites", // Add new option for favorites
}

function VacationList2(): JSX.Element {
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const [vacations, setVacations] = useState<VacationModel[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<VacationStatus>(
    VacationStatus.ALL
  );
  const [favoriteVacations, setFavoriteVacations] = useState<VacationModel[]>([]);

  useEffect(() => {
    if (userId) {
      fancierService.getFavoritesByUserId(userId).then(setFavoriteVacations);
    }
  }, [userId]);

  const [currentPage, setCurrentPage] = useState(1);
  const VACATIONS_PER_PAGE = 10;

  useEffect(() => {
    vacationsService
      .getAllVacations()
      .then((vacations: VacationModel[]) => setVacations(vacations))
      .catch((err: { message: any }) => alert(err.message));
  }, []);

  const filteredVacations = vacations.filter((v) => {
    const now = new Date().getTime();
    if (selectedStatus === VacationStatus.ALL) {
      return true;
    } else if (selectedStatus === VacationStatus.ACTIVE) {
      return now >= new Date(v.startDate).getTime() && now <= new Date(v.endDate).getTime();
    } else if (selectedStatus === VacationStatus.COMING) {
      return now < new Date(v.startDate).getTime();
    } else if (selectedStatus === VacationStatus.FAVORITES) { // Add case for favorites
      return favoriteVacations.some((fv) => fv.id === v.id);
    } else {
      return false;
    }
  });

  const getCurrentVacations = () => {
    const startIndex = (currentPage - 1) * VACATIONS_PER_PAGE;
    const endIndex = startIndex + VACATIONS_PER_PAGE;
    return filteredVacations.slice(startIndex, endIndex);
  };

  const handlePageClick = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const totalPages = Math.ceil((filteredVacations?.length || 0) / VACATIONS_PER_PAGE);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value as VacationStatus);
    setCurrentPage(1);
  };

  return (
    <div className="VacationList2">
      <div className="Filters">
        <label htmlFor="statusFilter">Filter by status:</label>
        <select id="statusFilter" value={selectedStatus} onChange={handleStatusChange}>
          <option value={VacationStatus.ALL}>{VacationStatus.ALL}</option>
          <option value={VacationStatus.ACTIVE}>{VacationStatus.ACTIVE}</option>
          <option value={VacationStatus.COMING}>{VacationStatus.COMING}</option>
          {userId && <option value={VacationStatus.FAVORITES}>{VacationStatus.FAVORITES}</option>} {/* Show favorites option if user is logged in */}
        </select>
      </div>

      {!vacations.length && <Spinner />}
      <div className="VacationList2-cards">
        {getCurrentVacations().map((v) => (
          <VacationCard2 key={v.id} vacation={v} userId={userId} />
        ))}
      </div>
      <div className="PaginationContainer">
        {[...Array(totalPages)].map((_, i) => (
          <button key={i} onClick={() => handlePageClick(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
}

export default VacationList2;




