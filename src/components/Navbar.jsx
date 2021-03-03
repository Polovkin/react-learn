import {NavLink} from 'react-router-dom'


export const Navbar = () => (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                Note app
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink exact
                             className="nav-link"
                             to="/">Главная
                    </NavLink></li>
                <li className="nav-item">
                    <NavLink
                            className="nav-link"
                            to="/about">Информация
                    </NavLink>
                </li>
            </ul>
        </nav>
)
