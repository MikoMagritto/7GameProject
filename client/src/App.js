import './App.css';
import Signup from './Components/auth/Signup';
import {Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
  <Switch>
      <Route exact path="/signup" component={Signup}/>
  </Switch>
  
    </div>
  );
}

export default App;
