import React from "react";
import "./RateSwitch.css"

class RateSwitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRate: false,
        };
    }

    toggleRate = () => {
        this.setState((prevState) => ({
            showRate: !prevState.showRate,
        }));
    };

    render() {
        return (
            <div className="rate-switch" onClick={ this.toggleRate }>
                { this.state.showRate ? (
                    <>
                    <span className="rate-value">
                        {this.props.rate}</span>
                    <span className="toggle-text">Hide Rate</span>
                    </>
                ) : (
                    "Show Rate"
                )}
            </div>
        );
    }
}

export default RateSwitch;