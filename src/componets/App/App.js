import React, { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
  const [loggedIn, setLoggedIn] = useState(false);
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (loggedIn) {
      Auth.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch(console.error);
    }
  }, [loggedIn]);
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
  }, [navigate]);

  function handleUpdateUser(name, email) {
    Auth.editUserInfo(name, email)
      .then((newinfo) => {
        setCurrentUser(newinfo.user);
      })
      .catch((err) => console.log(`Error ${err} in editUserAvatar`));
  }
  function handleSignin(email, password) {
    Auth.authorization(email, password)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);

      });
  }
  function handleRegister(email, password, name) {
    if (email && password && name) {
      Auth.registration(email, password, name)
        .then((res) => {
          navigate("/sign-in", { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleLogout = () => {
    setCurrentUser({});
    localStorage.clear();
    setLoggedIn(false);
    navigate("/", { replace: true });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {pathname === "/" ||
        pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile" ? (
          <Header loggedIn={loggedIn} />
        ) : (
          ""
        )}
        <Routes>
          <Route
            path="/sign-in"
            element={<Login onSignin={handleSignin}  isLoading={isLoading}/>}
          />
          <Route
            path="/sign-up"
            element={
              <Register onRegist={handleRegister} isLoading={isLoading}/>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Main />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={Profile}
                onSignOut={handleLogout}
                onUpdateUser={handleUpdateUser}
               
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                component={Movies}
                cards={cards}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn} component={SaveMoviesPage} />
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
