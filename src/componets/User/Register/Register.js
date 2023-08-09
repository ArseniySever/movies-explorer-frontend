import React from 'react';
import { Link } from 'react-router-dom';
import "../AuthForm/AuthForm.css"
import logo from '../../../images/logo.svg';
import "../../Layout/Main/Main.css";



function Register(props) {
  const [formValues, setFormValues] = React.useState({ name: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formValues;
    props.onRegist(name, email, password);
    }




  return (
    <>
    <main className='main'>

      <section className='auth-section'>
      <a className='auth-section__header' href="/">
            <img className='auth-section__img' src={logo} alt='Логтотип ПоискКино'>
            </img>
      </a>

        <form className="auth-section__form" onSubmit={handleRegisterSubmit} noValidate>
          <h1 className="auth-section__title">Добро пожаловать!</h1>
          <h2 className="auth-section__subtitle">Имя</h2>
          <input
            className="auth-section__input"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            required
            placeholder='Имя'
          />
          <h2 className="auth-section__subtitle">E-mail</h2>
          <input
            className="auth-section__input"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
            placeholder='E-mail'
          />
          <h2 className="auth-section__subtitle">Пароль</h2>
          <input
            className="auth-section__input"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
            required
            placeholder='Пароль'
          />
          
          <button type="submit" className="auth-section__button auth-section__button_reg">Зарегистрироваться</button>
          <p className="auth-section__text">Уже зарегистрированы? <Link className="auth-section__link" to="/sign-in">Войти</Link></p>
        </form>
      </section>
    </main>
    </>
  );
}

export default Register;
