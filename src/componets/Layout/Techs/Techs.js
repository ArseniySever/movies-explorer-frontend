import './Techs.css';
import '../AboutMe/AboutMe.css';
import '../Promo/Promo.css';


function Techs() {
  return (
    <section className="techs" id="techs">
      <h1 className="techs__title">
      Технологии
      </h1>
      <h2 className="techs__subtitle">
        7 технологий
      </h2>
      <h3 className="techs__text-subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </h3>
      <section className='promo__block techs__block'>
        <section className='promo__point techs__block-point'>
            <h2 className="techs__block-subtitle">
                HTML
            </h2>
        </section>
        <section className='promo__point techs__block-point'>
            <h2 className="techs__block-subtitle">
                CSS
            </h2>
        </section>
        <section className='promo__point techs__block-point'>
            <h2 className="techs__block-subtitle">
                JS
            </h2>
        </section>
        <section className='promo__point techs__block-point'>
            <h2 className="techs__block-subtitle">
                React
            </h2>
        </section>
        <section className='promo__point techs__block-point'>
            <h2 className="techs__block-subtitle">
                Git
            </h2>
        </section>
        <section className='promo__point techs__block-point'>
            <h2 className="techs__block-subtitle">
                Express.js
            </h2>
        </section>
        <section className='promo__point techs__block-point'>
            <h2 className="techs__block-subtitle">
                mongoDB
            </h2>
        </section>
        </section>
    </section>
  );
}

export default Techs;