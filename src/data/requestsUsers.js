const apiUrl = 'http://localhost:8080/api/v1/users';

function getAllUsers() {
  return fetch(apiUrl);
}


export {
  getAllUsers,
};
