import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { VacationModel } from '../../../Models/VacationModel';
import vacationsService from '../../../Services/VacationService';
import Spinner from '../../SharedArea/Spinner/Spinner';
import VacationCard from '../VacationCard/VacationCard';
 import "./VacationsList.css";



function VacationList(): JSX.Element {
  const [vacations, setVacations] = useState<VacationModel[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const VACATIONS_PER_PAGE = 10;

  useEffect(() => {
    vacationsService.getAllVacations()
      .then((vacations) => setVacations(vacations))
      .catch((err) => alert(err.message));
  }, []);

  const getCurrentVacations = () => {
    const startIndex = (currentPage - 1) * VACATIONS_PER_PAGE;
    const endIndex = startIndex + VACATIONS_PER_PAGE;
    return vacations?.slice(startIndex, endIndex);
  };

  const handlePageClick = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const totalPages = Math.ceil((vacations?.length || 0) / VACATIONS_PER_PAGE);

  return (
    <div className="VacationList">
      {!vacations && <Spinner />}
      <div className="VacationCard Box">
        <NavLink to="/vacations/new">
          <h2> + Add New Vacation </h2>
        </NavLink>
      </div>
      <div className="VacationCardsContainer">
        {getCurrentVacations()?.map((v) => (
          <VacationCard key={v.id} vacation={v} />
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

export default VacationList;
