import './SavedMovies.css';
import '../../Layout/Main/Main.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../../General/Footer/Footer';
import Preloader from '../Preloader/Preloader';
const SaveMoviesPage = () => {
  

  return (
    <>
        <main className='main'>
          <section className="savemoviespage">
              <SearchForm></SearchForm>
              <MoviesCardList></MoviesCardList>
            <Preloader></Preloader>
          </section>
        </main>
        <Footer></Footer>
    </>
  );
};

export default SaveMoviesPage;