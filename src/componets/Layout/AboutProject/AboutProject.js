import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutproject"  id="aboutproject">
      <h1 className="aboutproject__title">
      О проекте
      </h1>
      <section className='aboutproject__block'>
        <section className='aboutproject__block-text aboutproject__block-text_first'>
                <h2 className="aboutproject__text-title">
                    Дипломный проект включал 5 этапов
                </h2>
                <h2 className="aboutproject__text-subtitle">
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </h2>
            </section>      
            <section className='aboutproject__block-text'>
                <h2 className="aboutproject__text-title">
                    На выполнение диплома ушло 5 недель
                </h2>
                <h2 className="aboutproject__text-subtitle">
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </h2>
            </section>
        </section>
        <section className='aboutproject__blocks-bar'>
            <section className='aboutproject__block-bar aboutproject__block-bar_green'>
                <h2 className="aboutproject__block-bar-title">
                    1 неделя
                </h2>
            </section>
            <section className='aboutproject__block-bar aboutproject__block-bar_grey'>
                <h2 className="aboutproject__block-bar-title aboutproject__block-bar-title_grey">
                    4 недели
                </h2>
            </section>
        </section>
        <section className='aboutproject__block-bar-subtitles'>
            <section className='aboutproject__block-bar aboutproject__block-bar_one'> 
                <h2 className="aboutproject__block-bar-subtitle">
                    Back-end
                </h2>
            </section>
            <section className='aboutproject__block-bar aboutproject__block-bar_two'> 
                <h2 className="aboutproject__block-bar-subtitle">
                    Front-end
                </h2>
            </section>
        </section>
    </section>
  );
}

export default AboutProject;