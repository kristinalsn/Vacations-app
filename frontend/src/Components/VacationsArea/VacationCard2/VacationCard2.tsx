


import { useState } from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { VacationModel } from "../../../Models/VacationModel";
import "./VacationCard2.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import fancierService from "../../../Services/FancierService";




interface VacationCardProps {
    vacation: VacationModel;
    userId: number | undefined;
}

function VacationCard2({ vacation, userId }: VacationCardProps): JSX.Element {

    const [likes, setLikes] = useState(vacation.fancierCount);
    const [liked, setLiked] = useState(vacation.isUserLikes === userId);

    const [hovered, setHovered] = useState(false);

    const handleLikeClick = async () => {
        if (!userId) {
            alert("Please log in to like vacations.");
            return;
        }

        setLikes(liked ? likes - 1 : likes + 1);
        await fancierService.toggleLike(userId, vacation.id);
        setLiked(!liked);
    };


    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const likeButtonClass = liked ? "ThumbDownButton" : "ThumbUpButton";

    return (
        <Card className="VacationCard2 Box" style={{ position: "relative", width: '18rem' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Card.Img src={vacation.imageName + vacation.id} alt={vacation.destination} />
            <button className={likeButtonClass} style={{ position: "absolute", top: "10px", right: "10px", visibility: hovered ? "visible" : "hidden" }} onClick={handleLikeClick}>
                <FontAwesomeIcon icon={liked ? faThumbsDown : faThumbsUp} />
                : {likes} likes
            </button>
            <Card.Body>
                <Card.Title><NavLink to={"/vacations/details/" + vacation.id}>{vacation.destination}</NavLink></Card.Title>
                <div>
                    <h5>{vacation.description.substring(0, 200)}...</h5>
                </div>
                <div>
                    <h3>{vacation.startDate && vacation.startDate.substring(0, 10)} / {vacation.endDate && vacation.endDate.substring(0, 10)}</h3>
                </div>
                <div className="price">
                    <h3 style={{color:"black"}}>${vacation.price}</h3>
                </div>
            </Card.Body>
        </Card>
    );
}

export default VacationCard2;