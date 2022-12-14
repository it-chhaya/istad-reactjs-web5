import { useEffect } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import BookCard from "../components/bookcard/BookCard"
import MainPagination from "../components/MainPagination"
import SavedBookModal from "../components/modal/SavedBookModal"
import { fetchBooks } from "../services/actions/bookAction"
import { setSavedBookModalStatus } from "../services/actions/modalAction"
import { INIT_PAGE_NUM, INIT_PAGE_SIZE } from "../services/constants"

const LatestBook = () => {

    const dispatch = useDispatch()
    const {data} = useSelector(state => state.BOOK_REDUCER)

    useEffect(() => {
        dispatch(fetchBooks(INIT_PAGE_NUM, INIT_PAGE_SIZE))
        .then(() => {
            console.log('Fetch books successfully')
        })
    }, [])

    const addNewBookHandler = () => {
        dispatch(setSavedBookModalStatus(true))
    }

    return (
        <Container>
            <Row className="mb-2">
                <Col>
                    <Button onClick={addNewBookHandler}>Add new book</Button>
                    <SavedBookModal/>
                </Col>
            </Row>
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
                        prePage={data && data.prePage}
                        nextPage={data && data.nextPage}
                        isLastPage={data && data.isLastPage}
                        isFirstPage={data && data.isFirstPage}
                        pageNum={data && data.pageNum}
                        navigatepageNums={data && data.navigatepageNums} />
                </Col>
            </Row>
        </Container>
    )
}

export default LatestBook