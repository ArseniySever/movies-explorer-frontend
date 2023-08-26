import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import "../AuthForm/AuthForm.css";
import logo from "../../../images/logo.svg";
import "../../Layout/Main/Main.css";

function Login({onSignin, isLoading}) {

  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSigninSubmit = (e) => {
    const { email, password } = formValues;
    onSignin( email, password);
  };
  return (
  <>
      <main className='main'>
        <section className='auth-section'>
          <a className='auth-section__header' href="/">
            <img className='auth-section__img' src={logo} alt='Логтотип ПоискКино'>
            </img>
          </a>
          <form className="auth-section__form" onSubmit={handleSubmit(handleSigninSubmit)}>
            <h1 className="auth-section__title">Рады видеть!</h1>
            <h2 className="auth-section__subtitle">E-mail</h2>
            <input  {...register('email', {
                required: true,
                minLength: 6,
                maxLength: 35,
                onChange: (e) => handleInputChange(e),
                pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              className="auth-section__input"
              name="email"
              type="email"
              value={formValues.email || ""}
              placeholder="E-mail"
            />
              {errors.email && errors.email.type === 'required' && (
              <span className="auth-section__error">
                Это поле обязательно для заполнения
              </span>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <span className="auth-section__error">
                Поле "email" не соответствует шаблону электронной почты
              </span>
            )}
            <h2 className="auth-section__subtitle">Пароль</h2>
            <input {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 35,
                onChange: (e) => handleInputChange(e),
              })}
              className="auth-section__input"
              name="password"
              type="password"
              value={formValues.password || ""}            
              placeholder="Пароль"
            />
             {errors.password && errors.password.type === 'required' && (
              <span className="auth-section__error">
                Это поле обязательно для заполнения
              </span>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <span className="auth-section__error">
                Пароль содержит не менее 6 символов
              </span>
            )}
            {errors.password && errors.password.type === 'maxLength' && (
              <span className="auth-section__error">Пароль слишком длинный</span>
            )}
            <section className='ausection__buttons'>
              <button className={`auth-section__button ${
                  (!formValues.password || !formValues.email || errors.email ||
                  errors.password) && ('auth-section__button_disabled')}`}
                  disabled={ !formValues.password || !formValues.email ||
                    errors.password ||
                    errors.email || !isLoading}
              type="submit"
              >{!isLoading ? "Загрузка" : "Войти"}</button>
            </section>
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