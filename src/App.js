// import logo from './logo.svg';
// import { Router } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
// import { Gift } from './components/Gift';
import { Main } from './components/Main'
import { ThankYou }from './components/ThankYou';

function App() {
  return (
    // <Gift/>
    <Router>

      <Main/>
    </Router>
    // <ThankYou/>
  )
}

export default App;
