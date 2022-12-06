import logo from './logo.svg';
import './App.css';
import MainNavbar from './components/mainnavbar/MainNavbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import MainFooter from './components/MainFooter';
import LatestBook from './pages/LatestBook';
import Genre from './pages/Genre';

function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/latest-book' element={<LatestBook />} />
        <Route path='/genres' element={<Genre />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
