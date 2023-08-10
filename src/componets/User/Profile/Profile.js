import './Profile.css';
import {useState} from "react";
import "../AuthForm/AuthForm.css"
import "../../Layout/Main/Main.css";


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
    <main className='main'>
      <section className="profile">
        <form className="profile__form" onSubmit={handleSubmit}>
          <h3 className="profile__welcome">Привет, Виталий!</h3>
          <section className="profile__inputs">
            <p className="profile__text">Имя</p>
            <section className="profile__area profile__area-type-name">
              <input className="profile__input" placeholder='Имя' required type="text"/>
            </section>
            <section className="profile__area profile__area-type-email">
              <input className="profile__input"  placeholder='E-mail' required type="email"/>
            </section>
            <p className="profile__text profile__text-type-email">E-mail</p>
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
          <button className="auth-section__button profile__button-save" onClick={catchError}>
            Сохранить
          </button>
          </section>
          }
        </form>
      </section>
    </main>
    </>
  );
};

export default Profile;