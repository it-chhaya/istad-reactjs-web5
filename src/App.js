import logo from './logo.svg'
import './App.css'
import MainNavbar from './components/mainnavbar/MainNavbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import MainFooter from './components/MainFooter'
import LatestBook from './pages/LatestBook'
import Genre from './pages/Genre'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Register from './pages/Register'
import Layout from './pages/Layout'
import Protected from './pages/Protected'
import { useSelector } from 'react-redux'

function App() {

  const {isLoggedIn} = useSelector(state => state.AUTH_REDUCER)

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />

					<Route
						path="/latest-book"
						element={
							<Protected isLoggedIn={isLoggedIn}>
								<LatestBook />
							</Protected>
						}
					/>

					<Route path="/genres" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Genre />
            </Protected>
          } />

					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/contact-us" element={<ContactUs />} />
				</Route>

				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>
	)
}

export default App
