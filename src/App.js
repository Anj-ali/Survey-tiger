import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Logo from './logo.png';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateSurvey from './components/CreateSurvey';
import Publish from './components/Publish';
import Menu from './components/Menu';
import { useState } from 'react';
import {Link} from "react-router-dom";


function App() {
  const [squestions,setSquestions] = useState([]);
  return (
    <>
      <div className = "col-md-10 offset-md-1 col-12 text-center">
        
        <Router>
          <Link to = "/"exact>
            <img className = "col-md-6" alt='logo' src = {Logo}/>
          </Link>
          <Switch>
            <Route path="/" component ={Menu} exact/>
            <Route path="/create" component ={CreateSurvey} exact/>
            <Route path="/publish" component ={Publish} exact/>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
