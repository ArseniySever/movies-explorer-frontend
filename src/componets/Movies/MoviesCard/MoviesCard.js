import React from "react";
import close from "../../../images/close.svg";
import check from "../../../images/check.svg";
import "../MoviesCard/MoviesCard.css";
import { useLocation } from "react-router-dom";
import * as mainApi from "../../../utils/MainApi";

function MoviesCard({ cardData }) {
  const [isSaved, setSaved] = React.useState(false);
  const [savedId, setSavedId] = React.useState("");
  const location = useLocation();
  const { pathname } = useLocation();

  React.useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    if (savedMovies) {
      savedMovies.forEach((savedMovie) => {
        if (
          savedMovie.movieId === cardData.id ||
          savedMovie._id === cardData._id
        ) {
          setSaved(true);
          setSavedId(savedMovie._id);
        }
      });
    }
  }, [cardData._id, cardData.id]);

  const handleMovieSaved = (evt) => {
    if (!isSaved) {
      const newMovie = {};
      const { image, id } = cardData;

      Object.assign(newMovie, cardData);
      delete newMovie.id;
      delete newMovie.created_at;
      delete newMovie.updated_at;

      Object.entries(newMovie).forEach((key) => {
        if (!key[1]) {
          newMovie[key[0]] = "...";
        }
      });

      mainApi
        .saveMovie({
          ...newMovie,
          image: "https://api.nomoreparties.co/" + cardData.image.url,
          thumbnail: `${cardData.trailerLink}`,
          movieId: id,
        })
        .then((savedMovie) => {
          setSaved(true);
          setSaved(savedMovie._id);
          let savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
          if (!savedMovies) {
            savedMovies = [];
          }
          savedMovies.push(savedMovie);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
        })
        .catch((err) => {
          console.log("Что-то пошло не так...");
        });
    } else {
      mainApi
        .deleteMovie(savedId || isSaved)
        .then(() => {
          setSaved(false);
          const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
          let index = 0;
          for (let i = 0; i < savedMovies.length; i += 1) {
            const film = savedMovies[i];
            if (film._id === cardData._id) {
              index = i;
            }
          }
          savedMovies.splice(index, 1);
          localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
          if (location.pathname === "/saved-movies") {
            evt.target.closest(".movies").remove();
          }
        })
        .catch((err) => console.log("error:", err));
    }
  };

  return (
    <div className="movies movies-template">
      <div className="movies__rectangle">
        {pathname === "/movies" ? (
          <section>
            
              <button
                type="checkbox"
                className={isSaved ? "movies__save-active" : "movies__save" }
                onClick={handleMovieSaved}
              >{isSaved ? 
              <img
              className="movies__save-img"
              src={check}
              alt="Галочка"
            ></img> : <p className="movies__save-name">Сохранить</p> }
              </button>
          </section>
        ) : (
          <button
            type="button"
            className="movies__delete"
            onClick={handleMovieSaved}
          >
            <img
              className="movies__delete-img"
              src={close}
              alt="кнопка удаления картоки"
            ></img>
          </button>
        )}
        <img
          className="movies__image"
          src={
            pathname === "/movies"
              ? "https://api.nomoreparties.co/" + cardData.image.url
              : cardData.image
          }
          alt="название карточки"
          onClick={(event) => window.open(`${cardData.trailerLink}`, "_blank")}
        />
        <p className="movies__title">{cardData.nameRU}</p>
        <div className="movies__area">
          <p className="movies__houre-lenght">{`${Math.floor(
            cardData.duration / 60
          )}ч ${cardData.duration % 60}м`}</p>
        </div>
      </div>
    </div>
  );
}
export default MoviesCard;
