import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/auth',
  withCredentials: true
});
export default service;


function signup(username, password, email, height, age, level, avatar, role) {
  return service.post('/signup', {
    username,
    password,
    email,
    height,
    age,
    level,
    avatar,
    role,
  })
    .then(response => response.data)
} export { signup }

function loggedin() {
  return service.get('/loggedin')
    .then(response => response.data)
} export { loggedin }




