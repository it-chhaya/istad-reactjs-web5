import './MainNavbar.css'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BrandLogo from '../../assets/brandlogo/book-logo.svg'
import { DoorOpenFill, PersonCircle } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../services/actions/authAction'
import secureLocalStorage from 'react-secure-storage'

const MainNavbar = () => {

	const dispatch = useDispatch()

	const { isLoggedIn } = useSelector((state) => state.AUTH_REDUCER)

	const onLogoutHandler = () => {
		dispatch(logout())
		.then(() => console.log('Logout successfully!'))
	}

	return (
		<Container fluid className="px-0">
			<header className="p-3 mb-3 border-bottom">
				<div className="container">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<Link
							to={'/'}
							className="d-flex align-items-center mb-2 mb-lg-0 me-5 text-dark text-decoration-none">
							<Image
								className="brand-logo"
								src={BrandLogo}
								alt="iSTAD Reading Logo"
							/>
						</Link>

						<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li>
								<Link
									to={'/latest-book'}
									className="nav-link px-2 link-secondary">
									Latest Books
								</Link>
							</li>
							<li>
								<Link to={'/genres'} className="nav-link px-2 link-dark">
									Genres
								</Link>
							</li>
							<li>
								<Link to={'/contact-us'} className="nav-link px-2 link-dark">
									Contact Us
								</Link>
							</li>
							<li>
								<Link to={'/about-us'} className="nav-link px-2 link-dark">
									About Us
								</Link>
							</li>
						</ul>

						<form
							className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
							role="search">
							<input
								type="search"
								className="form-control"
								placeholder="Search..."
								aria-label="Search"
							/>
						</form>

						{isLoggedIn ? (
							<ul className="nav col-12 col-lg-auto mb-2 mb-md-0">
								<li className="d-flex align-items-center">
									<Link to={'/profile'} className="nav-link px-2 link-secondary">
										<Image width={38} className="rounded-circle" src={secureLocalStorage.getItem('auth').user.profile.uri} alt='User Profile' />
									</Link>
								</li>
								<li className="d-flex align-items-center">
									<DoorOpenFill />
									<Link onClick={onLogoutHandler} to={'/'} className="nav-link px-2 link-secondary">
										Logout
									</Link>
								</li>
							</ul>
						) : (
							<ul className="nav col-12 col-lg-auto mb-2 mb-md-0">
								<li className="d-flex align-items-center">
									<PersonCircle />
									<Link to={'/login'} className="nav-link px-2 link-secondary">
										Log in
									</Link>
								</li>
								<li className="d-flex align-items-center">
									<DoorOpenFill />
									<Link
										to={'/register'}
										className="nav-link px-2 link-secondary">
										Register
									</Link>
								</li>
							</ul>
						)}

						{/* <div className="dropdown text-end">
							<a
								href="#"
								className="d-block link-dark text-decoration-none dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<img
									src="https://github.com/mdo.png"
									alt="mdo"
									width="32"
									height="32"
									className="rounded-circle"
								/>
							</a>
							<ul className="dropdown-menu text-small">
								<li>
									<a className="dropdown-item" href="#">
										New project...
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Settings
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Profile
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Sign out
									</a>
								</li>
							</ul>
						</div> */}
					</div>
				</div>
			</header>
		</Container>
	)
}

export default MainNavbar
