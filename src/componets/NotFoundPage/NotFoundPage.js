import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import "../Layout/Main/Main.css";

function Page404() {
  return (
    <main className='main'>
      <section className='notfoundpage'>
        <h1 className="notfoundpage__title">404</h1>
        <p className="notfoundpage__subtitle">Страница не найдена</p>
        <Link className="notfoundpage__link" to={-1}>
          Назад
        </Link>
      </section>
    </main>
  );
}

export default Page404;