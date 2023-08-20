export const BASE_URL = 'https://movie.search.nomoredomains.xyz';

const handleResponse = (response) => {
  if (!response.ok) {
    return response.json().then((err) => {
      const error = new Error('Ошибка сервера');
      error.data = err;
      throw error;
    });
  }
  return response.json();
}


export const registration = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': "application/json",
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(handleResponse)
    .then((data) => {
      return data.data;
    });
};
export const authorization = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': "application/json",
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then(handleResponse)

};
export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    method: "GET",
    headers: {
      'Accept': "application/json",
      'Content-type': 'application/json',
    },
  }).then(handleResponse);
}


export const getUsersMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Accept': "application/json",
      'Content-type': 'application/json',
    },
  }).then(handleResponse);
}

export const editUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    method: "PATCH",
    headers: {
      'Accept': "application/json",
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
    }),
  }).then(handleResponse);
}
export const saveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
    headers: {
      'Accept': "application/json",
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(movie),
  }).then(handleResponse);
}

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      'Accept': "application/json",
      'Content-type': 'application/json',
    },
  }).then(handleResponse);
}
export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: "include",
    headers: {
      'Accept': "application/json",
      'Content-type': 'application/json',
    },
  })
    .then(handleResponse)
    .then((data) => {
      return data.data;
    });
} 
