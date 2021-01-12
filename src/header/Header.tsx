import React, { useEffect, useState } from "react";
import "./header.css";

function Header() {
    const [logoText, setLogoText] = useState(
        window.innerWidth < 800 ? "A" : "AeroWare"
    );

    useEffect(() => {
        window.addEventListener("resize", function () {
            setLogoText(window.innerWidth < 800 ? "A" : "AeroWare");
        });
    }, []);

    return (
        <header className="header">
            <div className="logo-container">
                <h1 className="logo">
                    <span className="red">{logoText.slice(0, 4)}</span>
                    {logoText.slice(4)}
                </h1>
            </div>
            <div className="join">
                <a
                    href="https://discord.gg/JdTQG3a9Ye"
                    target="_blank"
                    rel="noreferrer"
                    className="red"
                >
                    Join
                </a>
            </div>
        </header>
    );
}

export default Header;
