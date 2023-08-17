import React, { useState } from "react";
import "./MoviesPage.css";
import "../../Layout/Main/Main.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../../General/Footer/Footer";
import moviesApi from "../../../utils/MoviesApi";
import * as mainApi from "../../../utils/MainApi";
import filtredFilms from "../../../utils/FiltredFilms";
import LoaderButtonOn from "../../Loader/LoaderButtonOn";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const filter = (query, shorts) => {
    const storedMovies = JSON.parse(localStorage.getItem("movies"));
    const filtered = filtredFilms(storedMovies, query, shorts);
    if (filtered.length === 0) {
      setError("Ничего не найдено");
    }
    setMovies(filtered);
    setIsLoading(false);
  };
  const handleSearch = (query, shorts) => {
    setIsLoading(true);
    const baseMovies = JSON.parse(localStorage.getItem("movies"));
    if (!baseMovies) {
      moviesApi
        .getAllMovies()
        .then((films) => {
          localStorage.setItem("movies", JSON.stringify(films));
          filter(query, shorts);
        })
        .catch(() => {
          setError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        });
    } else {
      filter(query, shorts);
    }
  };
  
  React.useEffect(() => {
    const savedMovies = localStorage.getItem("savedMovies");
    if (!savedMovies) {
      setIsLoading(true);

      mainApi
        .getUsersMovies()
        .then((data) => {
          if (data.length > 0) {
            setMovies(data);
            localStorage.setItem("savedMovies", JSON.stringify(data));
          }
          setIsLoading(false);
        })
        .catch(() => {
          setError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        });
    }
  }, []);
  console.log(movies);

  return (
    <>
      <main className="main">
        <section className="moviespage">
          <SearchForm handleSearch={handleSearch}></SearchForm>
          {isLoading ? (
        <LoaderButtonOn />
      ) : (
          <MoviesCardList cards={movies} errorMesssage={error} ></MoviesCardList>)}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Movies;
