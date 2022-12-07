import { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import secureLocalStorage from 'react-secure-storage'
import { login } from '../services/authService'

const FormLogin = (props) => {

	const [loggedInRequest, setLoggedInRequest] = useState({})

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

		console.log(loggedInRequest)

		login(loggedInRequest).then(json => {
			secureLocalStorage.setItem('authHeader', json.data.authHeader)
			console.log(secureLocalStorage.getItem('authHeader'))
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
