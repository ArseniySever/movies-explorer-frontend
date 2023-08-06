import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutproject" >
      <h1 className="aboutproject__title">
      О проекте
      </h1>
      <section className='aboutproject__block'>
        <section className='aboutproject__block_text aboutproject__block_text-first'>
                <h2 className="aboutproject__text_title">
                    Дипломный проект включал 5 этапов
                </h2>
                <h2 className="aboutproject__text_subtitle">
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </h2>
            </section>      
            <section className='aboutproject__block_text'>
                <h2 className="aboutproject__text_title">
                    На выполнение диплома ушло 5 недель
                </h2>
                <h2 className="aboutproject__text_subtitle">
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </h2>
            </section>
        </section>
        <section className='aboutproject__blocks_bar'>
            <section className='aboutproject__block_bar aboutproject__block_bar-green'>
                <h2 className="aboutproject__block_bar-title">
                    1 неделя
                </h2>
            </section>
            <section className='aboutproject__block_bar aboutproject__block_bar-grey'>
                <h2 className="aboutproject__block_bar-title aboutproject__block_bar-title-grey">
                    4 недели
                </h2>
            </section>
        </section>
        <section className='aboutproject__block_bar-subtitles'>
            <section className='aboutproject__block_bar aboutproject__block_bar-one'> 
                <h2 className="aboutproject__block_bar-subtitle">
                    Back-end
                </h2>
            </section>
            <section className='aboutproject__block_bar aboutproject__block_bar-two'> 
                <h2 className="aboutproject__block_bar-subtitle">
                    Front-end
                </h2>
            </section>
        </section>
    </section>
  );
}

export default AboutProject;