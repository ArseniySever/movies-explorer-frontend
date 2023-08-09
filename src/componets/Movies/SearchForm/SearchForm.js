import './SearchForm.css';
import buttonLine from '../../../images/buttonLine.svg';
import buttonArrow from '../../../images/buttonArrow.svg';

const SearchForm = () => {
  

  return (
    <>
        <form className="searchform">
            <section className='searchform__finder'>
                <input className='searchform__input' placeholder='Фильм'></input>
                <button className='searchform__button'>
                    <img className="searchform__button-line" alt="Линия в кнопке" src={buttonLine}></img>
                    <img className="searchform__button-arrow" alt="Стрелочка в конпке" src={buttonArrow}></img>
                </button>
            </section>
            <section className='searchform__switcher'>
                <label className="searchform__tumbler">
                    <input className="searchform__checkbox" type="checkbox"/>
                    <span className="searchform__slider" />
                </label>
                <p className="searchform__films">Короткометражки</p>
            </section>
        </form>
    </>
  );
};

export default SearchForm;