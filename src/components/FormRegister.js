import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { register, sendEmailVerification } from '../services/authService'
import { uploadFile } from '../services/fileService'

const FormRegister = () => {
	const navigate = useNavigate()
	const [file, setFile] = useState({})
	const [data, setData] = useState({})

	const onValueChangeHandler = (e) => {
		// Destructuring
		const { name, value } = e.target
		setData((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const onRegisterHandler = (e) => {
		e.preventDefault()

		data.roleIds = [3]

		let formData = new FormData()
		formData.append('file', file)

		uploadFile(formData).then((json) => {
			console.log(json)
			if (json.code === 200) {
				data.profileId = json.data.id
				register(data).then((json) => {
					console.log(json)
					if (json.code === 200) {
						sendEmailVerification({ email: json.data.email }).then((json) => {
							if (json.code === 200) {
								navigate('/login', { state: { message: json.message } })
							}
						})
					}
				})
			}
		})
	}

	const onFileChangeHandler = (e) => {
		setFile(e.target.files[0])
	}

	return (
		<Container>
			<Form onSubmit={onRegisterHandler}>
				<Row className="justify-content-center">
					<Col md={6}>
						<Form.Group className="mb-3" controlId="formBasicUsername">
							<Form.Label>Username</Form.Label>
							<Form.Control
								onChange={onValueChangeHandler}
								name="username"
								type="text"
								placeholder="Enter username"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								onChange={onValueChangeHandler}
								name="email"
								type="email"
								placeholder="Enter email"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicFamily">
							<Form.Label>Family Name</Form.Label>
							<Form.Control
								name="familyName"
								onChange={onValueChangeHandler}
								type="text"
								placeholder="Enter family name"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicGivenName">
							<Form.Label>Given Name</Form.Label>
							<Form.Control
								name="givenName"
								onChange={onValueChangeHandler}
								type="text"
								placeholder="Enter given name"
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Register
						</Button>
					</Col>
					<Col md={6}>
						<Row>
							<Col md={6}>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										name="password"
										onChange={onValueChangeHandler}
										type="password"
										placeholder="Password"
									/>
								</Form.Group>
							</Col>
							<Col md={6}>
								<Form.Group
									className="mb-3"
									controlId="formBasicConfirmedPassword">
									<Form.Label>Confirmed Password</Form.Label>
									<Form.Control
										name="confirmedPassword"
										onChange={onValueChangeHandler}
										type="password"
										placeholder="Confirmed Password"
									/>
								</Form.Group>
							</Col>
						</Row>

						<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								name="phoneNumber"
								onChange={onValueChangeHandler}
								type="text"
								placeholder="Enter phone number"
							/>
						</Form.Group>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Biography</Form.Label>
							<Form.Control
								name="biography"
								onChange={onValueChangeHandler}
								as="textarea"
								rows={4}
							/>
						</Form.Group>

						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Profile</Form.Label>
							<Form.Control onChange={onFileChangeHandler} type="file" />
						</Form.Group>
					</Col>
				</Row>
			</Form>
		</Container>
	)
}

export default FormRegister
