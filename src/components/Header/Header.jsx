// @ts-nocheck
import React, { useEffect, useState } from "react";
import FormSearch from "./FormSearch";
import "../../styles/Header.scss";
import "../../styles/Vars.scss";


function Header() {
    const [theme, setTheme] = useState("light");

    function changeTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        const root = document.querySelector(":root");

        const components = [
            "--body-background",
            "--components-background",
            "--card-background",
            "--card-shadow",
            "--text-color",
        ];

        components.forEach((component) =>
            root.style.setProperty(`${component}-default`, `var(${component}-${theme})`)
        );
    }, [theme]);

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__container">
                    <div className="header__container__logo">
                        <img
                            src="./images/header/header__logo.svg"
                            alt="header-logo"
                            className="header__logo"
                        />
                        <h1 className="header__title">React weather</h1>
                    </div>
                    <div className="header__container__search">
                        <img
                            onClick={changeTheme}
                            src="./images/header/invert__color__btn.svg"
                            alt="invert__color"
                            className="header__invert"
                        />
                        <FormSearch />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
