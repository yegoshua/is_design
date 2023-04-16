import React from "react";
import LogoImage from "../../assets/img/logo.png"

const Header = () => {
    return (
        <header className="header-mainWrapper">
            <div>
                <img src={LogoImage} alt="" />
            </div>
            <div>
                <a href="">Головна</a>
                <a href="">Правила оренди</a>
                <a href="">Часті запитання</a>
            </div>
            <div>Menu</div>
        </header>
    );
};

export default Header;
