import { Col, Row } from 'react-bootstrap'
import { BookHalf } from 'react-bootstrap-icons'

const GenreCard = () => {
	return (
		<Row>
			<Col md={3} className="feature">
				<div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
					<BookHalf size={96} />
				</div>
				<h3 className="fs-2">Featured title</h3>
				<p>
					Paragraph of text beneath the heading to explain the heading. We'll
					add onto it with another sentence and probably just keep going until
					we run out of words.
				</p>
				<a href="#" className="icon-link d-inline-flex align-items-center">
					Call to action
				</a>
			</Col>
		</Row>
	)
}

export default GenreCard
