import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const FormRegister = () => {
	return (
		<Container>
			<Form>
				<Row className="justify-content-center">
					<Col md={6}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" placeholder="Enter username" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Family Name</Form.Label>
							<Form.Control type="text" placeholder="Enter family name" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Given Name</Form.Label>
							<Form.Control type="text" placeholder="Enter given name" />
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Col>
					<Col md={6}>
						<Row>
							<Col md={6}>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" />
								</Form.Group>
							</Col>
							<Col md={6}>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Confirmed Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Confirmed Password"
									/>
								</Form.Group>
							</Col>
						</Row>

						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1">
							<Form.Label>Biography</Form.Label>
							<Form.Control as="textarea" rows={4} />
						</Form.Group>

						<Form.Group controlId="formFile" className="mb-3">
							<Form.Label>Profile</Form.Label>
							<Form.Control type="file" />
						</Form.Group>

					</Col>
				</Row>
			</Form>
		</Container>
	)
}

export default FormRegister
