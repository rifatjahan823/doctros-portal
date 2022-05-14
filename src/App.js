import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navebar from './Pages/shared/Navebar/Navebar';

function App() {
  return (
    <div className='px-12'>
      <Navebar></Navebar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appointment" element={<RequireAuth>
        <Appoinment/>
      </RequireAuth>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
