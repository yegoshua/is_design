import React from "react";
import LogoImage from "../../assets/img/logo.png"

const Header = () => {
    return (
        <header className="header-mainWrapper">
            <div className="flex justify-between items-center h-full">
                <div className="h-full">
                    <img className="h-full" src={LogoImage} alt="" />
                </div>
                <div className="flex ml-8 h-full items-center">
                    <a href="" className="flex h-full items-center min-h-full text-2xl mr-12 border-b-2 border-transparent hover:border-b-orange-500">Головна</a>
                    <a href="" className="flex h-full items-center text-2xl mr-12 border-b-2 border-transparent hover:border-b-orange-500">Правила оренди</a>
                    <a href="" className="flex h-full items-center text-2xl border-b-2 border-transparent hover:border-b-orange-500">Часті запитання</a>
                </div>
            </div>
            <div>
                MENU
            </div>
            
        </header>
    );
};

export default Header;
