import './Navigation.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  const [showItems, setShowItems] = useState(false);

  const handleSwithcMenu = () => setShowItems(!showItems);

  return (
    <nav className="navigation">
      <button className="navigation__menu" type="button" onClick={handleSwithcMenu}></button>
      <section className={`navigation__block ${showItems ? 'navigation__block_opened' : ''}`}>
        <section className="navigation__bar">
          <section className="navigation__list-container">
            <button className="navigation__close" type="button" onClick={handleSwithcMenu}></button>
            <ul className="navigation__list">
              <li className="navigation__list-item navigation__list-item-main">
                <Link to="/" className="navigation__link" onClick={handleSwithcMenu}>Главная</Link>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/movies" className={({ isActive }) => isActive ? "navigation__link_active" : "navigation__link"}
                   onClick={handleSwithcMenu}>Фильмы</NavLink>
              </li>
              <li className="navigation__list-item">
                <NavLink to="/saved-movies" className={({ isActive }) => isActive ? "navigation__link_active" : "navigation__link"} onClick={handleSwithcMenu}>Сохранённые фильмы</NavLink>
              </li>
            </ul>
          </section>
          <Link to="/profile" className="navigation__link navigation__link-profile" onClick={handleSwithcMenu}>Аккаунт</Link>
        </section>
      </section>
    </nav>
  );
};

export default Navigation;