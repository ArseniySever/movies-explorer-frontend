import React from 'react';
import { Link } from 'react-router-dom';
import "../AuthForm/AuthForm.css"
import logo from '../../../images/logo.svg';
import "../../Layout/Main/Main.css";

function Login(props) {

const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');

const handleEmailChange = (e) => {
  setEmail(e.target.value);
}

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
}

const handleSigninSubmit = (e) => {
  e.preventDefault();
  props.onSignin(email, password);
    
}

  return (
  <>
      <main className='main'>
        <section className='auth-section'>
          <a className='auth-section__header' href="/">
            <img className='auth-section__img' src={logo} alt='Логтотип ПоискКино'>
            </img>
          </a>
          <form className="auth-section__form" onSubmit={handleSigninSubmit} noValidate>
            <h1 className="auth-section__title">Рады видеть!</h1>
            <h2 className="auth-section__subtitle">E-mail</h2>
            <input
              className="auth-section__input"
              type="email"
              onChange={handleEmailChange}
              value={email || ''}
              required
              placeholder='E-mail'
            />
            <span className="auth__item-error email-input-error" />
            <h2 className="auth-section__subtitle">Пароль</h2>
            <input
              className="auth-section__input"
              type="password"
              onChange={handlePasswordChange}
              value={password || ''}
              required
              placeholder='Пароль'
            />
            <span className="auth__item-error password-input-error" />

            <button type="submit" className="auth-section__button">Войти</button>
            <p className="auth-section__text">
                Еще не зарегистрированы?
                <Link to="/sign-up" className="auth-section__link">
                  {" "}
                  Регистрация
                </Link>
              </p>
          </form>
        </section>
      </main>
  </>
  );
}

export default Login;