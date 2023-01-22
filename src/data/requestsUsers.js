import axios from 'axios';
const apiUrl = 'http://localhost:8080/api/v1/users';

function getAllUsers() {
  return fetch(apiUrl);
}

function postUser(user) {
  return axios.post(apiUrl, JSON.stringify(user));
}

function putUser(userId, user) {
  return axios.put(`${apiUrl}/${userId}`, JSON.stringify(user));
}

function deleteUser(userId) {
  return axios.delete(`${apiUrl}/${userId}`);
}

export {
  getAllUsers,
  postUser,
  putUser,
  deleteUser,
};
