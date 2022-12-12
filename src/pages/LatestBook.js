import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import BookCard from "../components/bookcard/BookCard"
import MainPagination from "../components/MainPagination"
import { fetchBooks } from "../services/actions/bookAction"

const LatestBook = () => {

    const dispatch = useDispatch()
    const {data} = useSelector(state => state.BOOK_REDUCER)

    useEffect(() => {
        dispatch(fetchBooks(1, 3))
        .then(() => {
            console.log('Fetch books successfully')
        })
    }, [])

    return (
        <Container>
            <Row>
                {
                    data && data.list.map(book => (
                        <Col key={book.id} sm={12} md={6}>
                            <BookCard book={book} />
                        </Col>
                    ))
                }
            </Row>
            <Row className="justify-content-center">
                <Col md={6}>
                    <MainPagination
                        isFirstPage={data && data.isFirstPage}
                        pageNum={data && data.pageNum}
                        navigatepageNums={data && data.navigatepageNums} />
                </Col>
            </Row>
        </Container>
    )
}

export default LatestBook