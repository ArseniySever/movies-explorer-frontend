import './NavigationAuth.css';
import { Link } from 'react-router-dom';

function NavigationAuth() {
  return (
    <nav className="navauth">
      <ul className="navauth__block">
        <li className="navauth__block-item">
          <Link to="/sign-up" className="navauth__link navauth__link-signup">Регистрация</Link>
        </li>
        <li className="navauth__block-item">
          <Link to="/sign-in" className="navauth__link navauth__link-signin">Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationAuth;