import logo from './logo.svg';

import Login from './login';
import Signup from './signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Dash2 from './Dash2';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/dash2' element={<Dash2/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;