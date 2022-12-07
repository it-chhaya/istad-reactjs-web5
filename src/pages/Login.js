import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import FormLogin from "../components/FormLogin"

const Login = () => {

	const location = useLocation()

	useEffect(() => {
		// Your initialization
	}, [])

	return (
		<FormLogin isRegister={location.state && location.state.isRegister} />
	)
}

export default Login
