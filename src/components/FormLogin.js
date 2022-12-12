import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../services/actions/authAction'

const FormLogin = () => {

	const navigate = useNavigate()
	const [loggedInRequest, setLoggedInRequest] = useState({})

	const dispatch = useDispatch()
	const {isLoggedIn} = useSelector(state => 
		state.AUTH_REDUCER)
	const {auth} = useSelector(state => 
		state.AUTH_REDUCER)

	useEffect(() => {
		console.log('isLoggedIn ', isLoggedIn)
		console.log('auth ', auth)
	}, [isLoggedIn, auth])

	const onValueChangeHandler= (e) => {
		// Destructuring
		const { name, value } = e.target
		setLoggedInRequest((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const onFormSubmitHandler = (e) => {

		e.preventDefault()

		console.log(loggedInRequest)

		// Start login
		dispatch(login(loggedInRequest))
		.then(() => {
			console.log('Login successfully')
			navigate('/')
		})

	}

	return (
		<Container>
			<Row className='justify-content-center'>
				<Col md={6}>
					<Form onSubmit={onFormSubmitHandler}>
						<Form.Group className="mb-3" controlId="formBasicUsernameOrEmail">
							<Form.Label>Username or Email</Form.Label>
							<Form.Control onChange={onValueChangeHandler} name="usernameOrEmail" type="text" placeholder="Enter username or email" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control onChange={onValueChangeHandler} name="password" type="password" placeholder="Password" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Log in
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default FormLogin
