import React from "react";
import "./Profile.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../AuthForm/AuthForm.css";
import "../../Layout/Main/Main.css";
import CurrentContext from "../../../contexts/CurrentUserContext";

import * as Auth from "../../../utils/MainApi";

const Profile = ({ onSignOut, onUpdateUser, isLoading, error, isAuth}) => {
  const currentUserInfo = React.useContext(CurrentContext);
  console.log(currentUserInfo);
  const [block, setChangeBlock] = useState(false);
  const [isVisibleButton, setVisibleButton] = useState(false);
  const [isSaveData, setIsSaveData] = useState(false);
  const [formValues, setFormValues] = React.useState({});
  
  
  function changeBlock() {
    setChangeBlock(true);
    setIsSaveData(false);
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevState) => ({ ...prevState, [name]: value }));
    if (value !== currentUserInfo.name || value !== currentUserInfo.email) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };

  const handleProfileSubmit = (e) => {
    const { name, email } = formValues;
    onUpdateUser(name, email);
    setIsSaveData(true);
  };
  
  React.useEffect(() => {
    if (isAuth === "auth") {
      Auth.getUserInfo()
      .then((user) => {
        setFormValues({
          name: user.name, 
          email: user.email
        });
        
     })
      .catch((error) => {
      console.log(error);
      });
  
  }
}, [isAuth]);


  return (
    <>
      <main className="main">
        <section className="profile">
          <form
            className="profile__form"
            onSubmit={handleSubmit(handleProfileSubmit)}
          >
            <h3 className="profile__welcome">
              Привет, {currentUserInfo?.name ?? "Виталий"}!
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
                  required
                  autoFocus
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
                  className={`auth-section__button profile__button-save ${(isLoading || !isVisibleButton) && "auth-section__button_disabled"
                    }`}
                  isLoading={isLoading}
                  disabled={!isVisibleButton}
                  type="submit"
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
