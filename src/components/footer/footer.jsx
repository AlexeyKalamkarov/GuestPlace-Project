import React from 'react';
import Logo from '../../images/header/Logo.svg';

const Footer = () => {
    return ( 
        <footer className="container">
            <div className='footer'>
                <div className="logo-footer">
                    <img src={Logo} alt="" />
                    <p>Интерактивная платформа</p>
                </div>
                <div className="footer-menu">
                    <nav className="nav-footer">
                        <ul>
                            <li><a href=""> О проекте</a></li>
                            <li><a href=""> Площадкам</a></li>
                            <li><a href=""> Гостям</a></li>
                            <li><a href=""> Контакты</a></li>
                            <li><a href=""> Помощь</a></li>
                            <li><a href=""> Вакансии</a></li>
                            <li><a href=""> Поддержка</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
