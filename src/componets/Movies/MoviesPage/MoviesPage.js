import './MoviesPage.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../../General/Footer/Footer';
import Preloader from '../Preloader/Preloader';
const Movies = () => {


  return (
    <>
        <section className="moviespage">
            <SearchForm></SearchForm>
            <MoviesCardList ></MoviesCardList>
          <Preloader></Preloader> 
        </section>
        <Footer></Footer>
    </>
  );
};

export default Movies;