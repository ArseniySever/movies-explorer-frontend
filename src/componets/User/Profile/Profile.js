import React from "react";
import "./Profile.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../AuthForm/AuthForm.css";
import "../../Layout/Main/Main.css";
import CurrentContext from "../../../contexts/CurrentUserContext";

const Profile = ({ onSignOut, onUpdateUser, isLoading, error, isSaveData}) => {
  const currentUser = React.useContext(CurrentContext);

  const [block, setChangeBlock] = useState(false);

  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
  });
  React.useEffect(() => {
    setFormValues(currentUser.name);
    setFormValues(currentUser.email);
  }, [currentUser]);

  function changeBlock() {
    setChangeBlock(true);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    const { name, email } = formValues;
    onUpdateUser(name, email);
  };
  return (
    <>
      <main className="main">
        <section className="profile">
          <form
            className="profile__form"
            onSubmit={handleSubmit(handleProfileSubmit)}
          >
            <h3 className="profile__welcome">
              Привет, {currentUser?.name ?? "Виталий"}!
            </h3>
            <section className="profile__inputs">
              <p className="profile__text">Имя</p>
              <section className="profile__area profile__area-type-name">
                <input
                  {...register("name", {
                    required: true,
                    minLength: 6,
                    maxLength: 35,
                    onChange: (e) => handleInputChange(e),
                  })}
                  className="profile__input"
                  placeholder="Имя"
                  type="text"
                  value={formValues.name}
                  disabled={isLoading}
                />
                {errors.name && errors.name.type === "required" && (
                  <span className="auth-section__error auth-section__error-profile">
                    Это поле обязательно для заполнения
                  </span>
                )}
                {errors.name && errors.name.type === "minLength" && (
                  <span className="auth-section__error auth-section__error-profile">
                    Имя слишком короткое
                  </span>
                )}
              </section>
              <section className="profile__area profile__area-type-email">
                <input
                  {...register("email", {
                    required: true,
                    minLength: 6,
                    maxLength: 35,
                    onChange: (e) => handleInputChange(e),
                    pattern: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                  })}
                  className="profile__input"
                  placeholder="E-mail"
                  type="email"
                  value={formValues.email}
                  disabled={isLoading}
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="auth-section__error auth-section__error-profile">
                    Это поле обязательно для заполнения
                  </span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="auth-section__error auth-section__error-profile">
                    Поле "email" не соответствует шаблону электронной почты
                  </span>
                )}
              </section>
              <p className="profile__text profile__text-type-email">E-mail</p>
            </section>
            {block === false ? (
              <section className="profile__buttons">
                <button className="profile__button" onClick={changeBlock}>
                  Редактировать
                </button>
                <button
                  className="profile__link"
                  type="button"
                  onClick={onSignOut}
                >
                  Выйти из аккаунта
                </button>
              </section>
            ) : (
              <section className="profile__buttons">
                {error === true ? (
                  <h4 className="profile__error">
                    При обновлении профиля произошла ошибка
                  </h4>
                ) : (
                  <></>
                )}
                {isSaveData === true ? (
                  <h4 className="profile__error profile__error-green">
                    Данные успешно обновлены
                  </h4>
                ) : (
                  <></>
                )}
                <button
                  className={`auth-section__button profile__button-save ${isLoading && "auth-section__button_disabled"
                    }`}
                  isLoading={isLoading}
                >
                  Сохранить
                </button>
              </section>
            )}
          </form>
        </section>
      </main>
    </>
  );
};

export default Profile;
