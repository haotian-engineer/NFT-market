import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


import Home from './components/Views/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/about"  element={<About />} />
         </Routes>
       </Router>
    </div>
  );
}

export default App;
