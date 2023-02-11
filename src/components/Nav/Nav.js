import { Logo } from "../Logo/Logo"
import {NavLink} from "react-router-dom"
import magazine from "./../../icons/nav/magazine.svg"
import person from "./../../icons/nav/person.svg"
export const Nav = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <Logo />
                    <ul className="nav__list">
                        <li className="nav__item nav__item_active"><NavLink to="/intro">Главная</NavLink></li>
                        <li className="nav__item"><NavLink to="/search">Поиск</NavLink></li>
                    </ul>
                    <ul className="nav__icons">
                        <li className="nav__icon"><NavLink to="/profile"><img src={magazine} alt="magazine" /></NavLink></li>
                        <li className="nav__icon"><NavLink to="/magazine"><img src={person} alt="magazine" /></NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}