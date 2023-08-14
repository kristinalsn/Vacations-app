import "./Spinner.css";
import spinnerImage from "../../../assets/loading.gif"

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			Loadind.....
            <img src={spinnerImage} alt="loading" />

        </div>
    );
}

export default Spinner;
