import Movies from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import initialCards from '../../../utils/constants';

const MoviesCardList = () => {
    return (
        <>
        <section className="movielist">
        {initialCards.map((props) => {
            return <Movies  key={Math.random()}
            cardData={props}/>;
        }) 
        }
        </section>
    </>
    );
  };
  
  export default MoviesCardList;