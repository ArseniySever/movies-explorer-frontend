import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../../General/Footer/Footer';
import Preloader from '../Preloader/Preloader';
const SaveMoviesPage = () => {
  

  return (
    <>
        <section className="savemoviespage">
            <SearchForm></SearchForm>
            <MoviesCardList></MoviesCardList>
          <Preloader></Preloader>
        </section>
        <Footer></Footer>
    </>
  );
};

export default SaveMoviesPage;