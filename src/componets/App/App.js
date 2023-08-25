import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import Login from "../User/Login/Login";
import Register from "../User/Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../User/Profile/Profile";
import Main from "../Layout/Main/Main";
import Header from "../../componets/General/Header/Header";
import Movies from "../../componets/Movies/MoviesPage/MoviesPage";
import SaveMoviesPage from "../Movies/SavedMovies/SavedMovies";
import * as Auth from "../../utils/MainApi";
import ProtectedRoute from "../App/ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setCatchError] = useState(false);
  const [isSaveData, setIsSaveData] = useState(false);
  const [isAuth, setIsAuth] = useState('auth', 'unknow', 'no_auth');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuth === "auth") {
      Auth.getUserInfo()
      .then((user) => {
        setIsAuth('auth');
        setCurrentUser(user);
     })
      .catch((error) => {
      console.log(error);
      setIsAuth('no_auth');
      });
  
  }
}, []);
  React.useEffect(() => {
    Auth.getContent()
      .then((data) => {
        if (data) {
          setIsLoading(false);
          setCurrentUser(data);
          navigate("/", { replace: true });
          setIsLoading(true);

        }
      })
      .catch(console.error);
  }, []);

  function handleUpdateUser(name, email) {
    Auth.editUserInfo(name, email)
      .then((newinfo) => {
        setCurrentUser(newinfo.user);
        setCatchError(false);
        setIsSaveData(true);
      })
      .catch((err) => {
        setCatchError(true);
      console.log(`Error ${err} in editUserAvatar`);
      })
  }
  function handleSignin(email, password) {
    Auth.authorization(email, password)
      .then((data) => {
        if (data) {
          setIsAuth('auth');
          setCurrentUser(data);
          navigate("/movies", { replace: true });
          
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        setIsAuth('no_auth');

      });
  }
  function handleRegister(email, password, name) {
    if (email && password && name) {
      Auth.registration(email, password, name)
        .then((res) => {
          navigate("/movies", { replace: true });
          setIsAuth('auth');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleLogout() {
    Auth.logout() 
    .then(() => {
      setCurrentUser({});
      localStorage.clear();
      setIsAuth('no_auth');
      navigate("/", { replace: true });
    })
    .catch((err) => {
      console.log(err);
    });
}


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {pathname === "/" ||
        pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile" ? (
          <Header isAuth={isAuth} />
        ) : (
          ""
        )}
        <Routes>
        <Route
            path="/sign-in"
            element={isAuth === "no_auth" ? <Login onSignin={handleSignin}  isLoading={isLoading}/> : <Navigate to='/'/>} 
          />
          <Route
            path="/sign-up"
            element={ isAuth === "no_auth" ? <Register onRegist={handleRegister} isLoading={isLoading}/> : <Navigate to='/'/>
            }
          />
        <Route path="/" element={isAuth === "no_auth" ?<Main/> : <ProtectedRoute isAuth={isAuth}
            component={Main}></ProtectedRoute>} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                isAuth={isAuth}
                component={Profile}
                onSignOut={handleLogout}
                onUpdateUser={handleUpdateUser}
                error={error}
                isSaveData={isSaveData}
               
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                isAuth={isAuth}
                component={Movies}
                cards={cards}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isAuth={isAuth} component={SaveMoviesPage} />
            }
          />
      
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
