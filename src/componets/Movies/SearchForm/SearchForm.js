import React from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../User/AuthForm/AuthForm.css";

import "./SearchForm.css";
import buttonLine from "../../../images/buttonLine.svg";
import buttonArrow from "../../../images/buttonArrow.svg";

const SearchForm = ({ handleSearch }) => {
  const [shorts, setShorts] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const { pathname } = useLocation();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handeleInput = (evt) => {
    setInputValue(evt.target.value);
  };
  const handelChecSwitch = () => {
    setShorts(!shorts);
    handleSearch(inputValue, !shorts);
    if (pathname === "/movies") {
      localStorage.setItem("shorts", !shorts);
    }
  };

  const handleSubmitFilm = (evt) => {
    if (!inputValue) {
      setError(true);
      evt.target.elements["searchform__input"].focus();
      return;
    }
    setError(false);
    if (pathname === "/movies") {
      localStorage.setItem("input", inputValue);
    }
    handleSearch(inputValue, shorts);
  };

  React.useEffect(() => {
    if (pathname === "/movies") {
      const savedValuInput = localStorage.getItem("input");
      const savedShorts = JSON.parse(localStorage.getItem("shorts"));
      if (savedValuInput) {
        setInputValue(savedValuInput);
      }
      if (savedShorts) {
        setShorts(savedShorts);
      }
      if (savedValuInput || savedShorts === true) {
        handleSearch(savedValuInput, savedShorts);
      }
    }
  }, []);

  return (
    <>
      <form className="searchform" onSubmit={handleSubmit(handleSubmitFilm)}>
        <section className="searchform__finder">
          <section className="searchform__finder-block">
            <input
              {...register("name", {
                required: true,
                onChange: (e) => handeleInput(e),
              })}
              className="searchform__input"
              placeholder="Фильм"
              value={inputValue}
            ></input>
            {errors.name && errors.name.type === "required" && (
              <span className="auth-section__error auth-section__error-film">
                Нужно ввести ключевое слово
              </span>
            )}
          </section>
          <button className="searchform__button">
            <img
              className="searchform__button-line"
              alt="Линия в кнопке"
              src={buttonLine}
            ></img>
            <img
              className="searchform__button-arrow"
              alt="Стрелочка в конпке"
              src={buttonArrow}
            ></img>
          </button>
        </section>
        <section className="searchform__switcher">
          <label className="searchform__tumbler">
            <input
              className="searchform__checkbox"
              value={shorts}
              type="checkbox"
              onChange={handelChecSwitch}
            />
            <span className="searchform__slider" />
          </label>
          <p className="searchform__films">Короткометражки</p>
        </section>
      </form>
    </>
  );
};

export default SearchForm;
