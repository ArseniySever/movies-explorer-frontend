import './Profile.css';
import {useState} from "react";
import "../AuthForm/AuthForm.css"


const Profile = ({ onSignOut, openPopup }) => {
  const [block, setChangeBlock] = useState(false);
  const [error, setCatchError] = useState(false);

  function catchError(){
    setCatchError(true);
  }
  function changeBlock(){
    setChangeBlock(true);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h3 className="profile__welcome">Привет, Виталий!</h3>
        <section className="profile__inputs">
          <p className="profile__text">Имя</p>
          <section className="profile__area profile__area_type_name">
            <input className="profile__input"   />
          </section>
          <section className="profile__area profile__area_type_email">
            <input className="profile__input"  />
          </section>
          <p className="profile__text">E-mail</p>
        </section>
        {block === false ?
        <section className='profile__buttons'>
          <button className="profile__button" onClick={changeBlock}>
            Редактировать
          </button>
          <button className="profile__link" type="button" onClick={onSignOut}>
            Выйти из аккаунта
          </button>
        </section>
        : 
        <section className='profile__buttons'>
          {error === true ? <h4 className='profile__error'>При обновлении профиля произошла ошибка</h4> : <></>}
        <button className="auth-section__button profile__button_save" onClick={catchError}>
          Сохранить
        </button>
        </section>
        }
      </form>
    </section>
    </>
  );
};

export default Profile;