import React from "react";
import close from "../../../images/close.png";
import {useState} from "react";
import check from "../../../images/check.png";

import "../MoviesCard/MoviesCard.css";
import { useLocation } from "react-router-dom";


function MoviesCard({cardData}) {
  const [button, setChangeButton] = useState(false);

  const { pathname } = useLocation();
  function changeButton(){
    setChangeButton(true);
  }
  return (
    <div className="movies movies-template">
      <div className="movies__rectangle">
      {pathname === '/movies' ? 
      <section>
        {button === false ? (<button
        type="checkbox"
        className="movies__save"
        onClick={changeButton}>
        <p className="movies__save_name">Сохранить</p>
      </button>) : 
      <button
      type="checkbox"
      className="movies__save-active"
      >
        <img className="movies__save_img" src={check} alt="Галочка"></img>
        </button>}</section>

           : 
            <button
            type="button"
            className="movies__delete"
          >
            <img className="movies__delete_img" src={close} alt="кнопка удаления картоки"></img>
          </button>
          }
      <img
          className="movies__image"
          src={cardData.link}
          alt="название карточки"
        />
        <p className="movies__title">{cardData.name}</p>
        <div className="movies__area">
          <p className="movies__houre_lenght">1ч 17м</p>
        </div>
      </div>
    </div>
  );
}
export default MoviesCard;
