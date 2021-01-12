import React from "react";
import "./splash.css";

function Splash() {
    return (
        <main className="splash">
            <div className="bg-circle"></div>
            <img src="/images/aero.png" alt="" className="faded" />
            <h2>
                <i>
                    <span className="fade-1">Software </span>
                    <span className="fade-2">that </span>
                    <span className="fade-3 red">excels</span>
                </i>
            </h2>
        </main>
    );
}

export default Splash;
