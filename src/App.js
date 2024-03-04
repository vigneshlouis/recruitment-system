

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import RegForm from "./components/register";
import Login from './components/login';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import MainPage from './components/main';
function App() {
  return (<>
 
  <Router>
    <Routes>
      
        <Route exact path='/' element={<MainPage/>}/>
        <Route path='/Registration' element={<RegForm/>}/>
        <Route path='/home' element={<MainPage/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
      
   </Router> </>
  );
}

export default App;
