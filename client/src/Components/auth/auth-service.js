import axios from 'axios';
 
const service = axios.create({
  baseURL: 'http://localhost:5000/auth',
  withCredentials: true
});

function signup(username, password,email,height,age,level,avatar,role){
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
  .then(response=> response.data)
} export{signup}




export default service;