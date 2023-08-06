import './AboutMe.css';
import avatar from "../../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="aboutme">
      <h1 className="aboutme__title">
      Студент
      </h1>
        <section className='aboutme__block'>
            <section className='aboutme__block_info'>
                <h2 className='aboutme__subtitle'>
                    Арсений
                </h2>
                <h2 className='aboutme__about'>
                    Фронтенд-разработчик, 24 года
                </h2>
                <h2 className='aboutme__text'>
                Я родился и живу в Ленинградской области, закончил педагогический институт  НовГУ. У меня нет жены 
и дочери. Я люблю слушать музыку, а ещё увлекаюсь играми. Недавно начал кодить. С 2017 года обучался в институте. После того, как пройду курс по веб-разработке, буду думать о постоянной работы.
                </h2>
                <a href="https://github.com/ArseniySever" className='aboutme__git'>
                    <p className='aboutme__git_title'>GitHub</p>
                </a>
            </section>
            <img
                src={avatar}
                alt="Аватар"
                className="aboutme__image"
            />
        </section>
        <section className='aboutme__portfolio'>
            <h2 className='aboutme__portfolio_name'>
                Портфолио
            </h2>
            <ul className='aboutme__portfolio_block'>
                <li className='aboutme__portfolio_tab'>
                    <a href='https://github.com/ArseniySever/how-to-learn' className='aboutme__portfolio_link'>
                        <p className='aboutme__portfolio_title'>Статичный сайт</p>
                        <p className='aboutme__portfolio_title aboutme__portfolio_arrow'>↗</p>
                    </a>
                </li>
                <li className='aboutme__portfolio_tab'>
                    <a href='https://github.com/ArseniySever/russian-travel' className='aboutme__portfolio_link'>
                        <p className='aboutme__portfolio_title'>Адаптивный сайт</p>
                        <p className='aboutme__portfolio_title aboutme__portfolio_arrow'>↗</p>
                    </a>
                </li>
                <li className='aboutme__portfolio_tab'>
                    <a href='https://github.com/ArseniySever/mesto-react' className='aboutme__portfolio_link'>
                        <p className='aboutme__portfolio_title'>Одностраничное приложение</p>
                        <p className='aboutme__portfolio_title aboutme__portfolio_arrow'>↗</p>
                    </a>
                </li>
            </ul>
        </section>
    </section>
  );
}

export default AboutMe;