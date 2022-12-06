import { Col, Container, Row } from "react-bootstrap"
import BookCard from "../components/BookCard"
import MainPagination from "../components/MainPagination"

const LatestBook = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <BookCard />
                </Col>
                <Col sm={12} md={6}>
                    <BookCard />
                </Col>
                <Col sm={12} md={6}>
                    <BookCard />
                </Col>
                <Col sm={12} md={6}>
                    <BookCard />
                </Col>
                <Col sm={12} md={6}>
                    <BookCard />
                </Col>
                <Col sm={12} md={6}>
                    <BookCard />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <MainPagination />
                </Col>
            </Row>
        </Container>
    )
}

export default LatestBook