import "./About.css";
import vacationImage from "../../../assets/onVac.jpg"

function About(): JSX.Element {
  return (
    <div className="About">
      <h2>About My Vacation Project</h2>
      <img src={vacationImage} alt="Vacation" style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} />
      <p>My vacation project is a web application that allows users to browse and book vacation packages. I developed this project using React Typescript, Node.js, and MySQL, and we i proud to offer a user-friendly and intuitive interface that makes planning a vacation easy and stress-free.</p>

      <h3>Features For Users:</h3>
      <ul>
        <li>Browse a wide selection of vacation packages</li>
        <li>Filter vacations by status (all, active, coming, favorites)</li>
        <li>Like and unlike vacations to save favorites</li>
        <li>View detailed information about each vacation, including photos, descriptions, and pricing</li>
      </ul>

      <h3>Features For Admin:</h3>
      <ul>
        <li>Admin can To Add New Vacation, To Edit Vacations And To Delete Vacations</li>
        <li>To Check Statistics About Vacations in Graphs (how many likes for ecach vacation)</li>
        <li>Download the Statistic to SVG File </li>
      </ul>



      <h3>Get In Touch</h3>
      <p>If you have any questions or feedback, I'd love to hear from you! Please don't hesitate to reach out to me at  christinatdv@gmail.com.</p>
    </div>
  );
}



export default About;