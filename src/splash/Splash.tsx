import React from "react";
import "./splash.css";

function Splash() {
    return (
        <main className="splash">
            <div className="bg-circle"></div>
            <img src="/images/aero.png" alt="" className="faded" />
            <div>
                <h2>
                    <i>
                        <span className="fade-1">Software </span>
                        <span className="fade-2">that </span>
                        <span className="fade-3 red">excels</span>
                    </i>
                </h2>
                <h3>
                    <span className="fade-4">fast, </span>
                    <span className="fade-5">reliable, </span>
                    <span className="fade-6">and efficient</span>
                </h3>
            </div>
        </main>
    );
}

export default Splash;
