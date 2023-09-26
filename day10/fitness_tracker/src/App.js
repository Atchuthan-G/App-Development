import logo from './logo.svg';
import Home from './Home';
import Login from './login';
import Signup from './signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Dash2 from './Dash2';
import ContactUs from './Contact';
import TermsAndConditions from './Terms';
import Profile from './Profile';
import Men  from './menpage';
import About from './About';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/dash2' element={<Dash2/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
      <Route path='/Terms' element={<TermsAndConditions/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/Exercises' element={<Men/>}></Route>
      <Route path='/About' element={<About/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;