import React, {useState} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../User/Login/Login";
import Register from "../User/Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../User/Profile/Profile";
import Main from "../Layout/Main/Main";
import Header from "../../componets/General/Header/Header";
import Movies from "../../componets/Movies/MoviesPage/MoviesPage";
import SaveMoviesPage from "../Movies/SavedMovies/SavedMovies";

import "./App.css";

function App() {
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  return (
      
      <div className="page">
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?
          <Header loggedIn={loggedIn} isLoading={isLoading}/> : ''}
        <Routes>
          
          <Route path="/" element={<Main  />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SaveMoviesPage />} />


        </Routes>

      </div>
  );
}



export default App;
