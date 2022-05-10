import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navebar from './Pages/shared/Navebar/Navebar';

function App() {
  return (
    <div>
      <Navebar></Navebar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
