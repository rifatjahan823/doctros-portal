import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import Dashboard from './Pages/Dashboard/Dashboard';
import MannageDoctors from './Pages/Dashboard/MannageDoctors';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
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
      <Route path="/dashboard" element={<RequireAuth>
        <Dashboard/>
      </RequireAuth>}>
      <Route index element={<MyAppoinment/>}></Route>
      <Route path="myreview"  element={<MyReview/>}></Route>
      <Route path="myhistory"  element={<MyHistory/>}></Route>
      <Route path="user"  element={<RequireAdmin><Users/></RequireAdmin>}></Route>
      <Route path="adddoctor"  element={<RequireAdmin><AddDoctor/></RequireAdmin>}></Route>
      <Route path="mannagedoctors"  element={<RequireAdmin><MannageDoctors/></RequireAdmin>}></Route>
      </Route >
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
