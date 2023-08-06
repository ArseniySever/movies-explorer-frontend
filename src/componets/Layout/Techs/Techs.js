import './Techs.css';
import '../AboutMe/AboutMe.css';
import '../Promo/Promo.css';


function Techs() {
  return (
    <section className="techs">
      <h1 className="techs__title">
      Технологии
      </h1>
      <h2 className="techs__subtitle">
        7 технологий
      </h2>
      <h3 className="techs__text_subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </h3>
      <section className='promo__block techs__block'>
        <section className='promo__block_point techs__block_point'>
            <h2 className="techs__block_subtitle">
                HTML
            </h2>
        </section>
        <section className='promo__block_point techs__block_point'>
            <h2 className="techs__block_subtitle">
                CSS
            </h2>
        </section>
        <section className='promo__block_point techs__block_point'>
            <h2 className="techs__block_subtitle">
                JS
            </h2>
        </section>
        <section className='promo__block_point techs__block_point'>
            <h2 className="techs__block_subtitle">
                React
            </h2>
        </section>
        <section className='promo__block_point techs__block_point'>
            <h2 className="techs__block_subtitle">
                Git
            </h2>
        </section>
        <section className='promo__block_point techs__block_point'>
            <h2 className="techs__block_subtitle">
                Express.js
            </h2>
        </section>
        <section className='promo__block_point techs__block_point'>
            <h2 className="techs__block_subtitle">
                mongoDB
            </h2>
        </section>
        </section>
    </section>
  );
}

export default Techs;