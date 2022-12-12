import { Alert, Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import FormLogin from '../components/FormLogin'

const Login = () => {

	const location = useLocation()

	return (
		<main>
			{
				location.state && (
					<Container>
						<Row className='justify-content-center'>
							<Col md={6}>
								<Alert variant="warning">{location.state.message}</Alert>
							</Col>
						</Row>
					</Container>
				)
			}
			<FormLogin />
		</main>
	)
}

export default Login
