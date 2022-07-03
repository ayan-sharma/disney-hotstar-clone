import './App.css';
// import {Router ,Switch , Route } from "react-router"
import {BrowserRouter as Router, Routes  , Route} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/home';
import Details from './components/Details';
import Originals from './components/Originals';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Header/>
        <Routes >
          <Route 
              exact path='/' element={<Login/>}>
          </Route>
          <Route 
              path='/home' element ={<Home/>}>
          </Route>
          <Route
            path='/detail/:id' element={<Details/>}>
          </Route>
          <Route
              path='/originals' element={<Originals/>}>
          </Route>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
