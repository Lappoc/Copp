import { Logo } from "../Logo/Logo"
import magazine from "./../../icons/nav/magazine.svg"
import person from "./../../icons/nav/person.svg"
export const Nav = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <Logo />
                    <ul className="nav__list">
                        <li className="nav__item nav__item_active"><a href="#">Главная</a></li>
                        <li className="nav__item"><a href="#">Поиск</a></li>
                    </ul>
                    <ul className="nav__icons">
                        <li className="nav__icon"><a href="#"><img src={magazine} alt="magazine" /></a></li>
                        <li className="nav__icon"><a href="#"><img src={person} alt="magazine" /></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}