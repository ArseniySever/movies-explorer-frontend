import Movies from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import initialCards from '../../../utils/constants';

const MoviesCardList = () => {
    return (
        <>
        <section className="movielist">
        {initialCards.map((film) => {
            return <Movies  key={film.id || film.movieId}
            cardData={film}/>;
        }) 
        }
        </section>
    </>
    );
  };
  
  export default MoviesCardList;