import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <section className='promo__block'>
        <section className='promo__block_point'>
            <a className="promo__subtitle" href='#aboutproject'>
                О проекте
            </a>
        </section>
        <section className='promo__block_point'>
            <a className="promo__subtitle" href="#techs">
                Технологии
            </a>
        </section>
        <section className='promo__block_point'>
            <a className="promo__subtitle" href="#aboutme">
                Студент
            </a>
        </section>
      </section>
      
      
    </section>
  );
}

export default Promo;