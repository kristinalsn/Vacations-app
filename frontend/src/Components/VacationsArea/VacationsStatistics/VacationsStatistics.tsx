import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { VacationModel } from "../../../Models/VacationModel";
import "./VacationsStatistics.css";
import {
    BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
    Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";
import vacationsService from "../../../Services/VacationService";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function VacationsStatistics(): JSX.Element {

    function downloadToCSV() {
        if (vacations) {
          const csvData = vacations.map((vacation) => ({
            destination: vacation.destination,
            fenciers: vacation.fancierCount,
          }));
      
          const csvString =
            Object.keys(csvData[0]).join(",") +
            "\n" +
            csvData.map((obj) => Object.values(obj).join(",")).join("\n");
      
          const blob = new Blob([csvString], { type: "text/csv" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "vacations.csv";
          link.href = url;
      
          link.addEventListener("click", () => {
            document.body.style.cursor = "progress";
          });
      
          link.addEventListener("load", () => {
            document.body.style.cursor = "default";
          });
      
          link.onerror = () => {
            console.log("Failed to download CSV file.");
            alert("Failed to download CSV file.");
            document.body.style.cursor = "default";
          };
      
          link.click();
        } else {
          console.log("There are no vacations to download.");
        }
      }


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
                display: false,
            },
            title: {
                display: true,
                text: "Vacation Fancier Statistic",
                color: "dark grey"
            }
        },
        scales: {
            y: {
                ticks: {
                    color: "dark grey",
                    stepSize: 1,
                    beginAtZero: true
                }
            },
            x: {
                ticks: {
                    color: "dark grey",
                    stepSize: 1,
                    beginAtZero: true
                }
            }
        }
    };

    const [vacations, setVacations] = useState<VacationModel[]>([]);

    useEffect(() => {
        vacationsService
            .getAllVacations()
            .then(vacations => setVacations(vacations))
    }, [])


    const data = {
        labels: vacations.map(v => v.destination),
        datasets: [
            {
                label: "Fanciers",
                data: vacations.map((v: VacationModel) => v.fancierCount),
                backgroundColor: "green",
            }
        ],
    };



    return (
        <div className="VacationsChart">
            <NavLink to="/vacations">Back</NavLink>

            <Bar options={options} data={data} />
            <button onClick={downloadToCSV}>Download to CSV file</button>
        </div>

    );
}

export default VacationsStatistics;

