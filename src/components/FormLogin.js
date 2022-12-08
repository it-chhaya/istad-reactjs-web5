import { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../services/actions/authAction'

const FormLogin = (props) => {

	const [loggedInRequest, setLoggedInRequest] = useState({})
	
	const { isLoggedIn } = useSelector(state => state.AUTH_REDUCER)

	const dispatch = useDispatch()

	useEffect(() => {
		console.log(isLoggedIn)
	}, [isLoggedIn])


	const changeValueHandler = (e) => {
		const { name, value } = e.target
		setLoggedInRequest((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const submitLoggedInForm = (e) => {

		e.preventDefault()

		dispatch(login(loggedInRequest))
		.then(() => {
			console.log('Login successfully..!')
		})
		
	}

	return (
		<Container>

			{
				props.isRegister && (
					<Row className='justify-content-center'>
						<Col md={6}>
							<Alert variant='danger'>
								Please check your email and click verify..!
							</Alert>
						</Col>
					</Row>
				)
			}

			<Row className='justify-content-center'>
				<Col md={6}>
					<Form onSubmit={submitLoggedInForm}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control onChange={changeValueHandler} name="usernameOrEmail" type="text" placeholder="Enter username or email" />
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control onChange={changeValueHandler} name="password" type="password" placeholder="Password" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default FormLogin
