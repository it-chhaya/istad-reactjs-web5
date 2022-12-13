import logo from './logo.svg';
import './App.css';
import MainNavbar from './components/mainnavbar/MainNavbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import MainFooter from './components/MainFooter';
import LatestBook from './pages/LatestBook';
import Genre from './pages/Genre';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';

function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/latest-book' element={<LatestBook />} />
        <Route path='/genres' element={<Genre />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Login />}/>
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
