

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import RegForm from "./components/register";
import Login from './components/login';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import MainPage from './components/main';
import Code from './components/ide';

function App() {
  return (<>
 
  <Router>
    <Routes>
      
        <Route exact path='/' element={<MainPage/>}/>
        <Route path='/Registration' element={<RegForm/>}/>
        <Route path='/home' element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/compiler" element={<Code/>}/>
        </Routes>
      
   </Router> </>
  );
}

export default App;
