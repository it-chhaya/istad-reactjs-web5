import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fetchBooks, removeBookById } from '../../services/actions/bookAction'
import { setSavedBookModalStatus } from '../../services/actions/modalAction'
import './BookCard.css'

const BookCard = ({book}) => {

	const dispatch = useDispatch()

	const editBookHandler = () => {
		dispatch(setSavedBookModalStatus(true))
	}

	const removeBookHandler = (id) => {
		let isConfirmed = window.confirm('Are you sure to remove?')
		
		if (isConfirmed) {
			dispatch(removeBookById(id))
				.then(() => {
					console.log('Removed')
					dispatch(fetchBooks(1, 20))
				})
		}
	}

	return (
		<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
			<div className="col p-3 d-flex flex-column position-static">
				<strong className="d-inline-block mb-2 text-primary">
					{book.author}
				</strong>
				<h3 className="mb-0 ellipsis-text">
					{book.title}
				</h3>
				<div className="mb-1 text-muted">
					{book.datePublished}
				</div>
				<p className="card-text mb-auto ellipsis-text">
					{book.description}
				</p>
				<div>
					<Button onClick={editBookHandler} className='btn-sm me-2' variant='primary'>Edit</Button>
					<Button onClick={() => removeBookHandler(book.id)} className='btn-sm' variant='danger'>Remove</Button>
				</div>
			</div>
			<div className="col-auto d-none d-lg-block">
				<img className="bd-placeholder-img"
					width="200"
					height="250"
					src={book.cover.uri}
					alt={book.title}/>
			</div>
		</div>
	)
}

export default BookCard
