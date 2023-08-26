import React from "react";
import "./SavedMovies.css";
import "../../Layout/Main/Main.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../../General/Footer/Footer";
import * as mainApi from "../../../utils/MainApi";
import filtredFilms from "../../../utils/FiltredFilms";
import LoaderButtonOn from "../../Loader/LoaderButtonOn";

function SaveMoviesPage() {
  const [movies, setMovies] = React.useState(
    JSON.parse(localStorage.getItem("savedMovies")) || []
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSearch = (query, isShort) => {
    setIsLoading(true);
    setError("");
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
    const filtered = filtredFilms(savedMovies, query, isShort);
    if (filtered.length === 0) {
      setError("Ничего не найдено");
    }
    setMovies(filtered);
    setIsLoading(false);
  };
 
  React.useEffect(() => {
    mainApi
      .getUsersMovies() 
      .then((savedMovies) => {
        setIsLoading(true);
        const user = localStorage.getItem('userId');
        const userMovies = savedMovies.filter((film) => film.owner === user); 
        localStorage.setItem('savedMovies', JSON.stringify(userMovies)); 
        setMovies(userMovies);
        setIsLoading(false);

      })
      .catch((err) => {
        setIsLoading(false);
        setError('Вы еще ничего не добавили в избранное');
      });
  }, []);

  return (
    <>
      <main className="main">
        <section className="savemoviespage">
          <SearchForm handleSearch={handleSearch}></SearchForm>
          {isLoading ? (
        <LoaderButtonOn />
      ) : (
          <MoviesCardList cards={movies} errorMesssage={error}></MoviesCardList>)}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SaveMoviesPage;
