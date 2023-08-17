import Movies from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import React from "react";
import { useLocation } from "react-router-dom";
import "../../Movies/Preloader/Preloader.css";

const MoviesCardList = ({ cards, errorMesssage }) => {
  const { pathname } = useLocation();
  const [maxMovies, setMaxMovies] = React.useState(0);
  const [step, setMotion] = React.useState(0);

  const showMoreMovies = () => {
    setMaxMovies(maxMovies + step);
  };

  const setMoviesRules = () => {
    const width = window.innerWidth;
    if (pathname === "/saved-movies") {
      setMaxMovies(cards.length);
    }
    if (width <= 767) {
      setMaxMovies(5);
      setMotion(2);
    } else if (width <= 1279) {
      setMaxMovies(8);
      setMotion(4);
    } else {
      setMaxMovies(12);
      setMotion(4);
    }
  };
  React.useEffect(() => {
    setMoviesRules();
    window.addEventListener("resize", () => {
      setTimeout(() => {
        setMoviesRules();
      }, 500);
    });
  }, []);
  return (
    <>
      <section className="movielist">
        {cards.map((movie, index) => {
          if (index < maxMovies) {
            return <Movies key={movie.id || movie.movieId} cardData={movie} />;
          } else {
            return null;
          }
        })}
        <p
          className={
            cards.length
              ? " movielist__title movielist__title-deactive"
              : "movielist__title"
          }
        >
          {errorMesssage}
        </p>
      </section>

      {cards.length > maxMovies && pathname === "/movies" ? (
        <section className="preloader">
          <button className="preloader__button" onClick={showMoreMovies}>
            Ещё
          </button>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default MoviesCardList;
