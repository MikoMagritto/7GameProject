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

function uploadFile(file) {
console.log("upload time",file);
  return service.post('/upload', file)
    .then(response => response.data)
} export { uploadFile }

// function saveNewThing(newThing) {
//   // console.log('new thing is: ', newThing)
//   return service
//     .post('/things/create', newThing)
//     .then(res => res.data)
//     .catch(errorHandler);
// } export { saveNewThing }

function loggedin() {
  return service.get('/loggedin')
    .then(response => response.data)
} export { loggedin }




