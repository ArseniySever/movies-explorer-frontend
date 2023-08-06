import './Preloader.css';
import { useLocation } from "react-router-dom";


const Preloader = (props) => {
    const { pathname } = useLocation();

    return (
        <>
        {pathname === '/movies' ?
         <section className="preloader">
         <button className='preloader__button'>
                 Ещё
         </button>
        </section> : <></>}
       
    </>
    );
  };
  
  export default Preloader;