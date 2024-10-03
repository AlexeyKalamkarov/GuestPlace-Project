import React from "react";
import '../header/header.css';
import '../../assets/fonts/stylesheet.css';
import MapPin from '../../images/header/MapPin.svg';
import hearticon from '../../images/header/hearticon.svg';
import ChatCircle from '../../images/header/ChatCircle.svg';
import User from '../../images/header/User.svg';
import Logo from '../../images/header/Logo.svg';
function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-header">
                        <div className="header-city">
                        <img src={MapPin} alt="" />
                        <select className="header-select" name="city" id="city">
                            <option value="msc">Москва</option>
                            <option value="klg">Калуга</option>
                            <option value="spb">Санкт-Петербург</option>
                        </select>
                        </div>
                        <div className="header-icon">
                            <img src={hearticon} alt="" />
                            <img src={ChatCircle} alt="" />
                            <img src={User} alt="" />
                        </div>
                    </div>
                    <div className="header-menu">
                        <div className="header-menu-logo">
                            <img src={Logo} alt="" />
                        </div>
                        <nav className="header-menu-center">
                            <ul>
                                <li>О платформе</li>
                                <li>Площадкам</li>
                                <li>Гостям</li>
                            </ul>
                        </nav>
                        <div className="header-menu-right">
                            <ul>
                                <li>+ Разместить запрос</li>
                                <li>+ Добавить место</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Header;