import React, { useState } from "react";
import "./RateSwitch.css";

const RateSwitch = ({ rate }) => {
    const [showRate, setShowRate] = useState(false);

    return (
        <div className="rate-switch" onClick={() => setShowRate(!showRate)}>
            {showRate ? (
                <>
                    <span className="rate-value">{rate}</span>
                    <span className="toggle-text">Hide Rate</span>
                </>
            ) : (
                "Show Rate"
            )}
        </div>
    );
};

export default RateSwitch;