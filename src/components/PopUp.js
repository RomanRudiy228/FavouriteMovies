import React from "react";
import "./styles/PopUp.css";

const PopUp = ({ releaseDate, closePopUp }) => {
    if (!releaseDate) {
        return "No release date";
    }

    return (
        <div className="popup-overlay" onClick={closePopUp}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <p>Release Date: {releaseDate}</p>
                <div className="close-btn" onClick={closePopUp}>Close</div>
            </div>
        </div>
    );
};

export default PopUp;